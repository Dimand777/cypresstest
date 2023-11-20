describe('My First Test suit', function()
{
it('My firstTest case', function() {
cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
cy.get('.search-keyword').type('ca')
cy.wait(2000)
cy.get('.product:visible').should('have.length',4)
//parent child
cy.get('.products').find('.product').should('have.length', 4)
cy.get('.products').find('.product').eq(2).contains('ADD TO CART')

})
})



// <reference types="Cypress" />

