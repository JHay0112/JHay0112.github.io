/*
    js/main.js
    Author: Jordan Hay
*/

// Globals
var nav = document.getElementById("nav"); // Get the nav
var sticky = nav.offsetTop + 300; // Get the offset position of the nav
var coll = document.getElementsByClassName("read-more-button"); // Collapsible elements
var skills = [
    ["fas fa-microchip", "Arduino/Robotics", "Hobby experience with electronics. Have been using Arduino for microcontrol, automation, and robotics since late 2018."],
    ["fas fa-broadcast-tower", "Radio Communications", "Basic experience in radio communications with Ashley Communications as well as a gift software-defined radio."],
    ["fas fa-cube", "3D Printing/CAD", "Hobby experience with CAD, 3D Printing, and 3D Printing maintainance since 2018."],
    ["fab fa-python", "Python", "Both hobby and university first-year experience with Python for function, object-oriented, and GUI programming."],
    ["fab fa-php", "PHP", "PHP for server-side behaviour of websites and databases since early 2018."],
    ["fas fa-database", "SQL", "Hobby and high-school experience with MySQL and SQLite databases since early 2018."],
    ["fab fa-git-alt", "Git", "Git is a version control system used to manage code. Jordan has been using Git since late 2017."],
    ["fab fa-html5", "HTML5", "Proficient in HTML5 for website structure."],
    ["fab fa-css3", "CSS3", "CSS3 for mobile-friendly website design."],
    ["fab fa-js", "JavaScript", "Hobby experience with JS for website browser programming."],
    ["fas fa-brain", "Machine Learning", "Basic hobby experience with Tensorflow Machine Learning."]
]

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

    var refferer = "";

    // Try to get the hostname of the refferer
    try {
        refferer = (new URL(document.referrer)).hostname
    } catch {
        refferer = ""
    }

    // Check if not from internal refferer
    if(refferer != "jordanhay.com") {
        loadingLogo.style.animation = "fade-out 0.5s 1s forwards ease"; // Fade out
        loadingText.style.animation = "fade-out 2s forwards"; // Fade out
        loadingScreen.style.animation = "slide-out-bottom 1.3s 1.5s forwards ease-out";
        await sleep(1200);
    } else {
        // If from self, delete all of these instantly
        loadingLogo.remove();
        loadingText.remove();
        loadingScreen.remove();
    }
    
    document.body.style.overflowY = "auto";
    scrollFunction();
}

// Runs when the user scrolls, used in stickynavs etc
function scrollFunction() {
    stickyNav();
}

// Load skills for About
function loadSkills() {

    var skillEl = document.getElementById("skills");

    for (var i = 0; i < skills.length; i++) {

        var skill = skills[i];
        var skillIco = document.createElement("div");

        // Skill icon things
        skillIco.className = skill[0] + " skill";
        skillIco.id = "skill-ico-" + i;
        skillIco.title = skill[1];

        // Append new skill icon
        skillEl.appendChild(skillIco)

        // Add on click
        document.getElementById("skill-ico-" + i).setAttribute("onclick", "openSkill(" + i + ")")
    }
}

// Open further information on the skill as chosen by param skill Index
function openSkill(skillIndex) {

    var skill = skills[skillIndex];
    var skillDialogue = document.getElementById("skill-dialogue");

    // Add new things to skillDialogue
    document.getElementById("skill-icon").className = skill[0] + " ";
    document.getElementById("skill-title").textContent = skill[1];
    document.getElementById("skill-desc").innerHTML = skill[2];

    // Expand skill dialogue
    skillDialogue.style.animation = "fade-in 0.3s ease forwards";
    skillDialogue.style.maxHeight = skillDialogue.scrollHeight + "px";

    // For each skill icon
    for (var i = 0; i < skills.length; i++) {
        var skillIcon = document.getElementById("skill-ico-" + i);
        // Except for the active one
        if(i != skillIndex) {
            // Make small and grey
            skillIcon.style.scale = "0.9";
            skillIcon.style.opacity = "0.4";
        } else {
            // Make sure active one is big and bold
            skillIcon.style.scale = "1";
            skillIcon.style.opacity = "1";
        }
    }
}

// Close further information on skill
function closeSkill() {

    var skillDialogue = document.getElementById("skill-dialogue");
    
    // Collapse skillDialogue
    skillDialogue.style.maxHeight = "0px";
    skillDialogue.style.animation = "fade-out 0.2s ease forwards";

    // For each skill icon
    for (var i = skills.length - 1; i >= 0; i--) {
        var skillIcon = document.getElementById("skill-ico-" + i);
        // Make big and bold
        skillIcon.style.scale = "1";
        skillIcon.style.opacity = "1";
    }
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

    var imgNum = 11; // Amount of images in

    header = document.getElementById("header");
    pseudoHeader = document.getElementById("pseudo-header");

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

// Add the sticky class to the nav when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav() {

    content = document.getElementById("content");
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

function menuSpy() {
    // Initiliase a menu spy instance
    new MenuSpy(document.querySelector("#nav-header"));
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