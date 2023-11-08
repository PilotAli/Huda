// JavaScript code for controlling heart animations
const hearts = document.querySelectorAll(".heart");

hearts.forEach((heart, index) => {
    const delay = index * 1000; // Adjust the delay time as needed
    animateHeart(heart, delay);
});

function animateHeart(heart, delay) {
    setTimeout(() => {
        heart.style.animation = "float 5s ease-in-out infinite";
    }, delay);
}
