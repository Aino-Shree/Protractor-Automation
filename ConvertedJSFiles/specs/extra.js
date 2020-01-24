/* // for comparing next url
 
 pdf.click();
  console.log("=====================")
  browser.driver.sleep(2000);
 // browser.wait(EC.urlContains("http://10.10.10.102:8080/Sources/#article"))
  browser.getCurrentUrl().then(function(Text:string){
    expect('http://10.10.10.102:8080/Sources/DownloadBlob?blobId=9708837393600-1-null-application/pdf').toEqual (Text.toString());
          console.log("====================+++++++++++++++++=")
  });

  */
/*
//click on  browserraw
var browseraw=element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/table/tbody/tr/td[2]/table/tbody/tr/td/div/div/table/tbody/tr[1]/td/table/tbody/tr/td[3]/div/div'));
browser.wait(EC.visibilityOf(browseraw));
browseraw.click()
browser.driver.sleep(5000);

//click on sole browserraw click on download
var down1=element(<Locator>by.xpath('//*[@id="download"]'));
browser.wait(EC.visibilityOf(down1));
down1.click()
browser.driver.sleep(1000);
 
*/
/*
// pdf and pdf preview expect conditions
   var pdf= element(<Locator>by.xpath('/html/body/table/tbody/tr/td/div/div[2]/div[2]/table/tbody/tr/td[2]/table/tbody/tr/td/div/div/table/tbody/tr[2]/td/div/div[1]/table/tbody/tr/td/div/div/div[4]/div/table[2]/tbody'))
   expect('=========sgsdgsgsgsres========').not.toBe('Page - 001 : View Original Pdf\nAdd Article');
   browser.driver.sleep(3000);
   console.log("this is the 1st pdf is present1 ")
   
    
  //expect('').toBe(''); //true

   // article pdfs are present or not expect statement for pdf click
  var pdf= element(<Locator>by.xpath('//*[@id="title"]/span'))
  pdf.getText().then(function(Text:String){
//expect(pdf.getAttribute('src')).toEqual('http://10.10.10.102:8080/Sources/DownloadBlob?blobId=9708837393600-1-null-application/pdf');
      expect('DownloadBlob').toEqual (Text.toString());
  //    expect(element(by.binding('http://10.10.10.102:8080/Sources/DownloadBlob?blobId=9708837393600-1-null-application/pdf')).getAttribute('src'))
  // .toMatch('http://10.10.10.102:8080/Sources/DownloadBlob?blobId=9708837393600-1-null-application/pdf');
      console.log("this is the 1st title Articles is present1 ")
      browser.driver.sleep(5000);
     });

// */
// var listofLink = element.all(<Locator>by.className('text'));
//                      listofLink.each(function(element){
//                         element.getText().then(function(link){
//                             console.log("In each loop");
//                             console.log("link is "+link);
//                              var linkString= link;
//                              if(!linkString.includes("http"))  {
//                                   return;
// expect(article.get(1).getText().toBe('i'))
//   {
//   //selecting publication name
// var xpth="//div[contains(text(),'"+ title +"')]";
// element(<Locator>by.xpath(xpth)).click();
// browser.driver.sleep(3000);
//   console.log(xpth+"this Articles is present")
// }
