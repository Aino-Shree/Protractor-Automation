import { element, by, browser, $ } from "protractor";
import { Locator } from "protractor/built/locators";

function updatepub() {
    describe('update publication test', function () {
        it('update publication test', function () {
            publication();
            sourceName('Avv')
            pubName('Avvenire');
            calender('01/01/2020');
            expcalender('02/02/2021');
            parentpathValidate('/Intellinet/OUT/')
        });
    });
};
function sourceName(searchText) {    
    var searchBox = element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/input[2]'));
    searchBox.sendKeys(searchText);
    browser.sleep(5000);                            
    var nameResult = element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr[1]/td/table/tbody[1]/tr/td[1]/div'));
    nameResult.click();
    browser.sleep(3000);
    // // edit click
    element(<Locator>by.className('conn-view-button conn-view-buttonRight')).click();
    browser.sleep(1000);
    element(<Locator>by.xpath('/html/body/div[3]/div/div/div[2]/button')).click();

    // channel select
    element(<Locator>by.className('conn-view-protocol-LB conn-view-protocol-LB-short'))
        .element(<Locator>by.xpath("/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[2]/div/div[2]/select/option[2]"))
        .click();
    browser.sleep(2000);

}
function pubName(searchText) {
    var publicationName = element(<Locator>by.css('[placeholder = "Enter a publication name"]'));
    publicationName.clear();
    publicationName.sendKeys(searchText);
    browser.sleep(3000);
    publicationName.getText().then(function (Text: String) {
        //expect(Text.toString()).toEqual(searchText);
        console.log('pub Verified')
        // Publication Type
        element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[4]/select'))
        .element(<Locator>by.css("option[value='Magazine']")).click();
        browser.sleep(3000);
        // Content Type
        element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[5]/select'))
        .element(<Locator>by.css("option[value='PDF']")).click();
        browser.sleep(5000);


    });
}

// Subscription date
function calender(date) {
    browser.waitForAngularEnabled(false);
 
    // main language
    element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[8]/select'))
        .element(<Locator>by.css("option[value='Czech']")).click();
    browser.sleep(3000);
    // Category
    element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[9]/select'))
        .element(<Locator>by.css("option[value='Comics']")).click();
    browser.sleep(3000);
    // Country
    element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[10]/select'))
        .element(<Locator>by.css("option[value='Other']")).click();
    browser.sleep(3000);
    // Region
    // element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[11]/select'))
    //.element(<Locator>by.css("option[value='Marche']"))
    //   .click();
    browser.sleep(3000);
}


// expiry date
function expcalender(date) {
    var cal1 = element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[6]/input'));
    cal1.clear();
    var cal = element(<Locator>by.css('[placeholder = "DD/MM/YYYY"]'));
    cal.sendKeys(date);
    browser.sleep(3000);
}

function parentpathValidate(searchText) {
    var parentPath = element(<Locator>by.css('[placeholder = "Please enter parent folder path name"]'));
    parentPath.clear();
    parentPath.sendKeys(searchText);
    browser.sleep(3000);
    parentPath.getText().then(function (Text: String) {
       // expect(Text.toString()).toEqual('/Intellinet/OUT/');
        console.log('parentPath')
        // File Startegy
        element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div/div[14]/div[2]/div[2]/select'))
            .element(<Locator>by.css("option[value='Folder pattern']"))
            .click();
        browser.sleep(3000);
        // update click
        element(<Locator>by.className('conn-view-button conn-view-buttonRight')).click();
        browser.sleep(3000);
       // element(<Locator>by.xpath('/html/body/div[3]/div/div/div[2]/button')).click();

    });

}

function publication() {
    var process = require('../publication/EditionFunctionalityTest');
}

module.exports = updatepub();
