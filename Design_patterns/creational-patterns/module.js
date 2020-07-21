//Based on JS object literals or by difining an IIFE
//When you define an object literal, you define a module too.

//with object literals
const Module1 = {
  prop: 'property', //Has properties ✅
  config: {
    language: 'es', //It has properties that help us by defining configurations ✅
    cache: true,
  },
  setConfig: (conf) => {
    //It has methods that help us updating our configurations ✅
    Module1.config = conf;
  },
  isCacheEnabled: () => {
    //Look at the module's status. ✅
    console.log(Module1.config.cache);
  },
};

//With an IIFE
const Module2 = (function () {
  //Private Data
  let privData = 1;

  //it is immediately invoked;
  //So the return value becomes a public API

  return {
    getPrivateData: function () {
      return privData;
    },

    getDoublePrivateData: function () {
      return api.getPrivateData() * 2;
    },
  };
})();
