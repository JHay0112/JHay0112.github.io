/*
    404.js
    Author: Jordan Hay

    Handles scripts for the 404 page, in particular automatic redirection from the old blog post system.
*/

// Map of URLs to redirects
var redirects = {
    "/post?id=3610107036356187790": "/blog/2021/11/jmath-v400-maths-with-units.html",
    "/post?id=2256251256775833359": "/blog/2021/10/measuring-height-of-puaka-james-hight.html",
    "/post?id=465513769405954985": "/blog/2021/09/measuring-rc-circuit-current-with.html",
    "/post?id=102352512623133213": "/blog/2021/08/sunrise-alarm.html",
    "/post?id=1499542283842408082": "/blog/2021/07/jmath-developing-my-own-mathematics.html",
    "/post?id=1979118837645266005": "/blog/2021/06/hello-microcontoller-world.html",
    "/post?id=7611195517958917514": "/blog/2021/06/building-another-custom-rear-case-for.html",
    "/post?id=4578528078262559965": "/blog/2021/06/i-bought-cnc.html",
    "/post?id=6270652927052903070": "/blog/2021/05/solar-terrarium-update-desperate.html",
    "/post?id=1614259998009807866": "/blog/2021/04/creating-6-terrarium-solar-light-with.html",
    "/post?id=7233595114629055144": "/blog/2021/01/building-custom-rear-case-for-ender-3.html"
}

// Apply redirect
// Get current window
var current = window.location.pathname + window.location.search;
// If in redirects, then apply redirect
if (current in redirects) {
    window.location.href = redirects[current];
}