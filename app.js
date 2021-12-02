const sum = (a, b) => {
    return a + b
}
console.log(sum(7, 3))


const fromEuroToDollar = function (valueInEuro) {
    let valueInDollar = valueInEuro * 1.2;
    return parseFloat(valueInDollar.toFixed(1));
}

const fromDollartoYen = function (valueInDollar) {
    let valueInYen = valueInDollar * 127.90 / 1.2 ;
    return parseFloat(valueInYen.toFixed(1));
}

const fromYentoPound = function (valueInYen) {
    let valueInPound = valueInYen * 0.8 / 127.9;
    return parseFloat(valueInPound.toFixed(1)) ;
}
module.exports = { sum, fromEuroToDollar, fromDollartoYen, fromYentoPound }
