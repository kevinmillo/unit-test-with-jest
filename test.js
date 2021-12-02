const { sum, fromEuroToDollar, fromDollartoYen, fromYentoPound } = require('./app.js');
test("adds 14 + 9 to equal 23", () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.2 dollars", function(){
    // importo la funcion desde app.js
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(1)).toBe(1.2); //1 euro son 1.2 dolares, entonces 1 euros deberian ser = (1 * 1.2)
});

test("1.2 dollars should be 127.90 yen", function(){
    // importo la funcion desde app.js
    //hago mi comparacion (la prueba)
    expect(fromDollartoYen(1.20)).toBe(127.90); //1.20 dollar son 127.90 yen, entonces 1.20 dollar deberian ser = (1.20 * 127.90)
});

test("127.90 yen should be 0.8 pound", function(){
    // importo la funcion desde app.js
    // hago mi comparacion (la prueba)
    expect(fromYentoPound(127.90)).toBe(0.8); //127.90 yen son 0.8 pound, entonces 127.90 yen deberian ser = (127.90 * 0.8)
});

