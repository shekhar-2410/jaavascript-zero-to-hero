const lufthasna = {
  airLine: 'Lufthasna',
  iatCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat ${this.airLine} flight ${this.iatCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iatCode} ${flightNum},name` });
  },
};

lufthasna.book(239, 'jonas S');
lufthasna.book(635, 'John Smith');

const euruwing = {
  name: 'EuroWing',
  iatacode: 'EW',
  bookings: [],
};
const book = lufthasna.book;
book.call(euruwing, 23, 'Sarah Willimas');

// call bind && apply

const student = {
  firstName: 'Anil',
  lastName: 'Sindhu',
  age: 30,
};

let teacher = {
  firstName: 'Peter',
  lastName: 'Pan',
  age: 45,
};
function getEmail(sub) {
  return `${this.firstName}.${this.lastName}@test.com,${sub}`;
}

// usin call method to get the same function inside teacher object
// to using same  function again
console.log(getEmail.call(student));
console.log(getEmail.call(teacher, 'English'));

// when we need to pass an array as an  aurgment we will use apply
function chosseSubject(...sub) {
  return `Teacher name is ${this.firstName}${this.lastName} and the subject he will take ${sub}`;
}

console.log(chosseSubject.apply(teacher, ['Math', 'Science', 'Computer']));
