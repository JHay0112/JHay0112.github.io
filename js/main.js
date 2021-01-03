/*
    js/main.js
    Author: Jordan Hay
*/

// Globals
var nav = document.getElementById("nav"); // Get the nav
var sticky = nav.offsetTop + 300; // Get the offset position of the nav
var coll = document.getElementsByClassName("read-more-button"); // Collapsible elements
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

// Blog credentials
const BLOGKEY = "AIzaSyCmRuFXPVAX0vj6nsGngoDZS2B1YC8ipso"; // NOTE: Limited to requests from https://jordanhay.com/
const BLOGID = "1327285918509002434";

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

    var imgNum = 7; // Amount of images in

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
        await sleep(1000);
        pseudoHeader.style.visibility = "visible";
        pseudoHeader.style.animation = "slideshow-new-slide 1s ease";
        await sleep(1000);
        header.style.backgroundImage = "url(\"img/header/".concat(img, ".jpg\")");
        pseudoHeader.style.animation = "";
        pseudoHeader.style.visibility = "hidden";
        await sleep(8000);
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

// Load posts from feed
function loadPosts(feed) {
    console.log(feed);
    // Get posts element
    var post_el = document.getElementById("blogposts");
    post_el.innerHTML = "";
    // Make request
    var xhttp = new XMLHttpRequest(); // New request
    // Setup on ready
    xhttp.onreadystatechange = function() {
        // If valid state
        if (this.readyState == 4 && this.status == 200) {
            // Get posts data
            var posts = JSON.parse(String(this.responseText)).items;
            // Store generated html
            var html = "";    
            // Iterate through each post
            try {
                posts.forEach(function(post) {

                    html += "<article class='post'>";

                    html += "<h2>" + post.title + "</h2>";
                    html += "Published " + new Date(post.published).toLocaleString() + " by " + post.author.displayName + "</h4>";

                    // Trim post content if needed
                    var content = post.content;

                    if(content.length > 100) {
                        content = content.substring(0, 100);
                        content += "... <a href='/post?id=" + post.id + "'>Read more</a>";
                    }

                    html += "<p>" + content + "</p>";

                    html += "</article>";
                }); 
            } catch(error) {
                html = "No Results";
            }

            // Insert generated HTML
            post_el.innerHTML = html;
        } else {
            post_el.innerHTML = '<p class="loading-text" style="position: relative; left: 50%"><span></span><span></span><span></span></p>';
        }
    };
    // Send request
    xhttp.open("GET", feed, true);
    xhttp.send();
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