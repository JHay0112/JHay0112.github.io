---
title: Blog
author: Jordan Hay
date: 2021-11-14
description: Jordan Hay's Blog.

layout: default
---

{% for post in site.posts %}
<div class="post row" onclick="window.location='{{post.url}}'">
    <article class="col-12">
        <h2 class="post-title">{{post.title}}</h2>
        <p>Published {{post.date}} by {{post.author}}</p>
        <p class="post-content">{{post.description}}</p>
        <hr />
    </article>
</div>
{% endfor %}