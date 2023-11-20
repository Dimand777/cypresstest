/// <reference types="Cypress" />
 
describe.only('Handling child windows', () => 
{
 
it('Should handle child window',() => {
 
//Check boxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

//альтернатива как кликнуть на невидимый элемент
//cy.get('div.mouse-hover-content').invoke('show')
//cy.contains('Top').click()




cy.contains('Top').click({force:true})
cy.url().should('include', 'top')
 
 
 
}  )
 
 
 
}  )