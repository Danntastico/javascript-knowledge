const users = [
  { edad: 12, nombre: 'Nicolas', appellido: 'Penia' },
  { edad: 18, nombre: 'Danilo', appellido: 'Fuentes' },
  { edad: 5, nombre: 'Ivan', appellido: 'Valenzuela' },
  { edad: 1, nombre: 'Camila', appellido: 'Linares' },
  { edad: 4, nombre: 'Daniela', appellido: 'Parra' },
];

//Esto ayuda a que el codigo sea mas utilizable construyendo pequeñas funciones
const 
const filter = (f) => (xs) => xs.filter(f);
const head = (xs) => xs[0];
const formateo = (x) => ({
  nombreCompleto: `${x.nombre} ${x.appellido}`,
  edad: x.edad,
});
const formato = (x) => `${x.nombreCompleto} tiene ${x.edad} año(s)`;


//crear una funcion llamada compose
const compose = (...fns) => (x) => fns.reduceRight((y, f) => f(y), x);
const pipe = (...fns) => (x) => fns.reduce((y, f) => f(y), x);
const trace = (x) => (y) => console.log(x, y);

const traerPrimerInfante = compose(
  formato,
  formateo,
  head,
  filter((x) => x.edad < 2)
);