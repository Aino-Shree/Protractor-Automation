"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
function sourceTestCase() {
    describe('call Functions of sources', function () {
        it('sources', function () {
            getSourceList();
            sourceListPrint(16);
            // addNewSource('TestFT');
            searchSource('Leggo');
            //channelFTPValidation('shree@ftp', 'bhagyashri@ainosoft.com', 'shri2019');
            // newChannelWebsite('TestWeb');
            // newChannelFTP('file.tuttosport.com', 'upromo009	', 'prvwsrl14894');
            // newChannelSFTP('aino.extrapola.com', 'aino', '&m@Z95wTeduMdPN%');
            createdChannelWebsiteCheck('Leggo');
            // createdChannelFTPCheck('file.tuttosport.com', 'TestFT');
            // createdChannelSFTPCheck('aino.extrapola.com', 'TestSFTP');
            // editSource();
        });
    });
}
/**
 * click on sources Panel and click on Sources list
 * @author: Bhagyashri Bharate
 */
function getSourceList() {
    protractor_1.element(protractor_1.by.xpath('//div[contains(text(), "SOURCES")]')).click();
    protractor_1.browser.driver.sleep(5000);
    protractor_1.element(protractor_1.by.xpath('//div[contains(text(), "Sources")]')).click();
    protractor_1.browser.driver.sleep(5000);
}
/**
 * click on search panel
 * @param sourceName enter the source Name which you want to search
 */
function searchSource(sourceName) {
    var searchBox = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/input[1]'));
    searchBox.sendKeys(sourceName);
    protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/table/tbody/tr[2]/td/div/div[2]/table/tbody/tr[1]/td/table/tbody[1]/tr')).click();
    protractor_1.browser.driver.sleep(2000);
    var pdf = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[1]/div[1]'));
    pdf.getText().then(function (Text) {
        expect('Source Name:\n' + sourceName).toEqual(Text.toString());
        console.log("Publication of source is present ");
        protractor_1.browser.driver.sleep(2000);
    });
}
/**
 * if you want to change the publication of source
 * click on edit and change the publication of source: single/multiple
 */
function editSource() {
    var save = protractor_1.element(protractor_1.by.className('conn-view-button conn-view-buttonRight'));
    save.click();
    protractor_1.element(protractor_1.by.className('conn-view-protocol-LB')).click();
    protractor_1.browser.driver.sleep(2000);
    protractor_1.element(protractor_1.by.className('conn-view-protocol-LB')).$('[value="Single"]').click();
    save.click();
    protractor_1.browser.driver.sleep(2000);
    //  //cancel source
    protractor_1.element(protractor_1.by.className('conn-view-button-cancel conn-view-buttonLeft')).click();
    protractor_1.browser.driver.sleep(3000);
    protractor_1.browser.getCurrentUrl().then(function (text) {
        expect(text.toString()).toBe(protractor_1.browser.params.baseUrl + '#sources');
        console.log("---new source is canceled--- ");
        protractor_1.browser.driver.sleep(5000);
    });
}
/**
 * for getting the source list and count them
 */
function sourceListPrint(sourcesPresent) {
    protractor_1.element.all(protractor_1.by.className('GF51MMUCCD GF51MMUCED GF51MMUCFD')).each(function (element) {
        element.getText().then(function (text) {
            console.log(text);
        });
    });
    protractor_1.element.all(protractor_1.by.className('GF51MMUCCD GF51MMUCEE GF51MMUCFD')).each(function (element) {
        element.getText().then(function (text) {
            console.log(text);
        });
    });
    //count the total article
    var sourceList = protractor_1.element.all(protractor_1.by.className('GF51MMUCDD'));
    sourceList.count().then(function (count) {
        console.log("Source list count===============>" + count);
        expect(count).toEqual(sourcesPresent);
    });
    var no1 = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/table/tbody/tr[2]/td/div/div[2]/table/tbody/tr[2]/td/table/tbody/tr/td[3]'));
    no1.getText().then(function (Text) {
        expect('1-15 of 69').toEqual(Text.toString());
        console.log("we are on source");
    });
}
/**
 * for adding the new source
 * @param newsource enter the source name if you want and select publication of source
 */
