describe('Visit Site', () => {
  it('visit site', () => {
    // localhost:3000を訪れる
    cy.visit('http://localhost:3000');

    // id=niceniceの要素に、Nice!という文字列が入っているかを確認
    cy.get("#nicenice").should("contain", 'Nice!')
  })
})
