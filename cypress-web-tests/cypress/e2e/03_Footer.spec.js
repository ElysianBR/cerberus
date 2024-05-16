import cy from '../support/pages/general.js'
import footer from '../support/pages/footer.js'

describe('Header Page', () => {
    beforeEach(() => {
        cy.openApp()
    });
    describe('Footer Buttons - Social Media', () => {
        it('Access Home Page', () => {
            footer.accessSocial('Instagram')
        });
        it('Access About Page', () => {
            footer.accessSocial('Linkedin')
        });
    });
});