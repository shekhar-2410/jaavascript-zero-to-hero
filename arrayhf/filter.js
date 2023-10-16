const ages = [12, 33, 22, 20, 17, 19, 25, 22, 35, 29];
var students = [
  { name: "Alice", age: 20, grade: "A" },
  { name: "Bob", age: 22, grade: "B" },
  { name: "Charlie", age: 21, grade: "A-" },
  { name: "Angel", age: 20, grade: "C+" },
];
for (let index = 0; index < ages.length; index++) {
  if (ages[index] > 20) {
    console.log(ages[index]);
  }
}

const filterage = ages.filter((age) => {
  if (age >= 20) {
    return true;
  }
});
console.log("-->", filterage);

const filterName = students.filter((item) => {
    return item.grade === "A";
  }).map((student) => student.name);
  
  console.log(filterName);

