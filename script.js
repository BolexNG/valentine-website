function respond(answer) {
    const responseElement = document.getElementById("response");
    if (answer === "yes" || answer === "of course" || answer === "absolutely") {
        responseElement.textContent = "Yay! You made me the happiest person, Christine! 💖";
    } else {
        responseElement.textContent = "Haha, I know you meant yes! 😘";
    }
}

// Heart click animation
document.addEventListener("click", (event) => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = `${event.clientX}px`;
    heart.style.top = `${event.clientY}px`;
    document.body.appendChild(heart);

    // Remove the heart after the animation ends
    setTimeout(() => {
        heart.remove();
    }, 1000);
});

// Countdown timer
const countdownElement = document.getElementById("countdown");

function updateCountdown() {
    const valentinesDay = new Date("February 14, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = valentinesDay - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `Countdown to Valentine's Day: ${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call