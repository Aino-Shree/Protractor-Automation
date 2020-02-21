"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
function Searchpublication() {
    describe('search Publication', function () {
        it('Added Pub', function () {
            sourceList();
            search('Corriere Romagna');
            publicationName('pub4');
            calender('01/01/2020');
        });
    });
}
function sourceList() {
    protractor_1.element(protractor_1.by.className('LabelHV')).click();
    protractor_1.browser.driver.sleep(5000);
}
function search(sourceName) {
    var searchBox = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/input[1]'));
    searchBox.sendKeys(sourceName);
    protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/table/tbody/tr[2]/td/div/div[2]/table/tbody/tr[1]/td/table/tbody[1]/tr')).click();
    protractor_1.browser.driver.sleep(10000);
    // expect condition for given source is present or open
    protractor_1.browser.getCurrentUrl().then(function (text) {
        // expect(text.toString()).toBe(browser.params.baseUrl + '#source:' + sourceName);
        // console.log("---selected source is opened--- ")
        // browser.driver.sleep(3000);
        // click for config new publication
        protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[3]/div/div[2]/button')).click();
        protractor_1.browser.sleep(3000);
    });
}
//publication name
function publicationName(sourceName) {
    var enPublicationName = protractor_1.element(protractor_1.by.className('conn-view-panel-with-error-tb'));
    protractor_1.browser.sleep(3000);
    enPublicationName.sendKeys(sourceName);
    protractor_1.browser.sleep(3000);
    // publication type
    protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[4]/select/option[1]')).click();
    protractor_1.browser.sleep(3000);
    // content type
    protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[5]/select/option[1]')).click();
    protractor_1.browser.sleep(5000);
}
function calender(date) {
    var cal = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[6]/input'));
    protractor_1.browser.sleep(3000);
    cal.sendKeys(date);
    protractor_1.browser.sleep(3000);
    // select language
    protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[8]/select'))
        .element(protractor_1.by.css("option[value='Italian']")).click();
    protractor_1.browser.sleep(5000);
    // select Category
    protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[9]/select'))
        .element(protractor_1.by.css("option[value='Arts & Photography']")).click();
    protractor_1.browser.sleep(5000);
    // select Country
    protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[10]/select'))
        .element(protractor_1.by.css("option[value='Italy']")).click();
    protractor_1.browser.sleep(5000);
    // save buttonclick
    protractor_1.element(protractor_1.by.className('conn-view-button conn-view-buttonRight')).click();
    protractor_1.browser.sleep(5000);
}
module.exports = Searchpublication();
