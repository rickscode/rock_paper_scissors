// Initiliaze variables to hold different counters
let playerScore = 0;
let computerScore = 0;
let gameCount = 0;


// Select all the buttons and place in a node list
const buttons = document.querySelectorAll('button');

// Iterate through the node list of buttons
buttons.forEach((button) => {

// Click event listener wich calls gameRound function 
button.addEventListener('click', gameRound);       
});


function gameRound (e) {

// Initialize variable to initialize promt and convert input to lowercase
let playerSelection = e.target.id;   
// confirm correct selection
console.log(e);

// Initialize variable to inialize computerPlay function
let computerSelection = computerPlay();

// Initialize function for computer to select a random string from the array
function computerPlay () {
let arr = ["rock", "paper", "scissors"];

return arr[Math.floor(arr.length * Math.random())];

}

// Initialize conditional statements in order to calculate score results

// Draw scenario  
if(playerSelection == computerSelection){
    console.log("draw");
    playerScore += 1
    computerScore += 1
    gameCount += 1

// Win scenario
}else if(playerSelection == "rock" && computerSelection == "scissors"){
    playerScore += 1
    console.log("win");
    gameCount += 1

}else if(playerSelection == "scissors" && computerSelection == "paper"){
    playerScore += 1
    console.log("win");
    gameCount += 1

}else if(playerSelection == "paper" && computerSelection == "rock"){
    playerScore += 1
    console.log("win");
    gameCount += 1

// Lose scenario
}else if(playerSelection == "rock" && computerSelection == "paper"){
    computerScore += 1
    console.log("lose");
    gameCount += 1

}else if(playerSelection == "scissors" && computerSelection == "rock"){
    computerScore += 1
    console.log("lose");
    gameCount += 1

}else if(playerSelection == "paper" && computerSelection ==  "scissors"){
    computerScore += 1
    console.log("lose");
    gameCount += 1
}

// Initialize conditional statements to display game result with alert window
if(gameCount == 5 && playerScore > computerScore) {
  alert("Game Winner");
  resetGame();

}else if(gameCount == 5 && computerScore > playerScore){
  alert("Game Lost");
  resetGame();

}else if(gameCount == 5 && playerScore == computerScore){
  alert("Game Draw");
  resetGame();

}

// Variable too hold selectors to score divs
const fScore = document.querySelector("#totalscore");
const pScore = document.querySelector("#playerscore");
const cScore = document.querySelector("#computerscore");

// Display real time scores in divs with text.content
fScore.textContent = gameCount;
pScore.textContent = playerScore;
cScore.textContent = computerScore;

}

// Function to reset game count after one round 
function resetGame () {
    gameCount = 0;
}





