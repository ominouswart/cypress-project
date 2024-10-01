const pageUrl = "https://www.automationexercise.com";

describe("user register", () => {
  beforeEach(() => {
    cy.visit(pageUrl);
    cy.checkExist('body');
    cy.getElement('a', 'Signup / Login').click();
  });

  it('successfully registers a new user', () => {

    cy.checkExist('.signup-form h2');

    cy.inputInfo('[data-qa="signup-name"]', 'Jeff');
    cy.inputInfo('[data-qa="signup-email"]', 'jeff@amazon.com');
    cy.get('[data-qa="signup-button"]').click();

    cy.getElement('.title b', 'Enter Account Information').should('exist');
    cy.get('[for="id_gender1"]').click();
    cy.inputInfo('[data-qa="password"]', '123123123');
    cy.get('[data-qa="days"]').select('20');
    cy.get('[data-qa="months"]').select('July');
    cy.get('[data-qa="years"]').select('1999');
    cy.get('[name="newsletter"]').check();
    cy.get('[name="optin"]').check();

    cy.inputInfo('[data-qa="first_name"]', 'Jeff');
    cy.inputInfo('[data-qa="last_name"]', 'Beff');
    cy.inputInfo('[data-qa="company"]', 'Omozon');
    cy.inputInfo('[data-qa="address"]', 'America st. 44');
    cy.inputInfo('[data-qa="address2"]', 'Bravo st. 12');
    cy.get('[data-qa="country"]').select('United States');
    cy.inputInfo('[data-qa="state"]', 'Texas');
    cy.inputInfo('[data-qa="city"]', 'Dallas');
    cy.inputInfo('[data-qa="zipcode"]', '54878');
    cy.inputInfo('[data-qa="mobile_number"]', '+444578632');
    cy.get('[data-qa="create-account"]').click();

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
    cy.get('[for="id_gender1"]').click();
    cy.inputInfo('[data-qa="password"]', '123123123');
    cy.get('[data-qa="days"]').select('20');
    cy.get('[data-qa="months"]').select('July');
    cy.get('[data-qa="years"]').select('1999');
    cy.get('[name="newsletter"]').check();
    cy.get('[name="optin"]').check();

    cy.inputInfo('[data-qa="first_name"]', 'Jeff');
    cy.inputInfo('[data-qa="last_name"]', 'Beff');
    cy.inputInfo('[data-qa="company"]', 'Omozon');
    cy.inputInfo('[data-qa="address"]', 'America st. 44');
    cy.inputInfo('[data-qa="address2"]', 'Bravo st. 12');
    cy.get('[data-qa="country"]').select('United States');
    cy.inputInfo('[data-qa="state"]', 'Texas');
    cy.inputInfo('[data-qa="city"]', 'Dallas');
    cy.inputInfo('[data-qa="zipcode"]', '54878');
    cy.inputInfo('[data-qa="mobile_number"]', '+444578632');
    cy.get('[data-qa="create-account"]').click();

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
});
