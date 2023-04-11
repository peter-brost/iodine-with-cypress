
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
    selectSDETRole() {
        cy.wait(2000)
        cy.get(this.gnewtonIframe).as('gnewtonIframe').should('be.visible')
        cy.get('@gnewtonIframe').iframe().as('iframeBody')
        cy.get('@iframeBody').find(this.sdetRoleLink).click()
    }

    selectApplyButton() {
        cy.wait(2000)
        cy.get('@gnewtonIframe').iframe().as('updatedIframeBody')
        cy.get('@updatedIframeBody').find(this.applyButton).click()
    }

    selectContinueButton() {
        cy.wait(2000)
        cy.get('@gnewtonIframe').iframe().as('updatedIframeBody')
        cy.get('@updatedIframeBody').find(this.continueButton).click()
    }

    selectDemographics() {
        cy.wait(2000)
        cy.get('@gnewtonIframe').iframe().as('updatedIframeBody')
        cy.get('@updatedIframeBody').find(this.genderSelection).click()
        cy.get('@updatedIframeBody').find(this.ethnicitySelection).click()
        cy.get('@updatedIframeBody').find(this.continueButton).click()
    }

    selectVeteranStatus() {
        cy.wait(2000)
        cy.get('@gnewtonIframe').iframe().as('updatedIframeBody')
        cy.get('@updatedIframeBody').find(this.veteranSelection).click()
        cy.get('@updatedIframeBody').find(this.continueButton).click()
    }

    selectDisabilityStatus(firstName, lastName, formattedDate) {
        cy.wait(2000)
        cy.get('@gnewtonIframe').iframe().as('updatedIframeBody')
        cy.get('@updatedIframeBody').find(this.disabilitySelection).click()
        cy.get('@updatedIframeBody').find(this.disabilityNameInput).type(`${firstName} ${lastName}`)
        cy.get('@updatedIframeBody').find(this.disabilityDateInput).type(formattedDate)
        cy.get('@updatedIframeBody').find(this.continueButton).click()
    }

    inputApplicationDetails(firstName, lastName) {
        cy.wait(2000)
        cy.get('@gnewtonIframe').iframe().as('updatedIframeBody')
        cy.get('@updatedIframeBody').find(this.applicationFirstNameInput).type(firstName)
        cy.get('@updatedIframeBody').find(this.applicationLastNameInput).type(lastName)
        cy.get('@updatedIframeBody').find(this.applicationSubmitButton).click()
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
}

export default CareersPage
