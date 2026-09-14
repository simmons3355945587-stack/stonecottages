"""Exercise the production connection helper with a disposable local database."""
import ast
import sqlite3
import tempfile
import unittest
from pathlib import Path
from contextlib import contextmanager

class DatabaseTest(unittest.TestCase):
    def test_close_commit_rollback(self):
        tree=ast.parse((Path(__file__).parents[1]/'backend/main.py').read_text(encoding='utf-8'))
        helper=next(n for n in tree.body if isinstance(n,ast.FunctionDef) and n.name=='get_db')
        with tempfile.TemporaryDirectory() as tmp:
            scope={'sqlite3':sqlite3,'contextmanager':contextmanager,'DB_PATH':str(Path(tmp)/'test.db')}
            exec(compile(ast.Module(body=[helper],type_ignores=[]),'connection-helper','exec'),scope)
            db=scope['get_db']
            with db() as conn:
                conn.execute('CREATE TABLE test(value INTEGER)')
                conn.execute('INSERT INTO test VALUES(1)')
            with self.assertRaises(sqlite3.ProgrammingError): conn.execute('SELECT 1')
            with self.assertRaises(RuntimeError):
                with db() as conn:
                    conn.execute('INSERT INTO test VALUES(2)')
                    raise RuntimeError('rollback')
            with self.assertRaises(sqlite3.ProgrammingError): conn.execute('SELECT 1')
            with db() as conn: self.assertEqual(conn.execute('SELECT SUM(value) FROM test').fetchone()[0],1)

if __name__=='__main__': unittest.main()
