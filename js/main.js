/*
    js/main.js
    Author: Jordan Hay
*/

// Exit loading screen once page has loaded
function exitLoadingScreen() {
    loadingScreen = document.getElementById("loading-screen"); // Get loading screen
    loadingSpinner = document.getElementById("loading-spinner"); // Get loading spinner
    main = document.getElementById("main"); // Get main content

    loadingScreen.style.animation = "fade-out 1s 1s forwards ease"; // Fade out
    loadingSpinner.style.animation = "spin 1s infinite linear, fade-out 2s forwards"; // Fade out while still spinning
    main.style.animation = "fade-in 1s 2s forwards ease";
}