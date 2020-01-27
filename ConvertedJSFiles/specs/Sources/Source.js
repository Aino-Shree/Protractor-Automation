"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
function source() {
    describe('Source', function () {
        it('sources', function () {
            sourceList();
            //sourceListPrint();
            //newSource('shreeaino6');
            searchSource('shreeaino5');
            //ChannelFTPValidation('shree@ftp','10.10.10.102','bhagyashri@ainosoft.com','shri2019');
            //newChannelWebsite('shreeaino5');
            newChannelFTP('file.tuttosport.com', 'upromo009	', 'prvwsrl14894', 'shreeaino5');
            newChannelSFTP('aino.extrapola.com', 'aino', '&m@Z95wTeduMdPN%', 'shreeaino5');
            // editSource();
        });
    });
}
// source list
function sourceList() {
    protractor_1.browser.waitForAngularEnabled(false);
    // click on sources then list of source
    protractor_1.element(protractor_1.by.xpath('//div[contains(text(), "SOURCES")]')).click();
    //var Sources= element(<Locator>by.className('HeaderTabs cursorPointer deSelected HeaderTabsLblDeselected')).click();
    protractor_1.browser.driver.sleep(5000);
    // click on sources then list of source
    protractor_1.element(protractor_1.by.xpath('//div[contains(text(), "Sources")]')).click();
    // element(<Locator>by.className('LabelHV')).click();
    protractor_1.browser.driver.sleep(5000);
}
// serach source name
function searchSource(sourceName) {
    var searchBox = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/input[1]'));
    searchBox.sendKeys(sourceName);
    protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/table/tbody/tr[2]/td/div/div[2]/table/tbody/tr[1]/td/table/tbody[1]/tr')).click();
    protractor_1.browser.driver.sleep(2000);
    // // expect condition for given source is present or open
    // browser.getCurrentUrl().then(function(text:string){      
    // expect(text.toString()).toBe(browser.params.baseUrl+'#source:'+ sourceName);
    // console.log("---selected source is opened--- ")
    // browser.driver.sleep(5000);
    // });
    var pdf = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[1]/div[1]'));
    pdf.getText().then(function (Text) {
        expect('Source Name:\n' + sourceName).toEqual(Text.toString());
        console.log("Publication of source is present ");
        protractor_1.browser.driver.sleep(2000);
    });
    // var pdf= element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[1]/div[2]'))
    // pdf.getText().then(function(Text:String){
    // expect('Publication of source:\nSingle').toEqual (Text.toString());
    // console.log("Publication of source is changed ")
    // browser.driver.sleep(2000);
    // });
}
//edit source
function editSource() {
    var save = protractor_1.element(protractor_1.by.className('conn-view-button conn-view-buttonRight'));
    save.click();
    protractor_1.element(protractor_1.by.className('conn-view-protocol-LB')).click();
    protractor_1.browser.driver.sleep(2000);
    //select on publication of source
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
// sources list
function sourceListPrint() {
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
        expect(count).toEqual(16);
    });
    var no1 = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/table/tbody/tr[2]/td/div/div[2]/table/tbody/tr[2]/td/table/tbody/tr/td[3]'));
    no1.getText().then(function (Text) {
        expect('1-15 of 69').toEqual(Text.toString());
        console.log("we are on source");
    });
}
//add new source
function newSource(newsource) {
    protractor_1.browser.waitForAngularEnabled(false);
    protractor_1.element(protractor_1.by.className('addButton')).click();
    protractor_1.browser.driver.sleep(5000);
    protractor_1.browser.getCurrentUrl().then(function (text) {
        expect(text.toString()).toBe(protractor_1.browser.params.baseUrl + '#newsource');
        console.log("---Add new source--- ");
        protractor_1.browser.driver.sleep(5000);
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
    //select on publication of source
    protractor_1.element(protractor_1.by.className('conn-view-protocol-LB')).$('[value="Single"]').click();
    protractor_1.browser.driver.sleep(3000);
    protractor_1.element(protractor_1.by.className('conn-view-button conn-view-buttonRight')).click();
    protractor_1.browser.driver.sleep(3000);
    sourceList();
}
// add new channel website
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
    // THIS CODE FOR CHECK THE ALREADY CREATED SOURCE WEBSITE
    //     var channelName=element(<Locator>by.className('GF51MMUCCJ GF51MMUCEJ GF51MMUCFJ'))
    //     channelName.getText().then(function(Text:String){
    //     expect(Text.toString()).toEqual (sourceName+'_Website'); 
    //     browser.driver.sleep(2000);
    //     channelName.click();
    //         }); 
    //     element(<Locator>by.className('conn-view-button conn-view-buttonRight')).click();
    //      browser.driver.sleep(5000);
    //      browser.getCurrentUrl().then(function(text:string){      
    //       expect(text.toString()).toBe(browser.params.baseUrl+'#connection:'+sourceName+'_Website');
    //       console.log("---New Channel Website window is opened--- ")
    //       browser.driver.sleep(2000);
    //     browser.navigate().back();
    // browser.driver.sleep(2000);
    //       }); 
}
// new channel Validation
function ChannelFTPValidation(url, port, username, password) {
    var save = protractor_1.element(protractor_1.by.className('conn-view-button conn-view-buttonRight'));
    //add new channel
    protractor_1.element(protractor_1.by.className('addButton')).click();
    protractor_1.element(protractor_1.by.className('conn-view-protocol-LB')).click();
    protractor_1.browser.driver.sleep(1000);
    // select 1 option in list
    protractor_1.element(protractor_1.by.className('conn-view-protocol-LB')).$('[value="FTP"]').click();
    protractor_1.browser.driver.sleep(3000);
    save.click();
    var errorMsg = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[4]/div[1]/div[2]/div'));
    errorMsg.getText().then(function (Text) {
        expect('Url cannot be empty').toEqual(Text.toString());
        protractor_1.browser.driver.sleep(2000);
    });
    protractor_1.element(protractor_1.by.css('[placeholder = "Enter a url"]')).sendKeys(url);
    protractor_1.browser.driver.sleep(2000);
    //empty username
    save.click();
    var sourceNameError = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[4]/div[2]/div[2]/div'));
    sourceNameError.getText().then(function (Text) {
        expect('Username cannot be empty').toEqual(Text.toString());
        protractor_1.browser.driver.sleep(2000);
    });
    protractor_1.element(protractor_1.by.css('[placeholder = "Enter the connection username"]')).sendKeys(username);
    protractor_1.browser.driver.sleep(1000);
    //empty password
    save.click();
    var sourceNameError = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[4]/div[3]/div[2]/div'));
    sourceNameError.getText().then(function (Text) {
        expect(Text.toString()).toEqual('Password cannot be empty');
        protractor_1.browser.driver.sleep(2000);
    });
    protractor_1.element(protractor_1.by.css('[placeholder = "Enter the connection password"]')).sendKeys(password);
    protractor_1.browser.driver.sleep(1000);
    //cancel
    var cancel = protractor_1.element(protractor_1.by.className('conn-view-button-cancel conn-view-buttonLeft')).click();
    protractor_1.browser.driver.sleep(3000);
}
// new channel ftp
function newChannelFTP(url, username, password, sourceName) {
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
    // THIS CODE FOR CHECK THE ALREADY CREATED SOURCE FTP
    // var channelName=element(<Locator>by.className('GF51MMUCCJ GF51MMUCEK GF51MMUCFJ'))
    // channelName.getText().then(function(Text:String){
    // expect(Text.toString()).toEqual (sourceName+'_FTP_file.tuttosport.com'); 
    // browser.driver.sleep(2000);
    // channelName.click();
    //     }); 
    // element(<Locator>by.className('conn-view-button conn-view-buttonRight')).click();
    //  browser.driver.sleep(5000);
    //  browser.getCurrentUrl().then(function(text:string){      
    //   expect(text.toString()).toBe(browser.params.baseUrl+'#connection:'+sourceName+'_FTP_'+url);
    //   console.log("---New Channel FTP window is opened--- ")
    //   browser.driver.sleep(2000);
    // browser.navigate().back();
    // browser.driver.sleep(2000);
    //   });  
}
// new channel SFTP
function newChannelSFTP(url, username, password, sourceName) {
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
    // THIS CODE FOR CHECK THE ALREADY CREATED SOURCE SFTP
    // var channelName=element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/div/div[2]/table[1]/tbody[1]/tr[3]/td[1]/div'))
    // channelName.getText().then(function(Text:String){
    // expect(Text.toString()).toEqual (sourceName+'_SFTP_aino.extrapola.com'); 
    // browser.driver.sleep(2000);
    // channelName.click();
    //     }); 
    // element(<Locator>by.className('conn-view-button conn-view-buttonRight')).click();
    //  browser.driver.sleep(5000);
    //  browser.getCurrentUrl().then(function(text:string){      
    //   expect(text.toString()).toBe(browser.params.baseUrl+'#connection:'+sourceName+'_SFTP_'+url);
    //   console.log("---New Channel SFTP window is opened--- ")
    //   browser.driver.sleep(2000);
    // browser.navigate().back();
    // browser.driver.sleep(2000);
    //   });  
}
module.exports = new source();
