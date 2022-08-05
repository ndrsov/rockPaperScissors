let roundCounter = 0;
let userPoints = 0;
let winOrLose = "won";
let playAgain;

// Getting DOM elements
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const round = document.querySelector("#round");
const score = document.querySelector("#score");
const hand = document.querySelector("#hand");

//User options

rockBtn.addEventListener("click", () => {
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
});
paperBtn.addEventListener("click", () => {
  const playerSelection = "paper";
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
});
scissorsBtn.addEventListener("click", () => {
  const playerSelection = "scissors";
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
});

// Create a the hand computer will choose
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  const options = ["rock", "paper", "scissors"];
  return (finalchoice = options[randomNumber]);
}

// Play a round using computer selection against user's
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  roundCounter++;
  round.textContent = `Round number ${roundCounter}`;
  // hand.textContent = `You played ${playerSelection} and the computer played ${computerSelection}`;
  //Checked points and round

  //Check hand
  if (roundCounter == 5) {
    hand.textContent = `All rounds have been played, you ${winOrLose}`;
    setGameOver();
  } else if (playerSelection == computerSelection) {
    hand.textContent = `You've both chosen ${computerSelection} no one wins round, play again`;
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    hand.textContent = `Computer played ${computerSelection}, paper beats rock, you lose this round.`;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    userPoints++;
    hand.textContent = `Computer played ${computerSelection}, rock beats scissors, you win this round.`;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    userPoints++;
    hand.textContent = `Computer played ${computerSelection}, paper beats rock, you win this round.`;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    hand.textContent = `Computer played ${computerSelection}, scissors beats paper, you lose this round.`;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    userPoints++;
    hand.textContent = `Computer played ${computerSelection}, scissors beats paper, you win this round.`;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    hand.textContent = `Computer played ${computerSelection}, rock beats scissors, you lose this round.`;
  } else {
    hand.textContent = "You didn't choose a valid option, try again";
  }

  score.textContent = `You have ${userPoints} points`;
}

//Game over function

function setGameOver() {
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
  playAgain = document.createElement("button");
  playAgain.textContent = "Play again";
  document.body.appendChild(playAgain);
  playAgain.addEventListener("click", resetGame);
}

// Reset game function

function resetGame() {
  roundCounter = 0;
  userPoints = 0;
  const resetMessages = document.querySelectorAll(".messages p");
  for (const message of resetMessages) {
    message.textContent = "";
  }
  playAgain.parentNode.removeChild(playAgain);
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;
}

// ToDo
// Check if you win or lose and printed correctly
// Display what hand the computer played
// Add more basic styles

// Creating a five round match

// function game() {
//   for (let i = 1; i <= 5; i++) {
//     playerSelection = prompt("What you choose?");
//     const computerSelection = getComputerChoice();
//     console.log(playRound(playerSelection, computerSelection));
//   }
// }

// testing our app

// const playerSelection = "scissors";
// const computerSelection = getComputerChoice();

// console.log(playRound(playerSelection, computerSelection));
