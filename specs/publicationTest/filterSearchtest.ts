import { element, by, browser, $ } from "protractor";
import { Locator } from "protractor/built/locators";
//  import { LoginHelper } from "./LoginHelper";



function xml(){
describe('Search for Source',function(){
var sourceClick =element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[1]/div[1]/table[1]/tbody/tr/td'));
browser.sleep(15000);
it('search for source list',function(){
    browser.waitForAngularEnabled(false);
    sourceClick.click();
    browser.sleep(5000);
    
       namefilterValidation('Avvenire')
     languagefilterValidation('Italian');
       categoryfilterValidation('Regional Newspapers')
      countryfilterValidation('Italy')
      regionfilterValiadtion('Marche')

});
});
};
function namefilterValidation(searchText){
    var searchBox = element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/input[2]'));
    searchBox.sendKeys(searchText);
    browser.sleep(3000);
    browser.sleep(3000);
    var publicationName = element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr[1]/td/table/tbody[1]/tr/td[1]/div'));
    publicationName.getText().then(function(Text:String){
        expect(Text.toString()).toEqual(searchText);
        console.log('abiatre11');
    searchBox.clear();
    });
}
function languagefilterValidation(searchText){
     browser.sleep(5000);
    var language = element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/select/option[2]'));
    language.click();
    browser.sleep(3000);

var searchBox = element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/input[2]'));
searchBox.sendKeys(searchText);
browser.sleep(3000);
var resultList=element.all(<Locator>by.className('gwt-TabPanelBottom'));
resultList.each(function(element){
    element.getText().then(function(languageText:String){
          console.log(languageText);
          var count = (languageText.match(/Italian/g) || []).length;
          browser.sleep(3000);
          console.log(count);
          expect(languageText.toString()).toContain(searchText);
           console.log("=================================================");
           searchBox.clear();

    });

});
}

function categoryfilterValidation(searchText){
    browser.sleep(10000);
    var categoryClick = element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/select/option[3]'));
    categoryClick.click();
    browser.sleep(3000);
    var searchBox = element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/input[2]'));
searchBox.sendKeys(searchText);
browser.sleep(3000);
var categorylist = element.all(<Locator>by.className('gwt-TabPanelBottom'));
categorylist.each(function(element){
    element.getText().then(function(categoryText:String){
        console.log(categoryText);
        var count = (categoryText.match(/Regional Newspapers/g) || []).length;
          browser.sleep(3000);
          console.log(count);
          expect(categoryText.toString()).toContain(searchText);
           console.log("=================================================");
           searchBox.clear();

    });
});

}
function countryfilterValidation(searchText){

    browser.sleep(10000);
    var countryClick = element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/select/option[4]'));
    countryClick.click();
    browser.sleep(3000);
    var searchBox = element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/input[2]'));
    searchBox.sendKeys(searchText);
    browser.sleep(3000);
    var countryList = element.all(<Locator>by.className('gwt-TabPanelBottom'));
    countryList.each(function(element){
        element.getText().then(function(countryText:String){
            console.log(countryText);
            var count = (countryText.match(/Italy/g) || []).length;
              browser.sleep(3000);
              console.log(count);
              expect(countryText.toString()).toContain(searchText);
               console.log("=================================================");
               searchBox.clear();

        });
    });


}
function regionfilterValiadtion(searchText){
    browser.sleep(10000);
    var regionClick = element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/select/option[5]'));
    regionClick.click();
    browser.sleep(3000);
    var searchBox = element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/input[2]'));
    searchBox.sendKeys(searchText);
    browser.sleep(1000);
    var regionList = element.all(<Locator>by.className('gwt-TabPanelBottom'));
    regionList.each(function(element){
        element.getText().then(function(regionText:String){
            console.log(regionText);
            var count = (regionText.match(/Italy/g) || []).length;
              browser.sleep(3000);
              console.log(count);
              expect(regionText.toString()).toContain(searchText);
               console.log("=================================================");
        });
    });
}


module.exports = xml();
