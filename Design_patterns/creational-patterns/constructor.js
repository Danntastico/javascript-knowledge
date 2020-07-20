//Esto es solo azucar sintaticta

// Crear objetos en base a una clase
//Uso de la palabra reservada new
// creación de instancia de objetos
// Copiar propiedades de un objeto en una instancia

//se pueden pasar dependencias o valores en el argumento  constructor -> (p1)
class MyClass {
  constructor(p1) {
    //Constructor, ejecuta metodo constructor
    this.propiedad = 1; //This hace referencia a la clase o instancia de la clase
    this.metodo = () => {
      //This is a methid
    };
  }
}

const instancia = new MyClass();

console.log(instancia);

//Metodo antiguo

function miClase() {
  this.prop = 1;
  this.met = () => {};
}
const instanciaOld = new miClase();
