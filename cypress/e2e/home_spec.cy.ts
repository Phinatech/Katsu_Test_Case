
describe('Home Page', () => {
  it('should load homepage and find text', () => {
    cy.visit('https://staging--katsu-web.netlify.app')

    // Replace this with a reliable element or text
    cy.contains('Katsu', { timeout: 10000 }).should('exist')
  })
})



