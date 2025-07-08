// Cypress E2E test for Flash Cards feature

describe('Flash Cards', () => {
  beforeEach(() => {
    cy.visit('/english');
  });

  it('should display the first flash card english', () => {
    cy.wait(1000); // Wait for the flash card to load
    cy.get('[data-testid="flash-card-eng"]').should('be.visible');

  });
  
});
