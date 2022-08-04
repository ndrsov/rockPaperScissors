// Create a the hand computer will choose
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  const options = ["rock", "paper", "scissors"];
  return (finalchoice = options[randomNumber]);
}
// Play a round using computer selection against user's
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection == computerSelection) {
    return `You've both chosen ${computerSelection} no one wins, play again`;
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return `You lose, paper beats rock`;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return `You win, rock beats scissors`;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return `You win, paper beats rock`;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return `You lose, scissors beats paper`;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return `You win, scissors beats paper`;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return `You lose, rock beats scissors`;
  } else {
    return "You didn't choose a valid option, try again";
  }
}
// testing our app

const playerSelection = "scissors";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
