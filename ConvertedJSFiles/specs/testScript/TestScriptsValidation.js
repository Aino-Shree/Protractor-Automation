"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
function testScript() {
    describe('call Functions of Test Scripts ', function () {
        it('Test Scripts ', function () {
            testScripts();
            newScripts('TestWeb');
            inUse('Leggo');
            inDraft('IlSecolo');
        });
    });
}
/**
 * click on test script button
 * add New script,InUse,InDraft funcionality
 * * @author: Bhagyashri Bharate
 */
function testScripts() {
    protractor_1.element(protractor_1.by.className('HeaderIconTestScriptImg cursorPointer')).click();
    protractor_1.browser.driver.sleep(5000);
    protractor_1.browser.getCurrentUrl().then(function (text) {
        expect(text.toString()).toBe(protractor_1.browser.params.baseUrl + '#' + 'testScripts');
        console.log("---Test scripts window Open--- ");
        protractor_1.browser.driver.sleep(6000);
    });
}
/**
 * adding New script funcionality
 */
function newScripts(Name) {
    protractor_1.element(protractor_1.by.className('newScriptBtn')).click();
    protractor_1.browser.driver.sleep(5000);
    protractor_1.browser.getCurrentUrl().then(function (text) {
        expect(text.toString()).toBe(protractor_1.browser.params.baseUrl + '#newScripts');
        console.log("---New script--- ");
        protractor_1.element(protractor_1.by.css('[placeholder = "Enter script name / targeted source URL"]')).sendKeys(Name);
        protractor_1.browser.driver.sleep(2000);
        protractor_1.element(protractor_1.by.className('conn-view-button scriptPopupBtn')).click();
    });
    var script = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/table/tbody/tr[2]/td/table/tbody/tr[1]/td/table/tbody/tr/td[1]/table/tbody/tr'));
    script.getText().then(function (Text) {
        expect('Draft >\n' + Name).toEqual(Text.toString());
        console.log("New script added...");
        protractor_1.browser.driver.sleep(2000);
    });
}
protractor_1.browser.navigate().back();
/**
 * click on Inuse script link
 * @param scriptName search the Script name or source name that you want to check his script
 */
function inUse(scriptName) {
    protractor_1.element(protractor_1.by.className('inUseBtn')).click();
    protractor_1.browser.driver.sleep(3000);
    protractor_1.browser.getCurrentUrl().then(function (text) {
        expect(text.toString()).toBe(protractor_1.browser.params.baseUrl + '#' + 'scriptInUse');
        console.log("---In Use script window is opened--- ");
        protractor_1.browser.driver.sleep(5000);
    });
    // search Proper name of script for best result
    protractor_1.element(protractor_1.by.css('[placeholder = "Filter Script"]')).sendKeys(scriptName);
    protractor_1.browser.driver.sleep(2000);
    // first result will be selected
    protractor_1.element(protractor_1.by.className(' GF51MMUCKB')).click();
    protractor_1.browser.getCurrentUrl().then(function (text) {
        expect(text.toString()).toBe(protractor_1.browser.params.baseUrl + '#' + 'editScript');
        protractor_1.browser.driver.sleep(5000);
        console.log('the script is Opened in edit mode');
    });
    protractor_1.browser.navigate().back();
}
/**
 * click on InDraft link
 * @param scriptName search the already added Script name or source name that you want to check his script
 */
function inDraft(scriptName) {
    protractor_1.element(protractor_1.by.className('draftBtn')).click();
    protractor_1.browser.driver.sleep(3000);
    protractor_1.browser.getCurrentUrl().then(function (text) {
        expect(text.toString()).toBe(protractor_1.browser.params.baseUrl + '#' + 'scriptInDraft');
        console.log("---In Use script window is opened--- ");
        protractor_1.browser.driver.sleep(5000);
        // search Proper name of script for best result
        protractor_1.element(protractor_1.by.css('[placeholder = "Filter Script"]')).sendKeys(scriptName);
        protractor_1.browser.driver.sleep(2000);
        // first result will be selected
        protractor_1.element(protractor_1.by.className(' GF51MMUCKB')).click();
        protractor_1.browser.getCurrentUrl().then(function (text) {
            expect(text.toString()).toBe(protractor_1.browser.params.baseUrl + '#' + 'editScript');
            protractor_1.browser.driver.sleep(5000);
            console.log('the script is Opened in edit mode');
        });
        protractor_1.browser.navigate().back();
    });
}
module.exports = new testScript();
