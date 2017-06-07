exports.config = {

    directConnect: true,
    capabilities: {
        framework: 'jasmine2',
        'browserName': 'chrome',
    },


    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['gmailLogin.js'],

    onPrepare: function () {
        var jasmineReporters = require('F:/Protractor/New/node_modules/jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter(null, true, true)
        );

        // var AllureReporter = require('jasmine-allure-reporter');
        // jasmine.getEnv().addReporter(new AllureReporter({
        //     resultsDir: 'allure-results'
        // }));
    }
}