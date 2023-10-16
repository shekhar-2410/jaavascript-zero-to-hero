const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  return fn(str);
};

// Example usage:
const inputString = 'hello world';
const transformedString = transformer(inputString, upperFirstWord);
const one_Word = transformer(inputString, oneWord);
console.log(transformedString);
console.log(one_Word);
