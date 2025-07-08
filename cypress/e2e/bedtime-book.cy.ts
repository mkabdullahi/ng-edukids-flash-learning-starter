// Cypress E2E test for Bedtime Book feature

describe('Bedtime Book', () => {
  beforeEach(() => {
    cy.visit('/bedtime');
  });

  it('should display the bedtime book cover', () => {
    cy.wait(1000); // Wait for the cover to load
    cy.get('[data-testid="bedtime-book-cover"]').should('be.visible');
  });

  it('should navigate to the next page', () => {
    cy.wait(1000); // Wait for the page to load
    cy.get('[data-testid="next-page-btn"]').click();// Check if the image is loaded
    cy.get('[data-testid="bedtime-book-page"]').should('be.visible');
  });
  it('should navigate to the previous page', () => {
    cy.wait(1000); // Wait for the page to load
    cy.get('[data-testid="next-page-btn"]').click(); // Go to next page first
    cy.get('[data-testid="previous-page-btn"]').click();
    cy.get('img[src*="assets/bedtime/"]').should('be.visible');
    });
});
