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
  playerChoice = e.target.id;

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
// play full game logic
/* function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let roundNumber = 0;
  let drawNumber = 0;

  function playRound(humanChoice, computerChoice) {
    roundNumber += 1;

    // play round logic
    if (humanChoice === "rock") {
      if (computerChoice === "rock") {
        console.log("DRAW!, both players selected ROCK!");
        drawNumber += 1;
        roundNumber -= 1;
      } else if (computerChoice === "paper") {
        console.log("You lose! PAPER beats ROCK!");
        computerScore += 1;
      } else {
        console.log("You win! ROCK beats SCISSORS");
        humanScore += 1;
      }
    } else if (humanChoice === "paper") {
      if (computerChoice === "rock") {
        console.log("You win! PAPER beats ROCK!");
        humanScore += 1;
      } else if (computerChoice === "paper") {
        console.log("DRAW!, both players selected PAPER!");
        drawNumber += 1;
        roundNumber -= 1;
      } else {
        console.log("You lose! SCISSORS beats PAPER");
        computerScore += 1;
      }
    } else {
      if (computerChoice === "rock") {
        console.log("You lose! ROCK beats SCISSORS!");
        computerScore += 1;
      } else if (computerChoice === "paper") {
        console.log("You win! SCISSORS beats PAPER!");
        humanScore += 1;
      } else {
        console.log("DRAW!, both players selected SCISSORS!");
        drawNumber += 1;
        roundNumber -= 1;
      }
    }
  }

  while (roundNumber < 5) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`
        \nRound N° ${roundNumber}
        \n --
        \nHuman Score: ${humanScore}
        \nComputer Score: ${computerScore}
        \nDraws: ${drawNumber}`);
  }

  if (humanScore > computerScore) {
    alert(`CONGRATULATIONS! YOU WON ${humanScore} to ${computerScore}`);
  } else {
    alert(`BETTER LUCK NEXT TIME! YOU LOST ${computerScore} to ${humanScore}`);
  }
}

playGame();

 */
