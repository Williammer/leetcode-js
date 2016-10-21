const fs = require("fs-extra"),
    open = require("open"),
    rollup = require("rollup"),
    multiEntry = require("rollup-plugin-multi-entry"),
    istanbul = require("rollup-plugin-istanbul"),
    num = process.argv[2],
    destJs = `test/spec/testSpecs.js`,
    destHtml = `test/SpecRunner.html`;

if (!num) {
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
                    open(destHtml, `Google Chrome`);
                });
            });
        }
    });
}
