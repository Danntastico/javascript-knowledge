/**
 * Hoisting para variables
 *
 * OJO: el interprete lleva al inicio del scope
 * la DECLARACIÓN de la variable
 * NO la asignación
 */

console.log(greet);
var greet = "Hi from the outside!👽";
console.log(greet);
