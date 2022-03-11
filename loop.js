let numArray = [ 200, 99, 12, 18, 900, 1700, -10 ];
let maxNum = numArray[0];
let minNum = numArray[0];

for (let i = 0; i < numArray.length; i++) {
	if (numArray[i] > maxNum) {
		maxNum = numArray[i];
	}
	if (numArray[i] < minNum) {
		minNum = numArray[i];
	}
}

console.log(`Larger number in array  ${maxNum} and Smaller number in array ${minNum}`);

const arraynum = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
// let reverse = arraynum.reverse()
// for (let i =0 ;i<reverse.length;i++) {

//     console.log(reverse[i]);

// }
for (let i = arraynum.length - 1; i > 0; i--) {
	console.log(arraynum[i]);
}

const year = [ 1991, 1992, 1999, 2015 ];
const age = [];

for (let i = 0; i < year.length; i++) {
	age.push(2022 - year[i]);
}
console.log(age);

const pesonInfo = [ 'shkhar suman', 'patna', 27, 9122445566 ];

for (let i = 0; i < pesonInfo.length; i++) {
	if (typeof pesonInfo[i] !== 'number') continue;
	console.log(pesonInfo[i], typeof pesonInfo[i]);
}

for (let i = 1; i <= 5; i++) {
	console.log(`--------- Number of rap in each ${i}`);
	for (let j = 1; j < 6; j++) {
		console.log(`Inside each rap ${j}`);
	}
}

function rollDice() {
	return Math.ceil(Math.random() * 6);
}
for (let i = 0; i < 5; i++) {}
console.log(rollDice());

let fullNmae = 'shekhar suman';
let cap = [];
let count = 0;
let vovChart = '';
for (let i = 0; i < fullNmae.length; i++) {
	cap.push(fullNmae[i].toUpperCase());
	if (
		fullNmae[i] === 'a' ||
		fullNmae[i] === 'e' ||
		fullNmae[i] === 'i' ||
		fullNmae[i] === 'o' ||
		fullNmae[i] === 'u'
	) {
		vovChart = vovChart + fullNmae[i];
		count++;
	}
}
console.log(cap);
console.log(vovChart);
console.log(count);

let assend = [ 22, 77, 11, 99, 200, 999 ];
assend = assend.sort((a, b) => a - b);
console.log(assend);
let rev = assend.reverse();
console.log(rev);

function sortArray(array) {
	var temp = 0;
	for (var i = 0; i < array.length; i++) {
		for (var j = i; j < array.length; j++) {
			if (array[j] < array[i]) {
				temp = array[j];

				array[j] = array[i];

				array[i] = temp;
			}
		}
	}
	return array;
}

console.log(sortArray([ 22, 77, 11, 99, 200, 999 ]));

let noArray = [ 24, 333, 22, 199, 222, 2212 ];
// find odd and even no
// find double of number
// find higher number and lower num sum of both number

// filter
const oddnum = function(x) {
	if (x % 2 !== 0) {
		return x;
	}
};
const evennum = function(y) {
	if (y % 2 === 0) {
		return y;
	}
};
const doublenum = function(x) {
	return x * 2;
};

let printOdd = noArray.filter(oddnum);
let printEven = noArray.filter(evennum);
let doubleNum = noArray.map(doublenum);

console.log(`Odd number are ${printOdd} Even number are ${printEven}`);
console.log(doubleNum);

const numMax = noArray.reduce(function(previous, current) {
	// if (current > previous) {
	// 	previous = current;
	// }
	// return previous;
	return Math.max(previous, current);
});
const numMin = noArray.reduce(function(a, b) {
	return Math.min(a, b);
});
console.log(numMax);
console.log(numMin);
let diff = numMax - numMin;
console.log(diff);
