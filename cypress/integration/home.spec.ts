/// <reference types="Cypress" />

context('Open the home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/home');
  });

  it('can see the title', () => {
    cy.contains('Skwad');

  });

  it('can see a current song', () => {
    cy.contains('Now playing');

  });

  it('shows buttons to control the current song', () => {
    cy.get('#currentTrackUp');
    cy.get('#currentTrackDown').click();

  });

  it('can see a list of songs', () => {
    cy.contains('Next up');

  });

  it('shows buttons to control the upcoming songs', () => {
    cy.get('#nextTrackUp');
    cy.get('#nextTrackDown').first().click();

  });

  it('shows a button for adding more tracks', () => {
    cy.get('#addTrack').click();
  });

});
