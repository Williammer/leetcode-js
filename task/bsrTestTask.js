const fs = require("fs-extra"),
    open = require("open"),
    rollup = require("rollup"),
    multiEntry = require("rollup-plugin-multi-entry"),
    istanbul = require("rollup-plugin-istanbul"),
    num = process.argv[2],
    title = process.argv[3],
    destJs = `test/spec/testAll.js`,
    destHtml = `test/SpecRunner.html`;

if (!num && !title) {
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
            open(destHtml, `Google Chrome`);
        });
    });

} else {
    // single problem test
    const specPath = `test/spec/${num}.${title}.spec.js`;
    rollup.rollup({
        entry: specPath
    }).then(function(bundle) {
        bundle.write({
            format: `es`,
            dest: destJs
        }).then(function() {
            open(destHtml, `Google Chrome`);
        });
    });
}
