/*
    js/main.js
    Author: Jordan Hay

    Notes:
     Needs a bit of a clean up
*/

// Global Variables

"use strict";

var skills = [
    ["fab fa-html5", "HTML5", "HTML5 (Hyper Text Markup Language 5) is a markup language to write websites. Jordan is proficient in HTML5 and has been using it since mid 2017."],
    ["fab fa-css3", "CSS3", "CSS3 (Cascading Style Sheet 3) is a language used to style HTML pages. Jordan has been using CSS3 since mid-2017."],
    ["fab fa-js", "JavaScript", "JavaScript is a programming language used to program the behaviour of websites. Jordan has been using JavaScript since early 2019."],
    ["fab fa-php", "PHP", "PHP is a programming language used to program the server-side behaviour of websites and to query databases. Jordan has been using PHP since early 2018."],
    ["fas fa-database", "MySQL", "MySQL is a language used to build and manage databases. Jordan has been using MySQL since early 2018."],
    ["fab fa-python", "Python", "Python is a general purpose programming language. Jordan has been using Python since mid 2018."],
    ["fab fa-git-alt", "Git", "Git is a version control system used to manage code. Jordan has been using Git since late 2017."],
    ["fab fa-github", "Github", "Github is an online host for version control with Git. Jordan has been using Github since late 2017."],
    ["fas fa-microchip", "Arduino/Robotics", "Arduino is a microcontroller and language used for hobby electronics including robotics and automation. Jordan has had experience with Arduino since late 2018."],
    ["fas fa-cube", "3D Printing/CAD", "3D Printing is the use of 3D printers to create 3D objects. Computer Aided Design is a method for developing designs and models with computers. Jordan has been using CAD for developing objects to 3D print and has learnt how to maintain a 3D printer since late 2018."],
    ["fas fa-palette", "GIMP", "GIMP (GNU Image Manipulation Program) is used to manipulate images and is what Jordan uses to create graphics and edit photos. Jordan has been using GIMP since early 2018."],
    ["fab fa-ubuntu", "Linux", "Jordan has been using Ubuntu and Ubuntu derivative operating systems for both personal and server use since early 2018.<br /><br />Please note: 'Server' above refers to an old personal computer Jordan installed Ubuntu Server 16.04 on and used to host various web projects and a Discord bot (written in Python)."],
    ["fas fa-camera-retro", "Photography", "Jordan has been using a DSLR camera (Canon EOS 350D) since mid 2018 and a compact camera (Olympus TG-630) before that. He was also the photographer for his school whanau/house for the years of 2018 and 2019."],
    ["fas fa-plug", "Hobby Electronics", "Jordan has experience in hobby electronics including soldering, circuit design/analysis, PCB design, using a multimeter, and oscilliscope."],
    ["fas fa-network-wired", "Networking", "Jordan has experience with setting up and managing networks, most of this learnt while putting together a home-wide ethernet LAN, and while experimenting with an old computer he used as a server for various web projects."]
]

var darkMode = false;

// Functions
// Sleep function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Exit loading screen once page has loaded
async function exitLoadingScreen() {
    var loadingScreen = document.getElementById("loading-screen"); // Get loading screen
    var loadingSpinner = document.getElementById("loading-spinner"); // Get loading spinner
    var loadingLogo = document.getElementById("loading-logo"); // Get loading logo

    loadingLogo.style.animation = "fade-out 0.5s 1s forwards ease"; // Fade out
    loadingSpinner.style.animation = "spin 1s infinite linear, fade-out 2s forwards"; // Fade out while still spinning
    loadingScreen.style.animation = "slide-out-bottom 1.3s 1.5s forwards ease-out";
    await sleep(1200);
    document.body.style.overflowY = "auto";
}

// Load skills for About
function loadSkills() {

    var skillEl = document.getElementById("skills");

    for (var i = 0; i < skills.length; i++) {

        var skill = skills[i];

        skillEl.innerHTML += "<div onclick='openSkill(" + i + ");' class='" + skill[0] + " skill' title='" + skill[1] + "'></div>";
        // console.log("Loaded " + skill[1] + " Icon");
    }

    skillEl.style.maxHeight = skillEl.scrollHeight + 100 + "px"; // Scrollheight pluss buffer to try fix bug where bottom row cut off
}

