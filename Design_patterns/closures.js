/**
 * Design pattern that allows data privacy
 * Everything in the inside has access to the data outside
 * Everything on the outer function is accessable  by the inner function
 */

//1 example1
function getSecret(secret) {
  return {
    get: () => secret,
  };
}
console.group('Example #1');
console.log(getSecret('Hola Mundo').get());
console.groupEnd('Example #1');
//Example #2

function closureExample(outerVariable) {
  return function (innerVariable) {
    console.log(`outer variable ${outerVariable}`);
    console.log(`inner variable: ${innerVariable}`);
  };
}
console.group('Example #2');
var myNewVariable = closureExample('Afuera');
myNewVariable('Adentro');
console.groupEnd();

//Example #3

function secretDatas(outerData) {
  let helloWorld = 'Hello world!';
  return {
    getOuterData: () => outerData,
    helloWorld,
  };
}

let valSecretDatas = secretDatas('Outer Data');
console.group('Example #3');
console.log(valSecretDatas);
console.log(valSecretDatas.getOuterData());
console.log(valSecretDatas.helloWorld);
console.groupEnd('');

//Example #4 lexical Scoping

let myKitchenAspera = () => {
  let sopita = 'Sancocho';
  function cookSopita() {
    console.log(sopita);
  }
  cookSopita();
};
console.group('Example #4');
myKitchenAspera();
console.groupEnd();

//Example #5 Sum

function myCalculator(x) {
  return function (y) {
    x + y;
  };
}
let sum = myCalculator(4);

console.group('Example #5');
console.log(sum());
console.groupEnd();
