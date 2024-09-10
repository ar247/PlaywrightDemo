class LoginPage
{
    constructor(page)
    {
        this.page = page
        this.username = '#email1'
        this.password ='#password1'
        this.signInButton='.submit-btn'
    }

    async LoginToApplication(credentials)
    {
        await this.page.fill(this.username,credentials.username )
        await this.page.fill(this.password, credentials.password )
        await this.page.click(this.signInButton)
    }
    
}

module.exports = LoginPage;