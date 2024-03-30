let playerScore = 0
let computerScore = 0

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors']
  const randomNum = Math.floor(Math.random() * 3)
  const computerSelection = choices[randomNum]
  return computerSelection
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'rock' && computerSelection === 'rock') {
    return 'You tied! You both picked rock.'
  } else if (playerSelection === 'paper' && computerSelection === 'paper') {
    return 'You tied! You both picked paper.'
  } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
    return 'You tied! You both picked scissors.'
  } 
  
  // PLAYER PICKS ROCK
  else if (playerSelection === 'rock' && computerSelection === 'paper') {
    computerScore++
    return 'You lose! Paper beats rock.'
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerScore++
    return 'You win! Rock beats scissors.'
  } 
  
  // PLAYER PICKS PAPER
  else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerScore++
    return 'You win! Paper beats rock.'
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    computerScore++
    return 'You lose! Scissors beats paper.'
  } 
  
  // PLAYER PICKS SCISSORS
  else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    computerScore++
    return 'You lose! Rock beats scissors.'
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScore++
    return 'You win! Scissors beats paper.'
  } 
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt('Choose what to throw:',).toLowerCase()
    const computerSelection = getComputerChoice()
    console.log('1', playRound(playerSelection, computerSelection))
  }

  if (playerScore > computerScore) {
    return 'You beat the computer!'
  } else if (playerScore < computerScore) {
    return 'You got beat by the computer!'
  } else {
    return 'You tied with the computer!'
  }
}

console.log(playGame())