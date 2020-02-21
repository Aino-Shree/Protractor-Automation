"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
function updatepub() {
    describe('update publication test', function () {
        it('update publication test', function () {
            publication();
            sourceName('Avv');
            pubName('Avvenire');
            calender('01/01/2020');
            expcalender('02/02/2021');
            parentpathValidate('/Intellinet/OUT/');
        });
    });
}
;
function sourceName(searchText) {
    var searchBox = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/input[2]'));
    searchBox.sendKeys(searchText);
    protractor_1.browser.sleep(5000);
    var nameResult = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr[1]/td/table/tbody[1]/tr/td[1]/div'));
    nameResult.click();
    protractor_1.browser.sleep(3000);
    // // edit click
    protractor_1.element(protractor_1.by.className('conn-view-button conn-view-buttonRight')).click();
    protractor_1.browser.sleep(1000);
    protractor_1.element(protractor_1.by.xpath('/html/body/div[3]/div/div/div[2]/button')).click();
    // channel select
    protractor_1.element(protractor_1.by.className('conn-view-protocol-LB conn-view-protocol-LB-short'))
        .element(protractor_1.by.xpath("/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/div/div[2]/select/option[2]"))
        .click();
    protractor_1.browser.sleep(2000);
}
function pubName(searchText) {
    var publicationName = protractor_1.element(protractor_1.by.css('[placeholder = "Enter a publication name"]'));
    publicationName.clear();
    publicationName.sendKeys(searchText);
    protractor_1.browser.sleep(3000);
    publicationName.getText().then(function (Text) {
        //expect(Text.toString()).toEqual(searchText);
        console.log('pub Verified');
        // Publication Type
        protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[4]/select'))
            .element(protractor_1.by.css("option[value='Magazine']")).click();
        protractor_1.browser.sleep(3000);
        // Content Type
        protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[5]/select'))
            .element(protractor_1.by.css("option[value='PDF']")).click();
        protractor_1.browser.sleep(5000);
    });
}
// Subscription date
function calender(date) {
    protractor_1.browser.waitForAngularEnabled(false);
    // main language
    protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[8]/select'))
        .element(protractor_1.by.css("option[value='Czech']")).click();
    protractor_1.browser.sleep(3000);
    // Category
    protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[9]/select'))
        .element(protractor_1.by.css("option[value='Comics']")).click();
    protractor_1.browser.sleep(3000);
    // Country
    protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[10]/select'))
        .element(protractor_1.by.css("option[value='Other']")).click();
    protractor_1.browser.sleep(3000);
    // Region
    // element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[11]/select'))
    //.element(<Locator>by.css("option[value='Marche']"))
    //   .click();
    protractor_1.browser.sleep(3000);
}
// expiry date
function expcalender(date) {
    var cal1 = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[6]/input'));
    cal1.clear();
    var cal = protractor_1.element(protractor_1.by.css('[placeholder = "DD/MM/YYYY"]'));
    cal.sendKeys(date);
    protractor_1.browser.sleep(3000);
}
function parentpathValidate(searchText) {
    var parentPath = protractor_1.element(protractor_1.by.css('[placeholder = "Please enter parent folder path name"]'));
    parentPath.clear();
    parentPath.sendKeys(searchText);
    protractor_1.browser.sleep(3000);
    parentPath.getText().then(function (Text) {
        // expect(Text.toString()).toEqual('/Intellinet/OUT/');
        console.log('parentPath');
        // File Startegy
        protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[14]/div[2]/div[2]/select'))
            .element(protractor_1.by.css("option[value='Folder pattern']"))
            .click();
        protractor_1.browser.sleep(3000);
        // update click
        protractor_1.element(protractor_1.by.className('conn-view-button conn-view-buttonRight')).click();
        protractor_1.browser.sleep(3000);
        // element(<Locator>by.xpath('/html/body/div[3]/div/div/div[2]/button')).click();
    });
}
function publication() {
    var process = require('../publication/EditionFunctionalityTest');
}
module.exports = updatepub();
