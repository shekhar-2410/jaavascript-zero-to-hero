'use strict';
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person('jonas', 1991);
console.log(jonas);


console.log(jonas instanceof Person);

// prototype
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
jonas.calcAge();
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(jonas._proto_);
