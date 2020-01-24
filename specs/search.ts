import { element, by,browser, logging } from "protractor";
import { Locator } from "protractor/built/locators";
function search(){
describe('searching data',function(){
var sourceClick =element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[1]/div[1]/table[1]/tbody/tr/td'));
it('should validate whether data is availble or not',function(){
    browser.waitForAngularEnabled(false);
    sourceClick.click();
    browser.sleep(10000);
    searchBoxValidation('abi','Abitare');
    searchBoxValidation('centro','Il centro');
});
});
};
function searchBoxValidation(searchText,expectedValue){
    var searchBox = element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/input[2]'));
    var resultElement = element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr[1]/td/table/tbody[1]/tr/td[1]'));
    searchBox.sendKeys(searchText);
    browser.sleep(5000);
    resultElement.click();
    browser.sleep(5000);


var arb = element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div[1]/div[3]/div[2]'));
    arb.getText().then(function(Text:String){
        expect(expectedValue).toEqual (Text.toString());
        console.log("=======================>>"+Text.toString());
        });
        element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[1]/div[1]/table[1]/tbody/tr/td')).click();
        browser.sleep(10000);
}

module.exports=new search();