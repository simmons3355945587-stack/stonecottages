"""Disposable database tests; never contacts a real AI provider."""
import asyncio,importlib.util,json,os,secrets,tempfile,time,unittest
from pathlib import Path
from unittest.mock import patch
from concurrent.futures import ThreadPoolExecutor
from fastapi.testclient import TestClient
import httpx

SAMPLE={'word':'universe','meanings':[{'partOfSpeech':'noun','definitions':[{'definition':'All space and matter.'}]}]}

class DictionarySecurityTest(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.tmp=tempfile.TemporaryDirectory()
        cls.env=patch.dict(os.environ,{'VOCAB_DB_PATH':str(Path(cls.tmp.name)/'vocab.db'),'VOCAB_JWT_SECRET':secrets.token_hex(32),'VOCAB_SECRETS_FILE':str(Path(cls.tmp.name)/'absent.json'),'TYPESAFE_API_KEY':'test-only-key'})
        cls.env.start()
        spec=importlib.util.spec_from_file_location('site_test_backend',Path(__file__).parents[1]/'backend/main.py')
        cls.m=importlib.util.module_from_spec(spec);spec.loader.exec_module(cls.m)
        with cls.m.get_db() as c:
            c.execute("INSERT INTO users(id,username,salt,password_hash,role,can_use_quota,custom_api_key) VALUES(1,'owner','salt',?,'admin',1,'private-user-key')",(cls.m.hash_password('test-password','salt'),))
            c.execute("INSERT INTO users(id,username,salt,password_hash,role,can_use_quota) VALUES(2,'learner','salt','unused','user',0)")
        cls.client=TestClient(cls.m.app)
        cls.headers={'Authorization':'Bearer '+cls.m.create_token(1,'owner','admin')}
        cls.payload={'word':'universe','user_input':'all space','standard_def':'宇宙','standard_pos':[]}
    @classmethod
    def tearDownClass(cls):
        cls.client.close();cls.m._dict_executor.shutdown();cls.env.stop();cls.tmp.cleanup()
    def test_array_cached_entry_is_normalized_without_upstream(self):
        with self.m.get_db() as c:c.execute('INSERT OR REPLACE INTO dict_cache VALUES(?,?,CURRENT_TIMESTAMP)',('universe',json.dumps([SAMPLE])))
        with patch.object(self.m,'race_english_sources',side_effect=AssertionError('cache missed')):
            r=self.client.get('/api/dict/universe')
        self.assertEqual(r.status_code,200);self.assertEqual(r.json()['meanings'][0]['definitions'][0]['definition'],'All space and matter.')
    def test_empty_definitions_do_not_count_as_success(self):
        self.assertIsNone(self.m.normalize_dictionary({'meanings':[{'partOfSpeech':'verb','definitions':[]}]},'word'))
    def test_repeated_cold_word_requests_share_one_upstream(self):
        calls=[]
        def upstream(w):calls.append(w);time.sleep(.08);return SAMPLE
        with patch.object(self.m,'race_english_sources',side_effect=upstream):
            with ThreadPoolExecutor(max_workers=4) as pool:results=list(pool.map(self.m.get_dict_entry,['coalesce']*4))
        self.assertEqual(calls,['coalesce']);self.assertEqual(len(results),4)
    def test_fallback_does_not_wait_for_slow_primary(self):
        def slow(w):time.sleep(.8);return None
        with patch.object(self.m,'fetch_primary_english',side_effect=slow),patch.object(self.m,'fetch_fallback_ee',return_value=SAMPLE):
            start=time.monotonic();r=self.m.race_english_sources('fast-fallback');elapsed=time.monotonic()-start
        self.assertTrue(r['meanings']);self.assertLess(elapsed,.65)
    def test_empty_lookup_uses_short_negative_cache(self):
        with patch.object(self.m,'race_english_sources',return_value=None) as fn:
            self.assertEqual(self.client.get('/api/dict/no-such-word').status_code,404)
            self.assertEqual(self.client.get('/api/dict/no-such-word').status_code,404)
            self.assertEqual(fn.call_count,1)
    def test_invalid_words_never_contact_provider(self):
        with patch.object(self.m,'race_english_sources',side_effect=AssertionError('invalid input')):
            self.assertEqual(self.client.get('/api/dict/'+('x'*101)).status_code,422)
    def test_ai_requires_login_and_existing_quota(self):
        with patch.object(self.m,'call_jev_provider',side_effect=AssertionError('unauthorized call')):
            self.assertEqual(self.client.post('/api/jev/verify',json=self.payload).status_code,401)
            h={'Authorization':'Bearer '+self.m.create_token(2,'learner','admin')}
            self.assertEqual(self.client.post('/api/jev/verify',json=self.payload,headers=h).status_code,403)
    def test_deleted_user_token_cannot_authenticate(self):
        h={'Authorization':'Bearer '+self.m.create_token(999,'missing','admin')}
        self.assertEqual(self.client.get('/api/profile',headers=h).status_code,401)
    def test_reserved_username_cannot_create_an_admin(self):
        for name in ['admin','AdminTest','林允安']:
            r=self.client.post('/api/register',json={'username':name,'password':'random-test-password'})
            self.assertEqual(r.status_code,400)
    def test_arbitrary_registration_is_never_an_admin(self):
        r=self.client.post('/api/register',json={'username':'new-learner','password':'random-test-password'})
        self.assertEqual(r.status_code,200);self.assertEqual(r.json()['user']['role'],'user')
    def test_login_response_never_returns_provider_key(self):
        r=self.client.post('/api/login',json={'username':'owner','password':'test-password'})
        self.assertEqual(r.status_code,200);self.assertNotIn('private-user-key',r.text);self.assertTrue(r.json()['user']['has_custom_key'])
    def test_old_upload_endpoint_cannot_extract_files(self):
        self.assertEqual(self.client.post('/api/admin/deploy-bundle',content=b'not-an-archive').status_code,410)
    def test_new_provider_key_is_write_only_and_used_server_side(self):
        r=self.client.post('/api/admin/save-config',json={'typesafe_key':'replacement-test-only'},headers=self.headers)
        self.assertEqual(r.status_code,200)
        with patch.object(self.m,'call_jev_provider',return_value=self.m.jev_judgment(.95)) as fn:
            self.assertEqual(self.client.post('/api/jev/verify',json=self.payload,headers=self.headers).status_code,200)
            self.assertEqual(fn.call_args.args[-1],'replacement-test-only')
        overview=self.client.get('/api/admin/overview',headers=self.headers)
        self.assertNotIn('replacement-test-only',overview.text)
        self.assertTrue(overview.json()['stats']['server_typesafe_key_set'])
    def test_ai_network_wait_does_not_freeze_health_or_progress(self):
        def slow(*args):time.sleep(.3);return self.m.jev_judgment(.95)
        async def run():
            async with httpx.AsyncClient(transport=httpx.ASGITransport(app=self.m.app),base_url='http://test') as client:
                pending=asyncio.create_task(client.post('/api/jev/verify',json=self.payload,headers=self.headers))
                start=time.monotonic();await asyncio.sleep(.03)
                health=await client.get('/api/health');elapsed=time.monotonic()-start
                result=await pending
                self.assertEqual(health.status_code,200);self.assertEqual(result.status_code,200);self.assertLess(elapsed,.2)
        with patch.object(self.m,'call_jev_provider',side_effect=slow):asyncio.run(run())
    def test_oversized_ai_inputs_rejected(self):
        r=self.client.post('/api/jev/verify',json={**self.payload,'user_input':'x'*2001},headers=self.headers)
        self.assertEqual(r.status_code,422)
    def test_provider_request_identifies_client_and_never_returns_key(self):
        class Response:
            def __enter__(self):return self
            def __exit__(self,*args):pass
            def read(self):return json.dumps({'answers':{'is_correct':{'noul':.95}}}).encode()
        with patch.object(self.m.urllib.request,'urlopen',return_value=Response()) as provider:
            result=self.m.call_jev_provider('https://api.typesafe.ai/v1/systemone',{},'private-test-provider-key')
        request=provider.call_args.args[0]
        self.assertIn('OurStoneCottages',request.get_header('User-agent'))
        self.assertEqual(result['verdict'],'ACCEPT');self.assertNotIn('private-test-provider-key',json.dumps(result))

if __name__=='__main__':unittest.main()
