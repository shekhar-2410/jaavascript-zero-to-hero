// Inheritance between classes :constructor function

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};
// Linking prototype
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and i study ${this.course}`);
};

const mike = new Student('Mike', 2000, 'Computer');

console.log(mike);
mike.introduce();
mike.calcAge();

// Implementing same logic of class inhertince using ES6
console.log('---es6---');

class Students extends Person {
  constructor(firstName, birthYear, course) {
    super(firstName, birthYear);
    this.course = course;
  }
}

const John = new Student('Mrtha', 2002, 'computer s');
console.log(John);
John.calcAge();
