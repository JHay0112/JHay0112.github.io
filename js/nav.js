/*
  Author: Jordan Hay
  File: js/nav.js
  Date: 16/05/2019
*/

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

// Body

console.log("Nav JS Loaded");