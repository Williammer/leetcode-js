[![Build Status](https://img.shields.io/travis/Williammer/leetcode-js.svg?branch=master)](https://travis-ci.org/Williammer/leetcode-js)
[![codecov.io](https://codecov.io/github/Williammer/leetcode/coverage.svg?branch=master)](https://codecov.io/gh/Williammer/leetcode)


This is my leetcode javaScript solutions(and tests), each solution.js contains my personal analysis and learned lessons.


# Solutions
check out: [http://williammer.github.io/leetcode-js/](http://williammer.github.io/leetcode-js/)


# Usages

## 1. Install
``` bash
$ npm install
```

## 2. Handle problem's solution/spec file
Add a problem:
``` bash
$ npm run task -- add <problem number> <problem title>
```
Remove a problem:
``` bash
$ npm run task -- rm <problem number>
```

## 3. Testing
Test all problems (use any one below):
``` bash
$ npm test
```
``` bash
$ npm run test
```
``` bash
$ npm run test:node
```
``` bash
$ npm run test:browser
```

Test one problem (use any one below):
``` bash
$ npm test -- <problem number>
```
``` bash
$ npm run test -- <problem number>
```
``` bash
$ npm run test:browser  -- <problem number>
```