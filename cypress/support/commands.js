// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('checkExist', (comp) => {
    cy.get(comp).should('exist');
});

Cypress.Commands.add('getElement', (element, contain) => {
    cy.get(element).contains(contain);
});

Cypress.Commands.add('inputInfo', (comp, info) => {
    cy.get(comp).type(info);
});

Cypress.Commands.add('checkUrl', (url) => {
    cy.url().should('include', url);
});

Cypress.Commands.add('registerUser', () => {
    cy.get('[for="id_gender1"]').click();
    cy.get('[data-qa="password"]').type('123123123');
    cy.get('[data-qa="days"]').select('20');
    cy.get('[data-qa="months"]').select('July');
    cy.get('[data-qa="years"]').select('1999');
    cy.get('[name="newsletter"]').check();
    cy.get('[name="optin"]').check();

    cy.get('[data-qa="first_name"]').type('Jeff');
    cy.get('[data-qa="last_name"]').type('Beff');
    cy.get('[data-qa="company"]').type('Omozon');
    cy.get('[data-qa="address"]').type('America st. 44');
    cy.get('[data-qa="address2"]').type('Bravo st. 12');
    cy.get('[data-qa="country"]').select('United States');
    cy.get('[data-qa="state"]').type('Texas');
    cy.get('[data-qa="city"]').type('Dallas');
    cy.get('[data-qa="zipcode"]').type('54878');
    cy.get('[data-qa="mobile_number"]').type('+444578632');
    cy.get('[data-qa="create-account"]').click();
});