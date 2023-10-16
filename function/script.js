'use strict';
const bookings = [];
const createBooking = function (flightName, numPassenger = 1, price = 199) {
  const booking = {
    flightName,
    numPassenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123', '108', 5000);

const flight = 'LH234';
const jonas = {
  name: 'Joan Schetmda',
  passport: 2345678,
};

const checkIn = function (flighNum, passenger) {
  flighNum = 'LH1999';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 2345678) {
    console.log('check in');
  } else {
    console.log('Wrong passport');
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);
