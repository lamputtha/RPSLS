// Constants for the game choices
const choices = [
  { name: "rock", emoji: "🪨" },
  { name: "paper", emoji: "📄" },
  { name: "scissors", emoji: "✂️" },
  { name: "lizard", emoji: "🦎" },
  { name: "spock", emoji: "🖖" }
];

// Player and computer scores
let playerScore = 0;
let computerScore = 0;

// Function to generate computer's choice
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex].name;
}

// Function to update the game result
function updateResult(playerChoice, computerChoice) {
  const resultText = document.getElementById("result-text");
  const playerChoiceElement = document.getElementById("player-choice");
  const computerChoiceElement = document.getElementById("computer-choice");

  const playerEmoji = choices.find(choice => choice.name === playerChoice).emoji;
  const computerEmoji = choices.find(choice => choice.name === computerChoice).emoji;

  playerChoiceElement.innerHTML = playerEmoji;
  computerChoiceElement.innerHTML = computerEmoji;

  // Determine the winner
  if (playerChoice === computerChoice) {
    resultText.textContent = "It's a tie!";
  } else if (
    (playerChoice === "rock" && (computerChoice === "scissors" || computerChoice === "lizard")) ||
    (playerChoice === "paper" && (computerChoice === "rock" || computerChoice === "spock")) ||
    (playerChoice === "scissors" && (computerChoice === "paper" || computerChoice === "lizard")) ||
    (playerChoice === "lizard" && (computerChoice === "paper" || computerChoice === "spock")) ||
    (playerChoice === "spock" && (computerChoice === "rock" || computerChoice === "scissors"))
  ) {
    resultText.textContent = "You win!";
    playerScore++;
  } else {
    resultText.textContent = "Computer wins!";
    computerScore++;
  }

  // Update the score
  updateScore();

  // Check if any player has reached the winning score of 5
  if (playerScore === 5) {
    endGame("You win the game!");
  } else if (computerScore === 5) {
    endGame("Computer wins the game!");
  }
}

// Function to update the score
function updateScore() {
  const playerScoreElement = document.getElementById("player-score");
  const computerScoreElement = document.getElementById("computer-score");

  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
}

// Function to end the game and display the final result
function endGame(message) {
  const resultText = document.getElementById("result-text");
  const playAgainButton = document.getElementById("play-again");
  const choices = document.getElementsByClassName("choice");

  resultText.textContent = message;
  playAgainButton.style.display = "block";

  // Disable the game choices
  for (let i = 0; i < choices.length; i++) {
    choices[i].disabled = true;
  }
}

// Function to reset the game
function resetGame() {
  playerScore = 0;
  computerScore = 0;

  updateScore();

  const resultText = document.getElementById("result-text");
  const playAgainButton = document.getElementById("play-again");
  const choices = document.getElementsByClassName("choice");

  resultText.textContent = "";
  playAgainButton.style.display = "none";

  // Enable the game choices
  for (let i = 0; i < choices.length; i++) {
    choices[i].disabled = false;
  }
}

// Function to go back to the main menu
function backToMenu() {
  location.href = "menu.html";
}
