const { expect } = require('@playwright/test');
const LoginPage = require('../Pages/loginPage')
const HomePage = require('../Pages/homePage')

async function loginToApplication(page, credentials,isValid =true) 
{
    
    const loginPage = new LoginPage(page);  // Instantiate LoginPage
    await page.goto('https://freelance-learn-automation.vercel.app/login');
    await loginPage.LoginToApplication(credentials)

    if (isValid) 
    {
        // For valid credentials, verify the URL after successful login
        await expect(page).toHaveURL('https://freelance-learn-automation.vercel.app/'); 
    }
    else 
    {
        // For invalid credentials, check that the error message is displayed
        await expect(page.locator('.header')).toBeVisible(); 
    }
    
}

async function logoutFromApplciation(page) 
{
    const  homepage = new HomePage(page) 
    homepage.logoutFromApplication()    
    await expect(page.locator('.header')).toBeVisible(); 
    
}

module.exports = {loginToApplication,logoutFromApplciation}