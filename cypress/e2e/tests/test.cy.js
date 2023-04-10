import CareersPage from "../../pages/careers"
import IndexPage from "../../pages/index"
import Header from "../../pages/components/header"


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
        cy.wait(3000) // Remove this and add an implicit wait
        Header.getCompanyButton().realHover()
        cy.wait(3000) // Remove this and add an implicit wait
        Header.getCareersButton().click()
        cy.wait(3000) // Remove this and add an implicit wait
        CareersPage.sdetRoleLink.click()
        CareersPage.applyButton.click()
        CareersPage.applyButton.click()
        
    })




})