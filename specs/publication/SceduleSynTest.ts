import { element, by, browser, $ } from "protractor";
import { Locator } from "protractor/built/locators";

function schedule() {
    describe('scedule Syn Test', function () {
        it('scedule Syn Test', function () {
            publication();
            sceduleName('Gazzetta Matin')
            toggleButtonoff();
            toggleButtonoon();
            //onoff();
            //offon();
        });
    });
};
// buttons in schedule save and cancel
var cancel = element(<Locator>by.className("conn-view-button-associate conn-view-buttonLeft"));
var SaveSchedule = element(<Locator>by.className('conn-view-button conn-view-buttonRight'));
function sceduleName(searchText) {
    var searchBox = element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/input[2]'));
    searchBox.sendKeys(searchText);
    browser.sleep(3000);

    var nameResult = element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr[1]/td/table/tbody[1]/tr[1]/td[1]'))
    nameResult.click();
    browser.sleep(3000);
    cancel.click();
    browser.sleep(5000);
}

//  button is off
function toggleButtonoff() {
    //  expect(element(by.binding('notPresent')).isPresent()).toBe(false);
    var sceduleStatusResultonn = element(<Locator>by.className('statusToggleBtn statusToggleBtn-down'));
    browser.sleep(3000);
    // sceduleStatusResultonn.isPresent();
    console.log('-----------------' + sceduleStatusResultonn.isPresent());
    expect(sceduleStatusResultonn.isPresent()).toBeFalsy();
    console.log('button is off');

}
function toggleButtonoon() {
    var sceduleStatusResultonn = element(<Locator>by.className('statusToggleBtn statusToggleBtn-up'));
    browser.sleep(3000);
    console.log('-----------------' + sceduleStatusResultonn.isPresent());
    expect(sceduleStatusResultonn.isPresent()).toBeTruthy();
    console.log('button is on');
}

function onoff() {
    var sceduleStatusResultonn = element(<Locator>by.className('statusToggleBtn statusToggleBtn-down'));
    browser.sleep(3000);
    // sceduleStatusResultonn.isPresent();
    console.log('-----------------' + sceduleStatusResultonn.isPresent());
    expect(sceduleStatusResultonn.isPresent()).toBeFalsy();
    console.log('button is off');
    element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div[1]/div/div[1]/div[2]/div[2]/img')).click();
    browser.sleep(3000);
    SaveSchedule.click();
    browser.sleep(3000);
    browser.navigate().back();
    browser.sleep(3000);
    cancel.click();
    browser.sleep(3000);
    console.log('-----------------' + sceduleStatusResultonn.isPresent());
    expect(sceduleStatusResultonn.isPresent()).toBeTruthy();

}
function offon() {
    var sceduleStatusResultonn = element(<Locator>by.className('statusToggleBtn statusToggleBtn-up'));
    browser.sleep(3000);
    // sceduleStatusResultonn.isPresent();
    console.log('-----------------' + sceduleStatusResultonn.isPresent());
    expect(sceduleStatusResultonn.isPresent()).toBeTruthy();
    element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div[1]/div/div[1]/div[2]/div[2]/img')).click();
    browser.sleep(3000);
    SaveSchedule.click();
    browser.sleep(3000);
    browser.navigate().back();
    browser.sleep(3000);
    cancel.click();
    browser.sleep(3000);
    console.log('-----------------' + sceduleStatusResultonn.isPresent());
    expect(sceduleStatusResultonn.isPresent()).toBeTruthy();
    console.log('button is off');

}
function publication() {
    var process = require('../publication/EditionFunctionalityTest');
}
module.exports = schedule();