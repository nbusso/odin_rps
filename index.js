// global variables
let choices = ["rock", "paper", "scissors"];

// computer choice logic
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

// human choice logic
function getHumanChoice() {
  let selectedHand = prompt('Enter "rock", "paper" or "scissors"');

  while (!choices.includes(selectedHand.toLowerCase())) {
    selectedHand = prompt(
      'Please, enter "rock", "paper" or "scissors", otherwise the game will not work'
    ).toLowerCase();

    return selectedHand.toLowerCase();
  }

  return selectedHand.toLowerCase();
}

// play full game logic
function playGame() {
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
