const{test,expect} = require('@playwright/test')

test('AutoSuggestion via loops', async ({page})=>{

    await page.goto("https://demo.automationtesting.in/AutoComplete.html")

    await page.waitForSelector("//div[@id='menucontainer']/preceding-sibling::div/div")

    await page.locator("//div[@id='menucontainer']/preceding-sibling::div/div").fill('RA')
})