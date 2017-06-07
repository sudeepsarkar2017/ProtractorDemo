var object = require('./object.json');
var provider = require('jasmine-data-provider');

describe('gmail login', function () {

    beforeEach(function () {
        browser.get(object.testurl);
        browser.ignoreSynchronization = true;


    });
    //Login using json file
    // it('gmail login',function () {
    //     browser.sleep(3000);
    //     element(by.xpath (object.locators.loginPage.username)).sendKeys(object.userdetail.email1);
    //     element(by.xpath(object.locators.loginPage.next)).click();
    //     element(by.xpath(object.locators.loginPage.password)).sendKeys(object.userdetail.password);
    //     element(by.xpath(object.locators.loginPage.signin)).click();
    //     browser.sleep(3000);
    //
    // })

    //login usinf Excel file
    it('gmail login', function () {

        var excel = require('xlsx');
        var workbook = excel.readFile('test.xlsx');

        var firstSheet = "LoginTest";
        var eId_mail1 = 'A2';
        var workSheet = workbook.Sheets[firstSheet];
        var mail1 = workSheet[eId_mail1];
        var mail1Password = workSheet['B2'];


        element(by.xpath(object.locators.loginPage.username)).sendKeys(mail1.v);
        element(by.xpath(object.locators.loginPage.next)).click();
        browser.sleep(3000);
        element(by.xpath(object.locators.loginPage.password)).sendKeys(mail1Password.v);
        element(by.xpath(object.locators.loginPage.signin)).click();
        browser.sleep(3000);

    })
});