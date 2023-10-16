const names = [
  { title: 'tobi', subtitle: 'kr', id: 1 },
  { title: 'chedi', subtitle: 'prakash', id: 2 },
  { title: 'subham', subtitle: 'singh', id: 3 },
  { title: 'rahul', subtitle: 'trpathi', id: 4 },
];

// generic function
const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// preffere way
const store = names.map(
  (item) =>
    capitalizeFirstLetter(item.title) +
    ' ' +
    capitalizeFirstLetter(item.subtitle)
);

//another way
const store1 = names.map((item) => {
  `${item.title[0].toUpperCase()}${item.title.slice(
    1
  )} ${' '} ${item.subtitle[0].toUpperCase()}${item.subtitle.slice(1)} `;
});

console.log(store);
console.log(store1);
