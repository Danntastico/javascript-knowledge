//nos olvidamos de los argumentos de una funcion
//Ordenar mejor nuestro codigo
//Realizar composicion

const f = (cb) => {
  //Muchas lineas de codigo despues
  const resultado = computacionPesada();
  cb(resultado);
};

//Se ve mucho cuando se trabaja con express
//pasar las funciones extensas corresponde a una mala practica
app.get('/users', (req, res) => {});

//mejor:

const handleResult = (res) => {
  //handling a result
};
f('/users', handleResult);
