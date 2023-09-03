---
title: Articles
---

{% for article in site.articles reversed %}
<article class="card" onclick="location.href='{{article.url}}'" style="background-image: url('{{article.thumbnail}}')">
    <h2>{{article.title}}</h2>
    <p>{{article.content | strip_html | truncate: 300}} <a href="{{article.url}}">read more</a></p>
</article>
{% endfor %}