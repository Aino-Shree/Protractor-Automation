import { ElementFinder, browser, by, element, protractor,promise as wdpromise, WebDriver, WebElement, WebElementPromise } from 'protractor';
import { Locator } from 'protractor/built/locators';


function source(){
describe ('Source',()=>{
it('sources', function () {
  sourceList();
//sourceListPrint();
//newSource('shreeaino6');
  searchSource('shreeaino5')
//ChannelFTPValidation('shree@ftp','10.10.10.102','bhagyashri@ainosoft.com','shri2019');
//newChannelWebsite('shreeaino5');
newChannelFTP('file.tuttosport.com','upromo009	','prvwsrl14894','shreeaino5');
newChannelSFTP('aino.extrapola.com','aino','&m@Z95wTeduMdPN%','shreeaino5');
// editSource();
    });
  })
}
// source list
function sourceList(){
      browser.waitForAngularEnabled(false);
        // click on sources then list of source
    
      element(<Locator>by.xpath('//div[contains(text(), "SOURCES")]')).click();
    //var Sources= element(<Locator>by.className('HeaderTabs cursorPointer deSelected HeaderTabsLblDeselected')).click();
    browser.driver.sleep(5000);
     // click on sources then list of source
     element(<Locator>by.xpath('//div[contains(text(), "Sources")]')).click();
    // element(<Locator>by.className('LabelHV')).click();
    browser.driver.sleep(5000);
    }

// serach source name
function searchSource(sourceName){
    var searchBox = element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/input[1]'));
    searchBox.sendKeys(sourceName);
    element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/table/tbody/tr[2]/td/div/div[2]/table/tbody/tr[1]/td/table/tbody[1]/tr')).click();
    browser.driver.sleep(2000);

    // // expect condition for given source is present or open
    // browser.getCurrentUrl().then(function(text:string){      
    // expect(text.toString()).toBe(browser.params.baseUrl+'#source:'+ sourceName);
    // console.log("---selected source is opened--- ")
    // browser.driver.sleep(5000);
    // });
    var pdf= element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[1]/div[1]'))
    pdf.getText().then(function(Text:String){
    expect('Source Name:\n'+sourceName).toEqual (Text.toString());
    console.log("Publication of source is present ")
    browser.driver.sleep(2000);
    });

    // var pdf= element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[1]/div[2]'))
    // pdf.getText().then(function(Text:String){
    // expect('Publication of source:\nSingle').toEqual (Text.toString());
    // console.log("Publication of source is changed ")
    // browser.driver.sleep(2000);
    // });


  }

//edit source
function editSource(){
  var save=  element(<Locator>by.className('conn-view-button conn-view-buttonRight'))

 save.click();
   element(<Locator>by.className('conn-view-protocol-LB')).click();
   browser.driver.sleep(2000);
   //select on publication of source
   element(<Locator>by.className('conn-view-protocol-LB')).$('[value="Single"]').click()
    save.click();
    browser.driver.sleep(2000);
     
      //  //cancel source
       element(<Locator>by.className('conn-view-button-cancel conn-view-buttonLeft')).click();
       browser.driver.sleep(3000);
       browser.getCurrentUrl().then(function(text:string){      
           expect(text.toString()).toBe(browser.params.baseUrl+'#sources');
           console.log("---new source is canceled--- ")
           browser.driver.sleep(5000);
           });
  }
    
// sources list
function sourceListPrint(){
      
        element.all(<Locator>by.className('GF51MMUCCD GF51MMUCED GF51MMUCFD')).each(function(element) {
        element.getText().then(function(text) {
        console.log(text);
         });
        });
        element.all(<Locator>by.className('GF51MMUCCD GF51MMUCEE GF51MMUCFD')).each(function(element) {
        element.getText().then(function(text) {
        console.log(text);
            });
        });
             //count the total article
        var sourceList=element.all(<Locator>by.className('GF51MMUCDD'));   
        sourceList.count().then(function (count) {
        console.log("Source list count===============>"+count);
        expect(count).toEqual (16);
        });
         

        var no1= element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/table/tbody/tr[2]/td/div/div[2]/table/tbody/tr[2]/td/table/tbody/tr/td[3]'))
        no1.getText().then(function(Text:String){
        expect('1-15 of 69').toEqual (Text.toString()); 
        console.log("we are on source")
        });

}
 
