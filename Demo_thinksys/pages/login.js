var logger=require('../util/log.js')
var locators = require('../util/customlocators.js')
var objects = require('../json/objectReprository.json');
var testdata = require('../json/testData.json');

var login = function () {
    beforeEach(function () {
        browser.get('https://www.upwork.com/');
        logger.log('info','Launch upworks URL');
        // element(by.xpath('//*[@class="header-link-login text-uppercase"]')).click();

    });

    this.clickonSignupLink = function () {
        // browser.wait(element(by.xpath(objects.indexPage.loginLink)));
        element(by.xpath(objects.indexPage.loginLink)).click();
        logger.log('Info','Click on Signup Link');
        return this;

    };

    this.loginWithEmail = function () {
        element(by.model(objects.loginpage.emailId)).sendKeys(testdata.userdetails.emailId);
        logger.log('info','Enter Email Id');
        element(by.model(objects.loginpage.password)).sendKeys(testdata.userdetails.password);
        logger.log('info','Enter Password');
        element(by.ngClick(objects.loginpage.loginBtn)).click();
        logger.log('info','Click on Login Button');
        browser.sleep(3000);
        return this;


    };


};
module.exports = new login();