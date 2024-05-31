describe('Video Player', () => {
  it('Should find the video player', () => {
    cy.visit('main.html'); // Assuming main.html is in the same directory
    cy.get('.flex').should('exist');
  });

  it('Should find the rewind button', () => {
    cy.visit('main.html'); // Assuming main.html is in the same directory
    cy.contains('« 10s').should('exist');
  });
});