// Open further information on the skill as chosen by param skill Index
function openSkill(skillIndex) {

    var skill = skills[skillIndex];
    var skillDialogue = document.getElementById("skill-dialogue");
    var skillEl = document.getElementById("skills");

    document.getElementById("skill-icon").className = skill[0] + " ";
    document.getElementById("skill-title").textContent = skill[1];
    document.getElementById("skill-desc").innerHTML = skill[2];

    skillEl.style.maxHeight = "0px";
    skillEl.style.animation = "fade-out 0.3s ease forwards";
    skillDialogue.style.maxHeight = skillDialogue.scrollHeight + "px";
    skillDialogue.style.animation = "fade-in 0.3s ease forwards";
}

// Close further information on skill
async function closeSkill() {

    var skillDialogue = document.getElementById("skill-dialogue");
    var skillEl = document.getElementById("skills");

    skillEl.style.maxHeight = skillEl.scrollHeight + "px";
    skillEl.style.animation = "fade-in 0.3s ease forwards";
    skillDialogue.style.maxHeight = "";
    skillDialogue.style.animation = "fade-out 0.3s ease forwards";
    await sleep(300);

    document.getElementById("skill-icon").className = "";
    document.getElementById("skill-title").textContent = "";
    document.getElementById("skill-desc").innerHTML = "";
}

// Randomly load an image to be used for the 404 meme
function load404Image() {
    var images = [
        "oh_i_dont_think_so.jpg",
        "you_will_try.jpg",
        "it_ought_to_be_here.jpg",
        "visible_confusion.jpg",
        "you_are_lost.jpg",
        "incomplete_archives.jpg"
    ];

    var imgElement = document.getElementById("404-img");
    imgElement.src = "/img/404/" + images[Math.floor(Math.random() * images.length)];
}

// Once the user has scrolled a certain distance, make the button visible
function scrollFunction() {
    var topButton = document.getElementById("top-button");

    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        topButton.style.animation = "fade-in ease 0.3s";
    } else {
        topButton.style.animation = "fade-out ease 0.3s forwards";
    }
}

// When the user clicks on the button, scroll to the top of the document
function goToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

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

// Put the page into dark mode
async function toggleDarkMode() {

    var all = document.querySelectorAll("*"); // All elements
    var logos = document.getElementsByClassName("logo"); // All logo elements
    var loadingScreen = document.getElementById("loading-screen"); // Loading screen
    var loadingSpinner = document.getElementById("loading-spinner"); // Loading spinner

    var textColour = ""; // By default these are light mode
    var backgroundColour = "white";
    var imageFilter = "";
    var darkModeButton = document.getElementById("dark-mode-button");
    var darkModeIcon = "fas fa-moon";

    if (darkMode == false) {
        textColour = "white";
        backgroundColour = "#252525";
        imageFilter = "brightness(0) invert(1)";
        darkModeIcon = "fas fa-sun"
        darkMode = true;
    } else {
        darkMode = false;
    }

    Object.keys(all).forEach((e) => all[e].style.transition = "0.3s ease all"); // Set every element transition
    Object.keys(all).forEach((e) => all[e].style.color = textColour); // Set every element text colour to be white
    document.body.style.backgroundColor = backgroundColour; // Set background colour to be #252525
    loadingScreen.style.backgroundColor = backgroundColour;
    loadingSpinner.style.filter = imageFilter;

    for (var i = 0; i < logos.length; i++) {
        console.log(logos[i]);
        logos[i].style.filter = imageFilter;
    }

    if (location.href == "https://jordanhay.tk/" || location.href.includes("index") || location.href.includes("jhay0112.github.io/index.html")) {

        document.getElementById("more-projects-button").style.backgroundColor = backgroundColour;
        document.getElementById("more-history-button").style.backgroundColor = backgroundColour;
        darkModeButton.style.animation = "fade-out 0.15s ease forwards";
        await sleep(150);
        darkModeButton.className = darkModeIcon;
        darkModeButton.style.animation = "fade-in 0.15s ease forwards";
    }
    // We do this because you cannot easily check if you're on the 404 page but you can check if you're on index.html
    // the third option is for if you're working on a local copy of the website

    window.localStorage.setItem("dark-mode", darkMode);
}

function checkDarkMode() {

    if (window.localStorage.getItem("dark-mode") == "true") {
        toggleDarkMode();
    }

}

// Main variables
var coll = document.getElementsByClassName("read-more-button"); // Collapsible elements

// Event listeners (or similar)
window.onscroll = function() { scrollFunction() }; // Run the scroll function anytime the user scrolls
document.body.onkeydown = function(e) { newBee(e) };
document.addEventListener("copy", (event) => {
    const pagelink = "\n\nRead more at: https://jordanhay.tk/";
    event.clipboardData.setData('text', document.getSelection() + pagelink);
    event.preventDefault();
});

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

// Main

checkDarkMode();