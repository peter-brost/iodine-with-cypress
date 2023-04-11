
class Header {
    /**
     * All locators and helper functions for the Header component
     * 
     * Note: components are distinct from pages in that they are pieces of a page that can be reused
     */

    // Locators
    get mainHeader() {
        return '.header-nav-cont'
    }

    get companyButton() {
        return '#menu-item-4050'
    }

    get careersButton() {
        return 'a[href*="careers-2"]'
    }

    // Helper methods
    navigateToCareersPage() {
        cy.get(this.mainHeader).as('mainHeader')
        cy.get('@mainHeader').find(this.companyButton).as('companyButton')
        cy.get('@companyButton').find(this.careersButton).as('careersButton')

        cy.get('@companyButton').realHover()
        cy.get('@careersButton').invoke('removeAttr', 'target').click()
    }
}

export default Header
