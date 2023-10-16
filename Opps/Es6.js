class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2023 - this.birthYear);
  }
}

const jessica = new Person('Jesica', 1995);

console.log(jessica);
jessica.calcAge();

Person.prototype.greet = function () {
  const age = 2023 - this.birthYear;
  console.log(`${this.firstName} age is ${age}`);
};

jessica.greet();
