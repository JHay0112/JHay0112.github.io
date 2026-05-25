---
title: Some Websites Are Places
---

## Introduction

Over a not-so-recent weekend, I converted my website's "Articles" section to use 
skeuomorphic books instead of cards to represent each article (Figure 1). At the
same time, my friend sirlilpanda made a similar change to their own website[^1]
(Figure 2). Both of our choices go against the "common sense" of web design. The
user experience is unfamiliar and much less intuitive than the cultural
convention that cards have come to fill. However, I believe that these
interfaces fulfill a different purpose: place-making.

<figure>
    <img src="/img/posts/2026/05/skeuomorph-bookshelf.png" />
    <figcaption>
        Figure 1 - My current skeuomorphic bookshelf design.
    </figcaption>
</figure>

<figure>
    <img src="/img/posts/2026/05/sirlilpandas-bookshelf.png" />
    <figcaption>
        Figure 2 - A shelf from sirlilpanda's skeuomorphic bookshelf design.
    </figcaption>
</figure>

This article discusses the geographical concept of place in relationship to the
internet. I explore the relationship between homes in the real world and homes
on the internet and explain why skeuomorphism is an important mechanism for
drawing an analogy between real-world objects and internet places in order to
invoke particular feelings of place.

## Table of Contents

 1. 
{:toc}

## What defines a place?
Phenomenologically speaking, "place" is a concept related to but distinct from
"location". "Location" refers to a point or region of physical space that
something may occupy or reside within. In geographic terms, location is
typically represented by coordinates like latitude and longitude. On the
internet, the equivalent is the "uniform resource locator" (URL) such as the one
that identifies this page - 
"[{{site.url}}{{page.url}}]({{site.url}}{{page.url}})".

"Place" on the other hand refers to the personal experience of a location or
locations. This definition captures the common distinction between a "house" and
a "home". Home is a place that is invoked by the house that we live in, that
contains our things, and typically some of the closest people we care about. A
home can move with us when we select a new house to live in, and a home can grow
and shrink to incorporate the neighbourhood, settlement, or region we live in as
appropriate and according to our own needs and emotions.

## Internet Places
The internet operates with remarkably similar rules to locations and places in
the real world. Both have methods for identifying current location, discovering
new locations, and travelling in between them. In the real world these are set
by the physical allowances and limitations of the space we are currently in,
whereas on the internet these are set by what can be expressed in the interpreted
hypertext we view.

For the purpose of this article, the only places I am going to focus on are
"internet homes". I intend to address the differences with transit on the
internet as opposed to the real world in a later article.

### Internet Homes
An internet home is what I call place like my website and sirlilpanda's website.
They are the place a person presents as a collection of their own things and
ideas that they would like to show to the world. In that sense, the function of
an internet home is distinct from a real world home since we don't need to
actually reside within them for rest. Because of that, the term should be 
thought of as applying in a metaphorical way, where the website represents the
personality of the person in the same way the furnishings of our houses do.

## Skeuomorphism
A skeuomorph is a designed product that derives some or all of its ornamental
attributes from a previous design that required those attributes for its
operation. The same attributes in the new design are no longer required due to
changes in technology or representation, but are retained by the designer to
retain a familiar feel of the old design or as an indication of how the new
design should be used.

Skeuomorphism plays a particular role in drawing analogy between physical and
digital spaces by importing the cultural conventions of physical objects into
digital space. Done well, skeuomorphism allows a designer to port the experience
of a user with a physical object to the digital alternative they are presenting.
However, skeuomorph designs risk awkward interactions that do not take advantage
of the new technology they have been made for.

## Furnishing an Internet Home
This brings me to what I see as the ultimate point of the article. Skeuomorphs
play a role in building a sense of place when we are on the internet. For
internet homes, we can use skeuomorphs to invoke similar feelings to those we
feel when we see parts of our own homes.

