const array = [
  { id: 1, name: "ss", last: "kk" },
  { id: 2, name: "ss", last: "kk" },
  { id: 3, name: "ss", last: "kk" },
  { id: 4, name: "ss", last: "kk" },
  { id: 5, name: "ss", last: "kk" },
];

const data = {
  names: array.map((obj) => obj.name),
  lastNames: array.map((obj) => obj.last),
  id: array.map((obj) => obj.id),
};

let namesString = "";
let idString = "";
data.names.forEach((name) => {
  namesString += name + "\n";
});
data.id.forEach((id) => {
  idString += id + "\n";
});
console.log(`${idString}  ${namesString}`);
