import locators from '../pageElements/locators';

class Header {
  sectionSelection(section) {
    if (section === 'Home') {
      cy.get(locators.HEADER.homeBtn).should('exist', 'be.visible').click();
      cy.url().should('eq', 'https://elysian.com.br/#home')
    }
    if (section === 'About') {
      cy.get(locators.HEADER.aboutBtn).should('exist', 'be.visible').click();
      cy.url().should('eq', 'https://elysian.com.br/#about')
    }
    if (section === 'Contact') {
      cy.get(locators.HEADER.contactBtn).should('exist', 'be.visible').click();
      cy.url().should('eq', 'https://elysian.com.br/#contact')
    }
    if (section === 'Login') {
      cy.get(locators.HEADER.loginBtn).should('exist', 'be.visible').click();
      cy.url().should('eq', 'https://elysian.com.br/login')
    }
    if (section === 'Plan') {
      cy.get(locators.HEADER.planBtn).should('exist', 'be.visible').click();
      cy.url().should('eq', 'https://elysian.com.br/#plans')
    }
  }
}

export default new Header();