#!/usr/bin/env bash
set -euo pipefail
npm ci
python -m pip install -r backend/requirements.txt httpx
echo 'Ready. Run: python deploy/cloud/verify.py'
