import locators from '../pageElements/locators';

class General {
  openApp() {
    cy.visit('/').as('open site');
  }
  sectionSelection(section) {
    if (section === 'Home') {
      cy.get(locators.GENERAL.homeBtn).should('exist', 'be.visible').click();
      cy.url().should('eq', 'https://elysian.com.br/#home')
    }
    if (section === 'About') {
      cy.get(locators.GENERAL.aboutBtn).should('exist', 'be.visible').click();
      cy.url().should('eq', 'https://elysian.com.br/#about')
    }
    if (section === 'Contact') {
      cy.get(locators.GENERAL.contactBtn).should('exist', 'be.visible').click();
      cy.url().should('eq', 'https://elysian.com.br/#contact')
    }
  }
}

export default new General();