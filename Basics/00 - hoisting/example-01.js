/**
 *
 * HOISTING!
 * Declaracion de variables se asignan en
 * memoria en tiempo de compilación.
 * El interprete "eleva" las declaraciones al inicio de su
 * ambito (scope)
 *
 */
function holaMundo() {
  console.log("Hola mundo"); //Hola mundo
}

holaMundo();
/**
 * El interprete eleva la declaración de la función
 * a la parte superior del scope, es el equivalente a decir
 *
 * function holaMundo() {
 *    console.log("Hola mundo!")
 * }
 *
 * holaMundo();
 */
