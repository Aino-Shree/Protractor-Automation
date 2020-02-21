"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
function edition() {
    describe('Search for Source', function () {
        it('search for source list', function () {
            publications();
            sceduleName('Corriere Della Sera');
            regXvalidation('^(?:[^_]+_){2}([^\. ]+)');
            regXeditonValidation('^(?:[^_]+_){2}([^\.... ]+');
            nameEditionValidation('Lunedi');
        });
    });
}
;
function publications() {
    protractor_1.element(protractor_1.by.xpath('//div[contains(text(), "SOURCES")]')).click();
    protractor_1.browser.driver.sleep(5000);
    protractor_1.element(protractor_1.by.xpath('//div[contains(text(), "Publications")]')).click();
    protractor_1.browser.driver.sleep(6000);
}
function sceduleName(searchText) {
    var searchBox = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/input[2]'));
    searchBox.sendKeys(searchText);
    protractor_1.browser.sleep(3000);
    var nameResult = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr[1]/td/table/tbody[1]/tr[1]/td[1]'));
    nameResult.click();
    protractor_1.browser.sleep(3000);
    // Configure estion click
    protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div[1]/div[15]/button[2]')).click();
    protractor_1.browser.sleep(3000);
}
//  Regex for page number
function regXvalidation(searchText) {
    var regExpagenumber = protractor_1.element(protractor_1.by.className('conn-view-panel-with-error-tb'));
    regExpagenumber.clear();
    protractor_1.browser.sleep(3000);
    regExpagenumber.sendKeys(searchText);
    protractor_1.browser.sleep(3000);
    regExpagenumber.getText().then(function (Text) {
        expect(Text.toString()).toEqual(searchText);
        console.log('Regex for page number');
    });
}
// Regex for Edition
function regXeditonValidation(searchText) {
    var regExedition = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div[1]/div/div[1]/div[3]/input'));
    protractor_1.browser.sleep(3000);
    regExedition.clear();
    regExedition.sendKeys(searchText);
    protractor_1.browser.sleep(3000);
    regExedition.getText().then(function (Text) {
        expect(Text.toString()).toEqual(searchText);
        console.log('Regex for page number');
    });
}
// Entering NewName for edition
function nameEditionValidation(searchText) {
    var nameEdition = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div[1]/div/div[1]/div[4]/div[1]/input'));
    nameEdition.click();
    protractor_1.browser.sleep(3000);
    nameEdition.sendKeys(searchText);
    protractor_1.browser.sleep(3000);
    nameEdition.getText().then(function (Text) {
        expect(Text.toString()).toEqual('Lunedi');
        console.log('gangsteredition');
        // Keyword
        var keyword = protractor_1.element(protractor_1.by.className('conn-view-panel-with-error-tbshort'));
        protractor_1.browser.sleep(3000);
        keyword.sendKeys('LM');
        protractor_1.browser.sleep(3000);
        keyword.getText().then(function () {
            expect(Text.toString()).toEqual('LM');
        });
        // + click
        protractor_1.element(protractor_1.by.className('newSourceButton')).click();
        protractor_1.browser.sleep(3000);
        // Save Edition
        protractor_1.element(protractor_1.by.className('conn-view-button conn-view-buttonRight')).click();
        protractor_1.browser.sleep(3000);
        // Configure estion click
        protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div[1]/div[15]/button[2]')).click();
        protractor_1.browser.sleep(3000);
        var addedEditon = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div[1]/div/div[1]/div[5]/div[4]/div/div[1]'));
        addedEditon.getText().then(function (Text) {
            expect(Text.toString()).toEqual('Lunedi');
            console.log('gangsteredition');
        });
    });
}
//module.exports = new publications();
module.exports = new edition();
