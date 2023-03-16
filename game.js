"use strict";
window.onload=function(){
  
  //get the references for tthe DOM
  const playerScoreDisplay = document.querySelector("#player-score");
  const computerScoreDisplay = document.querySelector("#computer-score");
  const resultDisplay = document.querySelector("#result");

  //creatte a reference of the buttons
  const rockButton = document.getElementById("rock");
  rockButton.addEventListener("click", () => {
    const outcome = round("rock", computerPlay());
    updateScore(outcome);
  });

  const paperButton = document.querySelector("#paper");
  paperButton.addEventListener("click", () => {
    const outcome = round("paper", computerPlay());
    updateScore(outcome);
  });

  const scissorsButton = document.querySelector("#scissors");
  scissorsButton.addEventListener("click", () => {
    const outcome = round("scissors", computerPlay());
    updateScore(outcome);
  });

  //choose the computer selection from an array 
  function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  //play the round
  function round(playerSelection, computerSelection) {
    
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();
    
    //find the result
    switch (player) {
      case "rock":
        switch (computer) {
          case "rock":
            return "Tie!";
          case "paper":
            return "You lose!";
          case "scissors":
            return "You win!";
        }
      case "paper":
        switch (computer) {
          case "rock":
            return "You win!";
          case "paper":
            return "Tie!";
          case "scissors":
            return "You lose! ";
        }
      case "scissors":
        switch (computer) {
          case "rock":
            return "You lose!";
          case "paper":
            return "You win!";
          case "scissors":
            return "Tie! ";
        }
    }//end of parent switch 
  }//end of the round function

  //create the scores
  let playerScore = 0;
  let computerScore = 0;

  //create a function to update the results 
  function updateScore(outcome) {
    if (outcome.includes("win")) {
      playerScore++;
    } else if (outcome.includes("lose")) {
      computerScore++;
    }
    
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    resultDisplay.textContent = outcome;
    
    if (playerScore >= 5) {
      resultDisplay.textContent = "You won the game! Amazing!!!";
    } else if (computerScore >= 5) {
      resultDisplay.textContent = "You lost the game!";
    }
  }

}
