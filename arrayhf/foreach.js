var students = [
    { name: 'Alice', age: 20, grade: 'A' },
    { name: 'Bob', age: 22, grade: 'B' },
    { name: 'Charlie', age: 21, grade: 'A-' },
    { name: 'Angel', age: 20, grade: 'C+' }
  ];
  

//   forEach

for (let index = 0; index < students.length; index++) {
    const element = students[index];
    console.log(element.name)
    
}

students.forEach((item,i)=>{
   let temp = []
   temp.push(
    `NAME--${item.name}`,item.age,`GRADE--${item.grade}`
   )
   console.log(temp)
})
