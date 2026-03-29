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

<table class="bookshelf">
{% assign shelves_per_row = 3 %}
{% assign books_per_shelf = 4 %}
{% assign first_shelf = true %}
{% assign i = 0 %}
{% assign s = 0 %}
{% for article in site.articles reversed %}

{% if i == 0 %}
    <tr class="shelf">
{% endif %}

{% assign r = article.date | date: "%Y%m%d" %}
{% assign c = r | modulo: page.book_colours.size %}
{% assign h = r | modulo: page.book_heights.size %}
        <td class="book" style="height: {{page.book_heights[h]}}%; width: 20%; background-color: {{page.book_colours[c]}}; color: #{{page.text_colours[c]}};">
            <a href="{{article.url}}">
                {{article.short_title | default: article.title}}
            </a>
        </td>

{% assign i = i | plus: 1 %}
{% if i == books_per_shelf %}
{% if first_shelf %}
        <td class="label">^ Most Recent Articles</td>
{% assign first_shelf = false %}
{% endif %}
    </tr>
{% assign i = 0 %}
{% endif %}

{% assign s = s | plus: 1 | modulo: shelves_per_row %}
{% endfor %}

{% if i != 0 %}
    </tr>
{% endif %}

{% assign empty_shelves = shelves_per_row | minus: s | modulo: shelves_per_row %}
{% for j in (1..empty_shelves) %}
    <tr class="shelf empty"></tr>
{% endfor %}

</table>