// const  personDetail = [
//     {name:'john',age:30,city:'Newyork',country:"UK"},
//     {name:'Steven',age:24,city:'London',country:"ENGLAN"},
//     {name:'Setty',age:30,city:'Chennai',country:"India"},

// ]

// for (let index = 0; index <personDetail.length; index++) {
//  store =  personDetail[index-1]
// }

// console.log(store);
// console.log(personDetail[1].name)

const johns = {
    firstName : 'John',
    lastName :'Schemen',
    birthyear:1991,
    job:'teacher',
    friends:['Michel','Peter','Steven'],
    hasDriverLicense :true,
    // calAge:function(birthyear){
    //     return 2022-birthyear;
    // }
    // calAge:function(){
    //     return 2022-this.birthyear
    // }

    calAge : function () {
     this.age = 2022 - this.birthyear 
     return this.age  
    },
    getSummary: function (params) {
    return `${this.firstName} is a ${this.calAge()} -year old ${this.job},and ${this.hasDriverLicense ?'a':'no'} has driver license`    
    }

}

console.log(johns.calAge());
console.log(johns.age);
// console.log(johns['calAge'](1995));

// challenge
// johns 46 year teacher,and has a driver lincense true/has no driver licence
console.log(johns.getSummary());
