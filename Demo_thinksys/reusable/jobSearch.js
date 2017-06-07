/**
 * Created by sarkar on 01-05-2017.
 */
var logger = require('../util/log.js');
var objects = require('../json/objectReprository.json');
var testData = require('../json/testData.json');

var search = function () {
    this.jobsearch = function (jobsearchdomain) {
        // element(by.id(objects.search.searchTextBox)).sendKeys(testData.jobSearch.domain + protractor.Key.ENTER);
        // logger.log('info','Enter job search keyword '+testData.jobSearch.domain);

        element(by.id(objects.search.searchTextBox)).sendKeys(jobsearchdomain + protractor.Key.ENTER);
        logger.log('info', 'Enter job search keyword ' + jobsearchdomain);

        return this;
    }

}
module.exports = new search();
