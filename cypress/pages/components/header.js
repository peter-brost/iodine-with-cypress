
class Header {
    /**
     * All locators and helper functions for the Header component
     */

    // Locators
    getMainHeader() {
        return cy.get('.header-nav-cont')
    }

    getCompanyButton() {
        return this.getMainHeader().find('#menu-item-4050')
    }

    getCareersButton() {
        return this.getCompanyButton().find('a[href*="careers-2"]')
    }

    // Helper methods
    navigateToCareersPage() {
        this.getCompanyButton().realHover()
        this.getCareersButton().invoke('removeAttr', 'target').click()
    }
}

export default new Header()
