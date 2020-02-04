import { browser, by, element } from 'protractor';
import { Locator } from 'protractor/built/locators';
//Labelox,Test script,Logout
function Logout(){

  describe ('Logout Functions ',()=>{
    it('Logout', function () { 
   logout();
  
      });
  });
}

//THIS TEST CASE IS FOR LOGOUT BUTTON
function logout(){
  element(<Locator>by.className('HeaderIconLogOut cursorPointer')).click();
    browser.driver.sleep(5000);

      browser.getCurrentUrl().then(function(text:string){ 
        expect(text.toString()).toBe(browser.params.baseUrl+'login.jsp#/');
        console.log("---Logout Articulate--- ")
        browser.driver.sleep(5000);
      });
 

}

module.exports=new Logout();