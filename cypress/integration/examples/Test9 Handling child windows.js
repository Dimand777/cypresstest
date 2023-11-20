/// <reference types="Cypress" />
 
describe('Handling child windows', () => 
{
 
it('Should handle child window',() => {
 
//Check boxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.get('#opentab').invoke('removeAttr', 'target').click()


cy.origin("https://www.qaclickacademy.com", ()=>
{

    cy.get("#navbarSupportedContent a[href*='about.html']").click()
    cy.get(".mt-50 h2").should('contain','QAClick Academy')
})

 
 
 
 
 
 
 
 
 
}  )
 
 
 
}  )