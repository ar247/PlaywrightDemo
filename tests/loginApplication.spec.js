const { test, expect } = require('@playwright/test');
const LoginPage = require('../Pages/loginPage'); // Import the LoginPage class
const credentials = require('../Test Data/credentials.json')
const HomePage    =  require('../Pages/homePage')
const {loginToApplication,logoutFromApplciation} = require('../Utlities/utlities')

test('Successful login with valid credentials', async ({ page }) => {

    const validUser = credentials.Validcredentials[0];  // Get valid credentials from JSON
    await loginToApplication(page,validUser,true)   // Call the login method

    await logoutFromApplciation(page)          //logout from application

});

test('Unsuccessful login with invalid credentials', async ({ page }) => {

    const invalidUser = credentials.InvalidCredential[0];  // Get invalid credentials from JSON
    await loginToApplication(page, invalidUser,false);  // Call the login method
});