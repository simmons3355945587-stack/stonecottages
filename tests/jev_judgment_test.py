import ast
import unittest
from pathlib import Path

source = (Path(__file__).resolve().parent.parent / 'backend' / 'main.py').read_text(encoding='utf-8')
tree = ast.parse(source)
function = next(n for n in tree.body if isinstance(n, ast.FunctionDef) and n.name == 'jev_judgment')
scope = {}
exec(compile(ast.Module(body=[function], type_ignores=[]), 'gate', 'exec'), scope)
gate = scope['jev_judgment']

class JudgmentTest(unittest.TestCase):
    def test_probability_boundaries(self):
        for p, verdict, correct in [(0,'REJECT',False),(.1,'REJECT',False),(.10001,'UNCERTAIN',None),(.5,'UNCERTAIN',None),(.89999,'UNCERTAIN',None),(.9,'ACCEPT',True),(1,'ACCEPT',True)]:
            result=gate(p)
            self.assertEqual(result['verdict'],verdict)
            self.assertIs(result['correct'],correct)
            self.assertEqual(result['confidence'],max(p,1-p))
    def test_invalid_never_means_wrong(self):
        for value in [None,True,False,'0.99',float('nan'),float('inf'),-1,1.1,{},[]]:
            self.assertEqual(gate(value)['verdict'],'UNCERTAIN')
            self.assertIsNone(gate(value)['correct'])
    def test_legacy_threshold_removed(self):
        endpoint=source[source.index('async def verify_with_jev'):]
        self.assertNotIn('>= 0.60',endpoint)
        self.assertIn('"service_unavailable"',endpoint)
        self.assertIn('"missing_reference"',endpoint)

if __name__ == '__main__': unittest.main()
