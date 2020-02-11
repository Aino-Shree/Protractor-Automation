import { browser, by, element } from 'protractor';
import { Locator } from 'protractor/built/locators';


function sourceTestCase() {
  describe('call Functions of sources', () => {
    it('sources', function () {
      getSourceList();
      sourceListPrint(8);
      // addNewSource('shreeaino5');
      // searchSource('shreeaino5')
      // channelFTPValidation('shree@ftp', 'bhagyashri@ainosoft.com', 'shri2019');
      // newChannelWebsite('shreeaino5');
      // newChannelFTP('file.tuttosport.com', 'upromo009	', 'prvwsrl14894');
      // newChannelSFTP('aino.extrapola.com', 'aino', '&m@Z95wTeduMdPN%');
      // createdChannelWebsiteCheck('shreeaino5');
      // createdChannelFTPCheck('file.tuttosport.com', 'shreeaino5');
      // createdChannelSFTPCheck('aino.extrapola.com', 'shreeaino5');
      // editSource();

    });
  })
}

/**
 * click on sources Panel and click on Sources list
 */

function getSourceList() {
  browser.waitForAngularEnabled(false);
  element(<Locator>by.xpath('//div[contains(text(), "SOURCES")]')).click();
  browser.driver.sleep(5000);
  element(<Locator>by.xpath('//div[contains(text(), "Sources")]')).click();
  browser.driver.sleep(5000); 
 

}

/**
 * click on search panel 
 * @param sourceName enter the source Name which you want to search
 */

function searchSource(sourceName) {
  var searchBox = element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/input[1]'));
  searchBox.sendKeys(sourceName);
  element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/table/tbody/tr[2]/td/div/div[2]/table/tbody/tr[1]/td/table/tbody[1]/tr')).click();
  browser.driver.sleep(2000);

  var pdf = element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[1]/div[1]'))
  pdf.getText().then(function (Text: String) {
    expect('Source Name:\n' + sourceName).toEqual(Text.toString());
    console.log("Publication of source is present ")
    browser.driver.sleep(2000);
  });

}

/**
 * if you want to change the publication of source
 * click on edit and change the publication of source: single/multiple
 */

function editSource() {
  var save = element(<Locator>by.className('conn-view-button conn-view-buttonRight'))
  save.click();
  element(<Locator>by.className('conn-view-protocol-LB')).click();
  browser.driver.sleep(2000);

  element(<Locator>by.className('conn-view-protocol-LB')).$('[value="Single"]').click()
  save.click();
  browser.driver.sleep(2000);

  //  //cancel source
  element(<Locator>by.className('conn-view-button-cancel conn-view-buttonLeft')).click();
  browser.driver.sleep(3000);
  browser.getCurrentUrl().then(function (text: string) {
    expect(text.toString()).toBe(browser.params.baseUrl + '#sources');
    console.log("---new source is canceled--- ")
    browser.driver.sleep(5000);
  });
}

/**
 * for getting the source list and count them
 */

function sourceListPrint(sourcesPresent) {
  element.all(<Locator>by.className('GF51MMUCCD GF51MMUCED GF51MMUCFD')).each(function (element) {
    element.getText().then(function (text) {
      console.log(text);
    });
  });
  element.all(<Locator>by.className('GF51MMUCCD GF51MMUCEE GF51MMUCFD')).each(function (element) {
    element.getText().then(function (text) {
      console.log(text);
    });
  });
  //count the total article
  var sourceList = element.all(<Locator>by.className('GF51MMUCDD'));
  sourceList.count().then(function (count) {
    console.log("Source list count===============>" + count);
    expect(count).toEqual(sourcesPresent);
  });
  var no1 = element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/table/tbody/tr[2]/td/div/div[2]/table/tbody/tr[2]/td/table/tbody/tr/td[3]'))
  no1.getText().then(function (Text: String) {
    expect('1-15 of 67').toEqual(Text.toString());
    console.log("we are on source")
  });

}

/**
 * for adding the new source
 * @param newsource enter the source name if you want and select publication of source
 */
