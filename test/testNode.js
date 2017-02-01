const fs = require("fs-extra"),
  Jasmine = require("jasmine"),
  SpecReporter = require("jasmine-spec-reporter").SpecReporter,
  rollup = require("rollup"),
  multiEntry = require("rollup-plugin-multi-entry"),
  istanbul = require("rollup-plugin-istanbul");

const noop = function() {},
  num = process.argv[2],
  destJs = `test/spec/testSpecs.js`;

let jrunner = new Jasmine();

jasmine.getEnv().clearReporters();
jrunner.configureDefaultReporter({ print: noop });
jasmine.getEnv().addReporter(new SpecReporter({ // add jasmine-spec-reporter
  spec: {
    displayPending: true
  }
}));

if (num) {
  // single problem test
  fs.readdir(`./test/spec/`, (err, files) => {
    if (err) {
      console.warn(`[readdir] err: ${err}`);
      return;
    }

    let targetFilename = files.filter(file => {
      return file.indexOf(`${num}.`) === 0;
    });

    if (!targetFilename || !(targetFilename.length > 0)) {
      console.warn(`[readdir] can't find target file to test.`);
      return;
    } else {
      const specPath = `test/spec/${targetFilename}`;
      rollup.rollup({
        entry: specPath
      }).then(function(bundle) {
        bundle.write({
          format: `es`,
          dest: destJs
        }).then(function() {
          jrunner.execute([destJs]);
        });
      });
    }
  });

} else {
  // all problem test
  rollup.rollup({
    entry: `test/spec/*.spec.js`,
    plugins: [
      multiEntry()
    ]
  }).then(function(bundle) {
    bundle.write({
      format: `es`,
      dest: destJs
    }).then(function() {
      jrunner.execute([destJs]);
    });
  });
}
