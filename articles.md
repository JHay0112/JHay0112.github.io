---
title: Articles
---

<style>
    /* Inserted from css/cards.css */
    {% include css/cards.css %}
</style>

The following are a selection of articles that I have written and hosted on this
website since early 2021. The earliest of these articles was written before I
started my university education. Naturally, the stylistic choices and writing
style I employ has changed considerably since then. However, I have done my best
to maintain the articles in as close to their original state as possible.

A backlog of article topics that I intend to write on are published
[here](/backlog).

{% for article in site.articles reversed %}
<article class="card" onclick="location.href='{{article.url}}'" style="background-image: url('{{article.thumbnail}}')">
    <section class="text">
        <h2><a href="{{article.url}}">{{article.title}}</a></h2>
        <p>Published {{article.date | date: "%Y/%m/%d"}}</p>
    </section>
</article>
{% endfor %}
