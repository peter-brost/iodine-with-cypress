
class CareersPage {
    /**
     * All locators and helper functions for the Careers page
     */

    // Locators
    get gnewtonIframe() {
        return '#gnewtonIframe'
    }

    get sdetRoleLink() {
        return 'a[ns-qa="Software Development Engineer in Test - SDET"]'
    }

    get applyButton() {
        return 'div[ns-qa="applyBtn"]'
    }

    get continueButton() {
        return 'button[ns-qa="continueBtn"]'
    }

    get genderSelection() {
        return '#male'
    }

    get ethnicitySelection() {
        return '#race-2'
    }

    get veteranSelection() {
        return '#not-identify'
    }

    get disabilitySelection() {
        return '#not_disability'
    }

    get disabilityNameInput() {
        return 'input[ns-qa="yourName"]'
    }

    get disabilityDateInput() {
        return 'input[ns-qa="todayDate"]'
    }

    get applicationFirstNameInput() {
        return '#firstName'
    }

    get applicationLastNameInput() {
        return '#lastName'
    }

    get applicationEmailInput() {
        return 'input[ns-qa="emailField"]'
    }

    get applicationSubmitButton() {
        return 'button[ns-qa="submitBtn"]'
    }

    // Helper functions

    waitForAndGetNewIframe() {
        cy.wait(2000)
        cy.get(this.gnewtonIframe).as('gnewtonIframe').should('be.visible')
        cy.get('@gnewtonIframe').iframe().as('iframeBody')
    }

    selectSDETRole() {
        this.waitForAndGetNewIframe()
        cy.get('@iframeBody').find(this.sdetRoleLink).click()
    }

    selectApplyButton() {
        this.waitForAndGetNewIframe()
        cy.get('@iframeBody').find(this.applyButton).click()
    }

    selectContinueButton() {
        this.waitForAndGetNewIframe()
        cy.get('@iframeBody').find(this.continueButton).click()
    }

    selectDemographics() {
        this.waitForAndGetNewIframe()
        cy.get('@iframeBody').find(this.genderSelection).click()
        cy.get('@iframeBody').find(this.ethnicitySelection).click()
        cy.get('@iframeBody').find(this.continueButton).click()
    }

    selectVeteranStatus() {
        this.waitForAndGetNewIframe()
        cy.get('@iframeBody').find(this.veteranSelection).click()
        cy.get('@iframeBody').find(this.continueButton).click()
    }

    selectDisabilityStatus(firstName, lastName, formattedDate) {
        this.waitForAndGetNewIframe()
        cy.get('@iframeBody').find(this.disabilitySelection).click()
        cy.get('@iframeBody').find(this.disabilityNameInput).type(`${firstName} ${lastName}`)
        cy.get('@iframeBody').find(this.disabilityDateInput).type(formattedDate)
        cy.get('@iframeBody').find(this.continueButton).click()
    }

    inputApplicationDetails(firstName, lastName) {
        this.waitForAndGetNewIframe()
        cy.get('@iframeBody').find(this.applicationFirstNameInput).type(firstName)
        cy.get('@iframeBody').find(this.applicationLastNameInput).type(lastName)
        // Ideally this would be expanded to take in arguments for every single field on the application form
        cy.get('@iframeBody').find(this.applicationSubmitButton).click()
    }

    applyToSDETRole(firstName, lastName, formattedDate) {
        this.selectSDETRole()
        this.selectApplyButton()
        this.selectContinueButton()
        this.selectDemographics()
        this.selectVeteranStatus()
        this.selectDisabilityStatus(firstName, lastName, formattedDate)
        this.inputApplicationDetails(firstName, lastName)
    }

    getIframedEmailElement() {
        // A small helper method to make verifying the error message on the email input field easier
        cy.get('@gnewtonIframe').iframe().as('iframeBody')
        return cy.get('@iframeBody').find(this.applicationEmailInput)
    }
}

export default CareersPage
