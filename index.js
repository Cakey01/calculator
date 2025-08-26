const buttons = document.querySelectorAll("button");

function buttonPress(buttons) {
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            return button.id;
        });
    });
}
console.log(buttonPress(buttons));