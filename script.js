const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const results = document.querySelector("#results")










let humanScore = 0;
let computerScore = 0;


// Function to get a random choice by the computer
function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        return "rock";
    }
    else if (randomNumber === 2){
        return "paper"
    }
    else {
        return "scissors"
    }
}


// Function to check user input and convert it to "rock", "paper", or "scissors"
function checkHumanChoice (string) {
    string = string.toLowerCase();

    if (string === "rock" || string == "r") {
        return string = "rock";
    }

    else if (string === "paper" || string === "p") {
        return string = "paper";
    }

    else if (string === "scissors" || string === "s") {
        return string = "scissors";
    }

    else {
        return false;
    }
}

// Function to compare user input to the computer's value 
function compareChoice (humanChoice, computerChoice) {

    if (humanChoice === computerChoice){
        document.getElementById("results").textContent = "It's a tie!"
        alert(`Both have chosen ${humanChoice}, Play on!`);
    }

    else if (humanChoice === "rock" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "rock" ){

        alert(`Computer has chosen ${computerChoice}, 1 point to the computer!`);
        computerScore++;
    }

    else {
        alert(`Computer has chosen ${computerChoice}, you won 1 point!`);
        humanScore++;
    }

}

// Function to play one round
function playRound (humanChoice) {



    /* Loop to keep prompting user if the input is not valid 
    do {
        let input = prompt("Please pick between Rock (R), Paper (P) or Scissors (S)!");
        humanChoice = checkHumanChoice(input);
    } while(!checkHumanChoice(humanChoice)); // Loop until a valid input is entered

    */
   
    let computerChoice = getComputerChoice();
    compareChoice(humanChoice, computerChoice);
}

// Function to ask if the user wants to play again
function playAgain (string) {
    let userInput;
    humanScore = 0;
    computerScore = 0;

    do {
        userInput = prompt("Would you like to play again? (Yes/No)").toLowerCase(); 
    } while (userInput !== "yes" && userInput !== "y" && userInput !== "no" && userInput !== "n");

    userInput === "yes" || userInput === "y" ? playGame() :  alert("Thank you for playing!");
}


getResult () {

}
   





rockBtn.addEventListener("click", function (e) {
    let humanChoice = "rock"
    playRound(humanChoice);
    });
   
    
paperBtn.addEventListener("click", function (e) {
    let humanChoice = "paper"
    playRound(humanChoice);
    });

scissorsBtn.addEventListener("click", function (e) {
    let humanChoice = "scissors"
    playRound(humanChoice);
    });
/* 
// FUnction to play full game
function playGame() {

    // Play for 5 rounds
   for( let i = 1; i <= 5; i++) {
        playRound();
    }
    if (humanScore > computerScore){
        alert(`You beat the computer's score ${computerScore} with a score of ${humanScore}. Well done!` )
    }

    else if (humanScore < computerScore) {
        alert(`You lost to the computer's score ${computerScore} with a score of ${humanScore}. Better luck next time!` )
    }

    else {
        alert(`The game comes to a tie with both a score of ${computerScore}!`)
    }

    // After 5 rounds, ask user if they want to play again
    playAgain();
    
    
}

*/

// Inital start
playGame();

