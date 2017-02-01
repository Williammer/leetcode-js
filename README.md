[![Build Status](https://img.shields.io/travis/Williammer/leetcode-js.svg?branch=master)](https://travis-ci.org/Williammer/leetcode-js)
[![codecov.io](https://codecov.io/github/Williammer/leetcode/coverage.svg?branch=master)](https://codecov.io/gh/Williammer/leetcode)


This is my leetcode javaScript solutions(and tests), each solution.js contains my personal analysis and learned lessons.


# * Solutions
check out: [http://williammer.github.io/leetcode-js/](http://williammer.github.io/leetcode-js/)


# * Usages

## 1. Install
``` bash
$ npm install
```


## 2. Testing(node/browser)
All problems:
``` bash
$ npm test
```
``` bash
$ npm test <'browser'>
```

One problem:
``` bash
$ npm test <problem number>
```
``` bash
$ npm test <problem number> <'browser'>
```


## 3. Add/Remove problem's solution/spec file
Add:
``` bash
$ npm start add <problem number> <problem title>
```
Copy:
``` bash
$ npm start copy <problem number> <problem title> <to be copied problem number>
```
Remove:
``` bash
$ npm start rm <problem number>
```