function respond(answer) {
    const responseElement = document.getElementById("response");
    if (answer === "yes" || answer === "of course" || answer === "absolutely") {
        responseElement.textContent = "Yay! You made me the happiest person, Christine! 💖";
    } else {
        responseElement.textContent = "Haha, I know you meant yes! 😘";
    }
}