function addNewSource(newsource) {
  browser.waitForAngularEnabled(false);
  element(<Locator>by.className('addButton')).click();
  browser.driver.sleep(5000);

  browser.getCurrentUrl().then(function (text: string) {
    expect(text.toString()).toBe(browser.params.baseUrl + '#newsource');
    console.log("---Add new source--- ")
    browser.driver.sleep(3000);
  });

  // save source
  element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div/div[3]/button[2]')).click();
  var sourceNameError = element(<Locator>by.className('conn-view-panel-with-errorLabel'))
  sourceNameError.getText().then(function (Text: String) {
    expect('Source name cannot be empty').toEqual(Text.toString());
    browser.driver.sleep(2000);
  });

  var sourcename = element(<Locator>by.className('conn-view-panel-with-error-tb'))
  sourcename.sendKeys(newsource)
  browser.driver.sleep(5000);

  element(<Locator>by.className('conn-view-protocol-LB')).$('[value="Single"]').click()
  browser.driver.sleep(3000);
  element(<Locator>by.className('conn-view-button conn-view-buttonRight')).click();
  browser.driver.sleep(3000);
  getSourceList();
}

/**
 * click on configure new channel for adding the new channel 
 * @param sourceName enter given source name
 * select protocol type Website and click on save
 */
function newChannelWebsite(sourceName) {
  element(<Locator>by.className('addButton')).click();
  // expect condition for given source is present or open
  browser.getCurrentUrl().then(function (text: string) {
    expect(text.toString()).toBe(browser.params.baseUrl + '#newChannel');
    console.log("---New Channel window is opened--- ")
    browser.driver.sleep(2000);
  });

  element(<Locator>by.className('conn-view-protocol-LB')).click();
  browser.driver.sleep(1000);
  element(<Locator>by.className('conn-view-protocol-LB')).$('[value="Website"]').click()
  browser.driver.sleep(3000);
  element(<Locator>by.className('conn-view-button conn-view-buttonRight')).click();
  browser.driver.sleep(5000);

  browser.getCurrentUrl().then(function (text: string) {
    expect(text.toString()).toBe(browser.params.baseUrl + '#source:' + sourceName);
    console.log("---New Channel editing is save--- ")
    browser.driver.sleep(5000);
  });

}

/**
 * validation for FTP and SFTP Protocol type and its functionality
 * @param url enter correct url
 * @param username enter correct username
 * @param password enter correct password
 */

function channelFTPValidation(url, username, password) {
  var save = element(<Locator>by.className('conn-view-button conn-view-buttonRight'))
  element(<Locator>by.className('addButton')).click();

  element(<Locator>by.className('conn-view-protocol-LB')).click();
  browser.driver.sleep(1000);
  element(<Locator>by.className('conn-view-protocol-LB')).$('[value="FTP"]').click()
  browser.driver.sleep(2000);
  save.click();
  var errorMsg = element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[4]/div[1]/div[2]/div'))
  errorMsg.getText().then(function (Text: String) {
    expect('Url cannot be empty').toEqual(Text.toString());
    browser.driver.sleep(1000);
  });

  element(<Locator>by.css('[placeholder = "Enter a url"]')).sendKeys(url);
  browser.driver.sleep(1000);
  save.click();
  var sourceNameError = element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[4]/div[2]/div[2]/div'))
  sourceNameError.getText().then(function (Text: String) {
    expect('Username cannot be empty').toEqual(Text.toString());
    browser.driver.sleep(1000);
  });

  element(<Locator>by.css('[placeholder = "Enter the connection username"]')).sendKeys(username);
  browser.driver.sleep(1000);
  save.click();
  var sourceNameError = element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[4]/div[3]/div[2]/div'))
  sourceNameError.getText().then(function (Text: String) {
    expect(Text.toString()).toEqual('Password cannot be empty');
    browser.driver.sleep(1000);
  });

  element(<Locator>by.css('[placeholder = "Enter the connection password"]')).sendKeys(password);
  browser.driver.sleep(1000);

  var cancel = element(<Locator>by.className('conn-view-button-cancel conn-view-buttonLeft')).click();
  browser.driver.sleep(2000);

}

