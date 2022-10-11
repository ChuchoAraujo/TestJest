//////////////////////////////EJERCICIO TEST////////////////////////////////////////////////

// STEP 1 - DECLARAR VARIABLES
const { sum , fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js')


// STEP 2 - TEST
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23)});
 
test("5 euros deberian ser 6 dolares", () => expect(fromEuroToDollar(5)).toBe(6))

test("4 dolares deberian ser 426 yenes" , () => expect(fromDollarToYen(4)).toBe(426))

test("500 yenes deberian ser 3 libras", () => expect(fromYenToPound(500)).toBe(3))




















/*
const { fromEuroToDollar } = require('./app.js');

test("1 euro debe ser igual a 1.2 dollars", () => {
    let result = fromEuroToDollar(1)
    expect(result).toBe(1.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
});


const { fromDollarToYen } = require('./app.js');

test("1.2 dollae debe ser igual a 127.9 yenes", () => {
    // importo la funcion desde app.js
    let result = fromDollarToYen(1)
    // hago mi comparacion (la prueba)
    expect(result).toBe(127.9); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
});


const { fromYenToPound } = require('./app.js');

test("153.48 euro debe ser igual a .8 dollars", () => {
    // importo la funcion desde app.js
    let result = fromYenToPound(153.48)
    // hago mi comparacion (la prueba)
    expect(result).toBe(122.784); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
});
*/