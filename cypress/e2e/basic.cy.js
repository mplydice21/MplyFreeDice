describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('displays the resources text', () => {
  cy.get('h2').then(($h2) => {
    console.log($h2.text()); // This will log the text content of the h2 to the console
    expect($h2.text()).to.include('This is a bare-bones Hugo project');
  });
});
  it('renders the image', () => {
    cy.get('img')
    .should('be.visible')
    .and(($img) => {
      expect($img[0].naturalWidth).to.be.greaterThan(0);
    })
  })
})
