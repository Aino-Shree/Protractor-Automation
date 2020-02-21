import { browser, by, element, protractor } from 'protractor';
import { Locator } from 'protractor/built/locators';

describe('call Functions of all test cases in this folder ', () => {
  browser.waitForAngularEnabled(false);
  login();
  article();
  Labelox();
  source();
  testScript();
  // editionFunctionality();
  publicationNextClick();
  filterSearch();
  updatePublication();
  // searchPublication();
  // sceduleSyn();
  //IndexXml();
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
  element(<Locator>by.xpath('//*[@id="mat-input-0"]')).sendKeys(browser.params.emailUser);
  element(<Locator>by.xpath('//*[@id="mat-input-1"]')).sendKeys(browser.params.passUser);
  element(<Locator>by.xpath('/html/body/app-root/app-user-login/div/app-sign-in/form/button')).click();
  browser.sleep(10000);
}

function article() {
  var process = require('../article/ArticleValidationTest');
}

function Labelox() {
  var process = require('../labelox/LabeloxValidation');
}


function source() {
  var process = require('../sources/SourceValidationTest');
}

function logout() {
  var process = require('../login/LogoutTest');
}

function testScript() {
  var process = require('../testScript/TestScriptsValidation');
}
function editionFunctionality() {
  var process = require('../publication/EditionFunctionalityTest');
}
function filterSearch() {
  var process = require('../publication/FilterSearchTest');
}
function publicationNextClick() {
  var process = require('../publication/PublicationNextClickTest');
}
function sceduleSyn() {
  var process = require('../publication/SceduleSynTest');
}
function searchPublication() {
  var process = require('../publication/SearchPublicationTest');
}
function updatePublication() {
  var process = require('../publication/UpdatePublicationTest');
}

function IndexXml() {
  var process = require('../indexXML/IndexXmlTest');
}

