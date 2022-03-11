// Coding Challenge #1 

// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores

const calcAverage = (value1,value2,value3) => (value1+value2+value3)/3
  
// const dolphinScore = calcAverage(44,23,71);
// const koalasScore = calcAverage(65,54,49);
let dolphinScore = calcAverage(85,54,41);
let koalasScore = calcAverage(23,34,27);

// const checkWinner = function (Data1,Data2) {
//   let A = dolphinScore;
//   let B = koalasScore;
//  if (A>= 2*B) {
//     console.log(`${Data1} win (${A} vs ${B})`) 
//  }else if (B>= 2*A) {
//     console.log(`${Data2} win (${B} vs ${A})`) 
//  } else {
//    console.log(` (${Data1}${A} vs ${Data2}${B}) match draw no team winner`);  
//  }   
// }


// checkWinner('Dolphin','koalas');

// const checkWinner = function (dolphin, koalas) {
//   if (dolphin>2*koalas) {
//     console.log(`Dolphin win (${dolphin} vs ${koalas})`) 
//       }else if (koalas>= 2*dolphin) {
//          console.log(`Koalas win (${koalas} vs ${dolphin})`) 
//       } else {
//        console.log(`(${dolphin} vs ${koalas}) match draw no team winner`);  
//   }       
   
// }

// checkWinner(dolphinScore,koalasScore)

// Coding Challenge #2
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'bill' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can
// actually be the returned value of a function! So you can just call a function as array
// values (so don't store the tip values in separate variables first, but right in the new
// array)

// const calcTip = function (input) {
  // if (input <= 300 && input>50 ) {
  //   return input*15/100
  // }else{
  //   return input*20/100
  // }
//  const tip = input<=300 && input>50?input*15/100:input*20/100;
//  return tip
 
// }

// const bills = [125,555,44]
// for (let i = 0; i < bills.length; i++) {
//    element = bills[i];
//   console.log(`bill is ${element} tip is ${calcTip(element)} and total is ${element +calcTip(element) }`)
// }

// Coding Challenge #3
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.

const Mark =  {
mass:78,
height:1.69,
calMarkbmi:function () {
  this.bmi1 = (this.mass/this.height**2)
return this.bmi1
}
}

const John =  {
  mass:78,
  height:1.69,
  calJohnbmi:function () {
    this.bmi2 = (this.mass/this.height**2)
  return this.bmi2
  }
}

const calBmi = function () {
  
 if (Mark.calMarkbmi()>John.calJohnbmi()){
  console.log(`Mark bmi ${Mark.calMarkbmi()} is higher than john bmi ${John.calJohnbmi()}`);
}else if(Mark.calMarkbmi()<John.calJohnbmi()){
  console.log(`Mark bmi ${Mark.calMarkbmi()} is lower than John bmi ${John.calJohnbmi()}`);
}else{
  console.log(`Both bmi ${Mark.calMarkbmi()}  ${John.calJohnbmi()} is equal`);
}

} 

calBmi();


// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the bill and the totals ('bill' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
// bill and total values (bill + tip) for every bill value in the bills array. Use a for
// loop to perform the 10 calculations!
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
// bill and totals arrays 😉
// Bonus:
// 4. Bonus:
//  Write a function 'calcAverage' which takes an array called 'arr' as
// an argument. This function calculates the average of all numbers in the given
// array. This is a difficult challenge (we haven't done this before)! Here is how to
// solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition,
// start by creating a variable 'sum' that starts at 0. Then loop over the
// array using a for loop. In each iteration, add the current value to the
// 'sum' variable. This way, by the end of the loop, you have all values
// added together
// 4.2. To calculate the average, divide the sum you calculated before by the
// length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array

const bills =[22, 295, 176, 440, 37, 105, 10, 1100, 86 , 52]
const bill =[];
const total =[];
let avg = 0


const calcTip = function (bil) {
 if (bil<50 && bil>300){
  return bil*15/100
 }else{
  return bil*20/100
 } 
 
}

for (let i = 0; i < bills.length; i++) { 
  bill.push(bills[i])
  let tip = calcTip(bills[i])
  total.push(bills[i]+tip)
  avg = avg + bills[i]
 
console.log(`your bill---${bills[i]} your tip-----${tip} total---${bills[i]+tip}`);
}

console.log(`your bill is --${bill}`);
console.log(`your total is --${total}`);
console.log(avg/2);




 