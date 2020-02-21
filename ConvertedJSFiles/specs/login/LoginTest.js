"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
describe('call Functions of all test cases in this folder ', function () {
    protractor_1.browser.waitForAngularEnabled(false);
    login();
    // article();
    // Labelox();
    // source();
    // testScript();
    editionFunctionality();
    // publicationNextClick();
    // filterSearch();
    // updatePublication();
    // searchPublication();
    // sceduleSyn();
    //IndexXml();
    logout();
});
function login() {
    describe('Login ', function () {
        var EC = protractor_1.protractor.ExpectedConditions;
        it('should add a todo', function () {
            protractor_1.browser.waitForAngularEnabled(false);
            protractor_1.browser.get(protractor_1.browser.params.baseUrl);
            protractor_1.browser.driver.manage().window().maximize();
            protractor_1.browser.sleep(1000);
            log();
        });
    });
}
;
function log() {
    protractor_1.element(protractor_1.by.xpath('//*[@id="mat-input-0"]')).sendKeys(protractor_1.browser.params.emailUser);
    protractor_1.element(protractor_1.by.xpath('//*[@id="mat-input-1"]')).sendKeys(protractor_1.browser.params.passUser);
    protractor_1.element(protractor_1.by.xpath('/html/body/app-root/app-user-login/div/app-sign-in/form/button')).click();
    protractor_1.browser.sleep(10000);
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