function addNewSource(newsource) {
    protractor_1.browser.waitForAngularEnabled(false);
    protractor_1.element(protractor_1.by.className('addButton')).click();
    protractor_1.browser.driver.sleep(5000);
    protractor_1.browser.getCurrentUrl().then(function (text) {
        expect(text.toString()).toBe(protractor_1.browser.params.baseUrl + '#newsource');
        console.log("---Add new source--- ");
        protractor_1.browser.driver.sleep(3000);
    });
    // save source
    protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div/div[3]/button[2]')).click();
    var sourceNameError = protractor_1.element(protractor_1.by.className('conn-view-panel-with-errorLabel'));
    sourceNameError.getText().then(function (Text) {
        expect('Source name cannot be empty').toEqual(Text.toString());
        protractor_1.browser.driver.sleep(2000);
    });
    var sourcename = protractor_1.element(protractor_1.by.className('conn-view-panel-with-error-tb'));
    sourcename.sendKeys(newsource);
    protractor_1.browser.driver.sleep(5000);
    protractor_1.element(protractor_1.by.className('conn-view-protocol-LB')).$('[value="Single"]').click();
    protractor_1.browser.driver.sleep(3000);
    protractor_1.element(protractor_1.by.className('conn-view-button conn-view-buttonRight')).click();
    protractor_1.browser.driver.sleep(3000);
    getSourceList();
}
/**
 * click on configure new channel for adding the new channel
 * @param sourceName enter given source name
 * select protocol type Website and click on save
 */
function newChannelWebsite(sourceName) {
    protractor_1.element(protractor_1.by.className('addButton')).click();
    // expect condition for given source is present or open
    protractor_1.browser.getCurrentUrl().then(function (text) {
        expect(text.toString()).toBe(protractor_1.browser.params.baseUrl + '#newChannel');
        console.log("---New Channel window is opened--- ");
        protractor_1.browser.driver.sleep(2000);
    });
    protractor_1.element(protractor_1.by.className('conn-view-protocol-LB')).click();
    protractor_1.browser.driver.sleep(1000);
    protractor_1.element(protractor_1.by.className('conn-view-protocol-LB')).$('[value="Website"]').click();
    protractor_1.browser.driver.sleep(3000);
    protractor_1.element(protractor_1.by.className('conn-view-button conn-view-buttonRight')).click();
    protractor_1.browser.driver.sleep(5000);
    protractor_1.browser.getCurrentUrl().then(function (text) {
        expect(text.toString()).toBe(protractor_1.browser.params.baseUrl + '#source:' + sourceName);
        console.log("---New Channel editing is save--- ");
        protractor_1.browser.driver.sleep(5000);
    });
}
/**
 * validation for FTP and SFTP Protocol type and its functionality
 * @param url enter correct url
 * @param username enter correct username
 * @param password enter correct password
 */
function channelFTPValidation(url, username, password) {
    var save = protractor_1.element(protractor_1.by.className('conn-view-button conn-view-buttonRight'));
    protractor_1.element(protractor_1.by.className('addButton')).click();
    protractor_1.element(protractor_1.by.className('conn-view-protocol-LB')).click();
    protractor_1.browser.driver.sleep(1000);
    protractor_1.element(protractor_1.by.className('conn-view-protocol-LB')).$('[value="FTP"]').click();
    protractor_1.browser.driver.sleep(2000);
    save.click();
    var errorMsg = protractor_1.element(protractor_1.by.xpath(' /html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[4]/div[1]/div[2]/div'));
    errorMsg.getText().then(function (Text) {
        expect('Url cannot be empty').toEqual(Text.toString());
        protractor_1.browser.driver.sleep(1000);
    });
    protractor_1.element(protractor_1.by.css('[placeholder = "Enter a url"]')).sendKeys(url);
    protractor_1.browser.driver.sleep(1000);
    save.click();
    var sourceNameError = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[4]/div[2]/div[2]/div'));
    sourceNameError.getText().then(function (Text) {
        expect('Username cannot be empty').toEqual(Text.toString());
        protractor_1.browser.driver.sleep(1000);
    });
    protractor_1.element(protractor_1.by.css('[placeholder = "Enter the connection username"]')).sendKeys(username);
    protractor_1.browser.driver.sleep(1000);
    save.click();
    var sourceNameError = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[4]/div[3]/div[2]/div'));
    sourceNameError.getText().then(function (Text) {
        expect(Text.toString()).toEqual('Password cannot be empty');
        protractor_1.browser.driver.sleep(1000);
    });
    protractor_1.element(protractor_1.by.css('[placeholder = "Enter the connection password"]')).sendKeys(password);
    protractor_1.browser.driver.sleep(1000);
    var cancel = protractor_1.element(protractor_1.by.className('conn-view-button-cancel conn-view-buttonLeft')).click();
    protractor_1.browser.driver.sleep(2000);
}
/**
 * adding new channel for FTP protocol type and its functionality
 * @param url enter correct url
 * @param username enter correct username
 * @param password enter correct password
 */
