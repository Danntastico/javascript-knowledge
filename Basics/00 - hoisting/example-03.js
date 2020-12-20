function fncExample() {
  var x = 14;
}

fncExample();
console.log(x); //ReferenceError: x is not defined

/**
 * Equivalent with hoisting:
function fncExample() {
    var x;
    x = 14;
}
 */
