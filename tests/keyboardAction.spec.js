const {test,expect} = require('@playwright/test')

test('This is the keyboard Action', async function({page}){

    await page.goto("https://www.google.com/")

    await page.locator("#APjFqb").fill("Anant Raj")

    //await page.keyboard.press('ArrowLeft')

    await page.keyboard.down('Shift')

    for(let i=0 ; i<3;i++){
        
        await page.keyboard.press('ArrowLeft')
    }

    await page.keyboard.up('Shift')

    await page.keyboard.press('Delete')

    await page.keyboard.press('Enter')

    await page.waitForTimeout(4000)


})