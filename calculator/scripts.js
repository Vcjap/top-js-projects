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