const  {test,expect} = require('@playwright/test')

test("handle multiple tabs in playwrite", async ({browser})=>{

      const context = await browser.newContext()
      const page    = await context.newPage()
      
      await page.goto("https://freelance-learn-automation.vercel.app/login")

                      const [newPage] = await Promise.all
                    (
                        [
                             context.waitForEvent("page"),
                           await page.locator("div[class='container-child'] a:nth-child(4) svg path").click()

                            
                        ]
                    )

        await newPage.waitForTimeout(3000)
        await newPage.locator(" input[id=':r6:']").fill('anant')
        await newPage.close()
 
})            