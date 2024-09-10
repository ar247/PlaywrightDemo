const {test,expect} = require('@playwright/test')

test('handle Alert' , async ({ page}) =>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    page.on('dialog', async (dilogueWindow) =>{
       expect(dilogueWindow.type()).toContain('alert')
       expect(dilogueWindow.message()).toContain('I am a JS Alert')
       await dilogueWindow.accept()

    })
    await page.locator("//button[text()='Click for JS Alert']").click()
    await page.waitForTimeout(6000)
})
test('handle Confirm ', async ({page}) =>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
   
    
        page.on('dialog', async (dialogWindow) => {
        expect(dialogWindow.type()).toContain("confirm")
        expect(dialogWindow.message()).toContain("I am a JS Confirm")
        await dialogWindow.accept('Success')


    })
    await page.locator("//button[text()='Click for JS Confirm']").click()
    await page.waitForTimeout(6000)
})

test("JS Prompt", async ({page}) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
   
 
    page.on('dialog', async(dialogWindow2) =>{
        expect(dialogWindow2.type()).toContain("prompt")
        expect(dialogWindow2.message()).toContain("I am a JS prompt")
        await dialogWindow2.accept("I am closing the pop window")
    })

    await page.locator("//button[@onclick='jsPrompt()']").click()
    await page.waitForTimeout(6000)
   
})