Object.prototype.log = function () {
  console.log(this);
};

const x = {
  //Creating a new Object's instance
  a: 1,
};

x.log();

//Polyfill of trim
if (!String.prototype.trim) {
  String.prototype.trim = function () {
    try {
      return this.replace(/^\s+|\s+$/g, '');
    } catch (e) {
      return this;
    }
  };
}

const y = '   lalala   '.trim();

y.log();
