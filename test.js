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


