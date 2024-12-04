import General from '../support/pages/general.js';
import Signup from '../support/pages/signup.js';
import { faker } from '@faker-js/faker';

describe('Teste de Cadastro', () => {
  beforeEach(() => {
    General.openSignup();
  });

  it('Deve cadastrar um novo usuário com sucesso', () => {
    Signup.fillForm();
    // Signup.verifySuccess();
  });
}); 