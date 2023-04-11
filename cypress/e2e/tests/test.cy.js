import CareersPage from "../../pages/careers"
import IndexPage from "../../pages/index"
import Header from "../../pages/components/header"

const faker = require('faker');
const moment = require('moment');


describe('Iodine Software Job Application Tests', () => {
    /** 
     * All tests concerning Iodine Software job applications
     */
    before(() => {
        IndexPage.visit()
    })

    it('Required fields test', () => {
        /** 
         * A negative edge test that verifies that an application cannot be submitted if required fields are empty
         */
        const firstName = faker.name.firstName()
        const lastName = faker.name.lastName()
        const formattedDate = moment().format('YYYY-MM-DD')
        Header.navigateToCareersPage()
        CareersPage.applyToSDETRole(firstName, lastName, formattedDate)
        // assert that warning message pops-up here
    })
})
