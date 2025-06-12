describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays the resources text', () => {
    cy.get('h2')
      .should('be.visible') // Ensure it's visible
      .contains('This is a bare-bones Hugo project that has everything you need to quickly deploy it to Netlify', { timeout: 10000 });
  });

  it('renders the image', () => {
    cy.get('img')
      .should('be.visible')
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
  });
});
