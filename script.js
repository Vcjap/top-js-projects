

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

function playRound (humanChoice, computerChoice, score) { // play a round of the game. Returns score increment
    const resultSection = document.querySelector("#results")
    let container = document.createElement("div");
    let resultRound = document.createElement("span");
    let currentScore = document.createElement("div");
    if (humanChoice === computerChoice){
        resultRoundText = `It's a tie! ${humanChoice} equals ${computerChoice}`;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors"
    || humanChoice === "paper" && computerChoice === "rock"
    || humanChoice === "scissors" && computerChoice === "paper"
    ) {
        resultRoundText = `You win! ${humanChoice} beats ${computerChoice}`;
        score[0] += 1;
    }
    else if (computerChoice === "rock" && humanChoice === "scissors"
    || computerChoice === "paper" && humanChoice === "rock"
    || computerChoice === "scissors" && humanChoice === "paper"
    ) {
        resultRoundText = `You lose! ${computerChoice} beats ${humanChoice}`;
        score[1] += 1;
    }
    else {
        resultRound = "logic error";
    }

    // Use the result to create the output message
    // The output message includes the results of the round and the current score
    resultRound.textContent = resultRoundText;
    currentScore.textContent = ` Player: ${score[0]}, Computer: ${score[1]}`;
    container.appendChild(resultRound);
    container.appendChild(currentScore);
    resultSection.appendChild(container);

    // Handle the end-game scenarios. Announce winner and disable buttons
    if (score[0] == 5) {
        announceWinner("Human", score);
        disableButtons();
    }
    else if (score[1] == 5) {
        announceWinner("Computer", score);
        disableButtons();
    }

}

// Write text to announce winner
function announceWinner (winner, score) {
    const resultSection = document.querySelector("#results");
    const announcement = document.createElement("div");
    announcement.textContent = `The winner is: ${winner}`;
    const finalScoreDiv = document.createElement("div");
    finalScoreDiv.textContent = `Final Score: Player: ${score[0]}, Computer: ${score[1]}`;
    resultSection.appendChild(announcement);
    resultSection.appendChild(finalScoreDiv);
}

// Disable buttons after the game is done
function disableButtons () {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.disabled = true;
    });
}

// Initialize variables and play game
scoreHuman = 0;
scoreComputer = 0;
score = [scoreHuman,scoreComputer];

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", (event)=> {
            let humanChoice = event.target.id; // Each button id is equal to the human choice
            let computerChoice = getComputerChoice();
            playRound(humanChoice,computerChoice, score);
    })
});

