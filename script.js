

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

function getHumanChoice () { // Gets and returns human choice. 
    let humanChoice = prompt("Enter your choice").toLowerCase(); // Get the choice from the player
    while (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") { //If the input is invalid, prompt again
        console.log("Invalid choice, enter 'rock', 'paper' or 'scissors'"); //Inform the player the choice is invalid
        humanChoice = prompt("Enter your choice").toLowerCase(); //Try to get a new choice
    }
    return humanChoice;
}

function playRound (humanChoice, computerChoice) { // play a round of the game. Returns score increment
    if (humanChoice === computerChoice){
        console.log(`It's a tie! ${humanChoice} equals ${computerChoice}`);
        return "tie";
    }
    else if (humanChoice === "rock" && computerChoice === "scissors"
    || humanChoice === "paper" && computerChoice === "rock"
    || humanChoice === "scissors" && computerChoice === "paper"
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        return "win";
    }
    else if (computerChoice === "rock" && humanChoice === "scissors"
    || computerChoice === "paper" && humanChoice === "rock"
    || computerChoice === "scissors" && humanChoice === "paper"
    ) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
    return "lose";
}



// playRound(humanSelection, computerSelection);

function playGame () { // play 5 rounds of the game
    let humanScore = 0, computerScore = 0;
    for (let game_counter = 0; game_counter < 5; game_counter++) {
        let humanSelection = getHumanChoice(); // Get human choice
        let computerSelection = getComputerChoice(); // Get computer choice
        let result = playRound(humanSelection, computerSelection); //Play a round and return the result
        switch (result) { // Increment player or computer score based on result
            case "win":
                humanScore++;
                break;
            case "lose":
                computerScore++;
                break;
            case "tie":
                break;
        }
        console.log(`Human score: ${humanScore}, Computer score: ${computerScore}`);
    }
    // Print the result of the game
    if (humanScore > computerScore) {
        console.log(`You win the game! ${humanScore} to ${computerScore}`);
    }
    else if (humanScore < computerScore) {
        console.log(`You lose the game! ${humanScore} to ${computerScore}`);
    }
    else {
        console.log(`It's a tie! ${humanScore} to ${computerScore}`);
    }
}

playGame();