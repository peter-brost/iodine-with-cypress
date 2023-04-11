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

        // Verifies that a form validation message is displayed when the email field is empty
        careersPage.getIframedEmailElement().then(($input) => {
            const validationMessage = $input[0].validationMessage
            expect(validationMessage).to.equal('Please fill out this field.')
          })
    })
})
