const names = ['Floria','Lian','Jai', 'Ivan'];
names.sort();
console.log(names);

const number = [74,18,10,84,24,108]
number.sort(compareFunction)
console.log(number);
function compareFunction(a,b) {
    // 1. < 0 ...a comes first
    // 2 . 0..nothing will be chnaged
    // 3>0 ...b comes first
    return a-b;
}

const products = [
    {
        name : 'laptop',
        price :1000
    },
    {
        name : 'desktop',
        price :1500
    },
    {
        name : 'phone',
        price :500
    },
]

 products.sort((a,b)=>a.price - b.price)
console.log(products);