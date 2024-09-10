class HomePage
{
    constructor(page)
    {
        this.page = page
        this.menu = "img[alt='menu']"
        this.signOutOption = "button[class='nav-menu-item']"
        this.addbutton = "button[class='nav-menu-item']"
    }


    async logoutFromApplication(page)
    {   
        await this.page.waitForSelector(this.menu, { state: 'visible' })
        await this.page.click(this.menu)
        await this.page.waitForSelector(this.signOutOption, { state: 'visible' })
        await this.page.click(this.signOutOption)
    }
}
module.exports = HomePage