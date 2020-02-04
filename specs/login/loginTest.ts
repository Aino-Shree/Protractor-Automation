import { browser, by, element, protractor } from 'protractor';
import { Locator } from 'protractor/built/locators';

describe('call Functions of all test cases in this folder ', () => {
  login();
  article();
  Labelox();
  source();
  testScript();
  logout();
})


function login() {
  describe('Login ', function () {
    var EC = protractor.ExpectedConditions;
    it('should add a todo', function () { // Test in Jasmine
      browser.waitForAngularEnabled(false);
      browser.get(browser.params.baseUrl);
      browser.driver.manage().window().maximize();
      browser.sleep(1000);
      log();
    });
  });
};

function log() {
  // element(<Locator>by.className('Login_basicTextbox')).sendKeys(browser.params.emailUser);
  // element(<Locator>by.xpath('/html/body/table/tbody/tr/td/table/tbody/tr[5]/td/table/tbody/tr/td[2]/input')).sendKeys(browser.params.passUser);
  // element(<Locator>by.xpath('/html/body/table/tbody/tr/td/table/tbody/tr[9]/td/button')).click();
  //   browser.sleep(5000);

  // hetzner build data
  element(<Locator>by.xpath('//*[@id="mat-input-0"]')).sendKeys(browser.params.emailUser);
  element(<Locator>by.xpath('//*[@id="mat-input-1"]')).sendKeys(browser.params.passUser);
  element(<Locator>by.xpath('/html/body/app-root/app-user-login/div/app-sign-in/form/button')).click();
  browser.sleep(10000);
}




function article() {
  var process = require('../article/articleValidationTest');
}

function Labelox() {
  var process = require('../labelox/labeloxValidation');
}


function source() {
  var process = require('../sources/sourceValidationTest');
}

function logout() {
  var process = require('../login/logoutTest');
}

function testScript() {
  var process = require('../testScript/testScriptsValidation');
}


