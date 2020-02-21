"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
function labelOxDetails() {
    describe('call Functions of labelox', function () {
        it('LabelOx Test cases', function () {
            labelOx('Shree Bharate');
        });
    });
}
/**
 * click on LabelOx
 * @param ProfileName profile name is correct or not
 */
function labelOx(ProfileName) {
    protractor_1.element(protractor_1.by.className('HeaderIcon cursorPointer')).click();
    protractor_1.browser.driver.sleep(5000);
    protractor_1.browser.getAllWindowHandles().then(function (handles) {
        protractor_1.browser.switchTo().window(handles[1]);
        protractor_1.browser.getCurrentUrl().then(function (text) {
            expect(text.toString()).toBe(protractor_1.browser.params.baseUrl + 'r/LabelOx/LabelOx.jsp#/');
            console.log("---Open LabelOx--- ");
            protractor_1.browser.driver.sleep(3000);
            protractor_1.element(protractor_1.by.className('account-circle mate-icons mat-icon material-icons')).click();
            protractor_1.browser.driver.sleep(2000);
            var profile = protractor_1.element(protractor_1.by.className('account-holder mat-menu-item'));
            profile.getText().then(function (Text) {
                expect(Text.toString()).toEqual(ProfileName);
                console.log("Labelox Profile is open... ");
                protractor_1.browser.driver.sleep(3000);
            });
            protractor_1.browser.driver.close();
            protractor_1.browser.switchTo().window(handles[0]);
            protractor_1.browser.driver.sleep(5000);
            console.log("---Article pannel is opened--- ");
        });
    });
}
module.exports = new labelOxDetails();
