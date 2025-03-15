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

// Main

// Setup event listeners
document.body.onkeydown = function(e) { newBee(e) };