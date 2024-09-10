const {test, expect} = require("@playwright/test")

test.use({viewport:{width:1263,height:600}})

test("this is the test for mouse over", async function({page}){

    await page.goto("https://practice.expandtesting.com/hovers#google_vignette")

    await page.locator("//div[@class='col-12 text-center']/h4").scrollIntoViewIfNeeded()

    await page.locator("(//img[@alt='User Avatar'])[1]").hover({force:true})

    await page.locator("a[href='/users/1']").click()

    await page.waitForTimeout(5000)


})