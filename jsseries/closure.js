console.log("***Closure***");

// Closure Function 

let sum1 = function(a) {
    console.log("Hellow Viewer"+a);
    return function(b) {
      return a+b 
    }
}

let store = sum1(2)
console.log(store(2));


let addfunct = function (a,b,c) {
    return {
        getSum2:function() {
          return a+b  
        },
        getSum3:function() {
            return a+b+c  
          },
    }
    
}

let newStroe = addfunct(23,4,11)
console.log(newStroe.getSum2());
console.log(newStroe.getSum3());