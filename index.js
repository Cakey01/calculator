const buttons = document.querySelectorAll("button");
const operators = ["-", "+", "x", "÷"];
const action = ["backspace", "clear", "equals"];
// get button id when button is pressed

function buttonPress(buttons) {
    // define input display
    const display = document.querySelector(".input");
    // for each button add listener for click
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            // if button clicked isn't clear, backspace, or equals sign, show in the display
            if (!action.includes(button.id)) {
                // if button is an operator, add space around it
                if (operators.includes(button.id)) {
                    display.textContent += " " + button.id + " ";
                } else {
                    display.textContent += button.id;
                }
            // clear display if user presses clear button
            } else if (button.id === "clear") {
                display.textContent = "";
            } else if (button.id === "backspace") {

            }
        });
    });
}



buttonPress(buttons);

