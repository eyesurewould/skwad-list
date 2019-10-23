/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/home');
  });

  it('can open a home page', () => {
    cy.contains('Skwad');
  });
});
