describe('Sample Actions', () => {
  it('visit site true', () => {
    // Googleに訪問
    cy.visit('https://www.google.com/');

    // Googleという文字を検索
    cy.contains("Googlesss").should('not.exist');
  })

  it('visit site true2', () => {
    cy.visit('https://example.cypress.io')
  })
})
