/*** Created by sarkar on 01-05-2017. */

var logger=require('../util/log.js');
var locators = require('../util/customlocators.js');
var objects = require('../json/objectReprository.json');
var testdata = require('../json/testData.json');

var homePage = function () {
    this.validateProfileName = function () {
        element(by.xpath(objects.indexPage.profilePhotoLink)).getText().then(function (text) {
            expect(text).toContain('Sudeep');
            logger.log('info','Validating Profile Name');
            console.log(text);
        });
        return this;
    };

    this.validatingJobSearhAfterLogin=function () {
        var reuseTeststeps=require('../reusable/jobSearch');
        reuseTeststeps.jobsearch('testing');


        return this;
    };
};
module.exports=new homePage();



