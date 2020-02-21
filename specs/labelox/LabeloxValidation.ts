import { browser, by, element } from 'protractor';
import { Locator } from 'protractor/built/locators';

function labelOxDetails() {
  describe('call Functions of labelox', () => {
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
  element(<Locator>by.className('HeaderIcon cursorPointer')).click();
  browser.driver.sleep(5000);
  browser.getAllWindowHandles().then(function (handles) {
    browser.switchTo().window(handles[1]);
    browser.getCurrentUrl().then(function (text: string) {
      expect(text.toString()).toBe(browser.params.baseUrl + 'r/LabelOx/LabelOx.jsp#/');
      console.log("---Open LabelOx--- ")
      browser.driver.sleep(3000);

      element(<Locator>by.className('account-circle mate-icons mat-icon material-icons')).click();
      browser.driver.sleep(2000);
      var profile = element(<Locator>by.className('account-holder mat-menu-item'))
      profile.getText().then(function (Text: String) {
        expect(Text.toString()).toEqual(ProfileName);
        console.log("Labelox Profile is open... ")
        browser.driver.sleep(3000);
      })
      browser.driver.close();
      browser.switchTo().window(handles[0]);
      browser.driver.sleep(5000);
      console.log("---Article pannel is opened--- ")
    });
  });
}


module.exports = new labelOxDetails();