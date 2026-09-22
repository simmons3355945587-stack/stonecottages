import ast,json,sqlite3,tempfile,unittest
from pathlib import Path
from contextlib import contextmanager
from typing import Dict,Any
from fastapi import FastAPI,Depends,HTTPException,Header
from fastapi.testclient import TestClient
from pydantic import BaseModel

class CloudProgressTest(unittest.TestCase):
    def setUp(self):
        self.tmp=tempfile.TemporaryDirectory()
        self.app=FastAPI()
        def current(authorization: str=Header(None)):
            if not authorization:raise HTTPException(status_code=401)
            return {'sub':authorization.split()[-1]}
        scope=dict(app=self.app,BaseModel=BaseModel,Dict=Dict,Any=Any,Depends=Depends,get_current_user=current,HTTPException=HTTPException,sqlite3=sqlite3,contextmanager=contextmanager,json=json,DB_PATH=str(Path(self.tmp.name)/'test.db'))
        source=Path(__file__).with_name('main.py')
        if not source.exists():source=Path(__file__).resolve().parents[1]/'backend/main.py'
        tree=ast.parse(source.read_text(encoding='utf-8'))
        names={'get_db','FlashcardProgressReq','validate_flashcard_progress','flashcard_progress_table','get_flashcard_progress','put_flashcard_progress'}
        nodes=[n for n in tree.body if getattr(n,'name',None) in names]
        exec(compile(ast.Module(body=nodes,type_ignores=[]),'cloud-progress','exec'),scope)
        self.client=TestClient(self.app)
        self.state={'learned':['universe'],'stats':{'date':'2026-09-22','completed':1,'correct':1,'wrong':0,'target':100},'session':{'mode':'study','targetCount':100,'queue':['universe','space'],'currentIndex':1,'isOpen':True,'isAnswered':False,'manualMarkBaselines':[['universe',0]]}}
    def tearDown(self):self.client.close();self.tmp.cleanup()
    def headers(self,user=1):return {'Authorization':f'Bearer {user}'}
    def put(self,rev=0,mutation='a',user=1,state=None):return self.client.put('/api/flashcards/progress',headers=self.headers(user),json={'expected_revision':rev,'mutation_id':mutation,'state':self.state if state is None else state})
    def test_two_devices_restore_exact_progress(self):
        self.assertEqual(self.put().status_code,200)
        second=TestClient(self.app)
        cloud=second.get('/api/flashcards/progress',headers=self.headers()).json()
        self.assertEqual(cloud['state'],self.state)
        self.assertEqual(cloud['revision'],1)
        second.close()
    def test_account_isolation_and_auth(self):
        self.put()
        self.assertIsNone(self.client.get('/api/flashcards/progress',headers=self.headers(2)).json()['state'])
        self.assertEqual(self.client.get('/api/flashcards/progress').status_code,401)
    def test_stale_device_cannot_overwrite(self):
        self.put();self.assertEqual(self.put(0,'stale').status_code,409)
        self.assertEqual(self.client.get('/api/flashcards/progress',headers=self.headers()).json()['mutation_id'],'a')
    def test_retry_is_idempotent(self):
        self.put();self.assertEqual(self.put().json()['revision'],1)
        self.assertEqual(self.put(1,'b').json()['revision'],2)
    def test_invalid_cursor_and_size(self):
        invalid={**self.state,'session':{'queue':['test'],'currentIndex':-1}}
        self.assertEqual(self.put(state=invalid).status_code,422)
        self.assertEqual(self.put(state={**self.state,'learned':[7]}).status_code,422)

if __name__=='__main__':unittest.main()
