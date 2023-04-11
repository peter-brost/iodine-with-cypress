
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

    applyToSDETRole(firstName, lastName, formattedDate) {
        cy.wait(1000)
        this.getSDETRoleLink().click()
        cy.wait(1000)
        this.getApplyButton().click()
        cy.wait(1000)
        this.getContinueButton().click()
        cy.wait(1000)
        this.getGenderSelection().click()
        this.getEthnicitySelection().click()
        this.getContinueButton().click()
        cy.wait(1000)
        this.getVeteranSelection().click()
        this.getContinueButton().click()
        cy.wait(1000)
        this.getDisabilitySelection().click()
        cy.wait(1000)
        this.getDisabilityNameInput().type(`${firstName} ${lastName}`)
        this.getDisabilityDateInput().type(formattedDate)
        this.getContinueButton().click()
        cy.wait(1000)
        this.getApplicationFirstNameInput().type(firstName)
        this.getApplicationLastNameInput().type(lastName)
        this.getApplicationSubmitButton().click()
    }
}

export default new CareersPage()
