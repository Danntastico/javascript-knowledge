//0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ....
function fibonacci1(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fibonacci1(n - 1) + fibonacci1(n - 2);
}

function functionalFibo(n) {
  function loop(n, prev, current) {
    return n === 0 ? prev : loop(n - 1, current, prev + current);
  }
  loop(n, 0, 1);
}
function fib(n) {
  function loop(n, prev, cur) {
    if (n == 0) {
      return prev;
    } else {
      loop(n - 1, cur, prev + cur);
    }
  }
  loop(n, 0, 1);
}

function fibo(n) {
  if (n === 1) {
    return [0, 1];
  } else {
    let s = fibo(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
}
//console.log(fibonacci1(6));
console.log(fibo(9));
