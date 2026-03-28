---
title: Articles

book_colours:
 - midnightblue
 - green
 - maroon
 - navy
 - darkgreen
 - darkred
 - indigo
 - darkslateblue
 - gold

text_colours:
 - white
 - white
 - white
 - white
 - white
 - white
 - white
 - white
 - black
---

<style>
    /* Inserted from css/bookshelf.css */
    {% include css/bookshelf.css %}
</style>

The following are a selection of articles that I have written and hosted on this
website since early 2021. The earliest of these articles was written before I
started my university education. Naturally, the stylistic choices and writing
style I employ has changed considerably since then. However, I have done my best
to maintain the articles in as close to their original state as possible.

A backlog of article topics that I intend to write on are published
[here](/backlog).

{% assign books_per_shelf = 5 %}
{% assign i = 0 %}
<table class="bookshelf">
{% for article in site.articles reversed %}
{% if i == 0 %}
    <tr class="shelf">
{% endif %}
{% assign r = article.date | date: "%Y%m%d" %}
{% assign c = r | modulo: page.book_colours.size %}
{% assign h = r | modulo: 15 | plus: 75 %}
        <td class="book" style="height: {{h}}%; width: 15%; background-color: {{page.book_colours[c]}}; color: {{page.text_colours[c]}}; font-family: 'Libre Baskerville', serif; font-weight: bold;">
            <a href="{{article.url}}">{{article.title}}</a>
        </td>
{% assign i = i | plus: 1%}
{% if i == books_per_shelf %}
        <td class="label">Recent Articles</td>
    </tr>
{% assign i = 0 %}
{% endif %}
{% endfor %}

{% if i != 0 %}
    </tr>
{% endif %}

{% assign remainder = i | modulo: 2 %}
{% if remainder != 0 %}
    <tr class="shelf empty">
    </tr>
{% endif %}