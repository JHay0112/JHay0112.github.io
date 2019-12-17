/*
    js/main.js
    Author: Jordan Hay
*/

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
    loadingScreen.style.animation = "slide-out-bottom 1.5s 2s forwards ease";
}

// Load skills for About
function loadSkills() {

    var skillEl = document.getElementById("skills");

    for (var i = 0; i < skills.length; i++) {

    var skill = skills[i];

    skillEl.innerHTML += "<div onclick='openSkill(" + i + ")' class='" + skill[0] + " skill'></div>";
        console.log("Loaded " + skill[1] + " Icon");
    }
}
  
// Open further information on the skill as chosen by param skill Index
function openSkill(skillIndex) {

    var skill = skills[skillIndex];

    document.getElementById("skill-icon").className = skill[0] + " ";
    document.getElementById("skill-title").textContent = skill[1];
    document.getElementById("skill-desc").innerHTML = skill[2];

    document.getElementById("skill-dialog").className = "col-12 uncollapsed";
    document.getElementById("skills").className = "col-12 collapsed";
}

// Close further information on skill
function closeSkill() {
    document.getElementById("skill-dialog").className = "col-12 collapsed";
    document.getElementById("skills").className = "col-12 uncollapsed";

    document.getElementById("skill-icon").className = "";
    document.getElementById("skill-title").textContent = "";
    document.getElementById("skill-desc").innerHTML = "";
}
  
// Randomly load an image to be used for the 404 meme
function load404Image() {
    images = [
        "oh_i_dont_think_so.jpg",
        "you_will_try.jpg"
    ];

    imgElement = document.getElementById("404-img");
    imgElement.src = "/img/404/" + images[Math.floor(Math.random() * images.length)];
}