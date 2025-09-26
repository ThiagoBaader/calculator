let n1 = "";
let n2 = "";
let operator = "";
let result = "";
let justCalculated = false;
const display = document.querySelector("#displayText");

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

function getNumbers() {
    document.querySelectorAll(".numbers").forEach(button => {
        button.addEventListener("click", () => {
            if (justCalculated && operator === "") {
                display.textContent = "";
                n1 = "";
                justCalculated = false;
            }
            if (operator === "") {
                display.textContent += button.textContent;
                n1 += button.textContent;

                return n1;
            } else {
                display.textContent += button.textContent;
                n2 += button.textContent;

                return n2;
            };
        });
    });
};

function getOperator() {
        document.querySelectorAll(".operators").forEach(button => {
            button.addEventListener("click", () => {
                display.textContent += button.textContent
                operator = button.textContent;

                return operator;
            });
        });
    };

function getResult() {
    document.querySelector(".equal").addEventListener("click", () => {
        result = operate(n1, operator, n2);
        display.textContent = result;

        n1 = result;
        operator = "";
        n2 = "";
        justCalculated = true;
    });
};

function clearDisplay() {
    display.textContent = "";
}

getNumbers();
getOperator();
getResult();
