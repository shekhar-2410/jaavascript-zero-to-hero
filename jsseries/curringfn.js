// curring function
console.log("***currying Function***");
function addFunc(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// let data1 = addFunc(2)
// let data2 =  data1(6)
// let data3 =  data2(2)
let res = addFunc(5)(7)(11);
console.log(res);

userObj = {
  name: "Ajay",
  age: 28,
};

function userInfo(obj) {
  return function (userinfo) {
    return obj[userinfo];
  };
}

let resorce = userInfo(userObj);
console.log(resorce("name"));

//Infinite curring function

function dynmicAdd(a) {
  return function (b) {
    if (b) return dynmicAdd(a + b);
    return a;
  };
}

let finalsum = dynmicAdd(2)(3)(6)(99)();
console.log(finalsum);