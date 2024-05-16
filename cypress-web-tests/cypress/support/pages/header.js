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
  }
}

export default new Header();