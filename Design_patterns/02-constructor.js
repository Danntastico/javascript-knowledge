//To create specific types of objects

function Avenger(name, power, team) {
  this.name = name;
  this.power = power;
  this.team = team;

  this.toString = () =>
    `${this.name} has the ability of ${this.power} and is part of team ${this.team}`;
}

var spiderMan = new Avenger('Spider man', 'spider sense', 'Iron Man');

console.log(spiderMan.toString());

//With prototypes

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
