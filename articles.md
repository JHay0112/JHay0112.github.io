---
title: Articles
---

{% for article in site.articles reversed %}
<article class="card" onclick="location.href='{{article.url}}'" style="background-image: url('{{article.thumbnail}}')">
    <h2><a href="{{article.url}}">{{article.title}}</a></h2>
</article>
{% endfor %}