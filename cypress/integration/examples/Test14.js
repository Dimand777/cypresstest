describe('Dropdown test', () => {
  it('should select an option from the dropdown', () => {
    cy.visit('https://www.w3schools.com/css/css_dropdowns.asp')
    cy.get('.dropdown').trigger('mouseover')
    cy.get('.dropdown-content').should('be.visible')
    cy.get('.dropdown-content p').contains('Hello World!').first().click()
    cy.url().should('include', '#')
  })
})
