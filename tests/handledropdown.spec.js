const {test, expect} = require('@playwright/test')

test('Test to handle dropdown', async function({page}){

await page.goto("https://www.globalsqa.com/demo-site/select-dropdown-menu/")

// await page.locator("(//select)[1]").selectOption({label:'Albania'})

// await page.waitForTimeout(2000)

// await page.locator("//div[@class='information closable']/following-sibling::p/select").selectOption({index: 4})

// await page.waitForTimeout(2000)

let element = await page.$("//div[@class='information closable']/following-sibling::p/select")
let allElement = await element.$$("option")

let dropdownstatus=false

for(let i=0 ;i<allElement.length;i++)
{           
  let arrayOfElement =  allElement[i]
  let value = await arrayOfElement.textContent()
  
  console.log("Each value from the dropdown "+value)

  if(value.includes("India"))
  {
    dropdownstatus=true 
    break
  }

}

expect(dropdownstatus).toBeTruthy()

})