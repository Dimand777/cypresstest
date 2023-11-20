describe('My Second Test Suite', function() {
    before(function() {
        // root-level hook
        cy.fixture("example").then(function(data) {
            this.data = data;
        });
    });

    it('My firstTest case', function() {
        cy.visit('https://www.rahulshettyacademy.com/angularpractice/');
        cy.get(':nth-child(1) > .form-control').type(this.data.name);
        cy.get('select').select(this.data.gender);
        cy.get(':nth-child(4) > .ng-untouched').should('have.value', this.data.name);

        // Check minimum length and attribute value
        cy.get('input[name="name"]:nth-child(2)').should('have.attr', 'minlength', '2');
        cy.get("#inlineRadio3").should('be.disabled');

        // Visit another page
        cy.visit('https://www.rahulshettyacademy.com/angularpractice/shop');

        // Loop through product names and call custom command
        this.data.productName.forEach(function(element) {
            console.log(element);
            cy.selectProduct(element);
        });
    });
});
