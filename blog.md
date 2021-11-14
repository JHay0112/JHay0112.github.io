---
title: Project Blog
author: Jordan Hay
date: 2021-11-14
description: Jordan Hay's Project Blog.

layout: default
---

{% for post in site.posts %}
{% assign image_position = forloop.index | modulo: 2 %}
<div class="post row" onclick="window.location='{{site.baseurl}}{{post.url}}'">
    {% if image_position == 1 and post.img != nil %}
    <!-- Image Before -->
    <aside class='col-4 dynamic-img desktop-only' style='background-image: url("{{site.baseurl}}{{post.img}}");'></aside>
    {% endif %}
    {% if post.img != nil %}
    <article class="col-8">
    {% else %}
    <article class="col-12">
    {% endif %}
        <!-- Post: {{post.title}} -->
        <h2 class="post-title">{{post.title}}</h2>
        <p>Published {{post.date}} by {{post.author}}</p>
        <p class="post-content">{{post.excerpt}}<a href="{{post.url}}">Read more</a></p>
    </article>
    {% if post.img != nil %}
    <!-- Mobile Image -->
    <aside class='col-12 dynamic-img mobile-only post-image' style='background-image: url("{{site.baseurl}}{{post.img}}")'></aside>
    {% endif %}
    {% if image_position == 0 and post.img != nil%}
    <!-- Image After -->
    <aside class='col-4 dynamic-img desktop-only' style='background-image: url("{{site.baseurl}}{{post.img}}");'></aside>
    {% endif %}
    {% if forloop.last == false %}
    <!-- End HR -->
    <hr />
    {% endif %}
</div>
{% endfor %}