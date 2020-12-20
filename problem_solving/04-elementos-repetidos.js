const hasDuplicates = (inputArr = []) => {
  for (let i = 0; i < inputArr.length; i++) {
    const filter = inputArr.filter((item) => item === inputArr[i]);
    if (filter.length > 1) {
      return true;
    }
  }
  return false;
};

console.log(hasDuplicates([1, 1, 3, 4, 5]));
