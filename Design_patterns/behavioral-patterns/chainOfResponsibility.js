class Calculator {
  constructor(value = 0) {
    this.value = value;
  }

  add(number) {
    this.value += number;
    return this;
  }

  subtract(number) {
    this.value -= number;
    return this;
  }
}

const operation = new Calculator(10);

console.log(operation.add(5).add(5).add(5).add(5).value);
