---
title: Projects
---

<link rel="stylesheet" type="text/css" href="/css/projects.css" />

{% for project in site.projects %}
<article class="project">
    {{project.content | strip_html | truncate: 300}}
    <a href="{{project.url}}">Read</a>
</article>
{% endfor %}