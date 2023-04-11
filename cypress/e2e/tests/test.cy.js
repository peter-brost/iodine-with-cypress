import CareersPage from "../../pages/careers"
import IndexPage from "../../pages/index"
import Header from "../../pages/components/header"
import careers from "../../pages/careers"

const faker = require('faker');
const moment = require('moment');


describe('Iodine Software Apply Flow Tests', () => {
    /** 
     * All Ioodine Software application flow tests
     */
    before(() => {
        IndexPage.visit()
    })

    it('Required fields test', () => {
        /** 
         * A negative edge test that verifies that all required fields must be filled out
         */
        const firstName = faker.name.firstName()
        const lastName = faker.name.lastName()
        const formattedDate = moment().format('YYYY-MM-DD')
        // Header.goToCareersPage()
        // CareersPage.applyToSDETRole(firstName, lastName)
        // assert that warning message pops-up here

        cy.wait(2000)
        Header.getCompanyButton().realHover()
        cy.wait(2000)
        Header.getCareersButton().invoke('removeAttr', 'target').click()
        cy.wait(2000)
        CareersPage.getSDETRoleLink().click()
        cy.wait(2000)
        CareersPage.getApplyButton().click()
        cy.wait(2000)
        CareersPage.getContinueButton().click()
        cy.wait(2000)
        CareersPage.getGenderSelection().click()
        cy.wait(2000)
        CareersPage.getEthnicitySelection().click()
        cy.wait(2000)
        CareersPage.getContinueButton().click()
        cy.wait(2000)
        CareersPage.getVeteranSelection().click()
        cy.wait(2000)
        CareersPage.getContinueButton().click()
        cy.wait(2000)
        CareersPage.getDisabilitySelection().click()
        cy.wait(2000)
        CareersPage.getDisabilityNameInput().type(`${firstName} ${lastName}`)
        cy.wait(2000)
        CareersPage.getDisabilityDateInput().type(formattedDate)
        cy.wait(2000)
        CareersPage.getContinueButton().click()
        cy.wait(2000)
        CareersPage.getApplicationFirstNameInput().type(firstName)
        CareersPage.getApplicationLastNameInput().type(lastName)
        CareersPage.getApplicationSubmitButton().click()

    })




})