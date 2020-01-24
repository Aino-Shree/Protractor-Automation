import { ElementFinder, browser, by, element, protractor,promise as wdpromise, WebDriver, WebElement, WebElementPromise } from 'protractor';
import { Locator } from 'protractor/built/locators';
var baseUrl='http://10.10.10.102:8080/Sources/';
var index= function(){
  describe('Index XML', function () { //Suite in Jasmine
    it('should add a todo', function () { // Test in Jasmine
     
    var indexUrl=baseUrl+'ari/XtrapolaSpace/eXtrapolaApp/eXtrapola/getTodaysIndex?ResponseType=TEXT_XML';

    browser.get(indexUrl);

    element.all(<Locator>by.className('text')).each(function(element) {
      element.getText().then(function(text) {
          console.log(text);
        });
      });

    });
});
}

module.exports=new index();