const{test, expect}  = require('@playwright/test')

test('Verify the text message on invlaid login', async function({page})
{

   await page.goto("https://practicetestautomation.com/practice-test-login/")

   await page.locator("#username").fill("student")

   await page.locator("#password").fill("Password1235667")

   await page.locator("//button[@id='submit']").click()

   const error_message = await page.locator("//div[@class ='show']").textContent()

   console.log('the error message is '+ error_message)

// expect(error_message.includes('invalid')).toBeTruthy()

   expect(error_message === 'Your password is invalid!').toBeTruthy()





})