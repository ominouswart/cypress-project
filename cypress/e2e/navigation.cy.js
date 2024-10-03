const pageUrl = "https://www.automationexercise.com";

describe("user navigation", () => {
  beforeEach(() => {
    cy.visit(pageUrl);
    cy.checkExist('header');
    cy.checkExist('section');
  });

  it('navigates to Test Cases page', () => {
    cy.getElement('a', 'Test Cases').click();
    cy.checkUrl('/test_cases');
    cy.getElement('a', 'Test Case 21').should('exist');
  });

  it('navigates to Category Products page', () => {
    cy.checkExist('.category-products');
    cy.getElement('.category-products', 'Women').click();
    cy.getElement('a', 'Dress').click();

    cy.getElement('.title', 'Women - Dress Products').should('exist');

    cy.getElement('.category-products', 'Men').click();
    cy.getElement('a', 'Tshirts').click();

    cy.getElement('.title', 'Men - Tshirts Products').should('exist');
  });
});