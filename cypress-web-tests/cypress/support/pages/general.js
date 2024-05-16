import locators from '../pageElements/locators';

class General {
  openApp() {
    cy.visit('/').as('open site');
  }
}

export default new General();