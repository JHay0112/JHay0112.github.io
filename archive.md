---
title: Archive
---

<style>
    /* Inserted from css/cards.css */
    {% include css/cards.css %}
</style>

For various reasons I have archived some of my articles. In general I consider these to be of a
lesser quality than the "show-case" articles - whether that be for a lack of attention to detail or
the fault of a less-than stimulating subject matter. I keep them here since at some point I thought
they were worth publishing, even if I would think twice now.

{% for article in site.archive reversed %}
<article class="card" onclick="location.href='{{article.url}}'" style="background-image: url('{{article.thumbnail}}')">
    <h2><a href="{{article.url}}">{{article.title}}</a></h2>
</article>
{% endfor %}