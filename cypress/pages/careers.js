
class CareersPage {
    /**
     * All locators and helper functions for the Careers page
     */

    // Locators
    getSDETRoleLink() {
        return this.targetIframe().find('a[ns-qa="Software Development Engineer in Test - SDET"]')
    }

    getApplyButton() {
        return this.targetIframe().find('div[ns-qa="applyBtn"]')
    }

    getContinueButton() {
        return this.targetIframe().find('button[ns-qa="continueBtn"]')
    }

    getGenderSelection() {
        return this.targetIframe().find('#male')
    }

    getEthnicitySelection() {
        return this.targetIframe().find('#race-2')
    }

    getVeteranSelection() {
        return this.targetIframe().find('#not-identify')
    }

    getDisabilitySelection() {
        return this.targetIframe().find('#not_disability')
    }

    getDisabilityNameInput() {
        return this.targetIframe().find('input[ns-qa="yourName"]')
    }

    getDisabilityDateInput() {
        return this.targetIframe().find('input[ns-qa="todayDate"]')
    }

    getApplicationFirstNameInput() {
        return this.targetIframe().find('#firstName')
    }

    getApplicationLastNameInput() {
        return this.targetIframe().find('#lastName')
    }

    getApplicationSubmitButton() {
        return this.targetIframe().find('button[ns-qa="submitBtn"]')
    }

    // Helper functions
    targetIframe() {
        cy.get('#gnewtonIframe').then($iframe => {
            const $body = $iframe.contents().find('body')
            cy.wrap($body).as('iframeBody')
          })
          
        return cy.get('@iframeBody')
    }

}

export default new CareersPage()
