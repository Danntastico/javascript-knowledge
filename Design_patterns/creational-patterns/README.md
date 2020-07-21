# Creational Patterns

- [General Info](#info)
- [Constructor Pattern](#constructor-pattern)
- [Module Pattern](#module-pattern)
- [Revealing Module Pattern](#revealing-module-pattern)
- [Useful Links](#useful-links)

## Info

**Main Idea:** Object creation.
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

## Constructor Pattern

ES6 allows a new way for creating objects with the keyword _class_:

```javascript
class MyClass {
  constructor(p1) {
    this.property = p1; //_this_ keyword refers to the instance
    this.method = () => {};
  }
}
```

And you can create an instance of _MyClass_:

```javascript
const instance1 = new MyClass('prop1');
```

_Easy, isn't it?_

## Module Pattern

**Encapsulation** of private members by providing a public API.
Allows us to **hide** the main logic and exposes an interface that is _accessible_ to the rest of our application.

### Object literals

You could declare a Module as an object literal, there, you'll declare:

- Properties
- Configurations
- Methods that help us updating the configurations

```javascript
const module = {
  prop: 'props',
  config: {
    //configurations
  },
  setConfig: (data) => {
    //Updates the configurations
  },
};
```

### IIFE (immediately-invoked function expression)

With an IIFE, you can create a module that will encapsulate the logic. The return value of the IIFE turns to a public API where you can expose logic.

```javascript
const module2 = (function (/*Pass optional data for initialization*/) {
  let privData = 'Some that is private';

  return {
    //Public API
    getPrivateData: function () {
      return privData;
    },
  };
})(/**Optional data*/);
```

## Revealing Module Pattern

Here we're going to create an IIFE where both public and private APIs will be created.

```javascript
const moduleR = (function () {
  let privData = {} //All private info will be encapsulated
  let getPrivData = function (){
    return privData;
  }
  return {
    getPrivateData: getPrivData();
  }
})()
```

## Useful Links

- [Javascript: Module and revealing module patterns](https://riptutorial.com/javascript/example/5379/module-and-revealing-module-patterns)
