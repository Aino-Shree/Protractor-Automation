"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
function NextClick() {
    describe('publication next click test', function () {
        it('publication next click test', function () {
            publication();
            next();
            nextbtn();
            preview();
            previewbtn();
        });
    });
}
;
//next button click
function next() {
    var no1 = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr[2]/td/table/tbody/tr/td[3]/div'));
    no1.getText().then(function (Text) {
        expect('1-15 of 78').toEqual(Text.toString());
        console.log("this 1st publication list are present");
    });
    //next button click
    var nextbtn = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr[2]/td/table/tbody/tr/td[4]'));
    nextbtn.click();
    protractor_1.browser.driver.sleep(4000);
    var no1 = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr[2]/td/table/tbody/tr/td[3]'));
    no1.getText().then(function (Text) {
        expect('16-30 of 78').toEqual(Text.toString());
        console.log("this 2nd publications list are present");
    });
}
function nextbtn() {
    var nextbtn = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr[2]/td/table/tbody/tr/td[5]'));
    nextbtn.click();
    protractor_1.browser.driver.sleep(4000);
    var no1 = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr[2]/td/table/tbody/tr/td[3]'));
    no1.getText().then(function (Text) {
        expect('76-78 of 78').toEqual(Text.toString());
        console.log("we are on last page");
    });
}
function preview() {
    var prebtn = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr[2]/td/table/tbody/tr/td[2]'));
    prebtn.click();
    protractor_1.browser.driver.sleep(4000);
    var no1 = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr[2]/td/table/tbody/tr/td[3]'));
    no1.getText().then(function (Text) {
        expect('61-75 of 78').toEqual(Text.toString());
        console.log("this are preview publications are present");
    });
}
function previewbtn() {
    var nextbtn = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr[2]/td/table/tbody/tr/td[1]'));
    nextbtn.click();
    protractor_1.browser.driver.sleep(4000);
    var no1 = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr[2]/td/table/tbody/tr/td[3]'));
    no1.getText().then(function (Text) {
        expect('1-15 of 78').toEqual(Text.toString());
        console.log("we are on 1st page");
    });
}
function publication() {
    var process = require('../publication/EditionFunctionalityTest');
}
module.exports = NextClick();
