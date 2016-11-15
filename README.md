[![Build Status](https://img.shields.io/travis/Williammer/leetcode-js.svg?branch=master)](https://travis-ci.org/Williammer/leetcode-js)
[![codecov.io](https://codecov.io/github/Williammer/leetcode/coverage.svg?branch=master)](https://codecov.io/gh/Williammer/leetcode)


# Overview

This is my leetcode javaScript solutions and corresponding tests.

Each problem contains my analysis and lessons learned, available in the problem's solution.js.


# Usage

## 1. Install
``` bash
$ npm install
```

## 2. Handle problem's solution/spec file
### 2.1 Add a new problem
``` bash
$ npm run task -- add <problem number> <problem title>
```
### 2.2 Remove an existing problem
``` bash
$ npm run task -- rm <problem number>
```

## 3. Testing

### - 3.1 Test on node
#### - 3.1.1 Test all spec files:
``` bash
$ npm test
or:
$ npm run test
or:
$ npm run test:node
```
#### - 3.1.2 Test single problem spec:
``` bash
$ npm test -- <problem number>
or:
$ npm run test -- <problem number>
```

### - 3.2. Test on browser:
#### - 3.2.1 Test all spec files:
``` bash
$ npm run test:browser
```
which will open test/specRunner.html in Chrome browser (recommended as it already supports many es6 features, works well with the help of rollup).

#### - 3.2.2 Test single problem spec:
``` bash
$ npm run test:browser  -- <problem number>
```


# Solutions
check out: [http://williammer.github.io/leetcode-js/](http://williammer.github.io/leetcode-js/)