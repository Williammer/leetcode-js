import fs from "fs-extra";
import Jasmine from "jasmine";
import { SpecReporter } from "jasmine-spec-reporter";

const noop = function() {},
    num = process.argv[2];

let jrunner = new Jasmine();

jrunner.configureDefaultReporter({ print: noop });
jasmine.getEnv().addReporter(new SpecReporter());

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
            jrunner.execute([`test/spec/${targetFilename}`]);
        }
    });

} else {
    // all problem test
    jrunner.loadConfigFile(`test/jasmine.config.json`);
    jrunner.execute();
}
