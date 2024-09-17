import cy from '../support/pages/general.js'
import header from '../support/pages/header.js'

describe('Header Page', () => {
    beforeEach(() => {
        cy.openApp()
    });
    describe('Header Sections', () => {
        it('Access Home Page', () => {
            header.sectionSelection('Home')
        });
        it('Access About Page', () => {
            header.sectionSelection('About')
        });
        it('Access Contact Page', () => {
            header.sectionSelection('Contact')
        });
        it('Access Plan Page', () => {
            header.sectionSelection('Plan')
        });
        it('Access Login Page', () => {
            header.sectionSelection('Login')
        });
    });
});