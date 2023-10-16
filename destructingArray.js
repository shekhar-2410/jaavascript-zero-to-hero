'use strict';
const resturant ={
    name:'Classico Italinio',
    location:'Via Aangelo Tavanti 23, Italy',
    category : ['Italian','Pizzeria','Vegiterian','Organic'],
    startMenu:['Focicca','Brusheta','Garlic Bread','Salad'],
    mainMenu:['Pizza','Pasta','Risotto '],
    order:function(starterIndex,mainIndex){
        return(this.startMenu[starterIndex],this.mainMenu[mainIndex])
    }
}

// [main,secondry] =[secondry,main]
// console.log(main,secondry);
const[starter,mainCourse] = resturant.order(2,0)
console.log(starter,mainCourse)

const arr = [2,3,4]
const a = arr[0]
const b = arr[1]
const c = arr[2]

const[x,y,z] = arr;
console.log(x,y,z);


