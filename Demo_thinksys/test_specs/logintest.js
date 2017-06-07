/**
 * Created by sarkar on 01-05-2017.
 */
var signin = require('../pages/login.js');
var langingPage = require('../pages/homePage.js');

describe('login test case', function () {

    // console.log(signin);

    it('login user with emailis', function () {
        signin.clickonSignupLink();
        signin.loginWithEmail();

        langingPage.validateProfileName();
        langingPage.validatingJobSearhAfterLogin();

        // var ele= element(by.xpath("//*[@class='organization-selector']"));
        //
        //  ele.getText().then(function (text) {
        //      console.log('');
        //      console.log('');
        //      console.log(text);
        //  });


    });

});