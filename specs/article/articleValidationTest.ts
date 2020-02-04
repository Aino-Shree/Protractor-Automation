import { browser, by, element } from 'protractor';
import { Locator } from 'protractor/built/locators';

function totalArticles() {
  describe('call Functions of article ', () => {
    it('Article Test cases', function () {
      openArticle('Gazzetta dello Sport');
      notPresentArticle();
      selectDateFromCalender('2020/01/27', 'Gazzetta dello Sport');
      articleList(14);
      original('1785058849238204');
      firstPdf();
      nextButton('Caro basket, sei stato un amore così grande che ti ho dato tutto','3 PAG');
      originalPdf('1785100794785951');
      HighlightedPdf('3Tc1d3Rj');
      CroppedPdf('3Tc1d3Rj');
      addArticle('a', 'i', 'n', 'o', 'aino soft koregoan park pune', 31);
      deleteArticle('i', '3', 30);

    });
  })
};


/**
 * Click on article panel 
 * @param publicationName select perticular Publication 
 */
function openArticle(publicationName) {
  browser.waitForAngularEnabled(false);
  element(<Locator>by.xpath('//div[contains(text(), "ARTICLES")]')).click();
  browser.driver.sleep(5000);
  var pub = "//div[contains(text(),'" + publicationName + "')]";
  element(<Locator>by.xpath(pub)).click();
  browser.driver.sleep(5000);

}

/**
 * when article is not present 
 */
function notPresentArticle() {
  var art = element(<Locator>by.className('articleBrowser-articleInfoLinkLabel'));
  art.getText().then(function (Text: String) {
    expect('No Pages Available').toEqual(Text.toString());
    console.log(" Articles is not present1 ")
    browser.driver.sleep(3000);
  });
}

/**
 * @param date select perticular date by using calender
 * @param publicationName select perticular publication name 
 */
function selectDateFromCalender(date, publicationName) {
  var cal = element(<Locator>by.className('visibilityDateBox'));
  cal.click()
  cal.clear();
  cal.sendKeys(date);
  browser.driver.sleep(1000);

  var publication = "//div[contains(text(),'" + publicationName + "')]";
  element(<Locator>by.xpath(publication)).click();
  browser.driver.sleep(5000);

  var pdf = element(<Locator>by.className('articleBrowser-pageNumberAndAddArticlePanel'))
  pdf.getText().then(function (Text: String) {
    expect('Page - 001 : View Original Pdf\nAdd Article').toEqual(Text.toString());
    console.log("Page - 001 : View Original Pdf Add Article pdf is present ")
  });
}

/**
 * Print all article list 
 * @param articleCount count the total article which are present
 */
function articleList(articleCount) {
  var articleList = element.all(<Locator>by.className('articleBrowser-pageNumberAndAddArticlePanel'));
  articleList.count().then(function (count) {
    console.log("Article list count===============>" + count);
    expect(count).toEqual(articleCount);
  });

  var list = element.all(<Locator>by.className('articleBrowser-pageNumberAndAddArticlePanel')).each(function (list) {
    list.getText().then(function (text) {
      console.log("----->" + text);
    });
  });

  var pdf = element(<Locator>by.className('articleBrowser-pageNumberAndAddArticlePanel'))
  pdf.getText().then(function (Text: String) {
    expect('Page - 001 : View Original Pdf\nAdd Article').toEqual(Text.toString());
    console.log("Page - 001 : View Original Pdf Add Article pdf is present ")
  });

  var ark = element(<Locator>by.className('articleBrowser-articleTitle'))
  ark.getText().then(function (Text: String) {
    expect('3 PAG').toEqual(Text.toString());
    console.log("this is the 1st title Articles is present1 ")
    ark.click();
  });

}

/**
 * 
 * @param blobId click on view Original Pdf 
 */
function original(blobId) {

  var originalpdf = element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/table/tbody/tr/td[2]/table/tbody/tr/td/div/div/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr/td/div/div/div[4]/div/div[1]/div/div/table[1]/tbody/tr/td[1]/table/tbody/tr/td/div/a'));
  originalpdf.click();
  browser.driver.sleep(5000);

  browser.getAllWindowHandles().then(function (handles) {
    browser.switchTo().window(handles[1]);
    browser.getCurrentUrl().then(function (text: string) {
      expect(text.toString()).toBe(browser.params.baseUrl + 'DownloadBlob?blobId=' + blobId + '-1-null-application/pdf');
      console.log("---View Original PDF opened--- ")
      browser.driver.sleep(5000);
      browser.driver.close();
      browser.switchTo().window(handles[0]);
      browser.driver.sleep(5000);
      console.log("---Article pannel is opened--- ")
    });
  });
}

/**
 * click on add article for adding new Article
 * @param ochiello add new ochiello
 * @param title add new title
 * @param subtitle add new subtitle
 * @param author add new author
 * @param content add new content 
 * @param articleCount when article is created check add new article is added or not 
 */
