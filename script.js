let n1 = "";
let n2 = "";
let operator = "";
const display = document.querySelector("#displayText");
let justCalculated = false;
let isSecondNumber = false;

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
    if (n2 === 0) {
        return "Cannot divide by zero";
    } else {
        return n1 / n2;
    }
}

function operate(n1, operator, n2) {
    n1 = Number(n1);
    n2 = Number(n2);

    let result;
    switch(operator) {
        case "+": result = add(n1, n2); break;
        case "-": result = subtract(n1, n2); break;
        case "*": result = multiply(n1, n2); break;
        case "/": result = divide(n1, n2); break;
        default: result = 0;
    }

    if (typeof result === "number") {
        result = parseFloat(result.toFixed(6));
    }

    return result;
}

function handleNumberInput(digit) {
    if (justCalculated && operator === "") {
        display.textContent = "";
        n1 = "";
        justCalculated = false;
    }

    if (operator === "") {
        display.textContent += digit;
        n1 += digit;
    } else {
        if (!isSecondNumber) {
            display.textContent = "";
            isSecondNumber = true;
        }
        display.textContent += digit;
        n2 += digit;
    }
}

function handleOperatorInput(op) {
    if (n1 === "") return;

    if (operator === "") {
        operator = op;
        isSecondNumber = false;

    } else {
        if (n2 !== "") {
            const result = operate(n1, operator, n2);
            display.textContent = result;

            n1 = result;
            operator = op;
            n2 = "";
            justCalculated = true;
            isSecondNumber = false;
        } else {
            operator = op;
        }            
    }
}

function handleDecimal() {
    if (justCalculated && operator === "") {
        display.textContent = "";
        n1 = "";
        justCalculated = false;
    }

    if (operator === "") {
        if (n1.includes(".")) return;
        if (n1 === "") n1 = "0";
        n1 += ".";
        display.textContent += ".";
    } else {
        if (n2.includes(".")) return;
        if (!isSecondNumber) {
            display.textContent = "";
            isSecondNumber = true;
        }
        if (n2 === "") n2 = "0";
        n2 += ".";
        display.textContent += ".";
    }
}

function handleEqual() {
    if (n1 === "" || operator === "" || n2 === "") return;

    const result = operate(n1, operator, n2);

    if (typeof result === "string") {
        display.textContent = result;
        n1 = "";
        n2 = "";
        operator = "";
        justCalculated = true;
        return;
    }

    display.textContent = result;
    n1 = result;
    operator = "";
    n2 = "";
    justCalculated = true;
}

function handleBackspace() {
    if (display.textContent === "" || justCalculated) return;

    let lastChar = display.textContent.slice(-1);

    display.textContent = display.textContent.slice(0, -1);

    if (operator === "" || !isSecondNumber) {
        n1 = n1.slice(0, -1);
    } else {
        n2 = n2.slice(0, -1);
    };

    if (["+", "-", "*", "/"].includes(lastChar)) {
        operator = "";
    }
}

function handleClear() {
    n1 = "";
    operator = "";
    n2 = "";
    display.textContent = "";
}

function initNumberButtons() {
    document.querySelectorAll(".numbers").forEach(button => {
        button.addEventListener("click", () => {
            handleNumberInput(button.textContent);
        });
    });
}

function initOperatorButtons() {
    document.querySelectorAll(".operators").forEach(button => {
        button.addEventListener("click", () => {
            handleOperatorInput(button.textContent);
        });
    });
}

function initDecimalButton() {
    document.querySelector(".decimal").addEventListener("click", () => {
        handleDecimal();
    });
}

function initEqualButton() {
    document.querySelector(".equal").addEventListener("click", () => {
        handleEqual();
    });
}

function initBackspaceButton() {
    document.querySelector(".backspace").addEventListener("click", () => {
        handleBackspace();
    });
}

function initClearButton() {
    document.querySelector(".clear").addEventListener("click", () => {
        handleClear();
    });
}

function keyboard() {
    document.addEventListener("keydown", (e) => {
    const key = e.key;
    
    if (!isNaN(key)) {
        handleNumberInput(key);
    } else if (["+", "-", "*", "/"].includes(key)) {
        handleOperatorInput(key);
    } else if (key === "Enter") {
        handleEqual();
    } else if (key === ".") {
        handleDecimal();
    } else if (key === "Backspace") {
        handleBackspace();
    } else if (key === "Escape") {
        handleClear();
    }
    });
}

initNumberButtons();
initOperatorButtons();
initDecimalButton();
initEqualButton();
initBackspaceButton();
initClearButton();
keyboard();