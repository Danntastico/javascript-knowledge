//Currying
//transforma funciones en funciones unarias: Solo reciben un argumento

//forma 'normal
const suma = (a, b) => a + b;

//forma con currying
const sumaCurry = (a) => (b) => a + b;

const suma1 = sumaCurry(1);

console.log(suma1);
