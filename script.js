let playerScore = 0
let computerScore = 0

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors']
  const randomNum = Math.floor(Math.random() * 3)
  const computerSelection = choices[randomNum]
  return computerSelection
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => {
  playRound('rock', getComputerChoice());
});

paper.addEventListener('click', () => {
  playRound('paper', getComputerChoice());
});

scissors.addEventListener('click', () => {
  playRound('scissors', getComputerChoice());
});

const resultsDiv = document.querySelector('#results');

const resetButton = document.querySelector('#reset');
resetButton.disabled = true;

resetButton.addEventListener('click', () => {
  playerScore = 0;
  computerScore = 0;
  resultsDiv.textContent = '';
  resetButton.disabled = true; // disable the button again after resetting the game
});

function playRound(playerSelection, computerSelection) {
  let result = '';
  if (playerSelection === computerSelection) {
    result = 'You tied! You both picked ' + playerSelection + '.';
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    playerScore++;
    result = 'You win! ' + playerSelection + ' beats ' + computerSelection + '.';
  } else {
    computerScore++;
    result = 'You lose! ' + computerSelection + ' beats ' + playerSelection + '.';
  }
  resultsDiv.textContent = result + ' Player score: ' + playerScore + ' Computer score: ' + computerScore;

  if (playerScore === 5) {
    resultsDiv.textContent += ' Congratulations, you won the game!';
    playerScore = 0;
    computerScore = 0;
    // Enable the reset button when the game is over
    resetButton.disabled = false;
  } else if (computerScore === 5) {
    resultsDiv.textContent += ' Sorry, the computer won the game.';
    playerScore = 0;
    computerScore = 0;
    // Enable the reset button when the game is over
    resetButton.disabled = false;
  }
}

// function playRound(playerSelection, computerSelection) {
//   if (playerSelection === 'rock' && computerSelection === 'rock') {
//     return 'You tied! You both picked rock.'
//   } else if (playerSelection === 'paper' && computerSelection === 'paper') {
//     return 'You tied! You both picked paper.'
//   } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
//     return 'You tied! You both picked scissors.'
//   } 
  
//   // PLAYER PICKS ROCK
//   else if (playerSelection === 'rock' && computerSelection === 'paper') {
//     computerScore++
//     return 'You lose! Paper beats rock.'
//   } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
//     playerScore++
//     return 'You win! Rock beats scissors.'
//   } 
  
//   // PLAYER PICKS PAPER
//   else if (playerSelection === 'paper' && computerSelection === 'rock') {
//     playerScore++
//     return 'You win! Paper beats rock.'
//   } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
//     computerScore++
//     return 'You lose! Scissors beats paper.'
//   } 
  
//   // PLAYER PICKS SCISSORS
//   else if (playerSelection === 'scissors' && computerSelection === 'rock') {
//     computerScore++
//     return 'You lose! Rock beats scissors.'
//   } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
//     playerScore++
//     return 'You win! Scissors beats paper.'
//   } 
// }

// // function playGame() {
// //   for (let i = 0; i < 5; i++) {
// //     const playerSelection = prompt('Choose what to throw:',).toLowerCase()
// //     const computerSelection = getComputerChoice()
// //     console.log('1', playRound(playerSelection, computerSelection))
// //   }

// //   if (playerScore > computerScore) {
// //     return 'You beat the computer!'
// //   } else if (playerScore < computerScore) {
// //     return 'You got beat by the computer!'
// //   } else {
// //     return 'You tied with the computer!'
// //   }
// // }

// // console.log(playGame())