"use strict";

// selecting elements
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const name0El = document.getElementById("name--0");
const name1El = document.getElementById("name--1");
// starting condtion
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const swtchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};

// rolling dice function
btnRoll.addEventListener("click", function () {
  if (playing) {
    // generate random dice
    const dice = Math.floor(Math.random() * 6) + 1;

    // display dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    //   if rolled dice==1 switch to next otherwise add in current
    if (dice !== 1) {
      currentScore = currentScore + dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      swtchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] = scores[activePlayer] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // check if player score is 100
    if (scores[activePlayer] >= 30) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      document.getElementById(`name--${activePlayer}`).textContent =
        "🏆Winner🎉";
      playing = false;
    } else {
      swtchPlayer();
    }
  }
  // add curent score t0 activeplayer

  // switch to second player
});
btnNew.addEventListener("click", function () {
  scores[0] = 0;
  scores[1] = 0;
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = scores[0];
  score1El.textContent = scores[1];
  current0El.textContent = currentScore;
  current1El.textContent = currentScore;

  player0.classList.add("player--active");
  player1.classList.remove("player--active");
  diceEl.classList.add("hidden");
  name0El.textContent = "Player 1";
  name1El.textContent = "Player 2";
  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");
});
