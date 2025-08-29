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
    let result = null;
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
    return result;
}

function createResultDiv(calculation, expression) {
    // select results display
    const display = document.querySelector(".results");
    // create result div and add result class
    const div = document.createElement("div");
    div.classList.add("resultRow");
    // create p element, add class, and put calculation as text
    const result = document.createElement("p");
    result.classList.add("resultAnswer");
    result.textContent = expression + " " + "=" + " " + calculation;
    // append resultAnswer to resultRow, and append resultRow to display div;
    div.appendChild(result);
    display.appendChild(div);
}

function buttonPress(buttons) {
    // define input display
    const display = document.querySelector(".input");
    const result = document.createElement("div")
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
                let calculation = operate(currentDisplay);
                createResultDiv(calculation, currentDisplay);
                clear(display);
            } else if (numbers.includes(button.id)) {
                inputNumber(display, button, lastInput);
            } else if (operators.includes(button.id)) {
                // if expression already has an operator, calculate and change input to
                // calculated expression with new operator
                if (currentDisplay.split(" ").some((item) => operators.includes(item)) && (!operators.includes(lastInput))) {
                    display.textContent = operate(currentDisplay) + " " + button.id;
                } else {
                    inputOperator(display, button, lastInput);
                }
            }
        });
    });
}



buttonPress(buttons);

