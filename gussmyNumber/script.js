"strict";
// document.querySelector(".message" ).textContent="Correct Number!"
// document.querySelector(".number").textContent = 13

const secretNumber = Math.floor(Math.random() * 20 + 1);

let score = 5;
let highscore = 5;
document.querySelector(".score").textContent = score;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".message").textContent = "🤗Cogragulations";
    document.body.style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
  }
  if (score > highscore) {
    highscore = score;
    document.querySelector(".highscore43").textContent = highscore;
  }

  if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "😮Guess is to high";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😪You Lost the Game!";
      document.body.style.backgroundColor = "red";
    }
  }
  if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "😮Guess is to Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😪You Lost the Game!";
      document.body.style.backgroundColor = "red";
    }
  }
  if (!guess) {
    document.querySelector(".message").textContent = "😞No Number!";
  }
});


document.querySelector(".again").addEventListener("click", function () {
  score = 5;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = null;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
});
