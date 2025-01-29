// Basic Functions
function add(n1,n2) {
    return n1+n2;
}

function subtract(n1,n2) {
    return n1-n2;
}

function multiply(n1,n2) {
    return n1*n2;
}

function divide(n1,n2) {
    return Math.round((n1/n2)*100)/100; // The returned number is rounded to 2 decimals
}

function operate(n1,operator,n2) {
    switch(operator) {
        case "+":
            return add(n1,n2);
        case "-":
            return subtract(n1,n2);
        case "x":
            return multiply(n1,n2);
        case "/":
            return divide(n1,n2);
        default:
            return "No operation found";
    }
}

function updateDisplay(currentValue, newInput) { // Inputs must be strings
    let newValue = "";
    if (currentValue == 0 || currentValue == "") {
        newValue = newInput;
    }
    else {
        newValue = currentValue + newInput;
    }
    display.textContent = newValue;
}

let displayValue = "0";

const display = document.querySelector("#display");

const inputCells = document.querySelectorAll(".input");
inputCells.forEach((inputCell) => {
    inputCell.addEventListener(("click"), (event) => {
        updateDisplay(displayValue,event.target.textContent)}
    )}
);
