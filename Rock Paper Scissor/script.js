"use strict";

// Selecting the elements
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const userScore = document.querySelector("#user");
const compScore = document.querySelector("#comp");
const result = document.querySelector(".result");
const btnReset = document.querySelector(".reset");

let user, comp;
const init = function () {
  user = 0;
  comp = 0;
  userScore.textContent = 0;
  compScore.textContent = 0;
  result.classList.add("hidden");
};
init();

rock.addEventListener("click", function () {
  logic(0);
});

paper.addEventListener("click", function () {
  logic(1);
});

scissors.addEventListener("click", function () {
  logic(2);
});

// Implementing Game Logic
const logic = function (val) {
  console.log(val);
  let selections = ["Rock", "Paper", "Scissor"];
  let comGuess = Math.trunc(Math.random() * 3);
  console.log("comp guess = ", comGuess);
  if (comGuess !== val) {
    if (
      (val === 0 && comGuess == 1) ||
      (val === 1 && comGuess === 2) ||
      (val === 2 && comGuess === 0)
    ) {
      // computer win
      comp += 1;
      compScore.textContent = comp;
      result.textContent = `You Select ${selections[val]}, Computer Select ${selections[comGuess]}. Computer Win 😪`;
      result.classList.remove("hidden");
    } else if (
      (val === 0 && comGuess == 2) ||
      (val === 1 && comGuess === 0) ||
      (val === 2 && comGuess === 1)
    ) {
      // user win
      user += 1;
      userScore.textContent = user;
      result.textContent = `You Select ${selections[val]}, Computer Select ${selections[comGuess]}. You Win 🏆`;
      result.classList.remove("hidden");
    }
  } else {
    // Draw condition
    result.textContent = `You Select ${selections[val]}, Computer Select ${selections[comGuess]}. It's a Draw`;
    result.classList.remove("hidden");
  }
};

btnReset.addEventListener("click", init);
