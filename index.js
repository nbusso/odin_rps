// global variables
let choices = ["rock", "paper", "scissors"];
let playerChoice = "none";
const btnContainer = document.querySelector("#btn-container");

// computer choice logic
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

// human choice logic

btnContainer.addEventListener("click", (e) => {
  console.log(`Player selected: "${e.target.id}"`);
  playerChoice = e.target.id;

  playRound(getHumanChoice(), getComputerChoice());
});

// render

//! -------------
/* const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const playerSelection = (e) => {
  console.log(e.target.id);
  return e.target;
};

rockBtn.addEventListener("click", playerSelection); */
//! ------------

function getHumanChoice() {
  return playerChoice;
}

function playRound(humanChoice, computerChoice) {
  //roundNumber += 1;

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
