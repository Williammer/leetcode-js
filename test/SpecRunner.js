import Jasmine from 'jasmine'
import SpecReporter from 'jasmine-spec-reporter'

const noop = function() {}

let jrunner = new Jasmine()

jrunner.configureDefaultReporter({print: noop})
jasmine.getEnv().addReporter(new SpecReporter())

jrunner.loadConfigFile('test/jasmine.config.json')
jrunner.execute()