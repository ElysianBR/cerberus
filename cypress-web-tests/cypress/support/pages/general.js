import locators from '../pageElements/locators';

class General {
  openApp() {
    cy.visit('/').as('open site');
  }
  openSignup() {
    cy.visit('/signup').as('open site');
  }
  openLogin() {
    cy.visit('/login').as('open site');
  }
}

export default new General();