const pageUrl = "https://www.automationexercise.com";

describe("cart functionality", () => {
    beforeEach(() => {
        cy.visit(pageUrl);
        cy.checkExist('header');
        cy.checkExist('section');
        cy.getElement('a', 'Products').click();
    });

    it('should add products to cart', () => {
        cy.getElement('[data-product-id="1"]', 'Add to cart').click();
        cy.getElement('.close-modal', 'Continue Shopping').click();

        cy.getElement('[data-product-id="2"]', 'Add to cart').click();
        cy.getElement('a', 'View Cart').click();

        cy.getElement('a', 'Blue Top').should('exist');
        cy.getElement('a', 'Men Tshirt').should('exist');

        cy.get('tr#product-1 .cart_quantity button').should('have.text', '1');
        cy.get('tr#product-2 .cart_quantity button').should('have.text', '1');

        cy.get('tr#product-1 .cart_price p').should('contain', 'Rs. 500');
        cy.get('tr#product-2 .cart_price p').should('contain', 'Rs. 400');
    });

});