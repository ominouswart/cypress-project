const pageUrl = "https://www.automationexercise.com";

describe("user register", () => {
  beforeEach(() => {
    cy.visit(pageUrl);
    cy.checkExist('header');
    cy.checkExist('section');
    cy.getElement('a', 'Signup / Login').click();
  });

  it('successfully registers a new user', () => {

    cy.checkExist('.signup-form h2');

    cy.inputInfo('[data-qa="signup-name"]', 'Jeff');
    cy.inputInfo('[data-qa="signup-email"]', 'jeff4@amazon.com');
    cy.get('[data-qa="signup-button"]').click();

    cy.getElement('.title b', 'Enter Account Information').should('exist');
    cy.registerUser();

    cy.getElement('[data-qa="account-created"]', 'Account Created!').should('exist');
    cy.get('[data-qa="continue-button"]').click();

    cy.getElement('a', 'Logged in as Jeff').should('exist');

    cy.getElement('a', 'Delete Account').click();

    cy.getElement('b', 'Account Deleted!').should('exist');
    cy.get('[data-qa="continue-button"]').click();
  });

  it('doesnt allow registering with existing email', () => {
    cy.checkExist('.signup-form h2');

    cy.inputInfo('[data-qa="signup-name"]', 'Jeff');
    cy.inputInfo('[data-qa="signup-email"]', 'jeff@amazon.com');
    cy.get('[data-qa="signup-button"]').click();

    cy.getElement('.title b', 'Enter Account Information').should('exist');
    cy.registerUser();

    cy.getElement('[data-qa="account-created"]', 'Account Created!').should('exist');
    cy.get('[data-qa="continue-button"]').click();

    cy.getElement('a', 'Logged in as Jeff').should('exist');
    cy.getElement('a', 'Logout').click();

    cy.checkExist('body');
    cy.getElement('a', 'Signup / Login').click();
    cy.checkExist('.signup-form h2');

    cy.inputInfo('[data-qa="signup-name"]', 'Jeff');
    cy.inputInfo('[data-qa="signup-email"]', 'jeff@amazon.com');
    cy.get('[data-qa="signup-button"]').click();
    cy.getElement('p', 'Email Address already exist!').should('exist');
  });

  it('allows logging in with an existing account', () => {
    cy.getElement('.login-form', 'Login to your account').should('exist');
    cy.inputInfo('[data-qa="login-email"]', 'jeff@amazon.com');
    cy.inputInfo('[data-qa="login-password"]', '123123123');
    cy.get('[data-qa="login-button"]').click();

    cy.getElement('a', 'Logged in as Jeff').should('exist');

    cy.getElement('a', 'Delete Account').click();
    cy.getElement('b', 'Account Deleted!').should('exist');
    cy.get('[data-qa="continue-button"]').click();
  });
});
