# JAVASCRIPT 💛

## General Info

On this project, I'm going to write some examples of a huge list of JS core concepts like

- design patterns
- closures
- curious cases
- ...More

## Technologies

This project is created with:

- Javascript

## 1. Design Patterns!

### Creational Pattern

This is the basis of a number of other DPs, the concept is very simple: **ways of creating objects**.

In javascript we have common ways to create objects:

```javascript
let newObj = {};
```

```javascript
let newObj = Object.create(null);
```

```javascript
let newObj = new Object();
```

This ways, combined with the ways to assign values (dot syntax, square bracket syntax, Object.defineProperty, Object.defineProperties) will be such an important and remainder in the next design patterns that we will be exploring.

```javascript
//Dot syntax
newObject.val1 = 'Pizza🍕';
var pizza = newObject.val1; //Pizza!

//Square bracket
newObject['val2'] = 'Hot Dog🌭';
var hotdog = newObject['val2'];
```

### Constructor Pattern

Ways to **implement** instances.

- Basics!

```javascript
function Avenger(name, power, team) {
  this.name = name;
  this.power = power;
  this.team = team;

  this.toString = () =>
    `${this.name} has the ability of ${this.power} and is part of team ${this.team}`;
}

var spiderMan = new Avenger('Spider man', 'spider sense', 'Iron Man');
```

- With Prototypes!

```javascript
function Book(name, author, year) {
  this.name = name;
  this.author = author;
  this.year = year;
}

Book.prototype.toString = function () {
  return `${this.name}, written by ${this.author} at ${this.year}`;
};

let nineteen84 = new Book('1984', 'Orwell', 1945);
```

### Singleton Pattern

In general, singleton is implemented by creating a class with a method that creates an instance if does not exist. If there's an instance already created, return its reference. **Singleton restricts instantiation** of classes.

In Javascript, singleton are **namespace providers**: Isolate implementation code from global ns, **provides** a single point of access for functions.
There's many ways to create a singleton in JS, a basic way could be as follows:

```javascript
let singleton = {
  //Simple object literal that groups their methods and properties.
  prop1: 'onion',
  prop2: 'tomatoes',
  cookFn: function () {
    console.log('Let`s cook');
  },
};
```
