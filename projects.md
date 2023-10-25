---
title: Projects
---

{% for project in site.projects reversed %}
<article class="card" onclick="location.href='{{project.url}}'" style="background-image: url('{{project.thumbnail}}')">
    <h2>{{project.title}}</h2>
</article>
{% endfor %}