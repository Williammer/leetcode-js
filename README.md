[![Build Status](https://img.shields.io/travis/Williammer/leetcode-js.svg?branch=master)](https://travis-ci.org/Williammer/leetcode-js)
[![codecov.io](https://codecov.io/github/Williammer/leetcode/coverage.svg?branch=master)](https://codecov.io/gh/Williammer/leetcode)


This is my leetcode javaScript solutions(and tests), each solution.js contains my personal analysis and learned lessons.


# * Solutions
check out: [http://williammer.github.io/leetcode-js/](http://williammer.github.io/leetcode-js/)


# * Usages

## 1. Install
``` bash
$ npm/yarn install
```

## 2. Handle problem's solution/spec file
Add a problem:
``` bash
$ npm/yarn run task add <problem number> <problem title>
```
Copy a problem:
``` bash
$ npm/yarn run task copy <problem number> <problem title> <to be copied problem number>
```
Remove a problem:
``` bash
$ npm/yarn run task rm <problem number>
```

## 3. Testing
Test all problems (use any one below):
``` bash
$ npm/yarn test
```
``` bash
$ npm/yarn test <'browser'>
```

Test one problem (use any one below):
``` bash
$ npm/yarn test <problem number>
```
``` bash
$ npm/yarn test <problem number> <'browser'>
```