console.log("Hello, World!");
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
console.log(getComputerChoice());