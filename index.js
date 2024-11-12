// global variables
let choices = ["rock", "paper", "scissors"];
let playerChoice = "";
let roundNumber = 0;
let drawNumber = 0;
let humanScore = 0;
let computerScore = 0;
const btnContainer = document.querySelector("#btn-container");
const matchInfo = document.querySelector("#match-info");
const matchLog = document.querySelector("#match-log");

// computer choice logic
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

// human choice logic
function getHumanChoice() {
  return playerChoice;
}

// round start
btnContainer.addEventListener("click", (e) => {
  console.log(`Player selected: "${e.target.id}"`);
  if (e.target.nodeName === "BUTTON" && e.target.id != "reset") {
    playerChoice = e.target.id;
  } else if (e.target.id === "reset") {
    resetGame();
    return;
  } else {
    return;
  }

  playRound(getHumanChoice(), getComputerChoice());
});

// render
const renderRounds = document.querySelector("#render-rounds>span");
const renderDraws = document.querySelector("#render-draws>span");
const renderPlayerScore = document.querySelector("#render-player-score>span");
const renderComputerScore = document.querySelector(
  "#render-computer-score>span"
);

const scoreRenderer = () => {
  renderRounds.textContent = roundNumber;
  renderDraws.textContent = drawNumber;
  renderPlayerScore.textContent = humanScore;
  renderComputerScore.textContent = computerScore;

  if (humanScore === 5) finishGame("player");
  if (computerScore === 5) finishGame("computer");
};

const logRenderer = (text) => {
  const newLog = document.createElement("li");
  newLog.textContent = text;
  matchLog.appendChild(newLog);
};

function playRound(humanChoice, computerChoice) {
  roundNumber += 1;

  // play round logic
  if (humanChoice === "rock") {
    if (computerChoice === "rock") {
      logRenderer("DRAW!, both players selected ROCK!");
      drawNumber += 1;
    } else if (computerChoice === "paper") {
      logRenderer("You lose! PAPER beats ROCK!");
      computerScore += 1;
    } else {
      logRenderer("You win! ROCK beats SCISSORS");
      humanScore += 1;
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      logRenderer("You win! PAPER beats ROCK!");
      humanScore += 1;
    } else if (computerChoice === "paper") {
      logRenderer("DRAW!, both players selected PAPER!");
      drawNumber += 1;
    } else {
      logRenderer("You lose! SCISSORS beats PAPER");
      computerScore += 1;
    }
  } else {
    if (computerChoice === "rock") {
      logRenderer("You lose! ROCK beats SCISSORS!");
      computerScore += 1;
    } else if (computerChoice === "paper") {
      logRenderer("You win! SCISSORS beats PAPER!");
      humanScore += 1;
    } else {
      logRenderer("DRAW!, both players selected SCISSORS!");
      drawNumber += 1;
    }
  }

  scoreRenderer();
}

const toggleMatch = () => {
  Array.from(btnContainer.children).forEach((e) => {
    e.toggleAttribute("disabled");
  });
};

const finishGame = (winner) => {
  toggleMatch();

  if (winner === "player") {
    logRenderer("PLAYER WINS!! Congratulations");
  } else {
    logRenderer("COMPUTER WINS! Better luck next time!");
  }
};

const resetGame = () => {
  // scores reset
  playerChoice = "";
  roundNumber = 0;
  drawNumber = 0;
  humanScore = 0;
  computerScore = 0;

  // log reset
  //matchLog.removeChild("LI");
  while (matchLog.firstChild) {
    matchLog.removeChild(matchLog.firstChild);
  }

  scoreRenderer();
  toggleMatch();
};
