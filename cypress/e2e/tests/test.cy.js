import CareersPage from "../../pages/careers"
import IndexPage from "../../pages/index"
import Header from "../../pages/components/header"

const faker = require('faker')
const moment = require('moment')


describe('Iodine Software Job Application Tests', () => {
    /** 
     * All tests concerning Iodine Software job applications
     */
    const header = new Header()
    const indexPage = new IndexPage()
    const careersPage = new CareersPage()

    beforeEach(() => {
        indexPage.visit()
    })

    it('Required fields test', () => {
        /** 
         * A negative edge test that verifies that an application cannot be submitted if required fields are empty
         */
        const firstName = faker.name.firstName()
        const lastName = faker.name.lastName()
        const formattedDate = moment().format('YYYY-MM-DD')
        header.navigateToCareersPage()
        careersPage.applyToSDETRole(firstName, lastName, formattedDate)
        
        // cy.get('input:invalid').should('have.length', 1)
        // cy.get(CareersPage.getInvalidInput()).should('have.length', 1)
        // cy.get(CareersPage.getApplicationEmailInput()).then(($input) => {
        //     expect($input[0].validationMessage).to.eq('Please fill out this field.')
        // })

        // cy.get(CareersPage.getApplicationEmailInput()).then(($input) => {
        //     expect($input[0].validationMessage).to.include(
        //       `Please fill out this field.`
        //     )
        //   })

        // cy.get(CareersPage.getApplicationEmailInput()).then(($input) => {
        //     expect($input[0].validationMessage).to.eq('Please fill out this field.')
        //   })


        // cy.get('input[ns-qa="emailField"]:invalid')
        //     .invoke('prop', 'validationMessage')
        //     .should('equal', 'Please fill out this field.')

        // assert that warning message pops-up here
    })
})
