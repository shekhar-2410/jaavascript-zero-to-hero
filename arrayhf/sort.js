const employees = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Adam", age: 35 },
  { name: "Eve", age: 28 },
];

const sortData = employees.sort((a, b) => (a?.age > b.age ? 1 : -1));
console.log(sortData);

const sortName = employees.sort(function (a, b) {
  return a.name.localeCompare(b.name);
});

console.log(sortData);
