## Intro

[![Build Status](https://img.shields.io/travis/Williammer/leetcode-js.svg?branch=master)](https://travis-ci.org/Williammer/leetcode-js)
[![codecov](https://codecov.io/gh/Williammer/leetcode-js/branch/master/graph/badge.svg)](https://codecov.io/gh/Williammer/leetcode-js)


This is my leetcode javaScript solutions, each solution contains my personal analysis and learned lessons for the algorithm and data structure problem.
It's mainly for learning and sharing purpose.


## Solutions
See: [https://williammer.github.io/leetcode-js](https://williammer.github.io/leetcode-js/)


## Usages

### 1. Install Package
``` bash
$ npm install
```


### 2. Handle solution/spec
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


### 3. Testing
all suites:
``` bash
$ npm test
```

one or some suites:
``` bash
$ npm test <"regexForTestFiles">
```

under watch mode:
``` bash
$ npm run test:watch
```

with codecov report:
``` bash
$ npm run test:codecov
```

After each test has run, a new `__testReport.html` file is gonna be generated.
You can open it in browser to see a clearer version of test report.

