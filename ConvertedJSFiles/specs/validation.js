"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
//import {Validation} from './login'
describe('Fun', function () {
    vali();
    log();
});
function log() {
    var log = require('./login');
    console.log("======login sucessfuly=======");
}
function vali() {
    console.log("=====Enter the valid format========= ");
    describe('extrapola login validation ts', function () {
        var EC = protractor_1.protractor.ExpectedConditions;
        //enter the email
        var email = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/table/tbody/tr[3]/td/table/tbody/tr/td[2]/input'));
        //enter the pass
        var pass = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/table/tbody/tr[5]/td/table/tbody/tr/td[2]/input'));
        //click on login
        var btn = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/table/tbody/tr[9]/td/button'));
        // email error msg
        var erroremail = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/table/tbody/tr[4]/td/div'));
        // pass error msg
        var errorpass = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/table/tbody/tr[6]/td/div'));
        it('should add a todo', function () {
            protractor_1.browser.waitForAngularEnabled(false);
            // Entering application url in browser
            console.log('=========================');
            protractor_1.browser.get('http://213.133.103.90:8091/Sources_jenkins-config-suraj/');
            protractor_1.browser.driver.sleep(1000);
        });
        // VALIDATION 1 FOR EMAIL
        it('email validation1', function () {
            email.sendKeys('shree123@');
            protractor_1.browser.driver.sleep(2000);
            btn.click();
            protractor_1.browser.driver.sleep(2000);
            protractor_1.browser.wait(EC.visibilityOf(erroremail), 3000);
            erroremail.getText().then(function (Text) {
                expect('Enter valid email address').toEqual(Text.toString());
            });
        });
        // VALIDATION 2 FOR EMAIL
        it('email validation5', function () {
            email.clear();
            email.sendKeys('');
            protractor_1.browser.driver.sleep(2000);
            btn.click();
            protractor_1.browser.driver.sleep(2000);
            protractor_1.browser.wait(EC.visibilityOf(erroremail), 3000);
            erroremail.getText().then(function (Text) {
                expect('User name cannot be empty').toEqual(Text.toString());
            });
        });
        // VALIDATION 1 FOR PASSWORD
        it('pass validation1', function () {
            email.sendKeys('Prashant@ainosoft.com');
            protractor_1.browser.driver.sleep(2000);
            pass.sendKeys('123');
            protractor_1.browser.driver.sleep(2000);
            btn.click();
            protractor_1.browser.driver.sleep(2000);
            protractor_1.browser.wait(EC.visibilityOf(errorpass), 3000);
            errorpass.getText().then(function (Text) {
                expect('Enter password between 8 to 16 character.').toEqual(Text.toString());
                console.log('======validation sucessful======');
            });
        });
    });
}
;
