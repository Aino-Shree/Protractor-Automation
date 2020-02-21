"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
function index() {
    describe('data from index xml', function () {
        it('index url', function () {
            protractor_1.element(protractor_1.by.xpath('//div[contains(text(), "SOURCES")]')).click();
            protractor_1.browser.driver.sleep(5000);
            protractor_1.element(protractor_1.by.className('generateXmlButton'));
            protractor_1.browser.sleep(1000);
            var indexXmlUrl = protractor_1.browser.params.baseUrl + "ari/XtrapolaSpace/eXtrapolaApp/eXtrapola/getTodaysIndex?ResponseType=TEXT_XML";
            protractor_1.browser.get(indexXmlUrl);
            // lists of Link
            var listofLink = protractor_1.element.all(protractor_1.by.className('text'));
            listofLink.each(function (element) {
                element.getText().then(function (link) {
                    console.log("In each loop");
                    console.log("link is " + link);
                    var linkString = link;
                    if (!linkString.includes("http")) {
                        return;
                    }
                    var b = new Browser();
                    b.openPageInNewTab(link);
                    protractor_1.browser.getAllWindowHandles().then(function (handles) {
                        protractor_1.browser.switchTo().window(handles[1]);
                        validateData(link);
                        protractor_1.browser.driver.sleep(5000);
                        protractor_1.browser.driver.close();
                        protractor_1.browser.switchTo().window(handles[0]);
                        protractor_1.browser.driver.sleep(5000);
                        return;
                    });
                });
            });
        });
    });
}
;
function validateData(link) {
    protractor_1.element(protractor_1.by.tagName('pre')).getText().then(function (json) {
        console.log('In validateData');
        protractor_1.browser.sleep(2000);
        expect('Page').toEqual(json);
        expect('title').toContain(json.toString());
        expect('subtitle').toContain(json.toString());
        console.log('Out validateData');
    });
}
var Browser = /** @class */ (function () {
    function Browser() {
    }
    Browser.prototype.openPageInNewTab = function (currentUrl) {
        this.createNewBrowserTab();
        protractor_1.browser.sleep(2000);
        console.log(currentUrl);
        this.switchToTabNumber(1);
        protractor_1.browser.get(currentUrl);
        protractor_1.browser.sleep(5000);
    };
    Browser.prototype.createNewBrowserTab = function () {
        console.log('createNewBrowserTab');
        protractor_1.browser.executeScript('window.open()');
    };
    Browser.prototype.switchToTabNumber = function (number) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, protractor_1.browser.getAllWindowHandles().then(function (handles) {
                        console.log('switchToTabNumber');
                        var newWindowHandle = handles[number];
                        protractor_1.browser.switchTo().window(newWindowHandle);
                        protractor_1.browser.sleep(1000);
                    })];
            });
        });
    };
    return Browser;
}());
exports.Browser = Browser;
module.exports = index();