In this section, I look at how I decided to furnish my website with a skeuomorph.
The goal for my website was to replace the impersonal "card" style layout on the
article page with one that invoked the look and feel of a bookshelf. 

### Iteration
The first version (Figure 3) of the skeuomorphic bookshelf I designed was not to
everyone's taste.

<figure>
    <img src="/img/posts/2026/05/vertical-books.png" />
    <figcaption>
        Figure 3 - A version of my skeuomorphic bookshelf that used vertical books.
    </figcaption>
</figure>

I believe kaezone[^2] put it best with,

> "i am sick and have a headache so making me tilt my head feels evil"

Naturally, this is concerning feedback to get. However, the vertical orientation
of books on a bookshelf is quite "natural" in the sense that it is how you would
commonly find books in the real world. Anyone who has spent an extended time in
a book shop will know the discomfort of having their head tilted for a long
period. I suspect most readers would rather not browse my articles if I brought
this pain to the internet, especially when rotated text is otherwise extremely
rare.

Another friend pointed out a very serious issue with this design as well, the
text on the book spines is atypically oriented (Figure 4). Furthermore,
the CSS style I used to rotate the text (`writing-mode: sideways-lr`) is not
supported by some recent versions of Safari (Figure 5).

<figure>
    <img src="/img/posts/2026/05/broken-books-in-safari.png" />
    <figcaption>
        Figure 5 - Poor support for the CSS style `writing-mode` caused some
        browsers to have trouble correctly drawing the books with rotated text.
    </figcaption>
</figure>

The conclusion implied by this feedback was obvious. I needed to get rid of
the books or find a way to make them work. Fortunately for the bookshelf
skeuomorph, rotating the books doesn't take too much away from the object
they are attempting to invoke.

## Critique
Any opinion worth having should be able to stand against reasonable critique.
Because this work is fundamentally one based on my opinion rather than any form
of scientific fact, I find it responsible to present a section that critiques it.

### Your sense of place is not the same as mine
I believe the single most important piece of criticism to cover is how the
interpretation of any skeuomorph is inherently personal. Especially when
using them for the purpose of place-making.

Considering my own skeuomorphic bookshelf, the feeling I have pursued is
obviously related to books and places that books reside. My personal experience
with places full of books is that they are relaxing and full of interesting
things for me to learn about. Naturally, I would be very happy if others had
that association with my website. However, it should be clear to see that this
association will not be the same for everyone.

### This is an unfamiliar experience
Absolutely it is, and to some extent, that is the point. The contemporary
internet has converged on a lot of similar experiences. This is convenient
because it allows users to switch between places without much friction. But, I
think for places that are not often visited and not designed for broad appeal,
it is okay to violate typical conventions to act as a point of difference from
the norm.

I believe that difference is especially important in places that wish to reflect
a particular personality or express a different "vibe" from the rest of the
mainstream internet. Especially since so many of the commonly visited places are
now dominated by companies that have a vested interest in making money from your
visitation. For parts of the internet that are more personal, and do not have an
interest in making money from their visitors, why should the look and feel be
the same as those that do? Is that not in itself quite confusing? My home in the
real world looks nothing like the office that I work in or the supermarket that
I shop in, and I hope that it never does.

This, of course, doesn't mean that a skeuomorphic interface should completely
ignore the usability of an interface. There needs to be a nice compromise
between the two when designing a skeuomorphic interface. This is exactly why the
bookshelf on my website does not feature books that are correctly orientated.
This makes reading the article titles too difficult for the users, and thus the
ideal interface I designed in my mind had to be compromised to fit the real
world.

## Conclusion
Skeuomorphs are fun. Not everyone will love the ones you make. Perhaps
that risk is worth it for making the internet a more interesting place?

## Footnotes

[^1]: sirlilpanda, "Sirlilpanda's website," [https://sirlilpanda.studio/](https://sirlilpanda.studio/)

[^2]: kaezone, "kaezone's blog," [https://kaezone.nz/](https://kaezone.nz/)
