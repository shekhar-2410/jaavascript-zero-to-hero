const array = [ 10, 22, 35, 85, 555, 999, 10, 22, 999 ];

// assending to desending
array.sort((a, b) => a - b);
console.log(array);

//double using map
const double = array.map((doub) => doub * 2);
console.log(double);

//odd using filter
const odd = array.filter((num) => num % 2 !== 0);
console.log(odd);

//sum using reduce
const sum = array.reduce(function(a, b) {
	a = a + b;
	return a;
}, 0);

console.log(sum);

//max using reduce
const max = array.reduce(function(a, b) {
	return Math.max(a, b);
});

console.log(`max no ${max}`);

//min using reduce
const min = array.reduce(function(a, b) {
	return Math.min(a, b);
});

console.log(`min no ${min}`);

//count repeat number reduce
const reapeat = array.reduce(function(a, b) {
	if (!a[b]) {
		a[b] = 1;
	} else {
		a[b]++;
	}
	return a;
}, {});
console.log(reapeat);

//same name count

const nameArray = [ 'priti', 'rani', 'ajay', 'rani', 'ajay', 'aramaan' ];

// alphabetical order
nameArray.sort();
console.log(`alphabetical order ${nameArray}`);

const nameCount = nameArray.reduce(function(a, b) {
	if (!a[b]) {
		a[b] = 1;
	} else {
		a[b]++;
	}
	return a;
}, {});
console.log(nameCount);

//first letter capital
let capital = [];
for (let i = 0; i < nameArray.length; i++) {
	capital.push(nameArray[i].charAt(0).toUpperCase() + nameArray[i].slice(1));
}
console.log(capital);

//closure function
const callName = function call() {
	person1 = 'shekhar';
	function displayname() {
		console.log(person1);
	}
	displayname();
};
callName();

//call back function
const age = (birthyear) => 2022 - birthyear;

console.log(age(1995));

const retirement = (retirementleft) => {
	const leftyear = age(retirementleft);
	const x = 65 - leftyear;
	return x;
};
console.log(retirement(1995));
