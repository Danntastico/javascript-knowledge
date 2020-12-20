/**
 * Variables que no se declaran con
 * la palabra var, serán interpretadas
 * como variables globales!
 */

function broccoli() {
  x = "🥦";
}

broccoli();
console.log(x);

/* 
var x;
function broccoli() {
  x = "🥦";
}

broccoli();
console.log(x);
*/
