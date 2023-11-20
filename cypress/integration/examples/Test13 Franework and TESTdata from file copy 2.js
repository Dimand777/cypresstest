describe('My Second Test suit', function() {
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
        cy.get(':nth-child(4) > .ng-untouched').should('have.value', this.data.name)

        //проверка минимального количества символов в строке. Проверка значения атрибута
        cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2');




    });
});
