import { element, by, browser, $ } from "protractor";
import { Locator } from "protractor/built/locators";
// var baseUrl = 'http://10.10.10.102:8080/Sources/';
function index() {
    describe('data from index xml', function () {
        var sourceClick = element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[1]/div[1]/table[1]/tbody/tr/td'));
        var indexClick = element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/button[1]'));
        it('index url', function () {
            browser.waitForAngularEnabled(false);
            console.log('before source Click');
            //  sourceClick.click();
            console.log('source Click');
            browser.sleep(1000);
            // indexClick.click();
            browser.sleep(1000);
           var indexXmlUrl = browser.params.baseUrl + "ari/XtrapolaSpace/eXtrapolaApp/eXtrapola/getTodaysIndex?ResponseType=TEXT_XML";
            browser.get(indexXmlUrl);


// lists of Link
            
                    var listofLink = element.all(<Locator>by.className('text'));
                     listofLink.each(function(element){
                        element.getText().then(function(link){
                            console.log("In each loop");
                            console.log("link is "+link);

                             var linkString= link;
                             if(!linkString.includes("http"))  {
                                  return;
                             } 
                                

                             var b=new Browser();
                             b.openPageInNewTab(link);

                                browser.getAllWindowHandles().then(function (handles) {
                                    browser.switchTo().window(handles[1]);
                                        validateData (link);
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

function validateData(link){
    element(<Locator>by.tagName('pre')).getText().then(function(json:String){
          console.log('In validateData');
           browser.sleep(2000);
           expect('Page').toEqual(json);
           expect('title').toContain(json.toString());
           expect('subtitle').toContain(json.toString());
           console.log('Out validateData');
           
     });        
    
    }


export class Browser {
    public  openPageInNewTab(currentUrl: String) {
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
  

//   var firstlink = element(<Locator>by.className('text')).getText().then(function (txt: string) {
//     console.log("txt:" + txt);
//     browser.sleep(5000);
//     console.log('first link');
//     var sclick = txt + '&periodInMinutes=-300';
//     console.log(sclick);
//     browser.sleep(5000);
//     browser.get(sclick);
//     browser.sleep(5000);
//     expect('subtitle').toEqual('http://10.10.10.102:8080/Sources/ari/XtrapolaSpace/eXtrapolaApp/eXtrapola/getNewsByDate?ResponseType=TEXT_JSON&sourceId=1&sourceName=Avvenire&date=08/01/2020');



//     });


  
 











module.exports = index();