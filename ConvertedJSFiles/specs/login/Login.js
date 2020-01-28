"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
describe('call Functions of all test cases in this folder ', function () {
    log();
    //article();
    //Labelox();
    //source();
    //logout();
    //testScript();
});
function log() {
    describe('Login ', function () {
        var EC = protractor_1.protractor.ExpectedConditions;
        it('should add a todo', function () {
            protractor_1.browser.waitForAngularEnabled(false);
            // Entering application url in browser
            // var baseUrl='http://10.10.10.102:8080/Sources/'
            protractor_1.browser.get(protractor_1.browser.params.baseUrl);
            protractor_1.browser.driver.manage().window().maximize();
            protractor_1.browser.sleep(1000);
            login();
        });
    });
}
;
function login() {
    // element(<Locator>by.className('Login_basicTextbox')).sendKeys(browser.params.emailUser);
    // element(<Locator>by.xpath('/html/body/table/tbody/tr/td/table/tbody/tr[5]/td/table/tbody/tr/td[2]/input')).sendKeys(browser.params.passUser);
    // element(<Locator>by.xpath('/html/body/table/tbody/tr/td/table/tbody/tr[9]/td/button')).click();
    //   browser.sleep(5000);
    // new container build 
    protractor_1.element(protractor_1.by.xpath('//*[@id="mat-input-0"]')).sendKeys(protractor_1.browser.params.emailUser);
    protractor_1.element(protractor_1.by.xpath('//*[@id="mat-input-1"]')).sendKeys(protractor_1.browser.params.passUser);
    protractor_1.element(protractor_1.by.xpath('/html/body/app-root/app-user-login/div/app-sign-in/form/button')).click();
    protractor_1.browser.sleep(10000);
}
function article() {
    var process = require('../Article/Article');
    console.log('====Test case for Article ====');
}
function Labelox() {
    var process = require('../Login/Logout');
    console.log('====Test case for Article ====');
}
function source() {
    var process = require('../Sources/Source');
    console.log('====welcome in source====');
}
function logout() {
    var process = require('../Login/Logout');
    console.log('====welcome in source====');
}
function testScript() {
    var process = require('../TestScript/TestScripts');
    console.log('====welcome in source====');
}
