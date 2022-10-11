///////////////////////////EJERCICIO TEST JEST//////////////////////////////////////////////////

// DECLARAR VARIABLES
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// STEP 1 - FUNCION DOLARES//
const sum = (a,b) =>  a + b
console.log(sum(7,3))

// STEP 2 - FUNCION DOLARES//
const fromEuroToDollar = (cantidadEuros) => Math.round(cantidadEuros * oneEuroIs.USD)
console.log(fromEuroToDollar(5))

// STEP 3 - FUNCION YENES//
const fromDollarToYen = (cantidadDollars) => Math.round((cantidadDollars / oneEuroIs.USD) * (oneEuroIs.JPY))
console.log(fromDollarToYen(4))

//STEP 4 - FUNCION LIBRAS//
const fromYenToPound = (cantidadYen) =>  Math.round((cantidadYen / oneEuroIs.JPY) * (oneEuroIs.GBP))
console.log(fromYenToPound(500))

//STEP 5 - EXPORTAR FUNCIONES
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };




































/*

// one euro is:
let oneEuroIs = {
  "JPY": 127.9, // japan yen
  "USD": 1.2, // us dollar
  "GBP": 0.8, // british pound
}


const fromEuroToDollar = (euro) => {
  // convertimos el valor a dolares
  let dolars = euro * oneEuroIs.USD;
  // retornamos el valor
  return dolars;
}

const fromDollarToYen = (dolars) => {
  // convertimos el valor a yenes
  let yens = dolars * oneEuroIs.JPY;
  // retornamos el valor
  return yens;
}

const fromYenToPound = (yens) => {
  // convertimos el valor a libras
  let pounds = yens * oneEuroIs.GBP;
  // retornamos el valor
  return pounds;
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };

*/