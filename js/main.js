/*
  Author: Jordan Hay
  File: js/main.js
  Date: 19/04/2019
*/

// Global Variables

// Skills for about.html skills section
var skills = [
  ["html5", "HTML5", "Jordan Hay is proficient in HTML5. HTML is a markdown language commonly used to build webpages. It is one of the internet's core three languages along with CSS and JavaScript. Jordan Hay has been using HTML since mid-2017."],
  ["css3", "CSS3", "Jordan Hay has advanced experience in CSS3, including the use of media queries and animations. CSS is used to describe how a markdown language such as HTML should be displayed. CSS is one of the internet's core three languages along with HTML and JavaScript. Jordan Hay has been using CSS since mid-2017."],
  ["js", "JavaScript", "Jordan Hay has an intermediate knowledge of JavaScript. JavaScript is one of the internet's core three languages along with HTML can CSS. Jordan Hay has been using JavaScript since early 2019."],
  ["php", "PHP", "Jordan Hay has an intermediate knowledge of PHP. PHP is a general purpose programming language commonly used an originally designed for web development. Jordan Hay has been using PHP since mid-2018."],
  ["database fas", "SQL", "Jordan Hay is proficient in SQL. SQL is a language designed and used managing and developing databases. Jordan Hay has been using SQL since mid-2018."],
  ["python", "Python 3", "Jordan Hay has a solid foundation in Python 3. Python is a general purpose programming language that is notable for its extensive use of whitespace and readability. Jordan Hay has been using Python since mid-2018."],
  ["code-branch fas", "Git", "Jordan Hay is experienced in Git, a version control system that is commonly used by programmers to manage their source code. Jordan Hay has been suing Git since late 2017."],
  ["camera-retro fas", "Photography", "Jordan Hay has been taking photos since ~2015. Originally using an Olympus TG-630 point and shoot before upgrading to a Canon EOS 350D in mid 2018. You can find a portfolio of his images <a href='https://www.instagram.com/jordanhayphotos/' target='_blank'>here</a>."],
  ["microchip fas", "Arduino/Robotics", "Jordan Hay has had experience with the Arduino microcontroller and language since late 2018. Arduinos are small microcontrollers used for hobby electronics. Arduinos use a programming language also called Arduino which is based off of C/C++ syntax that is compiled to Assembly language that is run on the Arduino microprocessor."],
  ["cube fas", "CAD", "Jordan has experience in CAD/3D modelling for 3D printing, predominantly in FreeCAD. Jordan Hay has had experience in CAD and 3D modelling since late 2018."],
  ["node-js", "Node.js", "Jordan has basic experience in Node.js. Node.js is a Javascript runtime for network applications. Jordan Hay has had experience in Node.js since mid 2019."]
]

// Functions

// Expand/collapse mobile nav
function toggleNav() {

  var nav = document.getElementById("main-nav");

  if (nav.className === "nav") {
    nav.className += " mobile";
  } else {
    nav.className = "nav";
  }
}

// Load skills for About
function loadSkills() {

  var skillEl = document.getElementById("skills");

  for (var i = 0; i < skills.length; i++) {

    var skill = skills[i];

    skillEl.innerHTML += "<div onclick='openSkill(" + i + ")' class='fab fa-" + skill[0] + " skill'></div>";
    console.log("Loaded " + skill[1] + " Icon");
  }

  var skillEls = document.querySelectorAll(".skill");

  // Time Variables
  var timeMult = 0.1;
  var timeBase = 0.3;

  for(var i = 0; i < skillEls.length; i++) {
    skillEls[i].style.animationDuration = (i * timeMult) + timeBase + "s"; 
  }

}

// Open further information on the skill as chosen by param skill Index
function openSkill(skillIndex) {
    
  var skill = skills[skillIndex];

  document.getElementById("skill-icon").className = "fab fa-" + skill[0] + " ";
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

// Body

console.log("JS Loaded");