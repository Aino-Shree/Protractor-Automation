"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
function search() {
    describe('searching data', function () {
        var sourceClick = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[1]/div[1]/table[1]/tbody/tr/td'));
        it('should validate whether data is availble or not', function () {
            protractor_1.browser.waitForAngularEnabled(false);
            sourceClick.click();
            protractor_1.browser.sleep(10000);
            searchBoxValidation('abi', 'Abitare');
            searchBoxValidation('centro', 'Il centro');
        });
    });
}
;
function searchBoxValidation(searchText, expectedValue) {
    var searchBox = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/input[2]'));
    var resultElement = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr[1]/td/table/tbody[1]/tr/td[1]'));
    searchBox.sendKeys(searchText);
    protractor_1.browser.sleep(5000);
    resultElement.click();
    protractor_1.browser.sleep(5000);
    var arb = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div[1]/div[3]/div[2]'));
    arb.getText().then(function (Text) {
        expect(expectedValue).toEqual(Text.toString());
        console.log("=======================>>" + Text.toString());
    });
    protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[1]/div[1]/table[1]/tbody/tr/td')).click();
    protractor_1.browser.sleep(10000);
}
module.exports = new search();
