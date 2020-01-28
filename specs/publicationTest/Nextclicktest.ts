import { element, by, browser, $ } from "protractor";
import { Locator } from "protractor/built/locators";


function sourceClick(){
  describe('Search for Source',function(){
      var sourceClick =element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[1]/div[1]/table[1]/tbody/tr/td/div'));
      it('search for source list',function(){
          browser.waitForAngularEnabled(false);
          sourceClick.click();
          browser.sleep(3000)
           nextBtn();
          browser.sleep(3000)

          
});
});
};
//next button click
function nextBtn(){
  var nextbtn=element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr[2]/td/table/tbody/tr/td[4]'));
    nextbtn.click();
    browser.sleep(3000)
    var no1= element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr[2]/td/table/tbody/tr/td[3]'))
    no1.getText().then(function(Text:String){
    expect('16-30 of 80').toEqual (Text.toString());
    console.log("this publications are present2")
  });
}
  module.exports = sourceClick();