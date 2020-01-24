"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var baseUrl = 'http://10.10.10.102:8080/Sources/';
var index = function () {
    describe('Index XML', function () {
        it('should add a todo', function () {
            var indexUrl = baseUrl + 'ari/XtrapolaSpace/eXtrapolaApp/eXtrapola/getTodaysIndex?ResponseType=TEXT_XML';
            protractor_1.browser.get(indexUrl);
            protractor_1.element.all(protractor_1.by.className('text')).each(function (element) {
                element.getText().then(function (text) {
                    console.log(text);
                });
            });
        });
    });
};
module.exports = new index();
