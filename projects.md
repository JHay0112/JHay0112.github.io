---
title: Projects
---

<link rel="stylesheet" type="text/css" href="/css/projects.css" />

{% for project in site.projects %}
<article class="project" onclick="location.href='{{project.url}}'">
    <h3>{{project.title}}</h3>
    <p>{{project.content | strip_html | truncate: 300}}</p>
</article>
{% endfor %}