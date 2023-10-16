// Rest & Spread Operator

// Rest
console.log("*****Operaros****");
function addNumber(a, b, c, ...other) {
    console.log("other numbers", other);
    const add = a+b+c
    const modifiedNumbers = other.map((item) => item + add);
    console.log( modifiedNumbers);
    return modifiedNumbers;
  }
  
  const sum = addNumber(2, 5, 6, 10, 7, 8);
  console.log(sum);

  let student = {
    name:"ajay",
    age:19,
    hobbies:["cricket","swimmiing"]

  }

  const {...rest} = student  //destructive
  console.log(rest);

  function additionNum(firstNum, secondNum, ...otherNums) {
    let total = firstNum + secondNum;
    for (let num of otherNums) {
      total += num;
    }
    return total;
  }
  
  console.log(additionNum(1, 2, 3, 4, 5)); // Output: 15

//   spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];
console.log(arr2); // Output: [1, 2, 3, 4, 5, 6]

function sumall(a, b, c) {
    return a + b + c;
  }
  
  const numbers = [4, 6, 3];
  const result = sumall(...numbers);
  console.log(result); // Output: 6

  let newStudent = {
    ...student,
    age:24
  }
  console.log(newStudent);

  function multiply(a, b, c) {
    return a * b * c;
  }
  
  const number = [2, 3, 4];
  const results = multiply(...numbers);
  console.log(result); // Output: 24