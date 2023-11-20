/// <reference types="Cypress" />

describe('My First Test Suite', function() {

    it('My FirstTest case', function() {

        cy.visit("https://rahulshettyacademy.com/angularAppdemo/");

        // Интерцептировать GET-запрос и изменить URL
        cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
            (req) => {
                req.url = "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra";

                // Продолжить выполнение запроса и проверить статус-код
                req.continue((res) => {
                    expect(res.statusCode).to.equal(403);
                });
            }
        ).as("dummyUrl");

        cy.get("button[class='btn btn-primary']").click();
        cy.wait('@dummyUrl');
    });
});
