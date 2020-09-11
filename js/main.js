/*
    js/main.js
    Author: Jordan Hay
*/

// Functions
// Sleep function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Exit loading screen once page has loaded
async function exitLoadingScreen() {
    var loadingScreen = document.getElementById("loading-screen"); // Get loading screen
    var loadingText = document.getElementById("loading-text"); // Get loading spinner
    var loadingLogo = document.getElementById("loading-logo"); // Get loading logo

    loadingLogo.style.animation = "fade-out 0.5s 1s forwards ease"; // Fade out
    loadingText.style.animation = "fade-out 2s forwards"; // Fade out
    loadingScreen.style.animation = "slide-out-bottom 1.3s 1.5s forwards ease-out";
    await sleep(1200);
    document.body.style.overflowY = "auto";
}

// Runs when the user scrolls, used in stickynavs etc
function scrollFunction() {
    // Blank for now
}

// Behold! Bees
async function newBee(e) {
    if ((e.keyCode || e.which) == 66) {
        var bee = document.createElement("img");
        bee.src = "img/bee.png";
        bee.classList += "bee";
        bee.style.top = (Math.random() * (111 - (-10)) + (-10)) + "vh";
        document.body.appendChild(bee);
        await sleep(4000);
        document.body.removeChild(bee);
    }
}

// Event listeners (or similar)
window.onscroll = function() {scrollFunction()}; // Run the scroll function anytime the user scrolls
document.body.onkeydown = function(e) { newBee(e) };
document.addEventListener("copy", (event) => {
    const pagelink = "\n\nRead more at: https://jordanhay.tk/";
    event.clipboardData.setData('text', document.getSelection() + pagelink);
    event.preventDefault();
});