const numbers = [16, 5, 21, 33, 25, 100];

const greaterNum = numbers.filter((num) => {
  if (num >= 18) {
    return num;
  }
});
console.log(greaterNum);
for (const items of greaterNum) console.log(items);

const greatestValue = numbers.reduce((prv, curr) => {
  if (curr > prv) {
    return curr; // Update 'prv' to 'curr' if 'curr' is greater
  }
  return prv; // Return 'prv' unchanged if 'curr' is not greater
}, numbers[0]); // Initialize 'prv' with the first element of the array

const smallerVlaue = numbers.reduce((prv, curr) => {
  return Math.min(prv, curr);
}, numbers[0]);

console.log(greatestValue, smallerVlaue);

// Sort in ascending order (smaller to higher)
const smallertoHigher = numbers.sort(function (a, b) {
  return a - b;
});

// Sort in descending order (higher to smaller)
// const highertoSmaller = numbers.sort(function(a, b) {
//   return b - a;
// });

console.log(smallertoHigher);

// console.log(highertoSmaller)


// Array destruction and rest operator
let subTitle  = ["kumar","visvas","saxsena"]

let[a,...other]= subTitle;
console.log(a);
console.log(other);

let title = "Sinha"
let[firstLetter,...otherLetter] = title;

console.log(firstLetter);
console.log(otherLetter)

// Array spread operator

const fruitName = ["Banana","Apple","Mango"]

const seasonFruits = ["Grapes",'Orange',"JackFriut"]
 console.log(fruitName);
 console.log(seasonFruits);
  const allFruits = [...seasonFruits,...fruitName]
  console.log(allFruits);