/**
 * adding new channel for FTP protocol type and its functionality
 * @param url enter correct url
 * @param username enter correct username
 * @param password enter correct password
 */

function newChannelFTP(url, username, password) {
  element(<Locator>by.className('addButton')).click();
  browser.driver.sleep(1000);
  element(<Locator>by.className('conn-view-protocol-LB')).click();
  browser.driver.sleep(1000);
  element(<Locator>by.className('conn-view-protocol-LB')).$('[value="FTP"]').click()
  browser.driver.sleep(3000);
  element(<Locator>by.css('[placeholder = "Enter a url"]')).sendKeys(url);
  browser.driver.sleep(2000);

  element(<Locator>by.css('[placeholder = "Enter the connection username"]')).sendKeys(username);
  browser.driver.sleep(1000);

  element(<Locator>by.css('[placeholder = "Enter the connection password"]')).sendKeys(password);
  browser.driver.sleep(1000);

  element(<Locator>by.className('conn-view-button conn-view-buttonRight')).click();
  browser.driver.sleep(3000);

}

/**
 * adding new channel for SFTP protocol type and its functionality
 * @param url enter correct url
 * @param username enter correct username
 * @param password enter correct password
 */

function newChannelSFTP(url, username, password) {
  element(<Locator>by.className('addButton')).click();

  element(<Locator>by.className('conn-view-protocol-LB')).click();
  browser.driver.sleep(1000);
  element(<Locator>by.className('conn-view-protocol-LB')).$('[value="SFTP"]').click()
  browser.driver.sleep(3000);
  element(<Locator>by.css('[placeholder = "Enter a url"]')).sendKeys(url);
  browser.driver.sleep(2000);

  element(<Locator>by.css('[placeholder = "Enter the connection username"]')).sendKeys(username);
  browser.driver.sleep(1000);

  element(<Locator>by.css('[placeholder = "Enter the connection password"]')).sendKeys(password);
  browser.driver.sleep(1000);

  element(<Locator>by.className('conn-view-button conn-view-buttonRight')).click();
  browser.driver.sleep(3000);

}

/**
 * check already created source channel is present or not
 * @param sourceName enter given source name
 * select protocol type Website and click on save
 */
function createdChannelWebsiteCheck(sourceName) {

  element(<Locator>by.xpath('//div[contains(text(), "Website")]')).click();
  browser.getCurrentUrl().then(function (text: string) {
    expect(text.toString()).toBe(browser.params.baseUrl + '#connection:' + sourceName + '_Website');
    console.log("---New Channel Website window is opened--- ")
    browser.driver.sleep(2000);
    browser.navigate().back();
    browser.driver.sleep(2000);
  });

}

/**
 * check already created source channel is present or not
 * @param url enter proper url
 * @param sourceName enter source name which you want to check
 */
function createdChannelFTPCheck(url, sourceName) {
  element(<Locator>by.xpath('//div[contains(text(), "FTP")]')).click();
  browser.getCurrentUrl().then(function (text: string) {
    expect(text.toString()).toBe(browser.params.baseUrl + 'login.jsp#connection:' + sourceName + '_FTP_' + url);
    console.log("---New Channel FTP window is opened--- ")
    browser.driver.sleep(1000);
    browser.navigate().back();
    browser.driver.sleep(2000);
  });
}

/**
 * check already created source channel is present or not
 * @param url enter correct url
 * @param sourceName enter source name which you want to check
 */

function createdChannelSFTPCheck(url, sourceName) {
  element(<Locator>by.xpath('//div[contains(text(), "SFTP")]')).click();
  browser.getCurrentUrl().then(function (text: string) {
    expect(text.toString()).toBe(browser.params.baseUrl + 'login.jsp#connection:' + sourceName + '_SFTP_' + url);
    console.log("---New Channel SFTP window is opened--- ")
    browser.driver.sleep(1000);
    browser.navigate().back();
    browser.driver.sleep(2000);
  });
}


module.exports = new sourceTestCase();