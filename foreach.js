// array method:-foreach
const numbers = [1,2,3,4,5];
let sum = 0
numbers.forEach((item)=>{
    sum += item
})

console.log('sum', sum);

const letter = ['a','b','c','d','a','d','c','a'];
let count = {}
letter.forEach((items) =>{
    if(count[items]){
        count[items]++
    }else{
        count[items]=1
    }
})
console.log(count);
 
const newarray = []
const array = numbers.forEach((num)=>{
newarray.push(num*2)   //Foreach return undefined
})
console.log('foreach methoid', newarray);

// map
const newarr = numbers.map((item)=>{
  return item*2  //map  return newarray
})
console.log('map method',newarr) 