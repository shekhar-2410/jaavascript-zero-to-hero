// And operator(&&) excute only when both condition are true
// Or operator(||) excute either only one condition is true
// Nor operator(&&) excute only when condition is false

 const hasDriverlicens = true;   //A
 const hasGoodvision = false;   //B
 const isTired  = true;

 console.log(hasDriverlicens && hasGoodvision);
 console.log(hasDriverlicens || hasGoodvision);
 console.log(!hasDriverlicens);

 const shouldDrive = hasDriverlicens && hasGoodvision;
 if (hasDriverlicens && hasGoodvision && isTired) {
    console.log('Sara can drive'); 
 }else if(hasDriverlicens || hasGoodvision||isTired){
     console.log('Sare  drive some Km..');
 }
 
 