"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
function TotalArticles() {
    describe('call Functions ', function () {
        it('Article Test cases', function () {
            OpenArticle('Gazzetta del Sud');
            // notPresentArticle();
            calender('2020/01/27', 'Gazzetta del Sud');
            //articlelist();
            original();
            firstpdf();
            nextbutton('Santelli a governare la Calabria', 'Il virus cinese si fa più forte ora si “espande” oltre la');
            // originalPdf('10667561943984');
            // HighlightedPdf('6PG9RE1p');
            // CroppedPdf('6PG9RE1p');
            // addArticle('a','i','n','o','aino soft koregoan park pune',88);
            //deleteArticle('i','5',87);
        });
    });
}
;
//Click on article select date and select publication
function OpenArticle(publicationName) {
    protractor_1.browser.waitForAngularEnabled(false);
    //click on Articles 
    var src = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[1]/div[1]/table[2]/tbody/tr/td/div'));
    src.click();
    console.log('======Here is the list of Articles=====');
    protractor_1.browser.driver.sleep(5000);
    //selecting publication name
    var xpth = "//div[contains(text(),'" + publicationName + "')]";
    protractor_1.element(protractor_1.by.xpath(xpth)).click();
    protractor_1.browser.driver.sleep(5000);
    // var pub= element(<Locator>by.xpath('//div[contains(text(), "Gazzetta del Sud")]')).click();
    // browser.driver.sleep(3000);
    // // click on edition cosenza
    // var icon1=element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/table/tbody/tr/td[1]/table/tbody/tr/td[1]/table/tbody/tr/td/table/tbody/tr[3]/td/div/div/div/div[16]/div/div[2]'));
    // icon1.click()
    //  browser.driver.sleep(1000);
    // console.log('====select edition=====')
}
//article is not present
function notPresentArticle() {
    it('Article are present or not', function () {
        protractor_1.browser.waitForAngularEnabled(false);
        var EC = protractor_1.protractor.ExpectedConditions;
        var art = protractor_1.element(protractor_1.by.className('articleBrowser-articleInfoLinkLabel'));
        art.getText().then(function (Text) {
            expect('No Pages Available').toEqual(Text.toString());
            console.log(" Articles is not present1 ");
            protractor_1.browser.driver.sleep(3000);
        });
    });
}
// select a perticular date
function calender(date, publicationName) {
    protractor_1.browser.waitForAngularEnabled(false);
    var cal = protractor_1.element(protractor_1.by.className('visibilityDateBox'));
    cal.click();
    cal.clear();
    cal.sendKeys(date);
    protractor_1.browser.driver.sleep(1000);
    console.log('====calender=====');
    //selecting publication name
    var xpth = "//div[contains(text(),'" + publicationName + "')]";
    protractor_1.element(protractor_1.by.xpath(xpth)).click();
    protractor_1.browser.driver.sleep(5000);
    // var pub= element(<Locator>by.xpath('//div[contains(text(), "Gazzetta del Sud")]')).click();
    // browser.driver.sleep(3000);
    //   // click on edition cosenza
    // var icon1=element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/table/tbody/tr/td[1]/table/tbody/tr/td[1]/table/tbody/tr/td/table/tbody/tr[3]/td/div/div/div/div[16]/div/div[2]'));
    // icon1.click()
    // browser.driver.sleep(3000);
    // console.log('====select edition=====')
    // articles pdfs are available or not
    var pdf = protractor_1.element(protractor_1.by.className('articleBrowser-pageNumberAndAddArticlePanel'));
    pdf.getText().then(function (Text) {
        expect('Page - 001 : View Original Pdf\nAdd Article').toEqual(Text.toString());
        console.log("Page - 001 : View Original Pdf Add Article pdf is present ");
    });
    //});
}
// pdf listing  
function articlelist() {
    var articleList = protractor_1.element.all(protractor_1.by.className('articleBrowser-pageNumberAndAddArticlePanel'));
    articleList.count().then(function (count) {
        console.log("Article list count===============>" + count);
        expect(count).toEqual(15);
    });
    var list = protractor_1.element.all(protractor_1.by.className('articleBrowser-pageNumberAndAddArticlePanel')).each(function (list) {
        list.getText().then(function (text) {
            console.log("''''''>" + text);
        });
    });
    // articles pdfs are available or not
    var pdf = protractor_1.element(protractor_1.by.className('articleBrowser-pageNumberAndAddArticlePanel'));
    pdf.getText().then(function (Text) {
        expect('Page - 001 : View Original Pdf\nAdd Article').toEqual(Text.toString());
        console.log("Page - 001 : View Original Pdf Add Article pdf is present ");
    });
    // 1st article title
    var ark = protractor_1.element(protractor_1.by.className('articleBrowser-articleTitle'));
    ark.getText().then(function (Text) {
        expect('Coesione e orgoglio, l’appello di Mattarella a “riscoprirci” italiani').toEqual(Text.toString());
        console.log("this is the 1st title Articles is present1 ");
        ark.click();
    });
    // 2nd article title
    var ark = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/table/tbody/tr/td[2]/table/tbody/tr/td/div/div/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr/td/div/div/div[4]/div/div[1]/div/div/table[2]/tbody/tr[2]/td/table/tbody/tr[1]/td/table/tbody/tr/td[1]/div'));
    ark.getText().then(function (Text) {
        expect('I whatsapp del prefetto').toEqual(Text.toString());
        console.log("this Articles is present2");
    });
    // 3rd article title
    var ark = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/table/tbody/tr/td[2]/table/tbody/tr/td/div/div/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr/td/div/div/div[4]/div/div[1]/div/div/table[2]/tbody/tr[3]/td/table/tbody/tr[1]/td/table/tbody/tr/td[1]/div'));
    ark.getText().then(function (Text) {
        expect('Se un Papa è umano, troppo umano E sa chiedere scusa').toEqual(Text.toString());
        console.log("this Articles is present3");
    });
    // 4th article title
    var ark = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/table/tbody/tr/td[2]/table/tbody/tr/td/div/div/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr/td/div/div/div[4]/div/div[1]/div/div/table[2]/tbody/tr[4]/td/table/tbody/tr[1]/td/table/tbody/tr/td[1]/div'));
    ark.getText().then(function (Text) {
        expect('L’ex deputato Scotto aggredito da una squadraccia di neofascisti').toEqual(Text.toString());
        console.log("this Articles is present4");
    });
    // 5th article title
    var ark = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/table/tbody/tr/td[2]/table/tbody/tr/td/div/div/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr/td/div/div/div[4]/div/div[1]/div/div/table[2]/tbody/tr[5]/td/table/tbody/tr[1]/td/table/tbody/tr/td[1]/div'));
    ark.getText().then(function (Text) {
        expect('i').toEqual(Text.toString());
        console.log("this Articles is present5");
    });
    var articleList = protractor_1.element.all(protractor_1.by.className('articleBrowser-articleTitleVP'));
    articleList.count().then(function (count) {
        console.log("Article list count===============>" + count);
        expect(count).toEqual(91);
    });
}
//Click on view Original pdf
function original() {
    var originalpdf = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/table/tbody/tr/td[2]/table/tbody/tr/td/div/div/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr/td/div/div/div[4]/div/div[1]/div/div/table[1]/tbody/tr/td[1]/table/tbody/tr/td/div/a'));
    originalpdf.click();
    protractor_1.browser.driver.sleep(5000);
    protractor_1.browser.getAllWindowHandles().then(function (handles) {
        protractor_1.browser.switchTo().window(handles[1]);
        protractor_1.browser.getCurrentUrl().then(function (text) {
            expect(text.toString()).toBe(protractor_1.browser.params.baseUrl + 'DownloadBlob?blobId=9708837393600-1-null-application/pdf');
            console.log("---View Original PDF opened--- ");
            protractor_1.browser.driver.sleep(5000);
            protractor_1.browser.driver.close();
            protractor_1.browser.switchTo().window(handles[0]);
            protractor_1.browser.driver.sleep(5000);
            console.log("---Article pannel is opened--- ");
        });
    });
}
//Click on Add Article
function addArticle(ochiello, title, subtitle, author, content, articleCount) {
    var addArticle = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/table/tbody/tr/td[2]/table/tbody/tr/td/div/div/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr/td/div/div/div[4]/div/div[1]/div/div/table[1]/tbody/tr/td[2]/table/tbody/tr/td[2]/div'));
    addArticle.click();
    protractor_1.browser.driver.sleep(5000);
    // articles pdfs are available or not
    var newart = protractor_1.element(protractor_1.by.xpath('/html/body/div[3]/div/table/tbody/tr[1]/td/table/tbody/tr/td/div'));
    newart.getText().then(function (Text) {
        expect('Add new Article :').toEqual(Text.toString());
        console.log("Add new article pannel is open");
        protractor_1.browser.driver.sleep(1000);
        //Fill the data in given ochiello
        protractor_1.element(protractor_1.by.xpath('/html/body/div[3]/div/table/tbody/tr[2]/td/table/tbody/tr/td/table/tbody/tr[2]/td[2]/input'))
            .sendKeys(ochiello);
        console.log("Ochiello is added sucessfully");
        protractor_1.browser.driver.sleep(1000);
        //Fill the data in given title,subtitle,author
        protractor_1.element(protractor_1.by.xpath('/html/body/div[3]/div/table/tbody/tr[2]/td/table/tbody/tr/td/table/tbody/tr[3]/td[2]/input'))
            .sendKeys(title);
        console.log("title is added sucessfully");
        protractor_1.browser.driver.sleep(1000);
        //Fill the data in given subtitle,author
        protractor_1.element(protractor_1.by.xpath('/html/body/div[3]/div/table/tbody/tr[2]/td/table/tbody/tr/td/table/tbody/tr[4]/td[2]/input'))
            .sendKeys(subtitle);
        console.log("Subtitle is added sucessfully");
        protractor_1.browser.driver.sleep(1000);
        //Fill the data in given author
        protractor_1.element(protractor_1.by.xpath('/html/body/div[3]/div/table/tbody/tr[2]/td/table/tbody/tr/td/table/tbody/tr[5]/td[2]/input'))
            .sendKeys(author);
        console.log("author is added sucessfully");
        protractor_1.browser.driver.sleep(1000);
        //Fill the data in given author
        protractor_1.element(protractor_1.by.xpath('/html/body/div[3]/div/table/tbody/tr[2]/td/table/tbody/tr/td/table/tbody/tr[6]/td[2]/textarea'))
            .sendKeys(content);
        console.log("Content is added sucessfully");
        protractor_1.browser.driver.sleep(1000);
        protractor_1.element(protractor_1.by.xpath('/html/body/div[3]/div/table/tbody/tr[2]/td/table/tbody/tr/td/table/tbody/tr[7]/td[2]/select'))
            .$('[value="Snippet"]').click();
        protractor_1.browser.driver.sleep(1000);
        protractor_1.element(protractor_1.by.xpath('/html/body/div[3]/div/table/tbody/tr[3]/td/div/button[2]')).click();
        protractor_1.element(protractor_1.by.xpath('/html/body/div[3]/div/table/tbody/tr[3]/td/div/button[1]')).click();
        // articles pdfs are available or not
        var pdf = protractor_1.element(protractor_1.by.className('articleBrowser-pageNumberAndAddArticlePanel'));
        pdf.getText().then(function (Text) {
            expect('Page - 001 : View Original Pdf\nAdd Article').toEqual(Text.toString());
            console.log("Page - 001 : View Original Pdf Add Article pdf is present ");
            protractor_1.browser.driver.sleep(5000);
            console.log("-----article added sucessfully-----");
            var articleList = protractor_1.element.all(protractor_1.by.className('articleBrowser-articleTitleVP'));
            articleList.count().then(function (count) {
                console.log("Article list count===============>" + count);
                expect(count).toEqual(articleCount);
            });
        });
    });
}
// click on Pdf Or other icons available on article pannel
function firstpdf() {
    //for 1st article click 
    protractor_1.element(protractor_1.by.className('articleBrowser-articleTitle')).click();
    //click on pdf
    var pdf = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/table/tbody/tr/td[2]/table/tbody/tr/td/div/div/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr/td/div/div/div[2]/div/div/div/table/tbody/tr/td[1]/table/tbody/tr/td[1]/img'));
    pdf.click();
    console.log('====Here is the 1st PDF=====');
    protractor_1.browser.driver.sleep(2000);
    // back button when we click on Pdf 
    var pdfback = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/table/tbody/tr/td[2]/table/tbody/tr/td/div/div/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr/td/div/div/div[4]/div/table[2]/tbody/tr[1]/td/button'));
    pdfback.click();
    protractor_1.browser.driver.sleep(3000);
    // articles pdfs are available or not
    var pdf = protractor_1.element(protractor_1.by.className('articleBrowser-pageNumberAndAddArticlePanel'));
    pdf.getText().then(function (Text) {
        expect('Page - 001 : View Original Pdf\nAdd Article').toEqual(Text.toString());
        console.log("Back button is working... ");
        protractor_1.browser.driver.sleep(3000);
    });
}
// click get Next/Preview button is working
function nextbutton(nextArticle, previewArticle) {
    // next button click for next article on same page
    var nextTitle = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/table/tbody/tr/td[2]/table/tbody/tr/td/div/div/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr/td/div/div/div[2]/div/div/div/table/tbody/tr/td[2]/table/tbody/tr/td[2]/button'));
    nextTitle.click();
    protractor_1.browser.driver.sleep(3000);
    // next button expect statement for checking 2nd article title
    var ark = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/table/tbody/tr/td[2]/table/tbody/tr/td/div/div/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr/td/div/div/div[2]/div/div/div/div[1]/div[2]'));
    ark.getText().then(function (Text) {
        expect(nextArticle).toEqual(Text.toString());
        console.log("Next 2 nd Articles is present on same page");
        protractor_1.browser.driver.sleep(3000);
    });
    //click on pdf Preview
    var pdfPreview = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/table/tbody/tr/td[2]/table/tbody/tr/td/div/div/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr/td/div/div/div[2]/div/div/div/table/tbody/tr/td[2]/table/tbody/tr/td[1]/button'));
    pdfPreview.click();
    console.log('====Here is the 1st PDF Preview=====');
    protractor_1.browser.driver.sleep(5000);
    // Preview button expect statement for checking 2nd article title
    var ark = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/table/tbody/tr/td[2]/table/tbody/tr/td/div/div/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr/td/div/div/div[2]/div/div/div/div[1]/div[2]'));
    ark.getText().then(function (Text) {
        expect(previewArticle).toEqual(Text.toString());
        console.log("Preview 1st Articles is present on same page");
        protractor_1.browser.driver.sleep(3000);
    });
}
//Click on Original PDFs
function originalPdf(blobId) {
    var originalpdf = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/table/tbody/tr/td[2]/table/tbody/tr/td/div/div/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr/td/div/div/div[2]/div/div/div/table/tbody/tr/td[1]/table/tbody/tr/td[3]/button'));
    originalpdf.click();
    protractor_1.browser.driver.sleep(3000);
    protractor_1.browser.getAllWindowHandles().then(function (handles) {
        protractor_1.browser.switchTo().window(handles[1]);
        protractor_1.browser.getCurrentUrl().then(function (text) {
            expect(text.toString()).toBe(protractor_1.browser.params.baseUrl + 'DownloadBlob?blobId=' + blobId + '-1-null-application/pdf');
            console.log("---Original PDF opened--- ");
            protractor_1.browser.driver.sleep(5000);
            protractor_1.browser.driver.close();
            protractor_1.browser.switchTo().window(handles[0]);
            protractor_1.browser.driver.sleep(5000);
            console.log("---Article pannel is opened--- ");
        });
    });
}
//Click on Highlighted PDFs
function HighlightedPdf(articleGuid) {
    var Highlightedpdf = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/table/tbody/tr/td[2]/table/tbody/tr/td/div/div/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr/td/div/div/div[2]/div/div/div/table/tbody/tr/td[1]/table/tbody/tr/td[4]/button'));
    Highlightedpdf.click();
    protractor_1.browser.driver.sleep(3000);
    protractor_1.browser.getAllWindowHandles().then(function (handles) {
        protractor_1.browser.switchTo().window(handles[1]);
        protractor_1.browser.getCurrentUrl().then(function (text) {
            expect(text.toString()).toBe(protractor_1.browser.params.baseUrl + 'ari/XtrapolaSpace/eXtrapolaApp/eXtrapola/' + 'fetchHighlightedPdf?ResponseType=TEXT_FILE&articleGuid=' + articleGuid);
            console.log("---Highlighted PDF opened--- ");
            protractor_1.browser.driver.sleep(5000);
            protractor_1.browser.driver.close();
            protractor_1.browser.switchTo().window(handles[0]);
            protractor_1.browser.driver.sleep(5000);
            console.log("---Article pannel is opened--- ");
        });
    });
}
//Click on Cropped PDFs
function CroppedPdf(articleGuid) {
    var Croppedpdf = protractor_1.element(protractor_1.by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/table/tbody/tr/td[2]/table/tbody/tr/td/div/div/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr/td/div/div/div[2]/div/div/div/table/tbody/tr/td[1]/table/tbody/tr/td[5]/button'));
    Croppedpdf.click();
    protractor_1.browser.driver.sleep(2000);
    protractor_1.browser.getAllWindowHandles().then(function (handles) {
        protractor_1.browser.switchTo().window(handles[1]);
        protractor_1.browser.getCurrentUrl().then(function (text) {
            expect(text.toString()).toBe(protractor_1.browser.params.baseUrl + 'ari/XtrapolaSpace/eXtrapolaApp/eXtrapola/' + 'fetchCroppedPdf?ResponseType=TEXT_FILE&articleGuid=' + articleGuid);
            console.log("---Cropped PDF opened--- ");
            protractor_1.browser.driver.sleep(3000);
            protractor_1.browser.driver.close();
            protractor_1.browser.switchTo().window(handles[0]);
            protractor_1.browser.driver.sleep(3000);
            console.log("---Article pannel is opened--- ");
        });
    });
}
//delete Article
function deleteArticle(title, indexList, articleCount) {
    //get article using array list
    var pagelist = protractor_1.element.all(protractor_1.by.className('articleBrowser-articleTitleVP'));
    expect(pagelist.get(indexList).getText()).toBe(title);
    console.log(title + "<------------------");
    var selectArticle = pagelist.get(indexList);
    selectArticle.getText().then(function (text) {
        console.log(text.toString() + "----------------------");
    });
    selectArticle.click();
    console.log(selectArticle + "----------------------");
    protractor_1.browser.driver.sleep(3000);
    selectArticle.element(protractor_1.by.className("articleBrowser-deleteArticleBtn")).click();
    protractor_1.browser.driver.sleep(3000);
    //  // delete the article
    //  var ark= element(<Locator>by.className('articleBrowser-deleteArticleBtn'))
    //  ark.getText().then(function(Text:String){
    //  expect(title).toEqual (Text.toString());
    //  console.log("this is the 1st title Articles is present1 ")
    //  ark.click();
    //  browser.driver.sleep(1000)
    //  console.log("Article delete sucessfully ")
    //  browser.driver.sleep(1000)
    // });
    var articleList = protractor_1.element.all(protractor_1.by.className('articleBrowser-articleTitleVP'));
    articleList.count().then(function (count) {
        console.log("Article list count===============>" + count);
        expect(count).toEqual(articleCount);
    });
}
module.exports = new TotalArticles();
