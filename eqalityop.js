// eqality operator
// === --strict equality operator
// == --loose equality operator

const age ='18';
if (age===18) {
   console.log('you just become an adult'); 
}else{
    console.log('you just become an Adult'); 
}
const favourite = Number(prompt('What is your favourite number?'));
console.log(favourite)
console.log(typeof favourite);

if (favourite===23) {
  console.log('cool! 23 is amazing ');  
}else if(favourite===7){
    console.log('7 is cool number');
}else{
    console.log('number is not 23 and 7!');
}
if (favourite !==23) {
  console.log('why not 23');  
}