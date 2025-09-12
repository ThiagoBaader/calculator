let n1 = "";
let n2 = "";
let operator = "";

function add(n1, n2) {
    return n1 + n2;
}

function subtract(n1, n2) {
    return n1 - n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function divide(n1, n2) {
    return n1 / n2;
}

function operate(n1, operator, n2) {
    n1 = Number(n1);
    n2 = Number(n2);

    if (operator === "+") {
        return add(n1, n2);
    } else if (operator === "-") {
        return subtract(n1, n2);
    } else if (operator === "*") {
        return multiply(n1, n2);
    } else if (operator === "/") {
        return divide(n1, n2);
    }
}

console.log(operate(2,"+", 2));
console.log(operate(2, "-", 2));
console.log(operate(2, "*", 2));
console.log(operate(2, "/", 2));