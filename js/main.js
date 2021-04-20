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
    ["fab fa-python", "Python", "Both hobby and university first-level experience with Python for function, object-oriented, and GUI programming."],
    ["fab fa-php", "PHP", "PHP for server-side behaviour of websites and databases since early 2018."],
    ["fas fa-database", "SQL", "Hobby and high-school experience with MySQL and SQLite databases since early 2018."],
    ["fab fa-git-alt", "Git", "Git is a version control system used to manage code. Jordan has been using Git since late 2017."],
    ["fab fa-html5", "HTML5", "Proficient in HTML5 for website structure."],
    ["fab fa-css3", "CSS3", "CSS3 for mobile-friendly website design."],
    ["fab fa-js", "JavaScript", "Hobby experience with JS for website browser programming."],
    ["fas fa-brain", "Machine Learning", "Basic hobby experience with Tensorflow Machine Learning."]
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
        document.body.style.overflowY = "auto";
    } else {
        // If from self, delete all of these instantly
        loadingLogo.remove()
        loadingText.remove()
        loadingScreen.remove()
        document.body.style.overflowY = "auto";
    }
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

                    var content = post.content;

                    // Find if image is included in post
                    try {
                        var post_img = new DOMParser().parseFromString(content, "text/html").getElementsByTagName("img")[0].src;
                    } catch(error) {
                        console.log(error);
                    }

                    html += "<div class='post row'>";

                    html += "<article class='col-8'>";

                    html += "<h2>" + post.title + "</h2>";
                    html += "Published " + new Date(post.published).toLocaleString("en-NZ") + " by " + post.author.displayName + "</h4>";

                    html += "<aside class='col-12 dynamic-img mobile-only' style='background-image: url(" + post_img + "); min-height: 300px;'></aside>";

                    // Trim content
                    if(content.length > 100) {
                        content = content.substring(0, 300);
                        // Strip HTML
                        content = content.replace("</p>", "&nbsp;");
                        var temp_div = document.createElement("div");
                        temp_div.innerHTML = content;
                        content = temp_div.textContent || temp_div.innerText || "";
                        content += "... <a href='/post?id=" + post.id + "'>Read more</a>";
                    } else {
                        // Strip HTML
                        content = content.replace("</p>", "&nbsp;");
                        var temp_div = document.createElement("div");
                        temp_div.innerHTML = content;
                        content = temp_div.textContent || temp_div.innerText || " ";
                    }

                    html += "<p>" + content + "</p>";

                    html += "</article>";

                    html += "<aside class='col-4 dynamic-img desktop-only' style='background-image: url(" + post_img + ");'></aside>";

                    html += "</div>";
                }); 
            } catch(error) {
                html = "No Results";
                console.log(error);
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

// Get a single post
function loadPost(feed) {
    // Get post element
    var post_el = document.getElementById("post");
    post_el.innerHTML = "";
    // Make request
    var xhttp = new XMLHttpRequest(); // New request
    // Setup on ready
    xhttp.onreadystatechange = function() {
        // If valid state
        if (this.readyState == 4 && this.status == 200) {
            // Get post data
            var post = JSON.parse(String(this.responseText));
            // Store generated html
            var html = "";    

            try {
                    html += "<h2>" + post.title + "</h2>";
                    html += "Published " + new Date(post.published).toLocaleString("en-NZ") + " by " + post.author.displayName + "</h4>";

                    html += "<p>" + post.content + "</p>";
            } catch(error) {
                html = "Invalid post.";
                console.log(error);
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