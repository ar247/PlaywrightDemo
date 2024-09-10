const {test, expect} = require('@playwright/test')

test('handle iframe', async ({page})=>{

   await page.goto("https://www.hyrtutorials.com/p/frames-practice.html")

  const iframe =  await page.frameLocator("//iframe[@id ='frm1']")

  await iframe.locator("li[class='hub-home'] a").click()

  await  page.pause()

})