// Retrieve player names from session storage
const player1Name = sessionStorage.getItem("player1Name");
const player2Name = sessionStorage.getItem("player2Name");

// Update player names in the game
const player1NameElement = document.getElementById("player1-name");
const player2NameElement = document.getElementById("player2-name");
player1NameElement.textContent = player1Name;
player2NameElement.textContent = player2Name;

// Array of available choices
const choices = ["rock", "paper", "scissors", "lizard", "spock"];

// Variable to keep track of the current player's turn
let currentPlayer = 1;

// Function to switch the current player's turn
function switchTurn() {
  currentPlayer = currentPlayer === 1 ? 2 : 1;
}

// Function to determine the winner
function determineWinner(player1Choice, player2Choice) {
  // Game logic to determine the winner
  // ...

  // Update the result display
  const resultElement = document.getElementById("result");
  resultElement.textContent = `${player1Name}'s ${player1Choice} vs ${player2Name}'s ${player2Choice}: ${winner} Wins!`;
}

// Function to handle player's choice
function handlePlayerChoice(choice) {
  if (currentPlayer === 1) {
    // Player 1's turn
    const player1ChoiceElement = document.getElementById("player1-choice");
    player1ChoiceElement.textContent = choice;

    // Switch to Player 2's turn
    switchTurn();
  } else {
    // Player 2's turn
    const player2ChoiceElement = document.getElementById("player2-choice");
    player2ChoiceElement.textContent = choice;

    // Determine the winner
    const player1Choice = player1ChoiceElement.textContent;
    const player2Choice = player2ChoiceElement.textContent;
    determineWinner(player1Choice, player2Choice);

    // Switch to Player 1's turn
    switchTurn();
  }
}

// Add event listeners to the game buttons
const gameButtons = document.getElementsByClassName("choice-btn");
for (let i = 0; i < gameButtons.length; i++) {
  const button = gameButtons[i];
  button.addEventListener("click", () => {
    const choice = button.dataset.choice;
    handlePlayerChoice(choice);
  });
}
