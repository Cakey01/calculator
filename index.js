const buttons = document.querySelectorAll("button");
const operators = ["-", "+", "x", "÷"];
const action = ["backspace", "clear", "equals"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

function buttonPress(buttons) {
    // define input display
    const display = document.querySelector(".input");
    // for each button add listener for click
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            // store current display and last input as variables
            let currentDisplay = display.textContent;
            let lastInput = currentDisplay[currentDisplay.length - 1];
            console.log("current", currentDisplay);
            console.log("last", lastInput);

            // if button clicked is clear, backspace, or equals, complete those processes
            if (button.id === "clear") {
                display.textContent = "";
            } else if (button.id === "backspace") {
                // if there is a number before the last char, only remove one char
                if (numbers.includes(lastInput)) {
                    display.textContent = currentDisplay.slice(0, currentDisplay.length - 1);
                }
                // if there is a space before the last char, remove char and space
                if (currentDisplay[currentDisplay.length - 2] === " ") {
                    display.textContent = currentDisplay.slice(0, currentDisplay.length - 2);
                }
            } else if (button.id === "equals") {
                console.log("equals");
            } else if (numbers.includes(button.id)) {
                // if last input was an operator add space
                if (operators.includes(lastInput)) {
                    display.textContent += " " + button.id;
                } else {
                    display.textContent += button.id;
                }
            } else if (operators.includes(button.id) && numbers.includes(lastInput)) {
                // if last input was a number add space (cant have two operators in a row)
                display.textContent += " " + button.id;
            }
        });
    });
}



buttonPress(buttons);

