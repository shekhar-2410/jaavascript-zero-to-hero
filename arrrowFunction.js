

// function expression
const calAge = function (birthyear) {
    return 2022-birthyear
}

// arrow function 

const calAge1 = birthyear => 2022- birthyear;
const age2 = calAge1(1992);
console.log(age2);

const yearUntilRetirement = (birthyear,firstName) =>{
    const age = 2022-birthyear;
    const retirement = 65-age;
    return `${firstName} retire in ${retirement} years`
}

console.log (yearUntilRetirement(1991,'Jhon'));


// calling one  function inside another function
// Data flow from one functon to another

const cutPieces = function (fruit) {
    return fruit * 4;
}

const fruitProcessor = function(apples,oranges) {
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);

    const juice = `Juice with ${ applePieces} pieces of apple and ${orangePieces} pieces of orange`;
    return juice
    
}

console.log(fruitProcessor(2,3))