//add new source
function newSource(newsource){
    browser.waitForAngularEnabled(false);
    element(<Locator>by.className('addButton')).click();
    browser.driver.sleep(5000);

    browser.getCurrentUrl().then(function(text:string){      
        expect(text.toString()).toBe(browser.params.baseUrl+'#newsource');
        console.log("---Add new source--- ")
        browser.driver.sleep(5000);
        });


        // save source
        element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div/div[3]/button[2]')).click();
        var sourceNameError=element(<Locator>by.className('conn-view-panel-with-errorLabel'))
        sourceNameError.getText().then(function(Text:String){
        expect('Source name cannot be empty').toEqual (Text.toString()); 
        browser.driver.sleep(2000);
        }); 

        var sourcename=element(<Locator>by.className('conn-view-panel-with-error-tb'))  
         sourcename.sendKeys(newsource)
         browser.driver.sleep(5000);
       //select on publication of source

   element(<Locator>by.className('conn-view-protocol-LB')).$('[value="Single"]').click()
   browser.driver.sleep(3000);
  element(<Locator>by.className('conn-view-button conn-view-buttonRight')).click();
   browser.driver.sleep(3000);
sourceList();
 }

 
 // add new channel website
function newChannelWebsite(sourceName){
  element(<Locator>by.className('addButton')).click();
   // expect condition for given source is present or open
   browser.getCurrentUrl().then(function(text:string){      
    expect(text.toString()).toBe(browser.params.baseUrl+'#newChannel');
    console.log("---New Channel window is opened--- ")
    browser.driver.sleep(2000);
    }); 
    

    element(<Locator>by.className('conn-view-protocol-LB')).click();
    browser.driver.sleep(1000);
    element(<Locator>by.className('conn-view-protocol-LB')).$('[value="Website"]').click()
    browser.driver.sleep(3000);
      element(<Locator>by.className('conn-view-button conn-view-buttonRight')).click();
   browser.driver.sleep(5000);

    browser.getCurrentUrl().then(function(text:string){      
      expect(text.toString()).toBe(browser.params.baseUrl+'#source:'+sourceName);
      console.log("---New Channel editing is save--- ")
      browser.driver.sleep(5000);
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
function ChannelFTPValidation(url,port,username,password){
  var save=element(<Locator>by.className('conn-view-button conn-view-buttonRight'))
//add new channel
  element(<Locator>by.className('addButton')).click();

    element(<Locator>by.className('conn-view-protocol-LB')).click();
    browser.driver.sleep(1000);
    // select 1 option in list
    element(<Locator>by.className('conn-view-protocol-LB')).$('[value="FTP"]').click()
    browser.driver.sleep(3000);
    save.click();
    var errorMsg=element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[4]/div[1]/div[2]/div'))
    errorMsg.getText().then(function(Text:String){
      expect('Url cannot be empty').toEqual (Text.toString());
      browser.driver.sleep(2000); 
      });

   element(<Locator>by.css('[placeholder = "Enter a url"]')).sendKeys(url);
    browser.driver.sleep(2000);
   //empty username
    save.click();
    var sourceNameError=element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[4]/div[2]/div[2]/div'))
    sourceNameError.getText().then(function(Text:String){
    expect('Username cannot be empty').toEqual (Text.toString()); 
    browser.driver.sleep(2000);
        }); 


      element(<Locator>by.css('[placeholder = "Enter the connection username"]')).sendKeys(username);
    browser.driver.sleep(1000);
    //empty password
    save.click();
      var sourceNameError=element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[4]/div[3]/div[2]/div'))
      sourceNameError.getText().then(function(Text:String){
      expect(Text.toString()).toEqual ('Password cannot be empty'); 
      browser.driver.sleep(2000);
          }); 
  
  element(<Locator>by.css('[placeholder = "Enter the connection password"]')).sendKeys(password);
  browser.driver.sleep(1000);
      
     //cancel
      var cancel=element(<Locator>by.className('conn-view-button-cancel conn-view-buttonLeft')).click();
      browser.driver.sleep(3000);

  
    

}
// new channel ftp
function newChannelFTP(url,username,password,sourceName){
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
function newChannelSFTP(url,username,password,sourceName){
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

  module.exports=new source();