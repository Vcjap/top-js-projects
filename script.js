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
    let humanChoice = prompt("Enter your choice")
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