function addArticle(ochiello, title, subtitle, author, content, articleCount) {
  var addArticle = element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/table/tbody/tr/td[2]/table/tbody/tr/td/div/div/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr/td/div/div/div[4]/div/div[1]/div/div/table[1]/tbody/tr/td[2]/table/tbody/tr/td[2]/div'));
  addArticle.click();
  browser.driver.sleep(5000);

  var newart = element(<Locator>by.xpath('/html/body/div[3]/div/table/tbody/tr[1]/td/table/tbody/tr/td/div'))
  newart.getText().then(function (Text: String) {
    expect('Add new Article :').toEqual(Text.toString());
    console.log("Add new article pannel is open")
    browser.driver.sleep(1000);

    element(<Locator>by.xpath('/html/body/div[3]/div/table/tbody/tr[2]/td/table/tbody/tr/td/table/tbody/tr[2]/td[2]/input'))
      .sendKeys(ochiello);
    console.log("Ochiello is added sucessfully")
    browser.driver.sleep(1000);

    element(<Locator>by.xpath('/html/body/div[3]/div/table/tbody/tr[2]/td/table/tbody/tr/td/table/tbody/tr[3]/td[2]/input'))
      .sendKeys(title);
    console.log("title is added sucessfully")
    browser.driver.sleep(1000);

    element(<Locator>by.xpath('/html/body/div[3]/div/table/tbody/tr[2]/td/table/tbody/tr/td/table/tbody/tr[4]/td[2]/input'))
      .sendKeys(subtitle);
    console.log("Subtitle is added sucessfully")
    browser.driver.sleep(1000);

    element(<Locator>by.xpath('/html/body/div[3]/div/table/tbody/tr[2]/td/table/tbody/tr/td/table/tbody/tr[5]/td[2]/input'))
      .sendKeys(author);
    console.log("author is added sucessfully")
    browser.driver.sleep(1000);

    element(<Locator>by.xpath('/html/body/div[3]/div/table/tbody/tr[2]/td/table/tbody/tr/td/table/tbody/tr[6]/td[2]/textarea'))
      .sendKeys(content);
    console.log("Content is added sucessfully")
    browser.driver.sleep(1000);

    element(<Locator>by.xpath('/html/body/div[3]/div/table/tbody/tr[2]/td/table/tbody/tr/td/table/tbody/tr[7]/td[2]/select'))
      .$('[value="Snippet"]').click()
    browser.driver.sleep(1000);

    element(<Locator>by.xpath('/html/body/div[3]/div/table/tbody/tr[3]/td/div/button[2]')).click();

    element(<Locator>by.xpath('/html/body/div[3]/div/table/tbody/tr[3]/td/div/button[1]')).click();

    var pdf = element(<Locator>by.className('articleBrowser-pageNumberAndAddArticlePanel'))
    pdf.getText().then(function (Text: String) {
      expect('Page - 001 : View Original Pdf\nAdd Article').toEqual(Text.toString());
      console.log("Page - 001 : View Original Pdf Add Article pdf is present ")
      browser.driver.sleep(5000);
      console.log("-----article added sucessfully-----")

      var articleList = element.all(<Locator>by.className('articleBrowser-articleTitleVP'));
      articleList.count().then(function (count) {
        console.log("Article list count===============>" + count);
        expect(count).toEqual(articleCount);
      });
    });
  });
}

/**
 *  click on Pdf to view the pdf and back button to back the article panel 
 */
function firstPdf() {
  element(<Locator>by.className('articleBrowser-articleTitle')).click();
  var pdf = element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/table/tbody/tr/td[2]/table/tbody/tr/td/div/div/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr/td/div/div/div[2]/div/div/div/table/tbody/tr/td[1]/table/tbody/tr/td[1]/img'));
  pdf.click()
  console.log('====Here is the 1st PDF=====')
  browser.driver.sleep(2000);

  var pdfback = element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/table/tbody/tr/td[2]/table/tbody/tr/td/div/div/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr/td/div/div/div[4]/div/table[2]/tbody/tr[1]/td/button'));
  pdfback.click()
  browser.driver.sleep(3000);

  var pdf = element(<Locator>by.className('articleBrowser-pageNumberAndAddArticlePanel'))
  pdf.getText().then(function (Text: String) {
    expect('Page - 001 : View Original Pdf\nAdd Article').toEqual(Text.toString());
    console.log("Back button is working... ")
    browser.driver.sleep(3000);
  });
}

/**
 * @param nextArticle click on next button to view the next article 
 * @param previewArticle click on Preview button to view the Preview article 
 */
function nextButton(nextArticle, previewArticle) {

  var nextTitle = element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/table/tbody/tr/td[2]/table/tbody/tr/td/div/div/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr/td/div/div/div[2]/div/div/div/table/tbody/tr/td[2]/table/tbody/tr/td[2]/button'));
  nextTitle.click()
  browser.driver.sleep(3000);

  var ark = element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/table/tbody/tr/td[2]/table/tbody/tr/td/div/div/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr/td/div/div/div[2]/div/div/div/div[1]/div[2]'))
  ark.getText().then(function (Text: String) {
    expect(nextArticle).toEqual(Text.toString());
    console.log("Next 2 nd Articles is present on same page")
    browser.driver.sleep(3000);
  });

  var pdfPreview = element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/table/tbody/tr/td[2]/table/tbody/tr/td/div/div/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr/td/div/div/div[2]/div/div/div/table/tbody/tr/td[2]/table/tbody/tr/td[1]/button'));
  pdfPreview.click()
  console.log('====Here is the 1st PDF Preview=====')
  browser.driver.sleep(5000);

  var ark = element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/table/tbody/tr/td[2]/table/tbody/tr/td/div/div/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr/td/div/div/div[2]/div/div/div/div[1]/div[2]'))
  ark.getText().then(function (Text: String) {
    expect(previewArticle).toEqual(Text.toString());
    console.log("Preview 1st Articles is present on same page")
    browser.driver.sleep(3000);
  });
}

