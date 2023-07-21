//Page loads game
let userScore = 0;
let compScore = 0;
let milkWins = 0;
let gameRound = 1;

//Computer Selection Engine:
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const rng = Math.floor(Math.random() * 3);
    return choices[rng];
}

//Round Play Engine:
function round(userIn) {
const computerChoice = getComputerChoice();
let resultMessage;

if (userIn === 'milk') {
  if (computerChoice === 'paper') {
    milkWins++;
    userScore++;
    resultMessage = 'Computer chose ' + computerChoice + '. Player wins with ' + userIn;
    } else {
    compScore++
    resultMessage = 'Computer chose ' + computerChoice + '. Player loses with ' + userIn
    }  
  } else if (
      (userIn === 'rock' && computerChoice === 'scissors') ||
      (userIn === 'paper' && computerChoice === 'rock') ||
      (userIn === 'scissors' && computerChoice === 'paper')
    ) {
      userScore++;
      resultMessage = 'Computer chose ' + computerChoice + '. Player wins with ' + userIn;
    } else if (userIn === computerChoice) {
        resultMessage = 'Round is a tie with double ' + userIn;
      } else {
      compScore++;
      resultMessage = 'Computer chose ' + computerChoice + '. Player loses with ' + userIn;
    }

    const resElm = document.getElementById('gamestat');
    resElm.textContent = 'Round: ' + gameRound + ' - Player: ' + userScore + ' - Computer: ' + compScore;

    const milkElm = document.getElementById('milkstat');
    milkElm.textContent = 'Decisive Milk Victories: ' + milkWins;

    const matchElm = document.getElementById('matchstat');
    matchElm.textContent = resultMessage;

    const endElm = document.getElementById('results');
    
    
    if (gameRound === 5 || 10 || 15 || 20) {
        let winner;
        if (userScore > compScore) {
            winner = 'Player ahead';
          } else if (userScore < compScore) {
            winner = 'Computer ahead';
          } else {
            winner = 'Tie';
          }
          endElm.textContent = winner;
        } else {
  }     gameRound++
}

//Reference to buttons & event listeners:
document.getElementById('rock').addEventListener('click',  () => round('rock'));   
document.getElementById('paper').addEventListener('click', () => round('paper'));  
document.getElementById('scissors').addEventListener('click', () => round('scissors'));
document.getElementById('milk').addEventListener('click', () => round('milk'));