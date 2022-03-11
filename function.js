// A fuction is piece of code that we can use over and over again in code.A function cn contain one or more line of code

function logger(){
    console.log('My name is shekhar');
}

//calling //running / invoking / invoking function

logger();

function fruitProcessor(apple,oranage){
    console.log(apple,oranage);
    const juice = `juice with ${apple} apples and ${oranage} oranges`;
    return juice; 
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);
console.log(fruitProcessor(5,0));

const appleorangeJuice = fruitProcessor(6,6);
console.log(appleorangeJuice)


// Function declaration
function CurrentAge1(birthyear) {
    return 2022- birthyear;
}
 const age1 = CurrentAge1(1991);
 console.log(age1)

//  Function without name is called anonomonus Fuction

// Function expression
 const Calage2 = function(birthyear){
     return 2022- birthyear;
 }
  const age2 = Calage2(1995);
  console.log(age1,age2)


const calAge3 = function(birthyear){
return 2022-birthyear
  }

  const yearsuntilRetirement = function(birthyear,firstname){
      const age = calAge3(birthyear);
      const retirement = 65-age;
      if (retirement>0) {
console.log(`${firstname} has retired after ${retirement} years`);
        return retirement;  
      }else{
        console.log(`${firstname} has retired ${retirement}.`);
          return-1
      }
  }
  console.log(yearsuntilRetirement(1992,'john'))
  console.log(yearsuntilRetirement(1952,'john'))