// Cypress E2E test for Bedtime Book feature

describe('Bedtime Book', () => {
  beforeEach(() => {
    cy.visit('/bed-time-book');
  });

  it('should display the bedtime book cover', () => {
    cy.get('[data-testid="bedtime-book-cover"]').should('be.visible');
  });

  it('should navigate to the next page', () => {
    cy.get('[data-testid="next-page-btn"]').click();
    cy.get('[data-testid="bedtime-book-page"]').should('be.visible');
  });

  it('should display all illustrations', () => {
    cy.get('[data-testid^="bedtime-illustration-"]').should('have.length.greaterThan', 0);
  });
});
