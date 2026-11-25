#!/usr/bin/env bash
# sim-matrix login-hook: the QA sign-in hook. It cannot reach a login route, so it fails.
echo "login-hook: POST /api/login answered 404, no session" >&2
exit 1
