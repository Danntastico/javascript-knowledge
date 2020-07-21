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

## Design Patterns!

- [Creational Pattern](https://github.com/Danntastico/javascript-knowledge/tree/master/Design_patterns/creational-patterns)

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
