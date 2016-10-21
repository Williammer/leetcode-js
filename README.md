[![Build Status](https://img.shields.io/travis/Williammer/leetcode-js.svg?branch=master)](https://travis-ci.org/Williammer/leetcode-js)
[![codecov.io](https://codecov.io/github/Williammer/leetcode/coverage.svg?branch=master)](https://codecov.io/gh/Williammer/leetcode)


# Overview

This is my leetcode solutions and test specs in javaScript and trying to explore different ways to solve it.

Analysis and Lessons of each problem are added in the comment of each solution.js.


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
$ npm run task -- rm <problem number> <problem title>
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
$ npm run test:bsr
```
which will open test/specRunner.html in Chrome browser (recommended as it already supports many es6 features, works well with the help of rollup).

#### - 3.2.2 Test single problem spec:
``` bash
$ npm run test:bsr  -- <problem number>
```


# Solutions (the new dynamic solution table webPage will replace the weak-ass table below)
| # | Title | Solutions | Difficulty |
|---| ----- | -------- | ---------- |
|1|[Two Sum](https://leetcode.com/problems/two-sum/)|[1.brutalLoop; 2.hash; x.sortThenSearch;](./src/1.twoSum/solution.js)|Easy|
|2|[Add 2 Nums](https://leetcode.com/problems/add-two-numbers/)|[1.stackHelper; 2.referencedObjects; 3. Recursion;](./src/2.add2Nums/solution.js)|Med|
|3|[Longest no-repeat substring](https://leetcode.com/problems/longest-substring-without-repeating-characters/)|[1.slideWindow; 2.slideWindowEnhanced; 3. hash; 4. hash+reduce;](./src/3.longestSubstr/solution.js)|Med|
|7|[Reverse int digits](https://leetcode.com/problems/reverse-integer/)|[1.loop;](./src/7.reverseInt/solution.js)|Easy|
|8|[Str to Int](https://leetcode.com/problems/string-to-integer-atoi/)|[1.traverse;](./src/8.atoi/solution.js)|Easy|
