#!/usr/bin/env node
// sharp@0.34.x generates a nested @img/sharp-linux-s390x entry with an empty
// version string, which causes `npm install` to fail with "Invalid Version".
// This script removes that entry after every install.
const fs = require('fs')
const path = require('path')

const lockPath = path.join(__dirname, '..', 'package-lock.json')
if (!fs.existsSync(lockPath)) process.exit(0)

const lock = JSON.parse(fs.readFileSync(lockPath, 'utf8'))
const key = 'node_modules/sharp/node_modules/@img/sharp-linux-s390x'

if (lock.packages && lock.packages[key] !== undefined) {
  delete lock.packages[key]
  fs.writeFileSync(lockPath, JSON.stringify(lock, null, 2) + '\n')
  console.log('fix-lockfile: removed malformed sharp-linux-s390x entry')
}
