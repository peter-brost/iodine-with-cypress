
class IndexPage {
    /**
     * All locators and helper functions for the Index page
     */

    visit() {
        cy.visit('https://iodinesoftware.com/')
    }

    // Locators
    getCompanyButton() {
        return cy.get('.header-nav-cont #menu-item-4050')
    }

}

export default new IndexPage()
