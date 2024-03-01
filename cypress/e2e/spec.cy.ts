describe('My First Test', () => {
  it('Visits the application index.', () => {
    cy.visit("http://localhost:5173/")
    cy.get('button').click().click()

    cy.get('button').should('have.text', 'count is 2').and('have.length', 1)

    cy.request('https://mock.presstime.cn/mock/64c0c504b9e270cc51cc571d/example/ydt/read_voltage')
  })
})
