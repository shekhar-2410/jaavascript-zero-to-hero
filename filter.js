const numbers = [1,2,3,4,5,6]

const even = numbers.filter(isEven);

function isEven(value){
    return value % 2 == 0
}
console.log(even);

const people = [
    {
        name : 'Floria',
        age :26
    },
    {
        name : 'Ivan',
        age :18
    },
    {
        name : 'jai',
        age :15
    },

]

const adult = people.filter (person=>person.age>=18);
console.log(adult);

const num = [1,1,2,2,3,3,4,5,4,5,6,5,7]

const nums = num.filter((value,index,arr)=>{
    return arr.indexOf(value)=== index
})
console.log(nums);


