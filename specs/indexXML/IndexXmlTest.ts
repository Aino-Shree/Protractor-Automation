import { element, by, browser, $ } from "protractor";
import { Locator } from "protractor/built/locators";
function index() {
  describe('data from index xml', function () {
    it('index url', function () {
      element(<Locator>by.xpath('//div[contains(text(), "SOURCES")]')).click();
      browser.driver.sleep(5000);
      element(<Locator>by.className('generateXmlButton'));
      browser.sleep(1000);
      var indexXmlUrl = browser.params.baseUrl + "ari/XtrapolaSpace/eXtrapolaApp/eXtrapola/getTodaysIndex?ResponseType=TEXT_XML";
      browser.get(indexXmlUrl);


      // lists of Link

      var listofLink = element.all(<Locator>by.className('text'));
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

          browser.getAllWindowHandles().then(function (handles) {
            browser.switchTo().window(handles[1]);
            validateData(link);
            browser.driver.sleep(5000);
            browser.driver.close();
            browser.switchTo().window(handles[0]);
            browser.driver.sleep(5000);
            return;
          });
        });
      });
    });
  });
};

function validateData(link) {
  element(<Locator>by.tagName('pre')).getText().then(function (json: String) {
    console.log('In validateData');
    browser.sleep(2000);
    expect('Page').toEqual(json);
    expect('title').toContain(json.toString());
    expect('subtitle').toContain(json.toString());
    console.log('Out validateData');

  });
}

export class Browser {
  public openPageInNewTab(currentUrl: String) {
    this.createNewBrowserTab();
    browser.sleep(2000);
    console.log(currentUrl);
    this.switchToTabNumber(1);
    browser.get(currentUrl as string);
    browser.sleep(5000);
  }

  public createNewBrowserTab() {
    console.log('createNewBrowserTab');
    browser.executeScript('window.open()');
  }

  public async switchToTabNumber(number: number) {
    return browser.getAllWindowHandles().then(function (handles) {
      console.log('switchToTabNumber');
      const newWindowHandle = handles[number];
      browser.switchTo().window(newWindowHandle);
      browser.sleep(1000);

    });
  }
}

module.exports = index();