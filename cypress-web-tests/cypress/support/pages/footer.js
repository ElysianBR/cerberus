import locators from '../pageElements/locators';

class Footer {
  accessSocial(button) {
    if (button === 'Instagram') {
      cy.get(locators.FOOTER.InstagramBtn).should('exist', 'be.visible').click();
      cy.wait(1000)
      cy.url().should('contains', 'https://www.instagram.com')
    }
    if (button === 'Linkedin') {
      cy.get(locators.FOOTER.linkedinBtn).should('exist', 'be.visible').click();
      cy.wait(1000)
      cy.url().should('contains', 'linkedin.com/company/elysianbr')
    }
    if (button === 'Mail') {
      cy.get(locators.FOOTER.mailBtn).should('exist', 'be.visible').click();
    }
    if (button === 'Whats') {
      cy.get(locators.FOOTER.whatsBtn).should('exist', 'be.visible').click();
      cy.wait(1000)
      cy.url().should('contains', 'whatsapp.com')
    }
  }
}

export default new Footer();