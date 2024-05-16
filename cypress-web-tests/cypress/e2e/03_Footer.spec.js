import cy from '../support/pages/general.js'
import footer from '../support/pages/footer.js'

describe('Header Page', () => {
    beforeEach(() => {
        cy.openApp()
    });
    describe('Footer Buttons - Social Media', () => {
        it('Access Instagram', () => {
            footer.accessSocial('Instagram')
        });
        it('Access LinkedIn', () => {
            footer.accessSocial('Linkedin')
        });
    });
});