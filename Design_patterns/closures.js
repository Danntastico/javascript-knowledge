(() => {
  const getSecret = (secret) => {
    return {
      get: () => secret,
    };
  };
  module.exports = {
    getSecret,
  };
})();
