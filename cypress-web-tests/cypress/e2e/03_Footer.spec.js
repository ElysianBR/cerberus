import cy from '../support/pages/general.js'
import footer from '../support/pages/footer.js'

describe.skip('Footer Page', () => {
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
        it.skip('Access Mail', () => {
            footer.accessSocial('Mail')
        });
        it('Access Whats', () => {
            footer.accessSocial('Whats')
        });
    });
});