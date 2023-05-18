// Function to start the game against the computer
function startGameComputer() {
  // Save player name in session storage
  const playerName = prompt("Enter your name:");
  sessionStorage.setItem("playerName", playerName);

  // Redirect to the game against computer
  window.location.href = "game-computer.html";
}

// Function to start the game against another player
function startGamePlayer() {
  // Save player names in session storage
  const player1Name = prompt("Enter Player 1's name:");
  const player2Name = prompt("Enter Player 2's name:");
  sessionStorage.setItem("player1Name", player1Name);
  sessionStorage.setItem("player2Name", player2Name);

  // Redirect to the game against another player
  window.location.href = "game-player.html";
}

// Add event listeners to the menu buttons
document.getElementById("play-computer-btn").addEventListener("click", startGameComputer);
document.getElementById("play-player-btn").addEventListener("click", startGamePlayer);
