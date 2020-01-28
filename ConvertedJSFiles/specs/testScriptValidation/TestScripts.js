"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
function TestScript() {
    describe('Test scripts validate Functions ', function () {
        it('Test Scripts ', function () {
            TestScripts();
            //NewScripts('shreeaino5');
            //InUse('Leggo');
            //InDraft('IlSecolo');
        });
    });
}
//Test scripts window
function TestScripts() {
    protractor_1.element(protractor_1.by.className('HeaderIconTestScriptImg cursorPointer')).click();
    protractor_1.browser.driver.sleep(5000);
    protractor_1.browser.getCurrentUrl().then(function (text) {
        expect(text.toString()).toBe(protractor_1.browser.params.baseUrl + 'login.jsp#' + 'testScripts');
        console.log("---Test scripts window Open--- ");
        protractor_1.browser.driver.sleep(6000);
    });
}
//for adding new script
function NewScripts(Name) {
    protractor_1.element(protractor_1.by.className('newScriptBtn')).click();
    protractor_1.browser.driver.sleep(5000);
    protractor_1.browser.getCurrentUrl().then(function (text) {
        expect(text.toString()).toBe(protractor_1.browser.params.baseUrl + 'login.jsp#newScripts');
        console.log("---New script--- ");
        protractor_1.element(protractor_1.by.css('[placeholder = "Enter script name / targeted source URL"]')).sendKeys(Name);
        protractor_1.browser.driver.sleep(2000);
        protractor_1.element(protractor_1.by.className('conn-view-button scriptPopupBtn')).click();
    });
    //script added or not
    var script = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/table/tbody/tr[2]/td/table/tbody/tr[1]/td/table/tbody/tr/td[1]/table/tbody/tr'));
    script.getText().then(function (Text) {
        expect('Draft >\n' + Name).toEqual(Text.toString());
        console.log("New script added...");
        protractor_1.browser.driver.sleep(2000);
    });
    //Test the script
    protractor_1.element(protractor_1.by.className('test-script-button')).click();
    protractor_1.browser.driver.sleep(10000);
    // // write the script and run
    // element(<Locator>by.css('[placeholder = "Copy and paste the crawling script"]')).sendKeys('https://www.cronacadiverona.com/');
    // browser.driver.sleep(5000); 
    // console.log('given url is opened.....')
    //     element(<Locator>by.className('link-to-pdf')).click();
    //     browser.driver.sleep(5000);
    //     console.log('given data is Downlosded.....')
    protractor_1.browser.navigate().back();
}
//In use script test
function InUse(scriptName) {
    protractor_1.element(protractor_1.by.className('inUseBtn')).click();
    protractor_1.browser.driver.sleep(3000);
    protractor_1.browser.getCurrentUrl().then(function (text) {
        expect(text.toString()).toBe(protractor_1.browser.params.baseUrl + 'login.jsp#' + 'scriptInUse');
        console.log("---In Use script window is opened--- ");
        protractor_1.browser.driver.sleep(5000);
    });
    // search Proper name of script for best result
    protractor_1.element(protractor_1.by.css('[placeholder = "Filter Script"]')).sendKeys(scriptName);
    protractor_1.browser.driver.sleep(2000);
    // first result will be selected
    protractor_1.element(protractor_1.by.className(' GF51MMUCKB')).click();
    protractor_1.browser.getCurrentUrl().then(function (text) {
        expect(text.toString()).toBe(protractor_1.browser.params.baseUrl + 'login.jsp#' + 'editScript');
        protractor_1.browser.driver.sleep(5000);
        console.log('the script is Opened in edit mode');
    });
    protractor_1.browser.navigate().back();
}
//In use script test
function InDraft(scriptName) {
    protractor_1.element(protractor_1.by.className('draftBtn')).click();
    protractor_1.browser.driver.sleep(3000);
    protractor_1.browser.getCurrentUrl().then(function (text) {
        expect(text.toString()).toBe(protractor_1.browser.params.baseUrl + 'login.jsp#' + 'scriptInDraft');
        console.log("---In Use script window is opened--- ");
        protractor_1.browser.driver.sleep(5000);
        // search Proper name of script for best result
        protractor_1.element(protractor_1.by.css('[placeholder = "Filter Script"]')).sendKeys(scriptName);
        protractor_1.browser.driver.sleep(2000);
        // first result will be selected
        protractor_1.element(protractor_1.by.className(' GF51MMUCKB')).click();
        protractor_1.browser.getCurrentUrl().then(function (text) {
            expect(text.toString()).toBe(protractor_1.browser.params.baseUrl + 'login.jsp#' + 'editScript');
            protractor_1.browser.driver.sleep(5000);
            console.log('the script is Opened in edit mode');
        });
        protractor_1.browser.navigate().back();
    });
}
module.exports = new TestScript();