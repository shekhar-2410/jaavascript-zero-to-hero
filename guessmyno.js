'use strict';

// document.querySelector('.message').textContent = '🎉 correct Number!';
// document.querySelector('.secretNumber').textContent = 13;
// document.querySelector('.score').textContent = 20;
// document.querySelector('.guess').value;
// document.querySelector('.guess').value = 20;

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 5;
let highscore = 0;

const displayMsg = function(message) {
	document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function() {
	const guess = Number(document.querySelector('.guess').value);
	if (!guess) {
		// document.querySelector('.message').textContent = '🤦‍♂️ Not a Number!';
		displayMsg('🤦‍♂️ Not a Number!');
	} else if (guess === secretNumber) {
		// document.querySelector('.message').textContent = '🎉 correct Number!';
		displayMsg('🎉 correct Number!');
		document.querySelector('.number').textContent = secretNumber;
		document.querySelector('body').style.backgroundColor = '#60b347';
		document.querySelector('.number').style.width = '40rem';

		if (score > highscore) {
			highscore = score;
			document.querySelector('.highscore').textContent = highscore;
		}
	} else if (guess !== secretNumber) {
		if (score > 1) {
			displayMsg(guess > secretNumber ? '😔 Number is too high' : '😔 Number is too low');
			// document.querySelector('.message').textContent =
			// 	score > secretNumber ? '😔 Number is too high' : '😔 Number is too low';
			score--;
			document.querySelector('.score').textContent = score;
		} else {
			displayMsg('🥱 Game Over');
			// document.querySelector('.message').textContent = '🥱 Game Over';
			document.querySelector('.score').textContent = 0;
			document.querySelector('body').style.backgroundColor = 'red';
		}
	}

	// else if (guess > secretNumber) {
	// 	if (score > 1) {
	// 		document.querySelector('.message').textContent = '😔 Number is too high';
	// 		score--;
	// 		document.querySelector('.score').textContent = score;
	// 	} else {
	// 		document.querySelector('.message').textContent = '🥱 Game Over';
	// 		document.querySelector('.score').textContent = 0;
	// 		document.querySelector('body').style.backgroundColor = 'red';
	// 	}

	// }
	//  number Low

	// else if (guess < secretNumber) {
	// 	if (score > 1) {
	// 		document.querySelector('.message').textContent = '😔 Number is too low';
	// 		score--;
	// 		document.querySelector('.score').textContent = score;
	// 	} else {
	// 		document.querySelector('.message').textContent = '🥱 Game Over';
	// 		document.querySelector('.score').textContent = 0;
	// 		document.querySelector('body').style.backgroundColor = 'red';
	// 	}
	// }
});

document.querySelector('.again').addEventListener('click', function() {
	score = 5;
	secretNumber = Math.trunc(Math.random() * 20 + 1);
	// document.querySelector('.message').textContent = 'Start guessing...';
	displayMsg('Start guessing...');
	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.score').textContent = score;
	document.querySelector('.number').textContent = '?';
	document.querySelector('.number').style.width = '15rem';
	document.querySelector('.guess').value = '';
});
