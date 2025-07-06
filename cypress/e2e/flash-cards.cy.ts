// Cypress E2E test for Flash Cards feature

describe('Flash Cards', () => {
  beforeEach(() => {
    cy.visit('/flash-card');
  });

  it('should display the first flash card', () => {
    cy.get('[data-testid="flash-card"]').should('be.visible');
    cy.get('[data-testid="flash-card-letter"]').should('exist');
    cy.get('[data-testid="flash-card-word"]').should('exist');
  });

  it('should navigate to the next flash card', () => {
    cy.get('[data-testid="next-card-btn"]').click();
    cy.get('[data-testid="flash-card"]').should('be.visible');
  });

  it('should export flash cards as PDF', () => {
    cy.get('[data-testid="export-pdf-btn"]').click();
    // Optionally check for a download or a dialog
    cy.get('[data-testid="pdf-export-dialog"]').should('exist');
  });
});
