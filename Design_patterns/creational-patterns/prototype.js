//Takes an object that it is already defined and, based on it, create other objects.
//It avoids code duplicity.

const dog = {
  breed: 'Kilterrier',
  toBark: function () {
    //keep in mind that the arrow functions does not contains a _this_ context.
    console.log(`Woorf! I'm a ${this.breed}`);
  },
};

const kiltro = Object.create(dog);
kiltro.toBark();
