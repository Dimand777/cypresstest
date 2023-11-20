/// <reference types="Cypress" />

import 'cypress-iframe'
 
describe('Frame Test', function() 
{
 
it('Demo example',function() {
 


    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    cy.frameLoaded("#courses-iframe")
    
    cy.iframe().find("a[href*='mentorship']").eq(0).click()
    
    cy.wait(3000);
    
    cy.iframe().find("h1[class*='pricing-title']").should("have.length",2)

//cy.get("input[id='name']").type("test")

//cy.get("input[value*='radio']").eq(1).click()


})
 
 
})