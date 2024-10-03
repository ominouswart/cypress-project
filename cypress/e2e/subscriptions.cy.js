const pageUrl = "https://www.automationexercise.com";

describe("successful email subscriptions", () => {
  beforeEach(() => {
    cy.visit(pageUrl);
    cy.checkExist('header');
    cy.checkExist('section');
  });

  it('subscribes from home page', () => {
    cy.get('footer').scrollIntoView();
    cy.getElement('.single-widget', 'Subscription').should('exist');
    cy.get('input[type="email"]').type('beff@amazon.com');
    cy.get('button[type="submit"]').click();

    cy.getElement('.alert-success', 'You have been successfully subscribed!').should('exist');
  });

  it('subscribes from cart page', () => {
    cy.getElement('a', ' Cart').click({force: true});
    cy.get('footer').scrollIntoView();
    cy.getElement('.single-widget', 'Subscription').should('exist');
    cy.get('input[type="email"]').type('beff@amazon.com');
    cy.get('button[type="submit"]').click();

    cy.getElement('.alert-success', 'You have been successfully subscribed!').should('exist');
  });
});