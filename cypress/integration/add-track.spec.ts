
/// <reference types="Cypress" />

context('Open the Add Track page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/party/1/add');
  });

  it('can see the title', () => {
    cy.contains('Add Track');

  });

  it('can search for a song', () => {
    cy.contains('Search');
    cy.type('Smells Like Teen Spirit');
    cy.contains('Found');
  });

  it('shows a button for adding a track', () => {
    cy.get('#addTrack').first().click();
    cy.url().should('include', '/party/1');
  });

});
