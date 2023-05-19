const choices = ["rock", "paper", "scissors", "lizard", "spock"];
let playerScore = 0;
let computerScore = 0;

function playerChoice(choice) {
  const computerChoice = getComputerChoice();
  const result = getResult(choice, computerChoice);

  displayChoices(choice, computerChoice);
  updateScore(result);

  if (playerScore >= 5 || computerScore >= 5) {
    endGame();
  }
}

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "tie";
  } else if (
    (playerChoice === "rock" && (computerChoice === "scissors" || computerChoice === "lizard")) ||
    (playerChoice === "paper" && (computerChoice === "rock" || computerChoice === "spock")) ||
    (playerChoice === "scissors" && (computerChoice === "paper" || computerChoice === "lizard")) ||
    (playerChoice === "lizard" && (computerChoice === "paper" || computerChoice === "spock")) ||
    (playerChoice === "spock" && (computerChoice === "rock" || computerChoice === "scissors"))
  ) {
    return "win";
  } else {
    return "lose";
  }
}

function displayChoices(playerChoice, computerChoice) {
  const playerChoiceElement = document.getElementById("player-choice");
  const computerChoiceElement = document.getElementById("computer-choice");

  playerChoiceElement.textContent = getEmoji(playerChoice);
  computerChoiceElement.textContent = getEmoji(computerChoice);
}

function getEmoji(choice) {
  switch (choice) {
    case "rock":
      return "🪨";
    case "paper":
      return "📄";
    case "scissors":
      return "✂️";
    case "lizard":
      return "🦎";
    case "spock":
      return "🖖";
    default:
      return "";
  }
}

function updateScore(result) {
  const playerScoreElement = document.getElementById("player-score");
  const computerScoreElement = document.getElementById("computer-score");
  const resultTextElement = document.getElementById("result-text");

  if (result === "win") {
    playerScore++;
    resultTextElement.textContent = "You Win!";
  } else if (result === "lose") {
    computerScore++;
    resultTextElement.textContent = "Computer Wins!";
  } else {
    resultTextElement.textContent = "It's a Tie!";
  }

  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
}

function endGame() {
  const playAgainButton = document.getElementById("play-again");
  playAgainButton.textContent = "Reset";
  playAgainButton.onclick = resetGame;
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;

  const playerScoreElement = document.getElementById("player-score");
  const computerScoreElement = document.getElementById("computer-score");
  const resultTextElement = document.getElementById("result-text");
  const playAgainButton = document.getElementById("play-again");

  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
  resultTextElement.textContent = "";
  playAgainButton.textContent = "Play Again";
  playAgainButton.onclick = null;
}

function backToMenu() {
  location.href = "index.html";
}
