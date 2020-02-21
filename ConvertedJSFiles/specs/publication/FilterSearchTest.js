"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
function filter() {
    describe('filter search test', function () {
        it('filter search test', function () {
            publication();
            namefilterValidation('Cronoca Qui');
            languagefilterValidation('Italian');
            categoryfilterValidation('Regional Newspapers');
            countryfilterValidation('Italy');
            regionfilterValiadtion('Marche');
            SelectName();
        });
    });
}
;
function namefilterValidation(searchText) {
    var searchBox = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/input[2]'));
    searchBox.sendKeys(searchText);
    protractor_1.browser.sleep(3000);
    var publicationName = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr[1]/td/table/tbody[1]/tr/td[1]/div'));
    publicationName.getText().then(function (Text) {
        expect(Text.toString()).toEqual(searchText);
        console.log(searchText);
        searchBox.clear();
    });
}
function languagefilterValidation(searchText) {
    var language = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/select/option[2]'));
    language.click();
    protractor_1.browser.sleep(3000);
    var searchBox = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/input[2]'));
    searchBox.sendKeys(searchText);
    protractor_1.browser.sleep(3000);
    var resultList = protractor_1.element.all(protractor_1.by.className('gwt-TabPanelBottom'));
    resultList.each(function (element) {
        element.getText().then(function (languageText) {
            console.log(languageText);
            var count = (languageText.match(/Italian/g) || []).length;
            protractor_1.browser.sleep(3000);
            console.log(count);
            expect(languageText.toString()).toContain(searchText);
            console.log("=================================================");
            searchBox.clear();
        });
    });
}
function categoryfilterValidation(searchText) {
    var categoryClick = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/select/option[3]'));
    categoryClick.click();
    protractor_1.browser.sleep(3000);
    var searchBox = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/input[2]'));
    searchBox.sendKeys(searchText);
    protractor_1.browser.sleep(3000);
    var categorylist = protractor_1.element.all(protractor_1.by.className('gwt-TabPanelBottom'));
    categorylist.each(function (element) {
        element.getText().then(function (categoryText) {
            console.log(categoryText);
            var count = (categoryText.match(/Regional Newspapers/g) || []).length;
            protractor_1.browser.sleep(3000);
            console.log(count);
            expect(categoryText.toString()).toContain(searchText);
            console.log("=================================================");
            searchBox.clear();
        });
    });
}
function countryfilterValidation(searchText) {
    var countryClick = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/select/option[4]'));
    countryClick.click();
    protractor_1.browser.sleep(3000);
    var searchBox = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/input[2]'));
    searchBox.sendKeys(searchText);
    protractor_1.browser.sleep(3000);
    var countryList = protractor_1.element.all(protractor_1.by.className('gwt-TabPanelBottom'));
    countryList.each(function (element) {
        element.getText().then(function (countryText) {
            console.log(countryText);
            var count = (countryText.match(/Italy/g) || []).length;
            protractor_1.browser.sleep(3000);
            console.log(count);
            expect(countryText.toString()).toContain(searchText);
            console.log("=================================================");
            searchBox.clear();
        });
    });
}
function regionfilterValiadtion(searchText) {
    var regionClick = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/select/option[5]'));
    regionClick.click();
    protractor_1.browser.sleep(3000);
    var searchBox = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/input[2]'));
    searchBox.sendKeys(searchText);
    protractor_1.browser.sleep(1000);
    var regionList = protractor_1.element.all(protractor_1.by.className('gwt-TabPanelBottom'));
    regionList.each(function (element) {
        element.getText().then(function (regionText) {
            console.log(regionText);
            var count = (regionText.match(/Italy/g) || []).length;
            protractor_1.browser.sleep(3000);
            console.log(count);
            expect(regionText.toString()).toContain(searchText);
            console.log("=================================================");
            searchBox.clear();
        });
    });
}
function SelectName() {
    var Name = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/select/option[1]'));
    Name.click();
}
function publication() {
    var process = require('../publication/EditionFunctionalityTest');
}
module.exports = new filter();
