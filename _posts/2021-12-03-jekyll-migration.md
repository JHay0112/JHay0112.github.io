---
layout: post
title: Jekyll Migration
date: '2021-12-03T23:21:00+13:00'
author: Jordan Hay
tags:
- Github
- HTML
- CSS
- Jekyll
recommend: false
---

Recently the project blog moved from a hacky JavaScript-Blogger backend to being fully hosted on Github with Jekyll. With Jekyll blog posts are produced without dependency on another service nor my hacky JavaScript that accessed the posts, additional HTML/CSS/JS (like the embedded JavaScript snippet below) can be cleanly integrated into the posts, posts can be checked that they present well before publishing, and the URLs look about ten times better. (Compare <a href="{{site.baseurl}}/post?id=2256251256775833359" target="_blank">https://jordanhay.com/post?id=2256251256775833359</a> to <a href="{{site.baseurl}}/blog/2021/10/measuring-height-of-puaka-james-hight" target="_blank">https://jordanhay.com/blog/2021/10/measuring-height-of-puaka-james-hight</a> for example).

Keen-eyed blog readers or followers of my website's Github Repository may have noticed this change earlier than this announcement. Those who watch the Github may hav even taken notice of this monstrosity (Figure 1) during the migration.

<figure>
    <img src="{{site.baseurl}}/img/posts/2021/12/revert-revert-jekyll-migration.png" />
    <figcaption>Figure 1 - Screenshot of an awful commit forced by my own silliness and lack of forethought.</figcaption>
</figure>

Old links to posts will continue to work for the time being thanks to a redirection script that is run on landing on the 404 page.

<pre><code class="language-javascript">/*
    404.js
    Author: Jordan Hay

    Handles scripts for the 404 page, in particular automatic redirection from the old blog post system.
*/

// Map of URLs to redirects
var redirects = {
    "/post?id=3610107036356187790": "/blog/2021/11/jmath-v400-maths-with-units",
    "/post?id=2256251256775833359": "/blog/2021/10/measuring-height-of-puaka-james-hight",
    "/post?id=465513769405954985": "/blog/2021/09/measuring-rc-circuit-current-with",
    "/post?id=102352512623133213": "/blog/2021/08/sunrise-alarm",
    "/post?id=1499542283842408082": "/blog/2021/07/jmath-developing-my-own-mathematics",
    "/post?id=1979118837645266005": "/blog/2021/06/hello-microcontoller-world",
    "/post?id=7611195517958917514": "/blog/2021/06/building-another-custom-rear-case-for",
    "/post?id=4578528078262559965": "/blog/2021/06/i-bought-cnc",
    "/post?id=6270652927052903070": "/blog/2021/05/solar-terrarium-update-desperate",
    "/post?id=1614259998009807866": "/blog/2021/04/creating-6-terrarium-solar-light-with",
    "/post?id=7233595114629055144": "/blog/2021/01/building-custom-rear-case-for-ender-3"
}

// Apply redirect
// Get current window
var current = window.location.pathname + window.location.search;
// If in redirects, then apply redirect
if (current in redirects) {
    window.location.href = redirects[current];
}
</code></pre>

It takes the current page path, checks if it is in a dictionary of the old post paths mapped to their respective new paths and then redirects the page to the new path if there is a mapping. If you want to test it out you can follow this link <a href="{{site.baseurl}}/post?id=2256251256775833359" target="_blank">https://jordanhay.com/post?id=2256251256775833359</a> which should redirect you (via 404.js) to my personal favourite project, where I measure the height of the The University of Canterbury's Puaka-James Hight Central Library with a 3D Printed Protractor.

The above script can be found <a href="https://github.com/JHay0112/JHay0112.github.io/blob/master/js/404.js" target="_blank">here</a>, however at the time of writing this is identical to the above snippet.

Those of you reading this before any more posts are made may also notice that this post is not featured on the front page, this is because I don't believe it to be that interesting so I wrote some Jekyll instructions to only recommend ones I want it to.