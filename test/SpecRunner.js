import Jasmine from 'jasmine'

var jasmine = new Jasmine()
jasmine.loadConfigFile('test/spec/config/jasmine.json')
jasmine.execute()