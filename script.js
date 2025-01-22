

function getComputerChoice () { // returns computer choice
    let choiceNumber = Math.floor(Math.random()*3); // generates random number between 0 and 2
    switch (choiceNumber) { // assign value based on number
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function getHumanChoice () { // returns human choice. If invalid, calls itself again
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

function playRound (humanChoice, computerChoice) { // play a round of the game. Returns score increment
    let humanScoreRound =0, computerScoreRound = 0;
    if (humanChoice === computerChoice){
        console.log(`It's a tie! ${humanChoice} equals ${computerChoice}`);
    }
    else if (humanChoice === "rock" && computerChoice === "scissors"
    || humanChoice === "paper" && computerChoice === "rock"
    || humanChoice === "scissors" && computerChoice === "paper"
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScoreRound++;
    }
    else if (computerChoice === "rock" && humanChoice === "scissors"
    || computerChoice === "paper" && humanChoice === "rock"
    || computerChoice === "scissors" && humanChoice === "paper"
    ) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScoreRound++;
    }
    return humanScoreRound, computerScoreRound;
}



// playRound(humanSelection, computerSelection);

function playGame () { // play 5 rounds of the game
    let humanScore = 0, computerScore = 0;
    let humanScoreIncrement = 0, computerScoreIncrement = 0;
    for (let game_counter = 0; game_counter < 5; game_counter++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        humanScoreIncrement, computerScoreIncrement = playRound(humanSelection, computerSelection);
        humanScore += humanScoreIncrement;
        computerScore += computerScoreIncrement;
        console.log(`Human score: ${humanScore}, Computer score: ${computerScore}`);
    }
}

playGame();