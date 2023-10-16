const num = [1,2,3,4,5,6]

const multiple = num.map((items,index)=>{
  return items*index

})
// console.log('index');

console.log("array items multiply by index--", multiple);

const product =[
    {name:'Sumsung',
    price:22000,
    count:3
    },
    {
        name:'Mi',
        price:12000,
        count:3  
    },
    {
        name:'Apple',
        price:82000,
        count:2 
    }
]

const totalProd = product.map((items)=>{
   return (items.name +(items.price*items.count))
})
console.log('mobile price total',totalProd);

const strg = ['1','3','6','8'];

const strNum = strg.map((value)=>{
  
 return Number(value)
})

let sum = 0;
const total =  strNum.map ((add)=>{
   sum= sum + add
})
 console.log(sum);
