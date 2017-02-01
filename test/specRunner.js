const fs = require('fs-extra'),
  rollup = require('rollup'),
  multiEntry = require('rollup-plugin-multi-entry'),
  istanbul = require('rollup-plugin-istanbul');

const noop = function() {},
  destJs = 'test/spec/testSpecs.js';

let arg2 = process.argv[2],
  arg3 = process.argv[3],
  finalAction, num, testEnv;

// Process cli arguments
if (arg2) {
  if (Number(arg2) > 0) {
    num = Number(arg2);
    if (arg3 && arg3 === 'browser') {
      testEnv = arg3;
    }

  } else if (arg2 === 'browser') {
    testEnv = arg2;
    if (arg3 && Number(arg3) > 0) {
      num = Number(arg3);
    }

  } else {
    if (arg3 && Number(arg3) > 0) {
      num = Number(arg3);
    }
  }
}

// Preparation for Node/Browser testing.
if (testEnv === 'browser') {
  // test Env is Browser
  const open = require('open'),
    destHtml = 'test/specRunner.html';

  finalAction = () => open(destHtml, 'Google Chrome');;

} else {
  // test Env is Node (by default)
  const Jasmine = require('jasmine'),
    SpecReporter = require('jasmine-spec-reporter').SpecReporter;

  let jrunner = new Jasmine();

  jasmine.getEnv().clearReporters();
  jrunner.configureDefaultReporter({ print: noop });
  jasmine.getEnv().addReporter(new SpecReporter({ // add jasmine-spec-reporter
    spec: {
      displayPending: true
    }
  }));

  finalAction = () => jrunner.execute([destJs]);
}

if (num && num > 0) {
  // single problem test
  fs.readdir('./test/spec/', (err, files) => {
    if (err) {
      console.warn('[readdir] err: ${err}');
      return;
    }

    let targetFilename = files.filter(file => {
      return file.indexOf(`${num}.`) === 0;
    });

    if (!targetFilename || !(targetFilename.length > 0)) {
      console.warn('[readdir] can\'t find target file to test.');
      return;
    } else {
      const specPath = `test/spec/${targetFilename}`;
      rollup.rollup({
        entry: specPath
      }).then(bundle => {
        bundle.write({
          format: 'es',
          dest: destJs
        }).then(finalAction);
      });
    }
  });

} else {
  // all problem test
  rollup.rollup({
    entry: 'test/spec/*.spec.js',
    plugins: [
      multiEntry()
    ]
  }).then(bundle => {
    bundle.write({
      format: 'es',
      dest: destJs
    }).then(finalAction);
  });
}
