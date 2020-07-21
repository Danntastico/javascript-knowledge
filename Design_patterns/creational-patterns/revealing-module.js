//Contains a Public API and a Private API
//It's created by using a IIFE
const result = (() => {
  const x = {}; //Private constants
  return {
    a: () => console.log(x), //Here we will put what we want to be accessible for other developers
    b: (key, val) => (x[key] = val),
  };
})();

result.a();
result.b('Books', 'thriller');
result.a();
