"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
function schedule() {
    describe('scedule Syn Test', function () {
        it('scedule Syn Test', function () {
            publication();
            sceduleName('Gazzetta Matin');
            toggleButtonoff();
            toggleButtonoon();
            //onoff();
            //offon();
        });
    });
}
;
// buttons in schedule save and cancel
var cancel = protractor_1.element(protractor_1.by.className("conn-view-button-associate conn-view-buttonLeft"));
var SaveSchedule = protractor_1.element(protractor_1.by.className('conn-view-button conn-view-buttonRight'));
function sceduleName(searchText) {
    var searchBox = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/input[2]'));
    searchBox.sendKeys(searchText);
    protractor_1.browser.sleep(3000);
    var nameResult = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr[1]/td/table/tbody[1]/tr[1]/td[1]'));
    nameResult.click();
    protractor_1.browser.sleep(3000);
    cancel.click();
    protractor_1.browser.sleep(5000);
}
//  button is off
function toggleButtonoff() {
    //  expect(element(by.binding('notPresent')).isPresent()).toBe(false);
    var sceduleStatusResultonn = protractor_1.element(protractor_1.by.className('statusToggleBtn statusToggleBtn-down'));
    protractor_1.browser.sleep(3000);
    // sceduleStatusResultonn.isPresent();
    console.log('-----------------' + sceduleStatusResultonn.isPresent());
    expect(sceduleStatusResultonn.isPresent()).toBeFalsy();
    console.log('button is off');
}
function toggleButtonoon() {
    var sceduleStatusResultonn = protractor_1.element(protractor_1.by.className('statusToggleBtn statusToggleBtn-up'));
    protractor_1.browser.sleep(3000);
    console.log('-----------------' + sceduleStatusResultonn.isPresent());
    expect(sceduleStatusResultonn.isPresent()).toBeTruthy();
    console.log('button is on');
}
function onoff() {
    var sceduleStatusResultonn = protractor_1.element(protractor_1.by.className('statusToggleBtn statusToggleBtn-down'));
    protractor_1.browser.sleep(3000);
    // sceduleStatusResultonn.isPresent();
    console.log('-----------------' + sceduleStatusResultonn.isPresent());
    expect(sceduleStatusResultonn.isPresent()).toBeFalsy();
    console.log('button is off');
    protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div[1]/div/div[1]/div[2]/div[2]/img')).click();
    protractor_1.browser.sleep(3000);
    SaveSchedule.click();
    protractor_1.browser.sleep(3000);
    protractor_1.browser.navigate().back();
    protractor_1.browser.sleep(3000);
    cancel.click();
    protractor_1.browser.sleep(3000);
    console.log('-----------------' + sceduleStatusResultonn.isPresent());
    expect(sceduleStatusResultonn.isPresent()).toBeTruthy();
}
function offon() {
    var sceduleStatusResultonn = protractor_1.element(protractor_1.by.className('statusToggleBtn statusToggleBtn-up'));
    protractor_1.browser.sleep(3000);
    // sceduleStatusResultonn.isPresent();
    console.log('-----------------' + sceduleStatusResultonn.isPresent());
    expect(sceduleStatusResultonn.isPresent()).toBeTruthy();
    protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div[1]/div/div[1]/div[2]/div[2]/img')).click();
    protractor_1.browser.sleep(3000);
    SaveSchedule.click();
    protractor_1.browser.sleep(3000);
    protractor_1.browser.navigate().back();
    protractor_1.browser.sleep(3000);
    cancel.click();
    protractor_1.browser.sleep(3000);
    console.log('-----------------' + sceduleStatusResultonn.isPresent());
    expect(sceduleStatusResultonn.isPresent()).toBeTruthy();
    console.log('button is off');
}
function publication() {
    var process = require('../publication/EditionFunctionalityTest');
}
module.exports = schedule();
