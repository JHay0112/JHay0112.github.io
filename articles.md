---
title: Articles
---

<style>
    /* Inserted from css/cards.css */
    {% include css/cards.css %}
</style>

These are articles I have written. Most of them focus on my projects, but are very much based on
what I feel interested in writing about. I consider these articles some of my more interesting ones,
but I also maintain a larger <a href="{{site.baseurl}}/archive">archive of articles</a> that I have 
written over the years.

{% for article in site.articles reversed %}
<article class="card" onclick="location.href='{{article.url}}'" style="background-image: url('{{article.thumbnail}}')">
    <section class="text">
        <h2><a href="{{article.url}}">{{article.title}}</a></h2>
        <p>Published {{article.date | date: "%Y/%m/%d"}}</p>
    </section>
</article>
{% endfor %}