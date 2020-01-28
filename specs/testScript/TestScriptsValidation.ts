import { ElementFinder, browser, by, element, protractor,promise as wdpromise, WebDriver, WebElement, WebElementPromise } from 'protractor';
import { Locator } from 'protractor/built/locators';
function TestScript(){

  describe ('Test scripts validate Functions ',()=>{
    it('Test Scripts ', function () {
   TestScripts();
   //NewScripts('shreeaino5');
  //InUse('Leggo');
  //InDraft('IlSecolo');
      });
  });
}


//Test scripts window
function TestScripts(){
element(<Locator>by.className('HeaderIconTestScriptImg cursorPointer')).click();
    browser.driver.sleep(5000);
    browser.getCurrentUrl().then(function(text:string){ 
      expect(text.toString()).toBe(browser.params.baseUrl+'login.jsp#'+'testScripts');
      console.log("---Test scripts window Open--- ")
      browser.driver.sleep(6000);
    });
}
//for adding new script
function NewScripts(Name){
    element(<Locator>by.className('newScriptBtn')).click();
    browser.driver.sleep(5000);
    browser.getCurrentUrl().then(function(text:string){ 
      expect(text.toString()).toBe(browser.params.baseUrl+'login.jsp#newScripts');
      console.log("---New script--- ")
      element(<Locator>by.css('[placeholder = "Enter script name / targeted source URL"]')).sendKeys(Name);
      browser.driver.sleep(2000);
      element(<Locator>by.className('conn-view-button scriptPopupBtn')).click();
    }); 
    //script added or not
      var script= element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/table/tbody/tr[2]/td/table/tbody/tr[1]/td/table/tbody/tr/td[1]/table/tbody/tr'))
      script.getText().then(function(Text:String){
      expect('Draft >\n'+Name).toEqual (Text.toString());
      console.log("New script added...")
      browser.driver.sleep(2000);
      });
      //Test the script
      element(<Locator>by.className('test-script-button')).click();
      browser.driver.sleep(10000);
      
  // // write the script and run
  // element(<Locator>by.css('[placeholder = "Copy and paste the crawling script"]')).sendKeys('https://www.cronacadiverona.com/');
  // browser.driver.sleep(5000); 
  // console.log('given url is opened.....')
  //     element(<Locator>by.className('link-to-pdf')).click();
  //     browser.driver.sleep(5000);
  //     console.log('given data is Downlosded.....')

  browser.navigate().back();

}

//In use script test
function InUse(scriptName){
  element(<Locator>by.className('inUseBtn')).click();
  browser.driver.sleep(3000);
  browser.getCurrentUrl().then(function(text:string){ 
    expect(text.toString()).toBe(browser.params.baseUrl+'login.jsp#'+'scriptInUse');
    console.log("---In Use script window is opened--- ");
    browser.driver.sleep(5000);
  });
  // search Proper name of script for best result
  element(<Locator>by.css('[placeholder = "Filter Script"]')).sendKeys(scriptName);
  browser.driver.sleep(2000);
  // first result will be selected
  element(<Locator>by.className(' GF51MMUCKB')).click();
  browser.getCurrentUrl().then(function(text:string){ 
  expect(text.toString()).toBe(browser.params.baseUrl+'login.jsp#'+'editScript');
  browser.driver.sleep(5000);
  console.log('the script is Opened in edit mode')
  });

  browser.navigate().back();

 
}


//In use script test
function InDraft(scriptName){
  element(<Locator>by.className('draftBtn')).click();
  browser.driver.sleep(3000);
  browser.getCurrentUrl().then(function(text:string){ 
    expect(text.toString()).toBe(browser.params.baseUrl+'login.jsp#'+'scriptInDraft');
    console.log("---In Use script window is opened--- ");
    browser.driver.sleep(5000);

    // search Proper name of script for best result
  element(<Locator>by.css('[placeholder = "Filter Script"]')).sendKeys(scriptName);
  browser.driver.sleep(2000);
  // first result will be selected
  element(<Locator>by.className(' GF51MMUCKB')).click();
  browser.getCurrentUrl().then(function(text:string){ 
  expect(text.toString()).toBe(browser.params.baseUrl+'login.jsp#'+'editScript');
  browser.driver.sleep(5000);
  console.log('the script is Opened in edit mode')
  });

  browser.navigate().back();
  });
}

module.exports=new TestScript();