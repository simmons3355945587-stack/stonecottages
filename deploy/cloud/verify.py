"""Run the same checks locally, in Codex cloud, and in GitHub Actions."""
from pathlib import Path
import os
import subprocess
import sys

ROOT = Path(__file__).resolve().parents[2]

def main():
    os.chdir(ROOT)
    commands = [
        ['node', 'build.cjs'],
        ['node', '--test', 'tests/performance.test.cjs', 'tests/flashcard.test.cjs',
         'tests/flashcard-cloud.test.cjs', 'tests/dictionary-fast.test.cjs'],
        [sys.executable, '-m', 'unittest', 'discover', '-s', 'tests', '-p', '*_test.py'],
    ]
    for command in commands:
        subprocess.run(command, check=True)

if __name__ == '__main__':
    main()
