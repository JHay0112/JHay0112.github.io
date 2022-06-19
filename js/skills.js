/**
 * Handles skills dialogue on home page.
 */

// Globals

/**
 * Skills with icon, short description, and long description.
 * Global as 
 */
 const skills = [
    ["fas fa-microchip", "Arduino/Robotics", "Hobby and University experience with electronics. Primarily Arduino for microcontrol, automation, and robotics since late 2018."],
    ["fas fa-broadcast-tower", "Radio Communications", "Basic experience in radio communications with Ashley Communications and hobby software-defined radio."],
    ["fas fa-cube", "3D Printing/CAD", "Hobby and University experience with CAD, 3D Printing, and 3D Printing maintenance since 2018."],
    ["fab fa-python", "Python", "Both hobby and university first-year experience with Python for function, object-oriented, and GUI programming."],
    ["fab fa-git-alt", "Git", "Proficient in Git for version control and project management."],
    ["fab fa-html5", "HTML5", "Proficient in HTML5 for website structure."],
    ["fab fa-css3", "CSS3", "CSS3 for mobile-friendly website design."],
    ["fab fa-js", "JavaScript", "Hobby experience with JS for website browser programming."]
]

// Functions

/**
 * Loads in skills from skills array in skill section.
 */
 function loadSkills() {

    const skillEl = document.getElementById("skills");

    for (var i = 0; i < skills.length; i++) {

        const skill = skills[i];
        const skillIco = document.createElement("div");

        skillIco.className = skill[0] + " skill";
        skillIco.id = "skill-ico-" + i;
        skillIco.title = skill[1];

        skillEl.appendChild(skillIco)

        // Add an on click so that skills can be expanded, see openSkill()
        document.getElementById("skill-ico-" + i).setAttribute("onclick", "openSkill(" + i + ")")
    }
}

/**
 * Runs when a skill is clicked, loads the long description of the skill.
 * 
 * @param {int} skillIndex Index of the skill to load.
 */
function openSkill(skillIndex) {

    const skill = skills[skillIndex];
    const skillDialogue = document.getElementById("skill-dialogue");

    document.getElementById("skill-icon").className = skill[0] + " ";
    document.getElementById("skill-title").textContent = skill[1];
    document.getElementById("skill-desc").innerHTML = skill[2];

    skillDialogue.style.animation = "fade-in 0.3s ease forwards";
    skillDialogue.style.maxHeight = skillDialogue.scrollHeight + "px";

    for (var i = 0; i < skills.length; i++) {
        var skillIcon = document.getElementById("skill-ico-" + i);
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

/**
 * Runs when a skill is closed, resets back to the normal dialogue.
 */
function closeSkill() {

    const skillDialogue = document.getElementById("skill-dialogue");
    
    skillDialogue.style.maxHeight = "0px";
    skillDialogue.style.animation = "fade-out 0.2s ease forwards";

    for (var i = skills.length - 1; i >= 0; i--) {
        const skillIcon = document.getElementById("skill-ico-" + i);
        // Make big and bold
        skillIcon.style.scale = "1";
        skillIcon.style.opacity = "1";
    }
}
