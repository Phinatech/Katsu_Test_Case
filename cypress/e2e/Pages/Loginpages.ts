//import {LoginPage} from './Loginpages';

//const loginpage = new LoginPage;

export class LoginPage {
    //locators
    private emailAdress = '#\\:r0\\:'
    private passwordField = '#\\:r1\\:'
    private loginButton = '.h-12'
    //selectors for the email field
    getEmailField() {
        return cy.get(this.emailAdress);
    }
    typeEmail(emailAddress: string = 'tobifagbohungbe+katsu@gmail.com') {
        this.getEmailField().type(emailAddress);
    }

      getpasswordField() {
        return cy.get(this.passwordField);
    }

        typePassword(emailAddress: string = 'Judy200deo20@') {
        this.getpasswordField().type(this.passwordField);
    }

       getloginbutton() {
        return cy.get(this.loginButton);
    }
clickLoginButton() {
        this.getloginbutton().click();}
    //implementing the login method
    validLogin(){
        this.typeEmail();
        this.typePassword();
        this.clickLoginButton();
    }

    invalidLogin(){
        this.typeEmail();
        this.typePassword();
        this.clickLoginButton();
        cy.contains('Invalid account information').should('be.visible');
    }
}