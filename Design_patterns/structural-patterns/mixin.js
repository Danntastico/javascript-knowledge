//Agregar nuevas funcionalidades a una clase ya existente sin alterarla

let mixin = {
  saludar() {
    console.log(`Hola ${this.nombre}`);
  },
  despedir() {
    console.log(`Adios ${this.nombre}`);
  },
};

//Clase

class Usuario {
  constructor(nombre) {
    this.nombre = nombre;
  }
}

Object.assign(Usuario.prototype, mixin);

const usuario = new Usuario('Chanchito feliz');
usuario.saludar();
