
class CareersPage {
    /**
     * All locators and helper functions for the Careers page
     */

    // Locators
    sdetRoleLink() {
        return cy.get('a[ns-qa="Software Development Engineer in Test - SDET"]')
    }

    applyButton() {
        return cy.get('div[ns-qa="applyBtn"]')
    }

    continueButton() {
        return cy.get('button[ns-qa="continueBtn"]')
    }

}

export default new CareersPage()
