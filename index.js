"use strict";

const newGame = document.querySelector(".newGame");
const rollDice = document.querySelector(".rollDice");
const hold = document.querySelector("hold");
const currentScores = document.querySelectorAll(".currentScores");
const totalScores = document.querySelectorAll(".totalScores");
const diceIcon = document.querySelector(".diceImg");

let cScores = 0;
rollDice.addEventListener("click", function () {
  const dice = Math.floor(Math.random() * 6) + 1;

  //display dice roll
  diceIcon.classList.remove("hidden");
  diceIcon.src = `dice-${dice}.png`;

  //add dice roll to current score provided it;s not one
  if (dice !== 1) {
    cScores += dice;
    currentScores[0].innerHTML = cScores;
  } else {
    //switch player
  }
});
