const friends = [ 'Michel', 'Steven', 'Peter' ];
const newlenght = friends.push('Jay'); //push add element last of array length
console.log(friends);
console.log(newlenght);

friends.unshift('Harry'); //unshift add element first element in array length

console.log(friends);

// remove element

const popped = friends.pop(); //pop remove least element from array length
console.log(popped);
friends.shift(); //shift remove first elemnt from array length
console.log(friends);

console.log(friends.indexOf('Peter')); //find the number of array element

console.log(friends.includes('Michel')); //find the existing of element in array length in boolean value
console.log(friends.includes('Hetal'));
