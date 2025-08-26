const buttons = document.querySelectorAll("button");
// get button id when button is pressed

function buttonPress(buttons) {
    // define input display
    const display = document.querySelector(".input");
    // for each button add listener for click
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            // if button clicked isn't clear, backspace, or equals sign, show in the display
            if (button.id != "clear" && button.id != "backspace" && button.id != "equals") {
                // if button is an operator, add space around it
                if (button.id === "÷" || button.id === "x" || button.id === "-" || button.id === "+") {
                    display.textContent += " " + button.id + " ";
                } else {
                    display.textContent += button.id;
                }
            }
        });
    });
}


buttonPress(buttons);
