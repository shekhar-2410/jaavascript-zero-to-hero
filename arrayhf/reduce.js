const mobilesPrice = [
  { brand: "apple", price: 3000 },
  { brand: "samsung", price: 22000 },
  { brand: "realeme", price: 11000 },
  { name: "oneplus", price: 20000 },
];

// total rate of all brands 
const sumAll = mobilesPrice.reduce((total, current) => { return total+current.price},0);

console.log(sumAll);