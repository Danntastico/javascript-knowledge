//Creating new Things
//ways to create an object
var newObject = {};
var newObject = Object.create(null);
var newObject = new Object();

//Assign Values

//Dot syntax
newObject.val1 = 'Pizza🍕';
var pizza = newObject.val1; //Pizza!

//Square bracket
newObject['val2'] = 'Hot Dog🌭';
var hotdog = newObject['val2'];

//Object.defineProperty
Object.defineProperty(newObject, 'val3', {
  value: 'hamburger 🍔',
  writable: true,
  enumerable: true,
  configurable: true,
});

//Creating a function
var propertyDefinition = (obj, key, val) => {
  config = { value: val };
  Object.defineProperty(obj, key, config);
};

var animal = Object.create(null);
propertyDefinition(animal, 'Dog', 'Chihuahua');

//Object.defineProperties
var hero = new Object(null);

Object.defineProperties(hero, {
  identity: {
    value: 'clark',
    writable: true,
  },
  name: {
    value: 'Superman',
    writable: true,
  },
  superpowers: {
    value: ['flying', 'strength', 'x-rays'],
    writable: true,
  },
});

//Inheritance

var villain = Object.create(hero);
propertyDefinition(hero, 'identity', 'Joker');

console.log(villain.superpowers);