/**
 * @param blobId click on original pdf to view the pdf
 */
function originalPdf(blobId) {

  var originalpdf = element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/table/tbody/tr/td[2]/table/tbody/tr/td/div/div/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr/td/div/div/div[2]/div/div/div/table/tbody/tr/td[1]/table/tbody/tr/td[3]/button'));
  originalpdf.click();
  browser.driver.sleep(3000);

  browser.getAllWindowHandles().then(function (handles) {
    browser.switchTo().window(handles[1]);
    browser.getCurrentUrl().then(function (text: string) {
      expect(text.toString()).toBe(browser.params.baseUrl + 'DownloadBlob?blobId=' + blobId + '-1-null-application/pdf');
      console.log("---Original PDF opened--- ")
      browser.driver.sleep(5000);
      browser.driver.close();
      browser.switchTo().window(handles[0]);
      browser.driver.sleep(5000);
      console.log("---Article pannel is opened--- ")
    });
  });
}

/**
 * @param articleGuid click on highlighted Pdfs it opens on next tab
 *  when its open it check pdf are open or not then it switch on article pannel
 */
function HighlightedPdf(articleGuid) {
  var Highlightedpdf = element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/table/tbody/tr/td[2]/table/tbody/tr/td/div/div/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr/td/div/div/div[2]/div/div/div/table/tbody/tr/td[1]/table/tbody/tr/td[4]/button'));
  Highlightedpdf.click();
  browser.driver.sleep(3000);

  browser.getAllWindowHandles().then(function (handles) {
    browser.switchTo().window(handles[1]);
    browser.getCurrentUrl().then(function (text: string) {
      expect(text.toString()).toBe(browser.params.baseUrl + 'ari/XtrapolaSpace/eXtrapolaApp/eXtrapola/' + 'fetchHighlightedPdf?ResponseType=TEXT_FILE&articleGuid=' + articleGuid);
      console.log("---Highlighted PDF opened--- ")
      browser.driver.sleep(5000);
      browser.driver.close();
      browser.switchTo().window(handles[0]);
      browser.driver.sleep(5000);
      console.log("---Article pannel is opened--- ")
    });
  });
}

/**
 * @param articleGuid click on Cropped Pdfs it opens on next tab
 *  when its open it check pdf are open or not then it switch on article pannel
 */
function CroppedPdf(articleGuid) {
  var Croppedpdf = element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/table/tbody/tr/td[2]/table/tbody/tr/td/div/div/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr/td/div/div/div[2]/div/div/div/table/tbody/tr/td[1]/table/tbody/tr/td[5]/button'));
  Croppedpdf.click();
  browser.driver.sleep(2000);

  browser.getAllWindowHandles().then(function (handles) {
    browser.switchTo().window(handles[1]);
    browser.getCurrentUrl().then(function (text: string) {
      expect(text.toString()).toBe(browser.params.baseUrl + 'ari/XtrapolaSpace/eXtrapolaApp/eXtrapola/' + 'fetchCroppedPdf?ResponseType=TEXT_FILE&articleGuid=' + articleGuid);
      console.log("---Cropped PDF opened--- ")
      browser.driver.sleep(3000);
      browser.driver.close();
      browser.switchTo().window(handles[0]);
      browser.driver.sleep(3000);
      console.log("---Article pannel is opened--- ")
    });
  });
}

/**
 * for deleting the article
 * @param title enter which article you want to delete
 * @param indexList enter its indexList number
 * @param articleCount when article is deleted count the all article for checking given article is deleted or not
 */
function deleteArticle(title, indexList, articleCount) {
  var pagelist = element.all(<Locator>by.className('articleBrowser-articleTitleVP'));
  expect(pagelist.get(indexList).getText()).toBe(title);
  console.log(title + "<------------------");
  var selectArticle = pagelist.get(indexList);
  selectArticle.getText().then(function (text: String) {
    console.log(text.toString() + "----------------------");
  });
  selectArticle.click();
  console.log(selectArticle + "----------------------");
  browser.driver.sleep(3000)

  selectArticle.element(<Locator>by.className("articleBrowser-deleteArticleBtn")).click();
  browser.driver.sleep(3000)

  var articleList = element.all(<Locator>by.className('articleBrowser-articleTitleVP'));
  articleList.count().then(function (count) {
    console.log("Article list count===============>" + count);
    expect(count).toEqual(articleCount);
  });

}

module.exports = new totalArticles();