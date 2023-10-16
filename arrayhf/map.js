var students = [
  { name: "Alice", age: 20, grade: "A" },
  { name: "Bob", age: 22, grade: "B" },
  { name: "Charlie", age: 21, grade: "A-" },
  { name: "Angel", age: 20, grade: "C+" },
];

const Name = students?.map((items) => {
  if (items.age > 20) {
    return { name: items.name, grade: items.grade };
  }
});

console.log(Name);
