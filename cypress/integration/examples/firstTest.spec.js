/// <reference types="Cypress" />


describe('My Test suit', function()
{

it('SHOULD', function() {
    cy.visit('https://www.swedbank.ee/private/credit/loans/home');
    cy.get('#total-income').type(5001)
    .should('have.value', 5001)
    .and('be.visible');
  });


  it('SHOULD', function() {
    cy.visit('https://www.rahulshettyacademy.com/angularpractice/');
    cy.get(':nth-child(1) > .form-control').type('5001')
    cy.get(':nth-child(4) > .ng-untouched')
    .should('have.value', 5001)
    .and('be.visible');
  });

  it.only('EXPECT', function() {
    cy.visit('https://www.rahulshettyacademy.com/angularpractice/');
    cy.get('[name="email"]').type('test')
    cy.get(':nth-child(4) > .ng-untouched')
    .should('have.value', 5001)
    .and('be.visible');
  });



  //cy.visit('https://www.rahulshettyacademy.com/angularpractice/shop');






});  









