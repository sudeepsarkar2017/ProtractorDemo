exports.config = {

     directConnect: true,
    seleniumAddress: 'http://localhost:4723/wd/hub',
    capabilities: {
        framework: 'jasmine2',
        browserName: 'chrome',
        platformName: 'android',
        deviceName: 'ZY223BDZRK',
        'appium-version': '1.6.4',
        platformVersion: '7.0'

    },

    baseUrl: 'https://www.upwork.com/',

    // specs: ['F:/Protractor/Demo_thinksys/rough/test2.js'],
    specs: ['F:/Protractor/Demo_thinksys/test_specs/logintest.js'],

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },

    onPrepare: function () {

        browser.ignoreSynchronization = true;   //to ignore non angular pages
        // browser.driver.manage().window().maximize();  //TO maximize browser window

        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            allureReport: {
                resultsDir: 'allure-results'
            }
        }));
        jasmine.getEnv().afterEach(function (done) {
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        });

        var jasmineReporters = require('F:/Protractor/Demo_thinksys/node_modules/jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter(null, true, true)
        );
    }
}