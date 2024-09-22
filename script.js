const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const results = document.querySelector("#results");
const score = document.querySelector("score");
const computer = document.querySelector("computer");
const human = document.querySelector("human");


let humanScore = 0;
let computerScore = 0;


// Function to get a random choice by the computer
function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        return "rock";
    }
    else if (randomNumber === 2){
        return "paper";
    }
    else {
        return "scissors";
    }
}




// Function to compare user input to the computer's value 
function compareChoice (humanChoice, computerChoice) {

    if (humanChoice === computerChoice){
        document.getElementById("results").textContent = `Both have chosen ${humanChoice}, Play on!`;
    }

    else if (humanChoice === "rock" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "rock" ){
        document.getElementById("results").textContent = `Computer has chosen ${computerChoice}, 1 point to the computer!`;
        computerScore++;
    }

    else {
        document.getElementById("results").textContent = `Computer has chosen ${computerChoice}, you won 1 point!`;
        humanScore++;
    }

}

// Function to play one round
function playRound (humanChoice) {
    let computerChoice = getComputerChoice();
    compareChoice(humanChoice, computerChoice);
    document.getElementById("computerScore").textContent =`${computerScore}`;  
    document.getElementById("humanScore").textContent = `${humanScore}`;    
}

// Function to ask if the user wants to play again
function playAgain (string) {
    const para = document.createElement("p");
    para.textContent = "Would you like to play again?"
    document.body.appendChild(para);
    const playAgainBtn = document.createElement("button");
    playAgainBtn.textContent = "Play Again";
    
    document.body.appendChild(playAgainBtn);
  
    playAgainBtn.addEventListener("click", function (e) {
        para.remove()
        playAgainBtn.remove();
        resetGame();
    });
  
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    document.getElementById("results").textContent = "";
    document.getElementById("computerScore").textContent = `${computerScore}`;
    document.getElementById("humanScore").textContent = `${humanScore}`;
}




function checkScore() {
    if (humanScore === 5){
        document.getElementById("results").textContent = `You beat the computer's score ${computerScore} with a score of ${humanScore}. Well done!`;
        playAgain();
    }
    else if (computerScore === 5) {
       document.getElementById("results").textContent = `You lost to the computer's score ${computerScore} with a score of ${humanScore}. Better luck next time!`;
       playAgain();
    }
}

rockBtn.addEventListener("click", function (e) {
    if (computerScore === 5 || humanScore === 5){
        return;
    }
    let humanChoice = "rock";
    playRound(humanChoice);
    checkScore();
    });

paperBtn.addEventListener("click", function (e) {
    if (computerScore === 5 || humanScore === 5){
        return;
    }
    let humanChoice = "paper";
    playRound(humanChoice);
    checkScore();
    });

scissorsBtn.addEventListener("click", function (e) {
    if (computerScore === 5 || humanScore === 5){
        return;
    }
    let humanChoice = "scissors";
    playRound(humanChoice);
    checkScore();
    });



// Inital start
playGame();

