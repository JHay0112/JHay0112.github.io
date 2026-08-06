---
title: Articles

book_colours:
 - f5f5f5
 - 30e3ca
 - 2f89ac
 - 252525

text_colours:
 - 252525
 - 252525
 - f2f2f2
 - f2f2f2
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

An Atom feed of articles is available at
[https://jordanhay.com/feed/articles.xml](https://jordanhay.com/feed/articles.xml)

<table class="bookshelf">
{% assign shelves_per_row = 3 %}
{% assign books_per_shelf = 4 %}
{% assign i = 0 %}
{% assign s = 0 %}
{% for article in site.articles reversed %}

{% if i == 0 %}
    <tr class="shelf">
{% endif %}

{% assign r = article.date | date: "%Y%m%d" %}
{% assign c = r | modulo: page.book_colours.size %}
        <td class="book" style="background-color: #{{page.book_colours[c]}}; color: #{{page.text_colours[c]}};">
            <a href="{{article.url}}">
                <span class="title">{{article.short_title | default: article.title}}</span>
                <span class="date">{{article.date | date: "%Y-%m"}}</span>
            </a>
        </td>

{% assign i = i | plus: 1 %}
{% if i == books_per_shelf %}
    </tr>
{% assign i = 0 %}
{% assign s = s | plus: 1 | modulo: shelves_per_row %}
{% endif %}
{% endfor %}

{% if i != 0 %}
    </tr>
{% assign s = s | plus: 1 | modulo: shelves_per_row %}
{% endif %}

{% if s != 0 %}
{% assign empty_shelves = shelves_per_row | minus: s %}
{% for j in (1..empty_shelves) %}
    <tr class="shelf empty"></tr>
{% endfor %}
{% endif %}

</table>