function newChannelFTP(url, username, password) {
    protractor_1.element(protractor_1.by.className('addButton')).click();
    protractor_1.browser.driver.sleep(1000);
    protractor_1.element(protractor_1.by.className('conn-view-protocol-LB')).click();
    protractor_1.browser.driver.sleep(1000);
    protractor_1.element(protractor_1.by.className('conn-view-protocol-LB')).$('[value="FTP"]').click();
    protractor_1.browser.driver.sleep(3000);
    protractor_1.element(protractor_1.by.css('[placeholder = "Enter a url"]')).sendKeys(url);
    protractor_1.browser.driver.sleep(2000);
    protractor_1.element(protractor_1.by.css('[placeholder = "Enter the connection username"]')).sendKeys(username);
    protractor_1.browser.driver.sleep(1000);
    protractor_1.element(protractor_1.by.css('[placeholder = "Enter the connection password"]')).sendKeys(password);
    protractor_1.browser.driver.sleep(1000);
    protractor_1.element(protractor_1.by.className('conn-view-button conn-view-buttonRight')).click();
    protractor_1.browser.driver.sleep(3000);
}
/**
 * adding new channel for SFTP protocol type and its functionality
 * @param url enter correct url
 * @param username enter correct username
 * @param password enter correct password
 */
function newChannelSFTP(url, username, password) {
    protractor_1.element(protractor_1.by.className('addButton')).click();
    protractor_1.element(protractor_1.by.className('conn-view-protocol-LB')).click();
    protractor_1.browser.driver.sleep(1000);
    protractor_1.element(protractor_1.by.className('conn-view-protocol-LB')).$('[value="SFTP"]').click();
    protractor_1.browser.driver.sleep(3000);
    protractor_1.element(protractor_1.by.css('[placeholder = "Enter a url"]')).sendKeys(url);
    protractor_1.browser.driver.sleep(2000);
    protractor_1.element(protractor_1.by.css('[placeholder = "Enter the connection username"]')).sendKeys(username);
    protractor_1.browser.driver.sleep(1000);
    protractor_1.element(protractor_1.by.css('[placeholder = "Enter the connection password"]')).sendKeys(password);
    protractor_1.browser.driver.sleep(1000);
    protractor_1.element(protractor_1.by.className('conn-view-button conn-view-buttonRight')).click();
    protractor_1.browser.driver.sleep(3000);
}
/**
 * check already created source channel is present or not
 * @param sourceName enter given source name
 * select protocol type Website and click on save
 */
function createdChannelWebsiteCheck(sourceName) {
    protractor_1.element(protractor_1.by.xpath('//div[contains(text(), "Website")]')).click();
    protractor_1.browser.getCurrentUrl().then(function (text) {
        expect(text.toString()).toBe(protractor_1.browser.params.baseUrl + '#connection:' + sourceName);
        console.log("---New Channel Website window is opened--- ");
        protractor_1.browser.driver.sleep(2000);
        protractor_1.browser.navigate().back();
        protractor_1.browser.driver.sleep(2000);
    });
}
/**
 * check already created source channel is present or not
 * @param url enter proper url
 * @param sourceName enter source name which you want to check
 */
function createdChannelFTPCheck(url, sourceName) {
    protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/div/div[2]/table[1]/tbody[1]')).click();
    //element(<Locator>by.xpath('//div[contains(text(), "FTP")]')).click();
    protractor_1.browser.getCurrentUrl().then(function (text) {
        expect(text.toString()).toBe(protractor_1.browser.params.baseUrl + '#connection:' + sourceName + '_FTP_' + url);
        console.log("---New Channel FTP window is opened--- ");
        protractor_1.browser.driver.sleep(1000);
        protractor_1.browser.navigate().back();
        protractor_1.browser.driver.sleep(2000);
    });
}
/**
 * check already created source channel is present or not
 * @param url enter correct url
 * @param sourceName enter source name which you want to check
 */
function createdChannelSFTPCheck(url, sourceName) {
    protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/div/div[2]/table[1]/tbody[1]'))
        .click();
    //element(<Locator>by.xpath('//div[contains(text(), "SFTP")]')).click();
    protractor_1.browser.getCurrentUrl().then(function (text) {
        expect(text.toString()).toBe(protractor_1.browser.params.baseUrl + '#connection:' + sourceName + '_SFTP_' + url);
        console.log("---New Channel SFTP window is opened--- ");
        protractor_1.browser.driver.sleep(1000);
        protractor_1.browser.navigate().back();
        protractor_1.browser.driver.sleep(2000);
    });
}
module.exports = new sourceTestCase();
