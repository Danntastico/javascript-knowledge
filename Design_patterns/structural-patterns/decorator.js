//Tomar las instancias y va a ir agregando nuevas funcionalidades

class Macbook {
  constructor() {
    this.precio = 1000;
    this.pantalla = 11.6;
  }
}

const macbook = new Macbook();

macbook.agregarMemoria = function () {
  this.precio += 100;
};

macbook.agregarMemoria();

console.log(macbook.precio);

//Forma 2

class Macbook2 {
  precio() {
    return 1000;
  }
}
const memoria = (mac) => {
  const v = mac.precio();
  mac.precio = function () {
    return v + 100;
  };
};

const macbook2 = new Macbook2();
memoria(macbook2);
