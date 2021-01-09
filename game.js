let userChoice = prompt("please type rock, paper or scissors").toLowerCase();
let computer = computerPlay();

function computerPlay () {
  let arr = ["rock", "paper", "scissors"];


return arr[Math.floor(arr.length * Math.random())];

}




function game (playerSelection, computerSelection) {
  
    let playerScore = 0;
    let computerScore = 0;
    
    
    //loop
    while(playerScore < 5 && computerScore < 5) {
    
    // draw
    
    if(playerSelection == computerSelection){
        console.log("draw");
        playerScore += 1
        computerScore += 1
    
    // win
    }else if(playerSelection == "rock" && computerSelection == "scissors"){
        playerScore += 1
        console.log("win");
    
    }else if(playerSelection == "scissors" && computerSelection == "paper"){
            playerScore += 1
        console.log("win");

    }else if(playerSelection == "paper" && computerSelection == "rock"){
        playerScore += 1
        console.log("win");

// lose

    }else if(playerSelection == "rock" && computerSelection == "paper"){
        computerScore += 1
        console.log("lose");
    }else if(playerSelection == "scissors" && computerSelection == "rock"){
        computerScore += 1
        console.log("lose");
    }else if(playerSelection == "paper" && computerSelection ==  "scissors"){
        computerScore += 1
        console.log("lose");
    }
    
    if(playerScore == 5) {
      console.log("Game Winner");
    }else if(computerScore == 5){
      console.log("Game Winner");
    }else if(playerScore == 5 && computerScore == 5){
      console.log("Game Draw");
}

}

}




game(userChoice, computer);

