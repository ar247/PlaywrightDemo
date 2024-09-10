const {test,expect} = require('@playwright/test')

test('verify the tile of google' ,async function({page}){

   await page.goto('https://google.com')

    const  title =  await page.title()
    console.log('the title of the page is ' + title)
    await expect(page).toHaveTitle("Google")

})