import { element, by, browser, $ } from "protractor";
import { Locator } from "protractor/built/locators";

function edition(){
    describe('Search for Source',function(){
        var sourceClick =element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[1]/div[1]/table[1]/tbody/tr/td'));
        it('search for source list',function(){
            browser.waitForAngularEnabled(false);
            sourceClick.click();
            browser.sleep(10000);
            sceduleName('Corriere Della Sera')
            regXvalidation('^(?:[^_]+_){2}([^\. ]+)')
            regXeditonValidation('^(?:[^_]+_){2}([^\.... ]+');
            nameEditionValidation('Lunedi');
            
            
            
});
});
};
function sceduleName(searchText){
    var searchBox = element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/input[2]'));
    searchBox.sendKeys(searchText);
    browser.sleep(3000);
    var nameResult = element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr[1]/td/table/tbody[1]/tr[1]/td[1]'))
    nameResult.click();
    browser.sleep(3000);
    // Configure estion click
    element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div[1]/div[15]/button[2]')).click();
    browser.sleep(3000);
}
    //  Regex for page number
function regXvalidation(searchText){
var regExpagenumber = element(<Locator>by.className('conn-view-panel-with-error-tb'));
regExpagenumber.clear();
browser.sleep(3000);
regExpagenumber.sendKeys(searchText);
browser.sleep(3000);
regExpagenumber.getText().then(function(Text:String){
    expect(Text.toString()).toEqual(searchText);
    console.log('Regex for page number');

});
}

    // Regex for Edition
function regXeditonValidation(searchText){
var regExedition = element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div[1]/div/div[1]/div[3]/input'));
browser.sleep(3000);
regExedition.clear();
regExedition.sendKeys(searchText);
browser.sleep(3000);
regExedition.getText().then(function(Text:String){
    expect(Text.toString()).toEqual(searchText);
    console.log('Regex for page number');

});
}


// Entering NewName for edition
function nameEditionValidation(searchText){
    var nameEdition = element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div[1]/div/div[1]/div[4]/div[1]/input'));
    nameEdition.click();
    browser.sleep(3000);

    nameEdition.sendKeys(searchText)
    browser.sleep(3000);

    nameEdition.getText().then(function(Text:String){
        expect(Text.toString()).toEqual('Lunedi');
        console.log('gangsteredition');
        // Keyword
     var keyword = element(<Locator>by.className('conn-view-panel-with-error-tbshort'));
     browser.sleep(3000);

    keyword.sendKeys('LM');
    browser.sleep(3000);

    keyword.getText().then(function(){
        expect(Text.toString()).toEqual('LM')
    })
    // + click
    element(<Locator>by.className('newSourceButton')).click();
    browser.sleep(3000);

    // Save Edition
    element(<Locator>by.className('conn-view-button conn-view-buttonRight')).click();
    browser.sleep(3000);

    // Configure estion click
    element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div[1]/div[15]/button[2]')).click();
    browser.sleep(3000);
    var addedEditon = element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div[1]/div/div[1]/div[5]/div[4]/div/div[1]'));
    addedEditon.getText().then(function(Text:String){
        expect(Text.toString()).toEqual('Lunedi');
        console.log('gangsteredition');
    });
});
}


module.exports = edition();