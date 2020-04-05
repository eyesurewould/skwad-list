/// <reference types="Cypress" />

context('Open the example host page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/host/1');
  });

  it('can see the title', () => {
    cy.contains('Skwad');

  });

  it('can see a list of parties', () => {
    cy.contains('My Parties');

    // should assert that there is a list
  });


  it('can see a list of past parties', () => {
    cy.contains('Past Parties');

    // could assert that there is a list
  });

  it('shows buttons to create a new party', () => {
    cy.get('#createParty').click();
  });

});
