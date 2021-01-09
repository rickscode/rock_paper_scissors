function game (playerSelection, computerSelection) {

// Initiliaze variables to hold different counters
    let playerScore = 0;
    let computerScore = 0;
    let gameCount = 0;
    
// Initiliaze a while loop to play the game for 5 rounds
    while(gameCount < 5) {

// Initialize variable to initialize promt and convert input to lowercase
    let playerSelection = prompt("please type rock, paper or scissors").toLowerCase();
    
// Initialize variable to inialize computerPlay function
    let computerSelection = computerPlay();
   
// Initialize function for computer to select a random string from the array
    function computerPlay () {
    let arr = ["rock", "paper", "scissors"];

    return arr[Math.floor(arr.length * Math.random())];

    }

// Initialize conditional statements in order to calculate score results
    // Draw    
    if(playerSelection == computerSelection){
        console.log("draw");
        playerScore += 1
        computerScore += 1
        gameCount += 1
    
    // win
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

    // lose
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

    }else if(gameCount == 5 && computerScore > playerScore){
      alert("Game Lost");

    }else if(gameCount == 5 && playerScore == computerScore){
      alert("Game Draw");
    
    }

}

}
// Invoke game function
game();

