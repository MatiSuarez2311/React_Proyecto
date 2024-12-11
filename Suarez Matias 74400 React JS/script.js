function createComponent(buttonText = 'Click me', buttonClass = '', isDisabled = false) {
    const root = document.getElementById("root");

    // Create the button
    const button = document.createElement("button");
    button.textContent = buttonText;
    button.className = buttonClass;
    button.disabled = isDisabled;

    // Add the event
    button.addEventListener("click", () => {
        // Create a paragraph for the message
        const message = document.createElement("p");
        message.textContent = "botón clickeado";

        // Append the message below the button
        root.appendChild(message);
    });

    root.appendChild(button);
}

createComponent('Enviar', 'btn-primary', false);