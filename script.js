let n1 = "";
let n2 = "";
let operator = "";
let result = "";
const display = document.querySelector("#displayText");
let justCalculated = false;
let isSecondNumber = false;
let decimalClicked = false;


function add(n1, n2) {
    return n1 + n2;
};

function subtract(n1, n2) {
    return n1 - n2;
}

function multiply(n1, n2) {
    return n1 * n2;
};

function divide(n1, n2) {
    if (n2 === 0) {
        return "Cannot divide by zero";
    } else {
        return n1 / n2;
    }
};

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
};

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
            } else {
                if (!isSecondNumber) {
                    clearDisplay();
                    isSecondNumber = true;
                    decimalClicked = false;
                }
                display.textContent += button.textContent;
                n2 += button.textContent;
            };
        });
    });
};

function getOperator() {
        document.querySelectorAll(".operators").forEach(button => {
            button.addEventListener("click", () => {
                if (n1 === "") return;

                if (operator === "") {
                    operator = button.textContent;
                    isSecondNumber = false;

                } else {
                    if (n2 !== "") {
                        result = operate(n1, operator, n2);
                        display.textContent = result;

                        n1 = result;
                        operator = button.textContent;
                        n2 = "";
                        justCalculated = true;
                        isSecondNumber = false;
                    } else {
                        operator = button.textContent;
                    };             
                };
                
                decimalClicked = false;
            });
        });
    };

function getResult() {
    document.querySelector(".equal").addEventListener("click", () => {
        if (n1 === "" || operator === "" || n2 === "") return;

        result = operate(n1, operator, n2);
        display.textContent = result;

        n1 = result;
        operator = "";
        n2 = "";
        justCalculated = true;
        decimalClicked = false;
    });
};

function decimal() {
    document.querySelector(".decimal").addEventListener("click",() => {
        if (decimalClicked) return;

        if (operator === "") {
            n1 += ".";
        } else {
            n2 += ".";
        }

        display.textContent += ".";
        decimalClicked = true;
    });
};

function clear() {
    document.querySelector(".clear").addEventListener("click", () => {
        n1 = "";
        operator = "";
        n2 = "";
        decimalClicked = false;
        clearDisplay();
    });
};

function clearDisplay() {
    display.textContent = "";
};

function backspace(){
    document.querySelector(".backspace").addEventListener("click", () => {
        if (display.textContent === "" || justCalculated) return;

        let lastChar = display.textContent.slice(-1);

        if (operator === "" || !isSecondNumber) {
            n1 = n1.slice(0, -1);
        } else {
            n2 = n2.slice(0, -1);
        };

        display.textContent = display.textContent.slice(0, -1);

        if (lastChar === ".") {
            decimalClicked = false;
        };
    });
};

getNumbers();
getOperator();
getResult();
decimal();
clear();
backspace();