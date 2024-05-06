import cy from '../support/pages/general'

describe('Login', () => {
    beforeEach(() => {
        cy.openApp()
    });
    describe('Section pages', () => {
        it('01 - Access Home Page', () => {
            cy.sectionSelection('Home')
        });
        it('02 - Access About Page', () => {
            cy.sectionSelection('About')
        });
        it('03 - Access Contact Page', () => {
            cy.sectionSelection('Contact')
        });
    });
});