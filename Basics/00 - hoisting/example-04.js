function logMe() {
  console.log("The value of x inside:", x);
}

console.log("The value of x outside:", x);
var x = 10;
logMe();

/**
 * Equivalent with hoisting: 
var x;
function logMe() {
  console.log("The value of x inside:", x);
}

console.log("The value of x outside:", x);
x = 10;
logMe();
*/
