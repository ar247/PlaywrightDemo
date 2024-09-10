const {test,expect} = require('@playwright/test')

test('this is file upload test case', async function({page}){

    await page.goto("https://demo.automationtesting.in/FileUpload.html")

    await page.locator("#input-4").setInputFiles("D://Invite List.xlsx")
    
    await page.locator("button[title='Upload selected files']").scrollIntoViewIfNeeded()

    await page.waitForTimeout(3000)

    await page.locator("button[title='Upload selected files']").click()


})