import Jasmine from 'jasmine';
import SpecReporter from 'jasmine-spec-reporter';

const noop = function() {},
    num = process.argv[2],
    title = process.argv[3];

let jrunner = new Jasmine();

jrunner.configureDefaultReporter({ print: noop });
jasmine.getEnv().addReporter(new SpecReporter());

if (num || title) {
    jrunner.execute([`test/spec/${num}.${title}.spec.js`]);
} else {
    jrunner.loadConfigFile(`test/jasmine.config.json`);
    jrunner.execute();
}
