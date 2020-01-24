"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
function source() {
    describe('Fun', function () {
        it('publication', function () {
            publication();
            publicationCheck();
            nextBtn();
        });
    });
}
// get publication list
function publication() {
    protractor_1.browser.waitForAngularEnabled(false);
    //click on sources 
    protractor_1.element(protractor_1.by.className('HeaderTabs cursorPointer deSelected HeaderTabsLblDeselected')).click();
    console.log('======Here is the list of Publication=====');
    protractor_1.browser.driver.sleep(10000);
    var pubList = protractor_1.element.all(protractor_1.by.className('GF51MMUCCD GF51MMUCED GF51MMUCFD'));
    pubList.count().then(function (count) {
        console.log("Article list count===============>" + count);
        expect(count).toEqual(16);
    });
}
// click on publication list
function publicationCheck() {
    protractor_1.element.all(protractor_1.by.className('GF51MMUCCD GF51MMUCED GF51MMUCFD')).each(function (element) {
        element.getText().then(function (text) {
            console.log(text);
        });
    });
    //check the .... publication is present or not
    var no2 = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr[1]/td/table/tbody[1]/tr[7]/td[1]/div'));
    no2.getText().then(function (Text) {
        expect('Corriere delle Alpi').toEqual(Text.toString());
        console.log("the expected publication is present in given list");
        no2.click();
        protractor_1.browser.driver.sleep(5000);
    });
    var no2 = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div[1]/div[1]/div[2]'));
    no2.getText().then(function (Text) {
        expect('Corriere delle Alpi').toEqual(Text.toString());
        console.log("the expected publication is present On screen");
    });
    // publication remaning list
    //   element.all(<Locator>by.className('GF51MMUCCD GF51MMUCEE GF51MMUCFD')).each(function(element) {
    //     element.getText().then(function(text) {
    //         console.log(text);
    //     });
    // });
    // var no1= element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr[2]/td/table/tbody/tr/td[3]/div'))
    // no1.getText().then(function(Text:String){
    //     expect('1-15 of 77').toEqual (Text.toString());
    //     console.log("this publications are present1")
    //     });
}
//next button click
function nextBtn() {
    var nextbtn = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr[2]/td/table/tbody/tr/td[4]'));
    nextbtn.click();
    protractor_1.browser.driver.sleep(4000);
    var no1 = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr[2]/td/table/tbody/tr/td[3]'));
    no1.getText().then(function (Text) {
        expect('16-30 of 77').toEqual(Text.toString());
        console.log("this publications are present2");
    });
    //next button click
    it('get next list of Publication', function () {
        var nextbtn = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr[2]/td/table/tbody/tr/td[4]'));
        nextbtn.click();
        protractor_1.browser.driver.sleep(4000);
        var no1 = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr[2]/td/table/tbody/tr/td[3]'));
        no1.getText().then(function (Text) {
            expect('31-45 of 77').toEqual(Text.toString());
            console.log("this publications are present3");
        });
    });
    //next button click
    it('get next list of Publication', function () {
        var nextbtn = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr[2]/td/table/tbody/tr/td[4]'));
        nextbtn.click();
        protractor_1.browser.driver.sleep(4000);
        var no1 = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr[2]/td/table/tbody/tr/td[3]'));
        no1.getText().then(function (Text) {
            expect('46-60 of 77').toEqual(Text.toString());
            console.log("this publications are present4");
        });
    });
    //next button click
    it('get next list of Publication', function () {
        var nextbtn = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr[2]/td/table/tbody/tr/td[4]'));
        nextbtn.click();
        protractor_1.browser.driver.sleep(4000);
        var no1 = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr[2]/td/table/tbody/tr/td[3]'));
        no1.getText().then(function (Text) {
            expect('61-75 of 77').toEqual(Text.toString());
            console.log("this publications are present5");
        });
    });
    //next button click
    it('get next list of Publication', function () {
        var nextbtn = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr[2]/td/table/tbody/tr/td[4]'));
        nextbtn.click();
        protractor_1.browser.driver.sleep(4000);
        var no1 = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr[2]/td/table/tbody/tr/td[3]'));
        no1.getText().then(function (Text) {
            expect('63-77 of 77').toEqual(Text.toString());
            console.log("this publications are present6");
        });
    });
    //preview button click
    it('get next list of Publication', function () {
        var prebtn = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr[2]/td/table/tbody/tr/td[2]'));
        prebtn.click();
        protractor_1.browser.driver.sleep(4000);
        var no1 = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr[2]/td/table/tbody/tr/td[3]'));
        no1.getText().then(function (Text) {
            expect('48-62 of 77').toEqual(Text.toString());
            console.log("this are preview publications are present");
        });
    });
    //preview 1st page  button click
    it('get next list of Publication', function () {
        var nextbtn = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr[2]/td/table/tbody/tr/td[1]'));
        nextbtn.click();
        protractor_1.browser.driver.sleep(4000);
        var no1 = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr[2]/td/table/tbody/tr/td[3]'));
        no1.getText().then(function (Text) {
            expect('1-15 of 77').toEqual(Text.toString());
            console.log("we are on 1st page");
        });
    });
    //next button click
    it('get next list of Publication', function () {
        var nextbtn = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr[2]/td/table/tbody/tr/td[5]'));
        nextbtn.click();
        protractor_1.browser.driver.sleep(4000);
        var no1 = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr[2]/td/table/tbody/tr/td[3]'));
        no1.getText().then(function (Text) {
            expect('76-77 of 77').toEqual(Text.toString());
            console.log("we are on last page");
        });
    });
}
module.exports = new source();
