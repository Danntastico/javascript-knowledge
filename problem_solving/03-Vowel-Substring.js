const allAreVowels = (str) => {
  const vowels = 'aeiouAEIOU';
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) {
      counter += 1;
    }
  }
  if (counter >= str.length) {
    return true;
  } else {
    return false;
  }
};

const numOfVowels = (str) => {
  var vowel = 'aeiouAEIOU';
  var counter = 0;
  for (var x = 0; x < str.length; x++) {
    if (vowel.indexOf(str[x]) !== -1) {
      counter += 1;
    }
  }
  return counter;
};

const findSubstrings = (s, k) => {
  if (allAreVowels(s) === true) {
    return s.substring(0, k);
  } else {
    let maxNumofVowels = 0;
    let result = '';

    for (let i = 0; i < s.length - k; i++) {
      let substring = s.substring(i, i + k);
      if (numOfVowels(substring) > maxNumofVowels) {
        maxNumofVowels = numOfVowels(substring);
        result = substring;
      }
    }
    return result;
  }
};

const s = 'caberqiitefg';
const k = 5;

console.log(findSubstrings(s, k));
