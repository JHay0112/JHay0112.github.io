/**
    Javascript for https://jordanhay.com/

    Runs interactive portions and triggers event-based animations.
*/

// Functions

/**
 * Produces a delay for the specified number of milliseconds.
 * Intended to aid timing JS-based animations.
 * 
 * @param {int} ms The amount of milliseconds to delay for.
 * @returns {Promise} 
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Set of actions to be run whenever a user scrolls down the page.
 * Currently only handles the nav, however this implementation ensures extensibility.
 */
function scrollFunction() {
    stickyNav();
}

/**
 * Produces a bee that flies across the screen.
 * Runs on any keypress, although only does anything when 'B' is pressed.
 * 
 * @param {Event} e Information about the event that called it.
 */
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

/**
 * Sets up and runs the slideshow at the top of the page.
 */
async function runSlideShow() {

    const imgNum = 11;

    const header = document.getElementById("header");
    const pseudoHeader = document.getElementById("pseudo-header");

    var img = Math.floor(Math.random() * (imgNum)) + 1;
    var prevImg;

    header.style.backgroundImage = "url(\"/img/header/".concat(img, ".jpg\")");
    pseudoHeader.style.animation = "";
    pseudoHeader.style.visibility = "hidden";

    while(true) {

        prevImg = img;

        // Stops getting the same image twice in a row
        while(prevImg === img) {
            img = Math.floor(Math.random() * (imgNum)) + 1;
        }

        // img = imgNum; // For testing newest image

        pseudoHeader.style.backgroundImage = "url(\"/img/header/".concat(img, ".jpg\")");
        await sleep(1000);
        pseudoHeader.style.visibility = "visible";
        pseudoHeader.style.animation = "slideshow-new-slide 1s ease";
        await sleep(1000);
        header.style.backgroundImage = "url(\"/img/header/".concat(img, ".jpg\")");
        pseudoHeader.style.animation = "";
        pseudoHeader.style.visibility = "hidden";
        await sleep(7000);
    }

}

/**
 * Sticks/unsticks that nav from the ceiling as page scrolls.
 * Called on scroll by scrollFunction.
 */
function stickyNav() {

    const nav = document.getElementById("nav");
    const sticky = nav.offsetTop + 300;
    const content = document.getElementById("content");
    content.style.position = "relative";

    if (window.pageYOffset >= sticky) {
        nav.classList.add("stick")
        content.style.top = "60px";
        if(nav.classList.contains("responsive")) {
            content.style.height = (content.scrollHeight + nav.scrollHeight + 60) + "px";
        }
    } else {
        nav.classList.remove("stick");
        content.style.top = "0px";
    }
}

/**
 * Controls responsive nav for mobile phones.
 * Adds or removes the responsive tag as needed.
 */
function toggleResponsiveNav() {

    const nav = document.getElementById("nav");
    const navAnchors = document.querySelectorAll(".anchor");

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

/**
 * Sets up menu spy.
 * Menu Spy handles changing active nav link based on scroll position.
 */
function menuSpy() {
    new MenuSpy(document.querySelector("#nav-header"));
}

// Main

// Setup event listeners
window.onscroll = function() {scrollFunction()}; // Run the scroll function anytime the user scrolls
document.body.onkeydown = function(e) { newBee(e) };
document.addEventListener("copy", (event) => {
    const pagelink = "\n\nRead more at: https://jordanhay.com/";
    event.clipboardData.setData('text', document.getSelection() + pagelink);
    event.preventDefault();
});

// Setup read more sections
const coll = document.getElementsByClassName("read-more-button");
for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", async function() {
        this.classList.toggle("active");
        const content = this.previousElementSibling;
        const subContent = content.getElementsByClassName("read-more");
        const subContentHeight = 0;
        const contentHeight = content.scrollHeight;

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