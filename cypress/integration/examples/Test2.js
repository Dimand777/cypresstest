describe('My First Test Suite', function() {
  it('My First Test Case', function() {
    // Перейти на сайт
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

    // Найти элемент с классом 'search-keyword' и ввести текст 'ca'
    cy.get('.search-keyword').type('ca');

    // Добавить ожидание в 2000 миллисекунд (2 секунды)
    cy.wait(2000);

    // Проверить, что видимых элементов с классом 'product' равно 4
    cy.get('.product:visible').should('have.length', 4);

    // Найти элемент с классом 'products' и задать ему псевдоним 'productlocator'
    cy.get('.products').as('productlocator');

    // Найти элемент с алиасом 'productlocator', затем найти дочерние элементы с классом 'product' и проверить их количество (4)
    cy.get('@productlocator').find('.product').should('have.length', 4);

    // Найти элемент с алиасом 'productlocator', затем найти второй дочерний элемент с классом 'product' и найти в нем элемент с текстом 'ADD TO CART' и кликнуть по нему
    cy.get('@productlocator').find('.product').eq(1).contains('ADD TO CART').click();
console.log('sf')
    // Найти элемент с алиасом 'productlocator', затем для каждого дочернего элемента с классом 'product'
    cy.get('@productlocator').find('.product').each(($el, index, $list) => {
      // Найти элемент с классом 'product-name', получить текст и сохранить в переменную 'textVeg'
      const textVeg = $el.find('h4.product-name').text();

      // Проверить, содержит ли текст в переменной 'textVeg' строку 'Cashews'
      if (textVeg.includes('Cashews')) {
        // Если текст содержит 'Cashews', кликнуть на кнопку внутри текущего элемента
        cy.wrap($el).find('button').click();
      }
    });
cy.get('.brand').should('have.text','GREENKART')
    // Найти элемент с классом 'brand', затем получить его текст и вывести в лог
    cy.get('.brand').then(function (logoelement) {
      cy.log(logoelement.text());
    });
  });
});



    //const logo=cy.get('.brand')       
  

  //cy.wrap($el).find('button').click();
 //const cy.get('.brand')  
  //   cy.log(logo.text()