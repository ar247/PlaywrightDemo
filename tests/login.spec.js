const {test,expect} = require('@playwright/test')
test.use({viewport:{width:1280,height:772}})

test('This is the login test', async function({page}){
   await page.goto("https://practicetestautomation.com/practice-test-login/")

   console.log(await page.viewportSize().width)

   console.log(await page.viewportSize().height)

   await page.locator("#username").fill("student")

   await page.locator("#password").fill("Password123")

   await page.locator("//button[@id='submit']").click()

   await page.waitForTimeout(9000)

   await expect(page).toHaveURL(/practicetestautomation.com/)

   await page.getByText("Log out").click()

   await expect(page).toHaveURL(/practice-test-login/)

   

})
