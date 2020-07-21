# Creational Patterns

## Info

**Main Idea:** Object creation.

1. Constructor Pattern

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
