
class Header {
    /**
     * All locators and helper functions for the Header component
     */

    // Locators
    getCompanyButton() {
        return cy.get('.header-nav-cont #menu-item-4050')
    }

    getCareersButton() {
        return this.getCompanyButton().find('a[href*="careers-2"]')
    }

}

export default new Header()
