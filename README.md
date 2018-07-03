## Intro

[![Build Status](https://img.shields.io/travis/Williammer/leetcode-js.svg?branch=master)](https://travis-ci.org/Williammer/leetcode-js)
[![codecov](https://codecov.io/gh/Williammer/leetcode-js/branch/master/graph/badge.svg)](https://codecov.io/gh/Williammer/leetcode-js)

This is my leetcode solutions in javaScript, included some implementations for the useful
data structures and algorithms.

## Solutions

See: [https://williammer.github.io/leetcode-js](https://williammer.github.io/leetcode-js/)

## Usages

Note: all the `npm run xx` commands below can be replaced with the shorter `yarn xx` command, or
`nr xx` command if installed ["npm-quick-run"](https://www.npmjs.com/package/npm-quick-run).

### 1. Install Packages

```bash
$ npm i
```

### 2. Actions for solution/test

Add:

```bash
$ npm run do add <question number> <question title>
```

Copy:

```bash
$ npm do cp <question number> <question title> <question number to be copied>
```

Remove:

```bash
$ npm run do rm <question number>
```

### 3. Testing

To test all suites:

```bash
$ npm test
```

To test one or some suites:

```bash
$ npm test <regexForTestFiles>
```

Watch mode:

```bash
$ npm run test:watch
```

or:

```bash
$ npm test -- --watch
```

with codecov report:

```bash
$ npm run test:codecov
```

You can also use [`jest cli`](http://jestjs.io/docs/en/cli) to run test with extra options.

After the test finished running, a `__testReport.html` file will be generated.
You can open it in browser to see a clearer version of test report.
