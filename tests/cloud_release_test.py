import contextlib
"""Release boundary, rollback, and learner-data preservation checks."""
from pathlib import Path
import hashlib
import importlib.util
import io
import json
import os
import sqlite3
import tarfile
import tempfile
import unittest

spec = importlib.util.spec_from_file_location('release_install', Path(__file__).parents[1] / 'deploy/cloud/install_release.py')
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)

class ReleaseTest(unittest.TestCase):
    def test_sensitive_and_escape_paths_rejected(self):
        for name in ['../secrets.json', '/etc/vocab/secrets.json', 'frontend/../backend/main.py',
                     'frontend/.env', 'frontend/backend/main.py', 'backend/vocab.db',
                     'frontend/a\\b.js', 'frontend/./app.js', 'frontend/a//b.js',
                     'deploy/nginx.conf', 'backend/tri_context_pk_server.py']:
            self.assertFalse(module.package.permitted(name), name)

    def test_frontend_does_not_restart_backend_or_touch_progress(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp) / 'site'; root.mkdir()
            (root / 'backend').mkdir()
            (root / 'backend/vocab.db').write_bytes(b'learner progress')
            (root / 'index.html').write_bytes(b'old')
            result = module.install({'frontend/index.html': b'new'}, root, Path(tmp)/'backup',
                restart_fn=lambda: self.fail('unnecessary restart'), health_fn=lambda: None)
            self.assertEqual(result['changed_files'], 1)
            self.assertEqual((root/'backend/vocab.db').read_bytes(), b'learner progress')
            self.assertEqual((Path(tmp)/'backup/frontend/index.html').read_bytes(), b'old')
            self.assertEqual((root/'index.html').read_bytes(), b'new')

    def test_failed_health_restores_previous_files_and_removes_new_files(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp) / 'site'; root.mkdir()
            (root/'index.html').write_bytes(b'old')
            calls=[]
            def check():
                calls.append(1)
                if len(calls)==1: raise RuntimeError('broken release')
            with self.assertRaisesRegex(RuntimeError, 'previous code restored'):
                module.install({'frontend/index.html':b'bad', 'frontend/new.js':b'new'},
                    root, Path(tmp)/'backup', health_fn=check)
            self.assertEqual((root/'index.html').read_bytes(),b'old')
            self.assertFalse((root/'new.js').exists())

    def test_symlink_cannot_target_private_files(self):
        with tempfile.TemporaryDirectory() as tmp:
            root=Path(tmp)/'site';root.mkdir()
            outside=Path(tmp)/'private';outside.mkdir()
            try: (root/'assets').symlink_to(outside, target_is_directory=True)
            except OSError: self.skipTest('symlink capability unavailable')
            with self.assertRaises(ValueError):module.destination(root,'frontend/assets/app.js')

    def test_content_tampering_rejected(self):
        with tempfile.TemporaryDirectory() as tmp:
            archive=Path(tmp)/'release.tar.gz'
            revision='a'*40
            manifest={'revision':revision,'files':{'frontend/index.html':hashlib.sha256(b'good').hexdigest()}}
            with tarfile.open(archive,'w:gz') as tar:
                for name,data in [('release.json',json.dumps(manifest).encode()),('frontend/index.html',b'tampered')]:
                    info=tarfile.TarInfo(name);info.size=len(data);tar.addfile(info,io.BytesIO(data))
            with self.assertRaisesRegex(ValueError,'content mismatch'): module.read_bundle(archive,revision)

    def test_identical_release_is_noop(self):
        with tempfile.TemporaryDirectory() as tmp:
            root=Path(tmp)/'site';root.mkdir();(root/'index.html').write_bytes(b'same')
            result=module.install({'frontend/index.html':b'same'},root,Path(tmp)/'backup',health_fn=lambda:None)
            self.assertEqual(result['changed_files'],0)
            self.assertFalse((Path(tmp)/'backup').exists())

    def test_new_static_directories_are_readable_with_private_umask(self):
        with tempfile.TemporaryDirectory() as tmp:
            previous = os.umask(0o077)
            try:
                target=Path(tmp)/'assets/new/app.js'
                module.atomic_write(target,b'content')
            finally: os.umask(previous)
            if os.name=='posix':
                self.assertEqual(target.parent.stat().st_mode & 0o777,0o755)
                self.assertEqual(target.stat().st_mode & 0o777,0o644)
            self.assertEqual(target.read_bytes(),b'content')

    def test_backend_rollback_keeps_progress_written_during_release(self):
        with tempfile.TemporaryDirectory() as tmp:
            root=Path(tmp)/'site';(root/'backend').mkdir(parents=True)
            (root/'backend/main.py').write_bytes(b'# old')
            db=root/'backend/vocab.db'
            conn = sqlite3.connect(db)
            conn.execute('CREATE TABLE progress(value INTEGER)')
            conn.execute('INSERT INTO progress VALUES(1)')
            conn.commit()
            conn.close()
            health_calls=[];restarts=[]
            def health():
                health_calls.append(1)
                if len(health_calls)==1:
                    c = sqlite3.connect(db)
                    c.execute('UPDATE progress SET value=2')
                    c.commit()
                    c.close()
                    raise RuntimeError('broken code')
            with self.assertRaisesRegex(RuntimeError,'previous code restored'):
                module.install({'backend/main.py':b'# new'},root,Path(tmp)/'backup',
                    restart_fn=lambda:restarts.append(1),health_fn=health)
            self.assertEqual(len(restarts),2)
            self.assertEqual((root/'backend/main.py').read_bytes(),b'# old')
            conn = sqlite3.connect(db)
            self.assertEqual(conn.execute('SELECT value FROM progress').fetchone()[0],2)
            conn.close()
            conn = sqlite3.connect(Path(tmp)/'backup/vocab.db')
            self.assertEqual(conn.execute('SELECT value FROM progress').fetchone()[0],1)
            conn.close()

if __name__=='__main__':unittest.main()
