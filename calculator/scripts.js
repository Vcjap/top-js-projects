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

// Values are inputed as string, so we convert them to numbers to operate on them
function operate(n1,operator,n2) {
    const n1num = Number(n1);
    const n2num = Number(n2)
    const operatorLower = operator.toLowerCase();
    let result = 0;
    switch(operatorLower) {
        case "+":
            result = add(n1num,n2num);
            break;
        case "-":
            result = subtract(n1num,n2num);
            break;
        case "x":
            result = multiply(n1num,n2num);
            break;
        case "/":
            result = divide(n1num,n2num);
            break;
        default:
            return "No operation found";
    }
    return result.toString();
}

const display = document.querySelector("#display");
let displayValue = display.textContent;

// Initialize memory
memory = {
    n1: "",
    operand: "",
    n2: "",
}
// Add event listeners to all input cells
const inputCells = document.querySelectorAll(".input.number, .input.operator");
inputCells.forEach((inputCell) => {
    inputCell.addEventListener(("click"), (event) => {
        const NewInput = event.target.textContent;
        memory = manageInput(memory, NewInput);
        display.textContent = updateDisplay(memory);
    })
})

// Update memory based on input type, and return the new memory
function updateNum (memory, newNum) {
    if (memory.operand === "") {
        memory.n1 += newNum;
    }
    else {
        memory.n2 += newNum;
    };
    return memory;
}

function updateOperand (memory, operand) {
    if (memory.operand === "") {
        memory.operand += operand;
    }
    else {
        newMemoryN1 = operate(memory.n1, memory.operand, memory.n2);
        memory.n1 = newMemoryN1;
        memory.operand = "";
        memory.n2 = "";
    };
    return memory;
}

// Check whether the input is a number or an operand, and route it to the right function
function manageInput(memory, input) {
    if (isNaN(input) && input !== ".") {
        memory = updateOperand(memory, input);
    }
    else {
        memory = updateNum(memory, input);
    }
    return memory
}

// Update the display based on the most recent memory. 
// If n2 is not empty, we use it as the display value. Otherwise, we use n1
function updateDisplay(memory) {
    let newValue = ""
    memory.n2 !== "" ? newValue = memory.n2 : newValue = memory.n1; 
    return newValue;
}

function returnInputType(input) {
    let inputType = "";
    let inputClasses = input.classList;
    if (inputClasses.match("number")) {
        inputType = "number";
    };
    else if (inputClasses.match("")){}
}


//To add
// AC behaviour
//+/- behavior
// % behaviour