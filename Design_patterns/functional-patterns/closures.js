//Closures
//Funcionalidad de Javascript, no patron
//Permite reusar codigo

//1 entender cual es el alcance lexico, global y privado de las funciones
const y = 'lele';
const f = () => {
  const x = 'lala'; //x está definido dentro del *alcance lexico* de esta funcion
  console.log(x);
};

f();

console.log(y); //Se puede acceder a y porque está en el alcance global
//console.log(x); //No se puede acceder a x desde fuera!

//2. alcance privado

//Scope Publico
const a = 'lala';
const g = () => {
  //Scope Lexico
  const b = 'lele';
  //console.log(c); //No se puede acceder a C desde fuera del return!❌
  return () => {
    //Scope privado
    const c = 'lili'; //se define C en un scope privado
    console.log(a, b, c);
  };
};

g();
