const buttons = document.querySelectorAll("button");
const operators = ["-", "+", "x", "÷"];
const action = ["backspace", "clear", "equals"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

function clear(display) {
    display.textContent = "";
}

function backspace(display, currentDisplay, lastInput) {
    // if the last char in the display string is a number, delete the last char
    if (numbers.includes(lastInput)) {
        display.textContent = currentDisplay.slice(0, currentDisplay.length - 1);
    }
    // if the second to last char is a space remove the last char and the space
    if (currentDisplay[currentDisplay.length - 2] === " ") {
        display.textContent = currentDisplay.slice(0, currentDisplay.length - 2);
    }
}

function inputNumber(display, button, lastInput) {
    // if the last input was an operator, add a space
    if (operators.includes(lastInput)) {
        display.textContent += " " + button.id;
    } else {
        display.textContent += button.id;
    }
}

function inputOperator(display, button, lastInput) {
    // cant' have an operator without a number in front of it
    // can't have two operators in a row
    if (numbers.includes(lastInput)) {
        display.textContent += " " + button.id;
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate (currentDisplay, button) {
    let result = 0;
    let expression = currentDisplay.split(" ");
    if (expression[1] === "+") {
        result = add(expression[0], expression[2]);
    } else if (expression[1] === "-") {
        result = subtract(expression[0], expression[2]);
    } else if (expression[1] === "x") {
        result = multiply(expression[0], expression[2]);
    } else if (expression[1] === "÷") {
        result = multiply(expression[0], expression[2]);
    }
    
}


function buttonPress(buttons) {
    // define input display
    const display = document.querySelector(".input");
    // for each button add listener for click
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            // store current display and last input as variables
            let currentDisplay = display.textContent;
            let lastInput = currentDisplay[currentDisplay.length - 1];

            // use correct function depending on input
            if (button.id === "clear") {
                clear(display);
            } else if (button.id === "backspace") {
                backspace(display, currentDisplay, lastInput);
            } else if (button.id === "equals") {
                calculate(currentDisplay, button);
            } else if (numbers.includes(button.id)) {
                inputNumber(display, button, lastInput);
            } else if (operators.includes(button.id)) {
                inputOperator(display, button, lastInput);
            }
        });
    });
}



buttonPress(buttons);

