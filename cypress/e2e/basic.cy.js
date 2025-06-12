describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  
  it('displays the correct resources text', () => {
    cy.get('h2')
      .contains('Everything about Monopoly Go Dice Links, Events, Tycoon Club & More');
  })
  
  it('renders the image', () => {
    cy.get('img')
      .should('be.visible')
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
  })
})
