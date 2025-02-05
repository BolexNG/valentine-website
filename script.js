// Function to handle Christine's response
function respond(answer) {
    const responseElement = document.getElementById("response");
    if (answer === "yes" || answer === "of course" || answer === "absolutely") {
        responseElement.textContent = "Yay! You made me the happiest person, Christine! 💖";
        triggerConfetti(); // Trigger confetti effect
    } else {
        responseElement.textContent = "Haha, I know you meant yes! 😘";
    }
}

// Countdown timer to Valentine's Day 2025
const countdownElement = document.getElementById("countdown");

function updateCountdown() {
    const valentinesDay = new Date("February 14, 2025 00:00:00").getTime(); // Set the target date
    const now = new Date().getTime();
    const timeLeft = valentinesDay - now;

    // Check if the countdown has already passed
    if (timeLeft < 0) {
        countdownElement.innerHTML = "Valentine's Day 2025 has already passed! 💖";
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `Countdown to Valentine's Day 2025: ${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000); // Update every second
updateCountdown(); // Initial call

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

// Confetti effect
function triggerConfetti() {
    const confettiSettings = { target: "confetti-canvas" };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    // Stop confetti after 5 seconds
    setTimeout(() => {
        confetti.clear();
    }, 5000);
}