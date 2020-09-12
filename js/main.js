/*
    js/main.js
    Author: Jordan Hay
*/

// Globals
var nav = document.getElementById("nav"); // Get the nav
var sticky = nav.offsetTop + 300; // Get the offset position of the nav
var coll = document.getElementsByClassName("read-more-button"); // Collapsible elements

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
    stickyNav();
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
// Slideshow
async function runSlideShow() {

    var imgNum = 6; // Amount of images in

    header = document.getElementById("header");
    pseudoHeader = document.getElementById("pseudo-header");

    var img = 0;

    while(true) {

        var prevImg = img;

        // Stops getting the same image twice in a row
        while(prevImg === img) {
            img = Math.floor(Math.random() * (imgNum)) + 1;
        }

        pseudoHeader.style.backgroundImage = "url(\"img/header/".concat(img, ".jpg\")");
        await sleep(500);
        pseudoHeader.style.visibility = "visible";
        pseudoHeader.style.animation = "slideshow-new-slide 1s ease";
        await sleep(1000);
        header.style.backgroundImage = "url(\"img/header/".concat(img, ".jpg\")");
        pseudoHeader.style.animation = "";
        pseudoHeader.style.visibility = "hidden";
        await sleep(5000);
    }

}

// Add the sticky class to the nav when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav() {

    content = document.getElementById("content");
    content.style.position = "relative";

    if (window.pageYOffset >= sticky) {
        nav.classList.add("stick")
        if(nav.classList.contains("responsive")) {
            content.style.top = nav.scrollHeight + "px";
        } else {
            content.style.top = "60px";
        }
    } else {
        nav.classList.remove("stick");
        content.style.top = "";
    }
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toggleResponsiveNav() {

    navAnchors = document.querySelectorAll(".anchor");

    if (!nav.classList.contains("responsive")) {
        nav.classList.add("responsive");
        nav.style.height = nav.scrollHeight + "px";
        for(i = 0; i < navAnchors.length; i++) {navAnchors[i].style.top = -nav.scrollHeight - 10 + "px";}
    } else {
        nav.classList.remove("responsive");
        nav.style.height = "60px";
        for(i = 0; i < navAnchors.length; i++) {navAnchors[i].style.top = -60 - 10 + "px";}
    }

    stickyNav();
}

// Event listeners (or similar)
window.onscroll = function() {scrollFunction()}; // Run the scroll function anytime the user scrolls
document.body.onkeydown = function(e) { newBee(e) };
document.addEventListener("copy", (event) => {
    const pagelink = "\n\nRead more at: https://jordanhay.com/";
    event.clipboardData.setData('text', document.getSelection() + pagelink);
    event.preventDefault();
});

// Read more
for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", async function() {
        this.classList.toggle("active");
        var content = this.previousElementSibling;
        var subContent = content.getElementsByClassName("read-more");
        var subContentHeight = 0;
        var contentHeight = content.scrollHeight;

        for (var i = 0; i < subContent.length; i++) {
            subContentHeight += subContent[i].scrollHeight;
        }

        if (content.style.maxHeight == "") {
            content.style.maxHeight = contentHeight + "px";
            await sleep(300);
            content.style.overflow = "visible";
            content.style.maxHeight = (contentHeight + subContentHeight) + "px";
            this.innerHTML = "Read Less";
        } else {
            content.style.overflow = "hidden";
            content.style.maxHeight = "";
            await sleep(300);
            this.innerHTML = "Read More";
        }
    });
}

// MenuSpy
var ms = new MenuSpy(document.querySelector("#nav-header"));