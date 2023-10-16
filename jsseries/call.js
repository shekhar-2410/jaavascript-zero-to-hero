console.log("***call/aplly/bind***");

// Apply,call,Bind
const printDetail=function(country,zone){
    console.log(this.name+" "+country+" "+zone);
}

// Call
let userDetails={
    name:"faltu",
    age:'22',
    state:"uk",
  
}
printDetail.call(userDetails,"India","Asia")

// Apply
let userDetails2={
    name:"xyz",
    age:'24',
    state:"up",
}
printDetail.call(userDetails2,["india","asia"])

// bind
let newFun = printDetail.bind(userDetails2,"bind","Asia")
newFun()