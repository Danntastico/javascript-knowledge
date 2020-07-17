//Crating just ONE instance of a class

//On JS could have multiple Forms

//1. Simple Object literal grouped together
var mySingleton = {
  prop1: 'Hello World',
  prop2: 'From Colombia',
  prop3: () => console.log('other properties'),
};

//2.Encapsulating var and fnc inside a closure

let SingletonClos = () => {
  let privateVariable = 'private';
  let showPrivate = () => {
    console.log(privateVariable);
  };

  return {
    publicMethod: () => showPrivate(),
    publicVariable: 'public',
  };
};

let singletonClosure = SingletonClos();
/* 
console.log(singletonClosure.publicMethod());
console.log(singletonClosure.publicVariable);
 */
//Instantiate the singleton when its needed.

var Singleton3 = (function () {
  var fncInstance;

  function init() {
    return {
      publicMethod: function () {
        console.log('Hi there!');
      },
      publicValue: 'You guys can see me',
    };
  }

  return {
    getInstance: () => {
      if (!fncInstance) {
        fncInstance = init();
      }
      return fncInstance;
    },
  };
})();

console.log(Singleton3.getInstance().publicValue);

//Page 26
