const binarySearch = (data, target, low, high) => {
  if (low > high) {
    console.error('Low is more than high!');
  } else {
    let middle = Math.floor((low + high) / 2);
    if (data[middle] === target) {
      console.log('got it:', data[middle]);
      return data[middle];
    } else if (target > data[middle]) {
      binarySearch(data, target, middle + 1, high);
    } else {
      binarySearch(data, target, low, middle - 1);
    }
  }
};

const data = [1, 2, 3, 4, 5, 6];

const result = binarySearch(data, 2, 0, data.length - 1);
console.log(result);
