---
title: Articles

book_colours:
 - midnightblue
 - indianred
 - steelblue
 - darkgreen
 - firebrick
 - slateblue
 - goldenrod
 - saddlebrown
 - darkslategrey

text_colours:
 - f2f2f2
 - f2f2f2
 - f2f2f2
 - f2f2f2
 - f2f2f2
 - f2f2f2
 - 252525
 - f2f2f2
 - f2f2f2

book_heights:
 - 75
 - 80
 - 85
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
{% assign recent_articles = site.articles | reverse | slice: 0, books_per_shelf %}
<table class="bookshelf">
    <tr class="shelf">
{% for article in recent_articles %}
{% assign r = article.date | date: "%Y%m%d" %}
{% assign c = r | modulo: page.book_colours.size %}
{% assign h = r | modulo: page.book_heights.size %}
        <td class="book" style="height: {{page.book_heights[h]}}%; width: 15%; background-color: {{page.book_colours[c]}}; color: #{{page.text_colours[c]}};">
            <a href="{{article.url}}">{{article.title}}</a>
        </td>
{% endfor %}
        <td class="label">Most Recent Articles</td>
    </tr>

{% assign i = 0 %}
{% assign remaining_articles = site.articles | reverse | slice: books_per_shelf, site.articles.size %}
{% for article in remaining_articles %}
{% if i == 0 %}
    <tr class="shelf">
{% endif %}
{% assign r = article.date | date: "%Y%m%d" %}
{% assign c = r | modulo: page.book_colours.size %}
{% assign h = r | modulo: page.book_heights.size %}
        <td class="book" style="height: {{page.book_heights[h]}}%; width: 15%; background-color: {{page.book_colours[c]}}; color: #{{page.text_colours[c]}};">
            <a href="{{article.url}}">{{article.title}}</a>
        </td>
{% assign i = i | plus: 1%}
{% if i == books_per_shelf %}
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

</table>