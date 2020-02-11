import { browser, by, element} from 'protractor';
import { Locator } from 'protractor/built/locators';

function testScript() {
  describe('call Functions of Test Scripts ', () => {
    it('Test Scripts ', function () {
      testScripts();
      newScripts('shreeaino1');
     // inUse('Leggo');
     // inDraft('IlSecolo');
    });
  });
}

/**
 * click on test script button 
 * add New script,InUse,InDraft funcionality
 */
function testScripts() {
  element(<Locator>by.className('HeaderIconTestScriptImg cursorPointer')).click();
  browser.driver.sleep(5000);
  browser.getCurrentUrl().then(function (text: string) {
    expect(text.toString()).toBe(browser.params.baseUrl + 'login.jsp#' + 'testScripts');
    console.log("---Test scripts window Open--- ")
    browser.driver.sleep(6000);
  });
}

/**
 * adding New script funcionality
 */
function newScripts(Name) {
  element(<Locator>by.className('newScriptBtn')).click();
  browser.driver.sleep(5000);
  browser.getCurrentUrl().then(function (text: string) {
    expect(text.toString()).toBe(browser.params.baseUrl + 'login.jsp#newScripts');
    console.log("---New script--- ")
    element(<Locator>by.css('[placeholder = "Enter script name / targeted source URL"]')).sendKeys(Name);
    browser.driver.sleep(2000);
    element(<Locator>by.className('conn-view-button scriptPopupBtn')).click();
  });

  var script = element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/table/tbody/tr[2]/td/table/tbody/tr[1]/td/table/tbody/tr/td[1]/table/tbody/tr'))
  script.getText().then(function (Text: String) {
    expect('Draft >\n' + Name).toEqual(Text.toString());
    console.log("New script added...")
    browser.driver.sleep(2000);
    var fs=element(<Locator>by.className('testScript-textArea'));
 var contents=fs.readFileSync('../testScript/filename.txt','UTF-8');
 contents.toString().split().forEach(function(line){

 });
  // MyClass obj=new MyClass();
  // console.log(obj);

  });
}

  /// <reference path="path/to/node.d.ts" />

// class MyClass {
//   File filename=new this.filename('../testScript/filename.txt');
//   System.out.println('first:'+__filename.getAbsolutePath());
  // private fs = require('fs');
  // constructor() { }
  // showFile() {
  //     this.fs.readFile('../testScript/filename', function (data) {
  //         console.log("Asynchronous read: " + data.toString());
  //     });
  // }
//}

// Usage
// var obj = new MyClass();
// obj.createFile();
// obj.showFile();
  browser.driver.sleep(2000);
 
  browser.navigate().back();

/**
 * click on Inuse script link
 * @param scriptName search the Script name or source name that you want to check his script
 */

function inUse(scriptName) {
  element(<Locator>by.className('inUseBtn')).click();
  browser.driver.sleep(3000);
  browser.getCurrentUrl().then(function (text: string) {
    expect(text.toString()).toBe(browser.params.baseUrl + 'login.jsp#' + 'scriptInUse');
    console.log("---In Use script window is opened--- ");
    browser.driver.sleep(5000);
  });
  // search Proper name of script for best result
  element(<Locator>by.css('[placeholder = "Filter Script"]')).sendKeys(scriptName);
  browser.driver.sleep(2000);
  // first result will be selected
  element(<Locator>by.className(' GF51MMUCKB')).click();
  browser.getCurrentUrl().then(function (text: string) {
    expect(text.toString()).toBe(browser.params.baseUrl + 'login.jsp#' + 'editScript');
    browser.driver.sleep(5000);
    console.log('the script is Opened in edit mode')
  });
  browser.navigate().back();
}

/**
 * click on InDraft link
 * @param scriptName search the already added Script name or source name that you want to check his script
 */

function inDraft(scriptName) {
  element(<Locator>by.className('draftBtn')).click();
  browser.driver.sleep(3000);
  browser.getCurrentUrl().then(function (text: string) {
    expect(text.toString()).toBe(browser.params.baseUrl + 'login.jsp#' + 'scriptInDraft');
    console.log("---In Use script window is opened--- ");
    browser.driver.sleep(5000);

    // search Proper name of script for best result
    element(<Locator>by.css('[placeholder = "Filter Script"]')).sendKeys(scriptName);
    browser.driver.sleep(2000);
    // first result will be selected
    element(<Locator>by.className(' GF51MMUCKB')).click();
    browser.getCurrentUrl().then(function (text: string) {
      expect(text.toString()).toBe(browser.params.baseUrl + 'login.jsp#' + 'editScript');
      browser.driver.sleep(5000);
      console.log('the script is Opened in edit mode')
    });

    browser.navigate().back();
  });
}

module.exports = new testScript();