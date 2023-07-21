//Page loads,
//Computer selection engine
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const rng = Math.floor(Math.random() * 3);
    return choices[rng];
}
//Game is set up
function round(userIn, computerChoice) {
userIn = userIn.toLowerCase();

if (userIn === computerChoice) {
    return "Round is a tie with double " + userIn;
    } else if (
    (userIn === 'rock' && computerChoice === 'scissors') ||
    (userIn === 'paper' && computerChoice === 'rock') ||
    (userIn === 'scissors' && computerChoice === 'paper') ||
    (userIn === 'milk' && computerChoice === 'paper')
    ) {
    return "player wins with " + userIn;
    } else {
    return "player loses with " + userIn;
    }
}
//Function to start game 
function game() {
    let userScore = 0;
    let compScore = 0;

    for (let i = 0; i < 5; i++) {
        //Player is prompted and makes selection
        const userIn = prompt("Make a selection...");
        const computerChoice = getComputerChoice();
        console.log(round(userIn, computerChoice))
        //push score
        if (round(userIn, computerChoice).includes("wins")) {
        userScore++;
        } else if (round(userIn, computerChoice).includes("loses")) {
        compScore++;
        } 
    }
//Determine final score
    if (userScore > compScore) {
        console.log("player wins match");
        } else if (userScore < compScore) {
        console.log("computer wins match");
        } else {
        console.log("player ties match with computer");
        }
}

//play
game()