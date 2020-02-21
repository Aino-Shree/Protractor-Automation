import { element, by, browser, $ } from "protractor";
import { Locator } from "protractor/built/locators";

function Searchpublication() {
  describe('search Publication', function () {
    it('Added Pub', function () {
      sourceList();
      search('Corriere Romagna');
       publicationName('pub4');
       calender('01/01/2020');

    })
  });
}
function sourceList() {
  element(<Locator>by.className('LabelHV')).click();
  browser.driver.sleep(5000);
}
function search(sourceName) {                 
  var searchBox = element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/input[1]'))
    searchBox.sendKeys(sourceName);
  element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/table/tbody/tr[2]/td/div/div[2]/table/tbody/tr[1]/td/table/tbody[1]/tr')).click();
  browser.driver.sleep(10000);
  // expect condition for given source is present or open
  browser.getCurrentUrl().then(function (text: string) {
    // expect(text.toString()).toBe(browser.params.baseUrl + '#source:' + sourceName);
    // console.log("---selected source is opened--- ")
    // browser.driver.sleep(3000);
    // click for config new publication

    element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[3]/div/div[2]/button')).click();
    browser.sleep(3000);
    
  })
}
//publication name
function publicationName(sourceName) {
  var enPublicationName = element(<Locator>by.className('conn-view-panel-with-error-tb'));
  browser.sleep(3000);
  enPublicationName.sendKeys(sourceName);
  browser.sleep(3000);
  // publication type
  element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[4]/select/option[1]')).click();
  browser.sleep(3000);
  // content type
  element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[5]/select/option[1]')).click();
  browser.sleep(5000);
}
function calender(date) {
  var cal = element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[6]/input'));
  browser.sleep(3000);
  cal.sendKeys(date);
  browser.sleep(3000);
  // select language
  element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[8]/select'))
    .element(<Locator>by.css("option[value='Italian']")).click();
  browser.sleep(5000);
  // select Category
  element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[9]/select'))
    .element(<Locator>by.css("option[value='Arts & Photography']")).click();
  browser.sleep(5000);
  // select Country
  element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[10]/select'))
    .element(<Locator>by.css("option[value='Italy']")).click();
  browser.sleep(5000);
  // save buttonclick
  element(<Locator>by.className('conn-view-button conn-view-buttonRight')).click();
  browser.sleep(5000);

}

module.exports = Searchpublication();
