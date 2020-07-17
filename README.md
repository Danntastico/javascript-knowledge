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
