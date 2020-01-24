import { ElementFinder, browser, by, element, protractor, Browser } from 'protractor';
import { Locator } from 'protractor/built/locators';
import * as webdriver from "selenium-webdriver";
import Promise=webdriver.promise.Promise;
//import {Validation} from './login'

describe ('Fun',()=>{
  vali();
  log();
})


function log(){
  var log =require('./login');
   console.log("======login sucessfuly=======");
}


 function vali(){
console.log("=====Enter the valid format========= ");
describe('extrapola login validation ts', function () { //Suite in Jasmine

  var EC = protractor.ExpectedConditions;
  
//enter the email
var email =element(<Locator>by.xpath('/html/body/table/tbody/tr/td/table/tbody/tr[3]/td/table/tbody/tr/td[2]/input'));
//enter the pass
var pass=element(<Locator>by.xpath('/html/body/table/tbody/tr/td/table/tbody/tr[5]/td/table/tbody/tr/td[2]/input'));
//click on login
var btn=element(<Locator>by.xpath('/html/body/table/tbody/tr/td/table/tbody/tr[9]/td/button'));
// email error msg
var erroremail =element(<Locator>by.xpath('/html/body/table/tbody/tr/td/table/tbody/tr[4]/td/div'));
// pass error msg
var errorpass =element(<Locator>by.xpath('/html/body/table/tbody/tr/td/table/tbody/tr[6]/td/div'));

  it('should add a todo', function () { // Test in Jasmine
    
    browser.waitForAngularEnabled(false);
    // Entering application url in browser
    console.log('=========================');
    browser.get('http://213.133.103.90:8091/Sources_jenkins-config-suraj/'); 
    browser.driver.sleep(1000);
   
  });
 
   // VALIDATION 1 FOR EMAIL
    it('email validation1',function(){
    email.sendKeys('shree123@');
    browser.driver.sleep(2000);
    btn.click();
    browser.driver.sleep(2000);
    browser.wait(EC.visibilityOf(erroremail),3000);
    erroremail.getText().then(function(Text:String){
    expect('Enter valid email address').toEqual (Text.toString()); 
    });
  })


// VALIDATION 2 FOR EMAIL
it('email validation5',function(){
  email.clear();
  email.sendKeys('');
  browser.driver.sleep(2000);
  btn.click();
  browser.driver.sleep(2000);
  browser.wait(EC.visibilityOf(erroremail),3000);
  erroremail.getText().then(function(Text:String){
  expect('User name cannot be empty').toEqual (Text.toString()); 
  });
})


// VALIDATION 1 FOR PASSWORD
it('pass validation1',function(){
  email.sendKeys('Prashant@ainosoft.com');
  browser.driver.sleep(2000);
  pass.sendKeys('123');
  browser.driver.sleep(2000);
  btn.click();
  browser.driver.sleep(2000);
  browser.wait(EC.visibilityOf(errorpass),3000);
  errorpass.getText().then(function(Text:String){
  expect('Enter password between 8 to 16 character.').toEqual (Text.toString()); 
  console.log('======validation sucessful======');
  });
})



});
};