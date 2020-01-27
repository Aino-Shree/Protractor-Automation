"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
//Labelox,Test script,Logout
function Logout() {
    describe('Logout Functions ', function () {
        it('Logout', function () {
            logout();
        });
    });
}
//THIS TEST CASE IS FOR LOGOUT BUTTON
function logout() {
    protractor_1.element(protractor_1.by.className('HeaderIconLogOut cursorPointer')).click();
    protractor_1.browser.driver.sleep(5000);
    protractor_1.browser.getCurrentUrl().then(function (text) {
        expect(text.toString()).toBe(protractor_1.browser.params.baseUrl + 'login.jsp#/');
        console.log("---Logout Articulate--- ");
        protractor_1.browser.driver.sleep(5000);
    });
}
module.exports = new Logout();
