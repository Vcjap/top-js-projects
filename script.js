let humanScore, computerScore = 0;

function getComputerChoice () {
    let choiceNumber = Math.floor(Math.random()*3);
    switch (choiceNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function getHumanChoice () {
    let humanChoice = prompt("Enter your choice").toLowerCase();
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        // console.log(humanChoice);
        return humanChoice;
    }
    else {
        console.log("Invalid choice, enter 'rock', 'paper' or 'scissors'");
        // console.log(humanChoice);
        getHumanChoice();
    }
}

function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice){
        console.log(`It's a tie! ${humanChoice} equals ${computerChoice}`);
    }
    else if (humanChoice === "rock" && computerChoice === "scissors"
    || humanChoice === "paper" && computerChoice === "rock"
    || humanChoice === "scissors" && computerChoice === "paper"
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    }
    else if (computerChoice === "rock" && humanChoice === "scissors"
    || computerChoice === "paper" && humanChoice === "rock"
    || computerChoice === "scissors" && humanChoice === "paper"
    ) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);