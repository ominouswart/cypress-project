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