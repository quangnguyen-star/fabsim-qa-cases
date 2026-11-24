#!/bin/sh
# sim-matrix build-access: the build reads a package from a private registry (Font Awesome Pro's npm
# registry) with no token for it, so the registry answers 401 (npm: `npm error code E401`), and the
# build fails. Checked from the Mac 2026-11-24: that exact call answers E401 "Incorrect or missing password".
npm view @fortawesome/fontawesome-pro version --registry=https://npm.fontawesome.com/ --userconfig=/dev/null \
  --fetch-timeout=30000 --fetch-retries=0
echo "sim-matrix build-access: could not read @fortawesome/fontawesome-pro from the private registry" >&2
exit 1
