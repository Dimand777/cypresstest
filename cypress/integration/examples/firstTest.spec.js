/// <reference types="Cypress" />

describe('My First Test suit 2', function()
// {
// it('By ID', function() {
// cy.visit('https://facebook.com')
// cy.get('#email')
// });

// it('By Class', function() {
//     cy.visit('https://docs.cypress.io/api/table-of-contents')
//     cy.get('.searchBox_ZlJk button[type="button"]').click()
//     cy.get('.osano-cm-denyAll').click()
//     cy.wait(5000); // Подождать 5 секунд (на ваше усмотрение)
//     cy.get('input.DocSearch-Input').should('be.visible');
    
// });


// it('By Tag Value', function() {
//     cy.visit('https://facebook.com')
//     cy.wait(1000); 
//     cy.get('button[data-cookiebanner="accept_button"]').click();
//     cy.wait(1000); 
//     cy.get('[data-testid="royal_pass"]').type('hui'); // Используйте более точный селектор для паро
//     cy.get
// });

// it('By different Tags Value', function() {
//     cy.visit('https://facebook.com')
//     cy.wait(1000); 
//     cy.get('button[data-cookiebanner="accept_button"]').click();
//     cy.wait(1000); 
//     cy.get('[data-testid="royal_pass"]').type('hui'); // Используйте более точный селектор для паро
//     cy.get('[data-testid="open-registration-form-button"][rel="async"]').click();
// });


// it('By different Types', function() {
//     cy.visit('https://docs.cypress.io/api/table-of-contents')
//     cy.wait(1000); 
//     cy.get('button[type="button"][aria-label="Close"]').click();
 
// });


// it.only('By contains name', function() {
//     cy.visit('https://learn.cypress.io')// Ищем любой элемент* который начинается с what
//     cy.get('*[class^="what"]')
    
 
// });



// })






//GET and FIND

{
it('By ID', function() {
cy.visit('https://www.swedbank.ee/private/credit/loans/home?language=EST')
cy.get('article').find('ul').eq(1) //eq - индекс элемента в списке
});


it('By ID', function() {
    cy.visit('https://www.swedbank.ee/private/credit/loans/home?language=EST')
    cy.get('article').find('ui-buttonbar').find('.ui-buttonbar__left').click //eq - индекс элемента в списке

    });

it('By ID', function() {
    cy.viewport(1800, 700)
    cy.visit('https://docs.cypress.io/api/commands/eq')
    cy.get('.table-of-contents').find('ul').eq(0).find('li').find('a').eq(0).click() //eq - индекс элемента в списке
    
    });


    it.only('By ID', function() {
        cy.viewport(1800, 700)
        cy.visit('https://docs.cypress.io/api/commands/eq')
        cy.get('.tableOfContents_bqdL').find('ul').eq(0).find('li').find('a').eq(0).click() //eq - индекс элемента в списке
        
        });

    
});  

/// hei new comment