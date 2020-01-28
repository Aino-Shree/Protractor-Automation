import { element, by, browser, $ } from "protractor";
import { Locator } from "protractor/built/locators";

function schedule(){
    describe('Search for Source',function(){
        var sourceClick =element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[1]/div[1]/table[1]/tbody/tr/td'));
        it('search for source list',function(){
            browser.waitForAngularEnabled(false);
            sourceClick.click();
            browser.sleep(10000);
            sceduleName('Corriere della Sera')
            // toggleButtonoff();
            // toggleButtonoon();
            // onoff();
            offon();
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
// scedule sync click
  element(<Locator>by.className("conn-view-button-associate conn-view-buttonLeft")).click();
 browser.sleep(5000);
}

//  button is off
function toggleButtonoff(){
//  expect(element(by.binding('notPresent')).isPresent()).toBe(false);
var sceduleStatusResultonn = element(<Locator>by.className('statusToggleBtn statusToggleBtn-down'));
browser.sleep(3000);
// sceduleStatusResultonn.isPresent();
console.log('-----------------'+sceduleStatusResultonn.isPresent());
expect(sceduleStatusResultonn.isPresent()).toBeFalsy();
console.log('button is off');
 
}
function toggleButtonoon(){
    var sceduleStatusResultonn = element(<Locator>by.className('statusToggleBtn statusToggleBtn-up'));
browser.sleep(3000);
 console.log('-----------------'+sceduleStatusResultonn.isPresent());
 expect(sceduleStatusResultonn.isPresent()).toBeTruthy();
 console.log('button is on');
}
function onoff(){
    var sceduleStatusResultonn = element(<Locator>by.className('statusToggleBtn statusToggleBtn-down'));
browser.sleep(3000);
// sceduleStatusResultonn.isPresent();
console.log('-----------------'+sceduleStatusResultonn.isPresent());
expect(sceduleStatusResultonn.isPresent()).toBeFalsy();
console.log('button is off');
element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div[1]/div/div[1]/div[2]/div[2]/img')).click();
browser.sleep(3000);
element(<Locator>by.className('conn-view-button conn-view-buttonRight')).click();
browser.sleep(3000);

 browser.navigate().back();
 browser.sleep(3000);

 element(<Locator>by.className("conn-view-button-associate conn-view-buttonLeft")).click();
 browser.sleep(3000);

 console.log('-----------------'+sceduleStatusResultonn.isPresent());
expect(sceduleStatusResultonn.isPresent()).toBeTruthy();

}
function offon(){
    var sceduleStatusResultonn = element(<Locator>by.className('statusToggleBtn statusToggleBtn-up'));
browser.sleep(3000);
// sceduleStatusResultonn.isPresent();
console.log('-----------------'+sceduleStatusResultonn.isPresent());
expect(sceduleStatusResultonn.isPresent()).toBeTruthy();
element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div[1]/div/div[1]/div[2]/div[2]/img')).click();
browser.sleep(3000);
element(<Locator>by.className('conn-view-button conn-view-buttonRight')).click();
browser.sleep(3000);

 browser.navigate().back();
 browser.sleep(3000);

 element(<Locator>by.className("conn-view-button-associate conn-view-buttonLeft")).click();
 browser.sleep(3000);

 console.log('-----------------'+sceduleStatusResultonn.isPresent());
expect(sceduleStatusResultonn.isPresent()).toBeTruthy();
console.log('button is off');
}
   





// element(<Locator>by.className('SC-scheduleLB')).element(by.css("option[value='20']")).click();
// browser.sleep(3000);

// element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div[1]/div/div[1]/div[4]/div[2]/div/select[2]')).element(by.css("option[value='45']")).click();
// browser.sleep(3000);
// element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/div[1]/div/div[1]/div[4]/div[2]/div/select[3]')).element(by.css("option[value='1']")).click();
// browser.sleep(10000);
// element(<Locator>by.className('conn-view-button conn-view-buttonRight')).click();






module.exports = schedule();