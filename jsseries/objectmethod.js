console.log("***object.method***");

// Object.keys(): Returns an array of an object's keys.
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

const keys = Object.keys(person);
console.log(keys); // Output: ['name', 'age', 'city']

//   Object.values(): Returns an array of an object's values.
const person1 = {
  name: "John",
  age: 30,
  city: "New York",
};

const values = Object.values(person);
console.log(values); // Output: ['John', 30, 'New York']

//   Object.entries(person) returns an array where each inner array represents a key-value pair from the person object. 
// The output shows an array of arrays, where the first element of each inner array is 
// the key and the second element is the corresponding value from the object.

const person3 = {
    name: 'John',
    age: 30,
    city: 'New York'
  };
  
  const entries = Object.entries(person);
  console.log(entries);//conveting object inside [[],[]]key and value list
  console.log(entries[0][1]);
