//ES6 Sugar Syntax
class MyClass {
  constructor(p1, p2) {
    this.property = p1;
    this.property2 = p2;
  }

  method() {
    //This is a prototype method
  }
}

const newInstance = new MyClass('prop1', 'prop2');

//With prototypes

function MyClass2(p1, p2) {
  this.p1 = p1;
  this.p2 = p2;
}

MyClass2.prototype.method = function () {
  return this.p1;
};

const secondInstance = new MyClass2('Prop1', 'Prop2');

function Book(name, author, year) {
  this.name = name;
  this.author = author;
  this.year = year;
}

Book.prototype.toString = function () {
  return `${this.name}, written by ${this.author} at ${this.year}`;
};

let nineteen84 = new Book('1984', 'Orwell', 1945);
console.log(nineteen84.toString());
