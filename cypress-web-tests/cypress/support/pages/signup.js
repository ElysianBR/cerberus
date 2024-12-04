import locators from '../pageElements/locators';
import { faker } from '@faker-js/faker';

class Signup {
  fillForm() {
    const randomName = faker.name.firstName(); // Gerando um nome aleatório
    const randomSurname = faker.name.lastName(); // Gerando um sobrenome aleatório
    const randomEmail = faker.internet.email(); // Gerando um email aleatório
    const randomPassword = faker.internet.password(9, true, /[A-Z]/, ''); // Gerando uma senha aleatória

    cy.get(locators.SIGNUP.inputName).type(randomName);
    cy.get(locators.SIGNUP.inputSurname).type(randomSurname);
    cy.get(locators.SIGNUP.inputEmail).type(randomEmail);
    cy.get(locators.SIGNUP.inputPassword).type(randomPassword);
    cy.get(locators.SIGNUP.createAccountBtn).click();
  }

  verifySuccess() {
    cy.url().should('eq', 'https://elysian.com.br/dashboard');
  }
}

export default new Signup(); 