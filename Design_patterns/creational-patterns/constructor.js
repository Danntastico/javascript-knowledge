//This is just sugar syntax
//You can instantiate your objects with values or dependencies by passing into the constructor arguments.
class MyClass {
  constructor(p1) {
    this.propiedad = p1;
    this.metodo = () => {
      //This is a method
    };
  }
}

const instance = new MyClass('property one'); //Creating an instance of the class and passing a value to the constructor

//Classic way:

function Class2(p1) {
  this.prop = p1;
  this.met = () => {};
}
const instance2 = new Class2('property one');

function Avenger(name, power, team) {
  this.name = name;
  this.power = power;
  this.team = team;

  this.toString = () =>
    `${this.name} has the ability of ${this.power} and is part of team ${this.team}`;
}

var spiderMan = new Avenger('Spider man', 'spider sense', 'Iron Man');
