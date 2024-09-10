const {test,expect} = require('@playwright/test')

test('wait for page to be loaded', async ({page})=> {
    await page.goto("https://freelance-learn-automation.vercel.app/login")

    await page.locator(".subLink").click()

    // await page.waitForLoadState('networkidle')

    const count = await page.locator("//input[@type='checkbox']").count()

    expect(count).toBe(9)



})