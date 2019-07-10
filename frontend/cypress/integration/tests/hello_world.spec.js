describe('Login Test', function() {
  it('logs in properly', function() {
   cy.visit("http://localhost:3001")

   cy.contains('Login').click()

   // Should be on a new URL which includes '/commands/actions'
   cy.url().should('include', '/login')

   cy.get('.username')
     .type('romy')
   cy.get('.password')
     .type('123')
   cy.get('.submit').click()

   cy.get('.beer-shelf')
  })
})