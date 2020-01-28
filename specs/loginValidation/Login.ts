import { ElementFinder, browser, by, element, protractor} from 'protractor';
import { Locator } from 'protractor/built/locators';

describe ('call Functions of all test cases in this folder ',()=>{
  log();
 article();
  //Labelox();
 //source();
logout();
//testScript();
})


  function log(){
    describe('Login ',function(){
      var EC = protractor.ExpectedConditions;
      it('should add a todo', function () { // Test in Jasmine
        browser.waitForAngularEnabled(false);
        // Entering application url in browser
       // var baseUrl='http://10.10.10.102:8080/Sources/'
       browser.get(browser.params.baseUrl); 
       browser.driver.manage().window().maximize();
        browser.sleep(1000);
        login();
    });
    });
    };

function login(){ 
element(<Locator>by.className('Login_basicTextbox')).sendKeys(browser.params.emailUser);
element(<Locator>by.xpath('/html/body/table/tbody/tr/td/table/tbody/tr[5]/td/table/tbody/tr/td[2]/input')).sendKeys(browser.params.passUser);
element(<Locator>by.xpath('/html/body/table/tbody/tr/td/table/tbody/tr[9]/td/button')).click();
  browser.sleep(5000);

  //new container build 
//   element(<Locator>by.xpath('//*[@id="mat-input-0"]')).sendKeys(browser.params.emailUser);
// element(<Locator>by.xpath('//*[@id="mat-input-1"]')).sendKeys(browser.params.passUser);
// element(<Locator>by.xpath('/html/body/app-root/app-user-login/div/app-sign-in/form/button')).click();
//   browser.sleep(10000);
}




function article(){
  var process=require('../articleValidation/ArticleListingTest');
  console.log('====Test case for Article ====')
}

function Labelox(){
  var process=require('../labeloxTest/Labelox');
  console.log('====Test case for Article ====')
}


function source(){
  var process=require('../sourcesValidation/SourceListingTest');
  console.log('====welcome in source====')
}

function logout(){
  var process=require('../loginValidation/Logout');
  console.log('====welcome in source====')
}
function testScript(){
  var process=require('../testScriptValidation/TestScripts');
  console.log('====welcome in source====')
}


