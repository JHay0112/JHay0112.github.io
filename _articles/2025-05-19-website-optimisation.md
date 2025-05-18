---
title: Website HTTP request reduction
thumbnail: /img/posts/2025/05/website_preoptimisation_network_load.png
---

Up until commit [eb3011a](https://github.com/JHay0112/JHay0112.github.io/commit/eb3011ae5700b9a102df59f8b9ee3497e773b7fb), 
this website was designed with little concern for network performance. Analysis of a 
pre-optimisation network trace reported by Firefox (Figure 1) shows that the landing page takes 
approximately 410 ms to load and requires 18 distinct HTTP GET requests.

<figure>
    <img src="/img/posts/2025/05/website_preoptimisation_network_load.png" />
    <figcaption>Figure 1 - Pre-optimisation network trace in Firefox. Website is locally hosted and 
        cache disabled for testing.</figcaption>
</figure>

All HTTP requests after the initial document request (i.e. the one spawned by the user navigating
to the web page) are caused by the result of an earlier request requiring more information from the
web server. For example, the template that all pages on this website are based on contains the
a stylesheet tag in the header of the form:

```html
<link rel="stylesheet" type="text/css" href="/css/styles.css" />
```

Upon reading this, the web browser requests the file `/css/styles.css` to correctly style the web 
page. This particular request is present as the second request in Figure 1. Upon receiving and 
interpreting `/css/styles.css` an additional two requests are made due to the inclusion of `@import`
statements in the stylesheet. The associated requests are 10 and 11 in Figure 1.

```css
@import "text.css";
@import "cards.css";
```

The `@import` statements were included for separation of concerns in the styling of the website.
Decomposing code in this manner is a common strategy for managing complexity in a code base and 
groups related code in a logical manner for design thinking. However, this is clearly interfering
with the efficient loading of the website.

There is an effective way around this issue. The framework I have built this website in, Jekyll, can
insert the text of a file into another at the time of compilation. This allows source code to remain
well organised whilst not sacrificing the website performance.

```html
<style>
    /* Inserted from css/text.css */
    {% raw %}{% include css/text.css %}

    /* Inserted from css/styles.css */
    {% include css/styles.css %}{% endraw %}
</style>
```

Loading the same page, with all stylesheet and script tags, and import statements replaced with
compilation-time inclusions where-possible yields an approximately 90 ms reduction in load-time
(Figure 2). The number of requests is halved from 18 to 9. This is a small but noticeable 
improvement in the loading of the website.

<figure>
    <img src="/img/posts/2025/05/optimised_website_network_load.png" />
    <figcaption>Figure 2 - Post-optimisation network trace in Firefox. Made under conditions as 
        close as is reasonably possible to the initial test.</figcaption>
</figure>

The load-time improvement is limited by the large contribution of the font-loading time. Amdahl's
law would have dictated this be the first port of call for optimisation. However, since it is my
preference not to self-host the fonts there is little improvement that I can make to the 
font-loading time at this time.
