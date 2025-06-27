/// <reference types="cypress" />

import { LoginPage } from '../Pages/Loginpages';

const loginPage = new LoginPage();

describe('Home Page', () => {
  beforeEach(async() => {  
    cy.visit('/')
    });

    it('should login with valid credentials', () => {
      loginPage.validLogin();

    })

    it('should login with invalid credentials', () => {
      loginPage.invalidLogin();

    })
})