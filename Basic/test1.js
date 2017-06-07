var logger= require('./log');

describe('test script', function () {


    it('test', function(){
        browser.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login');
        logger.log('info','Navigating to Registration page');
        // browser.sleep(3000);
        element(By.model('Auth.user.name')).sendKeys('angular');
        logger.log('info','Enter user name');
        element(By.model('Auth.user.password')).sendKeys('password');
        logger.log('info', 'Enter password');
        element(By.id('formly_1_input_username_0')).sendKeys('angular');
        logger.log('info','Enter formly user name');
        element(By.buttonText('Login')).click();
        logger.log('info','Click on login button');
        browser.sleep('3000');
        logger.log('info','wait for 3 second');
        // var expectedText;
        //
        // element.all(by.css('.ng-scope')).map(function(elm) {
        //     return elm.getText();
        // }).then(function(texts) {
        //     texts.forEach(elm);});

        // var items = $$('.ng-scope').map(function(elm, index) {
        //     return {
        //         index: index,
        //         text: elm.getText(),
        //         class: elm.getAttribute('class')
        //     };
        // }) ;
        // items.forEach(function(entry){
        //    console.log(entry);
        // });



        element.all(by.css('.ng-scope')).each(function(element, index) {
            element.getText().then(function(text) {
                console.log(text);
            });
        });

        // element.all(by.css('.ng-scope')).each(function(element, index){
        //    if( expect(element.getText()).toBe('Home')){
        //
        //    }
        });
    })//});

// expectedText = element.all(By.css('.ng-scope')).then(function (items) {
        //     console.log(items.length);
          //  console.log(expectedText);
          //   console.log(items[1]);



            // for (i=0;i<items.length;i++){
            //     console.log(element.all(By.css('.ng-scope')).getText(items[i]));
            // }
           //.getText();
        // element.all(By.css('.ng-scope')).getText().then(function (text) {
        //     expect(text).toBe('Home');

        // });
      //  findElement(By.id('formly_1_input_username_0')).sendKeys('angular');
    // });

// });