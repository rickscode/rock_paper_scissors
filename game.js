// Initiliaze variables to hold different counters
let playerScore = 0;
let computerScore = 0;
let gameCount = 0;
let roundResult = "";


// Initiliaze variable to hold h1 element
let textAnimate = document.querySelector('h1');
textAnimate.innerHTML = textAnimate.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// Animate h1 text content
anime.timeline({loop: false})
  .add({
    targets: 'h1 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 100,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: 'h1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

// Increase button size on hover
function bigImg(x) {
  x.style.height = "325px";
  x.style.width = "325px";
}
// Increase button size after hover
function normalImg(x) {
  x.style.height = "300px";
  x.style.width = "300px";
}

// Select all the buttons and place in a node list
const buttons = document.querySelectorAll('button');

// Iterate through the node list of buttons
buttons.forEach((button) => {

// Click event listener wich calls gameRound function 
button.addEventListener('click', gameRound);       
});

// Initialzie gameRound function
function gameRound (e) {

// Initialize variable to initialize promt and convert input to lowercase
let playerSelection = e.target.id;   

// Initialize variable to inialize computerPlay function
let computerSelection = computerPlay();

// Initialize function for computer to select a random string from the array
function computerPlay () {
let arr = ["rock", "paper", "scissors"];

return arr[Math.floor(arr.length * Math.random())];

}

// Initialize conditional statements in order to calculate score results

// Draw scenario conditional statement
if(playerSelection == computerSelection){
    playerScore += 1
    computerScore += 1
    gameCount += 1
    roundResult = "draw";

// Win scenario conditional statement 
}else if(playerSelection == "rock" && computerSelection == "scissors"){
    playerScore += 1
    gameCount += 1
    roundResult = "win";

}else if(playerSelection == "scissors" && computerSelection == "paper"){
    playerScore += 1
    gameCount += 1
    roundResult = "win";

}else if(playerSelection == "paper" && computerSelection == "rock"){
    playerScore += 1
    gameCount += 1
    roundResult = "win";

// Lose scenario conditional statement
}else if(playerSelection == "rock" && computerSelection == "paper"){
    computerScore += 1
    gameCount += 1
    roundResult = "lose";

}else if(playerSelection == "scissors" && computerSelection == "rock"){
    computerScore += 1
    gameCount += 1
    roundResult = "lose";

}else if(playerSelection == "paper" && computerSelection ==  "scissors"){
    computerScore += 1
    gameCount += 1
    roundResult = "lose";
}

// Initialize conditional statements to display game result with alert window
if(gameCount == 5 && playerScore > computerScore) {
  roundResult = "Game Winner";
  resetGame();

}else if(gameCount == 5 && computerScore > playerScore){
  roundResult = "Game Lost";
  resetGame();

}else if(gameCount == 5 && playerScore == computerScore){
  roundResult = "Game Draw";
  resetGame();

}

// Variable too hold selectors to score divs
const fScore = document.querySelector("#totalscore");
const rScore = document.querySelector("#roundscore");

// Display real time scores in divs with text.content
fScore.textContent = roundResult;
rScore.textContent = gameCount;

}

// Function to reset game count after one round 
function resetGame () {
    gameCount = 0;
}





