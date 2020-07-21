# Creational Patterns

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
