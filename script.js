
const humanScore = 0;
const computerScore = 0;


// Function to get a random choice by the computer
function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    return randomNumber;
}

function getHumanChoice (string) {
    string = string.toLowerCase();
    return string;
    
}

// Function to check user input is valid
function checkHumanChoice (string) {
    if (string === "rock") {
        return string;
    }

    else if (string === "paper") {
        return string;
    }

    else if (string === "scissors") {
        return string;
    }

    else {
        return false;
    }
}

function compareScore (humanChoice, computerChoice) {

    if (humanChoice === "rock" && computerChoice === 1 || humanChoice === "paper" && computerChoice === 2 || humanChoice === "scissors" && computerChoice === 3 ){
        alert(`Computer chose ${humanChoice}, Play on!`);
    }

    else if (humanChoice == "rock" )

}


function playRound (humanChoice, computerChoice) {

    // Loop to keep prompting user if the input is not valid 
    do {
        humanChoice = getHumanChoice((prompt("Please pick between Rock, Paper or Scissors!")));
    } while(!checkHumanChoice(humanChoice));
   
    computerChoice = getComputerChoice();
    


}

playRound();