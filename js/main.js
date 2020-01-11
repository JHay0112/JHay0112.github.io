/*
    js/main.js
    Author: Jordan Hay

    Notes:
     Needs a bit of a clean up
*/

// Global Variables
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
    ["fas fa-cube", "3D Printing/CAD", "3D Printing is the use of 3D printers to create 3D objects. Computer Aided Design is a method for developing designs and models with computers. Jordan has been using CAD for developing objects to 3D print and has learnt how to maintain a 3D printer since late 2018."]
]

// Functions
// Sleep function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Exit loading screen once page has loaded
async function exitLoadingScreen() {
    loadingScreen = document.getElementById("loading-screen"); // Get loading screen
    loadingSpinner = document.getElementById("loading-spinner"); // Get loading spinner
    loadingLogo = document.getElementById("loading-logo"); // Get loading logo

    loadingLogo.style.animation = "fade-out 1s 1s forwards ease"; // Fade out
    loadingSpinner.style.animation = "spin 1s infinite linear, fade-out 2s forwards"; // Fade out while still spinning
    loadingScreen.style.animation = "slide-out-bottom 1.3s 2s forwards ease-out";
    await sleep(1900);
    document.body.style.overflowY = "auto";
}

// Load skills for About
function loadSkills() {

    var skillEl = document.getElementById("skills");

    for (var i = 0; i < skills.length; i++) {

    var skill = skills[i];

    skillEl.innerHTML += "<div onclick='openSkill(" + i + ");' class='" + skill[0] + " skill' title='" + skill[1] +"'></div>";
        console.log("Loaded " + skill[1] + " Icon");
    }

    skillEl.style.maxHeight = skillEl.scrollHeight + "px";
}
  
// Open further information on the skill as chosen by param skill Index
async function openSkill(skillIndex) {

    var skill = skills[skillIndex];
    var skillDialogue = document.getElementById("skill-dialogue");
    var skillEl = document.getElementById("skills");

    document.getElementById("skill-icon").className = skill[0] + " ";
    document.getElementById("skill-title").textContent = skill[1];
    document.getElementById("skill-desc").innerHTML = skill[2];

    skillEl.style.maxHeight = "0px";
    skillEl.style.animation = "fade-out 0.3s ease forwards";
    await sleep(300);
    skillDialogue.style.maxHeight = skillDialogue.scrollHeight + "px";
    skillDialogue.style.animation = "fade-in 0.3s ease forwards";
}

// Close further information on skill
async function closeSkill() {

    var skillDialogue = document.getElementById("skill-dialogue");
    var skillEl = document.getElementById("skills");

    skillDialogue.style.maxHeight = "";
    skillDialogue.style.animation = "fade-out 0.3s ease forwards";
    await sleep(300);
    skillEl.style.maxHeight = skillEl.scrollHeight + "px";
    skillEl.style.animation = "fade-in 0.3s ease forwards";

    document.getElementById("skill-icon").className = "";
    document.getElementById("skill-title").textContent = "";
    document.getElementById("skill-desc").innerHTML = "";
}
  
// Randomly load an image to be used for the 404 meme
function load404Image() {
    images = [
        "oh_i_dont_think_so.jpg",
        "you_will_try.jpg",
        "it_ought_to_be_here.jpg",
        "visible_confusion.jpg",
        "you_are_lost.jpg",
        "incomplete_archives.jpg"
    ];

    imgElement = document.getElementById("404-img");
    imgElement.src = "/img/404/" + images[Math.floor(Math.random() * images.length)];
}

// Once the user has scrolled a certain distance, make the button visible
function scrollFunction() {
    var topButton = document.getElementById("top-button");

    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
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
    if((e.keyCode || e.which) == 66) {
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
document.body.onkeydown = function(e) {newBee(e)};
document.addEventListener("copy", (event) => {
    const pagelink = "\n\nRead more at: https://jordanhay.tk/";
    event.clipboardData.setData('text', document.getSelection() + pagelink);
    event.preventDefault();
});

// Main
// Collapsible elements
var coll = document.getElementsByClassName("read-more-button");

for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", async function() {
        this.classList.toggle("active");
        var content = this.previousElementSibling;
        var subContent = content.getElementsByClassName("read-more");
        var contentHeight = content.scrollHeight;

        for(var i = 0; i < subContent.length; i++) {
            contentHeight += subContent[i].scrollHeight;
        }

        if (content.style.maxHeight == "") {
            content.style.maxHeight = contentHeight + "px";
            await sleep(300);
            this.innerHTML = "Read Less";
        } else {
            content.style.maxHeight = "";
            await sleep(300);
            this.innerHTML = "Read More";
        }
    });
}