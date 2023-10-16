const sequreBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    return passengerCount++;
  };
};

const booker = sequreBooking();
console.log(booker());
console.log(booker());
console.log(booker());
