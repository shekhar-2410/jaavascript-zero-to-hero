const numbers = [1,2,3,4,5,6]

const total = numbers.reduce(sum,0);

function sum(acc,value){
    return acc + value;
}
console.log(total);

const num = [2,3,6,8,10,12]


 let callback =(acc,value) =>{
if (acc>value){
    return acc 

}else{
    return value
}

}
const max = num.reduce(callback,0)
console.log(max)

const store = [
    {
        product:'laptop',
        value:1000,
        count:3,  
},
{
product:'desktop',
value:1500,
count:4
},
{
    product:'mobile',
    value:500,
    count:10
}
]
// console.log(store);
const totalValueScore = store.reduce((acc,item)=>{
    return acc + (item.value * item.count)
},0)

console.log(totalValueScore)



