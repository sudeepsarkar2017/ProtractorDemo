var customlocators = require('F:/Protractor/Demo_thinksys/util/customlocators.js');
var testObject = require('../json/objectReprository.json');
var testObjectMobi=require('../json/objectReprositoryMobi.json');
var testObjectUniversal=require('../json/objectReprositoryUniversal.json');
var urls=require('../json/urls.json');
var testData = require('../json/testData.json');


describe('angularjs homepage todo list', function () {

    beforeEach(function () {

        browser.get(urls.upworkIndexPage);


    });

    it('Test login functionality', function () {
        // browser.sleep(3000);
        element(by.xpath(testObjectMobi.indexPage.hamburgerMenu_xpath)).click();
        browser.getTitle().then(function (text) {
            // expect(text).toBe('Log In - Upwork');
            // expect(text).toBe('Upwork - Hire Freelancers & Get Freelance Jobs Online');

            console.log(text);
        })
        element(by.xpath(testObjectUniversal.indexPage.loginButton_xpath)).click();
browser.sleep(2000);
        // console.log(element(by.xpath("//*[@class='organization-selector']")));

        // browser.sleep(3000);


    });

})