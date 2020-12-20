/* John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

For example, there are  socks with colors . There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

Function Description

Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.

sockMerchant has the following parameter(s):

n: the number of socks in the pile
ar: the colors of each sock
Input Format

The first line contains an integer , the number of socks represented in .
The second line contains  space-separated integers describing the colors  of the socks in the pile. */
function sockMerchant(n = 0, ar = []) {
  let frequencies = {};

  let counter = 0;

  for (let i = 0; i < n; i++) {
    if (!frequencies[ar[i]]) {
      frequencies[ar[i]] = 0;
    }
    frequencies[ar[i]] += 1;
  }

  frequencies = Object.values(frequencies);

  for (let i = 0; i < frequencies.length; i++) {
    counter += Number.parseInt(frequencies[i] / 2);
  }
  return counter;
}

const socksArray = [10, 20, 20, 10, 10, 30, 50, 10, 20];
const socksArray2 = [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5];
const n = socksArray.length;
