import locators from '../pageElements/locators';

class Footer {
  accessSocial(button) {
    if (button === 'Instagram') {
      cy.get(locators.FOOTER.InstagramBtn).should('exist', 'be.visible').click();
      cy.url().should('contains', 'https://www.instagram.com/elysianbrazil/')
    }
    if (button === 'Linkedin') {
      cy.get(locators.FOOTER.linkedinBtn).should('exist', 'be.visible').click();
      cy.url().should('contains', 'https://br.linkedin.com/company/elysianbr')
    }
    if (button === 'Mail') {
      cy.get(locators.FOOTER.mailBtn).should('exist', 'be.visible').click();
    }
  }
}

export default new Footer();