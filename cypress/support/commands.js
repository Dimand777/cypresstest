Cypress.Commands.add("selectProduct", (productName) => {
    cy.get('h4.card-title').each(($e1, index, $list) => {
        if ($e1.text().includes(productName)) {
            cy.get('button.btn.btn-info').eq(index).click()
        }
    })
})

Cypress.Commands.add("LoginAPI", () => {
    cy.request("POST", "https://rahulshettyacademy.com/api/ecom/auth/login", {
        "userEmail": "Dimidov27@mail.ru",
        "userPassword": "Code123!"
    }).then(function(response) {
        expect(response.status).to.eq(200)
        Cypress.env('token', response.body.token);
    })
})
