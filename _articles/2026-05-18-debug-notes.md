---
title: Writing Debug Notes
---

In both my work and hobbies I often find myself debugging some hardware or
software system. In the past, I would often attempt to debug the system based on
my wit and memory alone. However, after encountering a number of particularly
nasty bugs at work that required days of work to isolate, I have iterated my
way to a more systematic approach based around structured note-taking.

 1. 
{:toc}

## Method
My structured note system is similar to the bullet approach popularised by the
Bullet Journal[^1]. In my debug notes, each note is identified by a particular
"sigil" which identifies the purpose of the note. There are four sigils I have
defined for my use:

<ul style="list-style: none">
    <li><strong>></strong> identifies an action I have taken.</li>
    <li><strong>+</strong> identifies an observation I have made.</li>
    <li><strong>~</strong> identifies a hypothesis I have made about the system.</li>
    <li><strong>*</strong> identifies a conclusion I have made about the system.</li>
</ul>

If I wish to take notes that are more general, or do not fall into these
categories, I simply add no sigil. Indentation can be added to imply
association, but the linearity of debugging makes this only occasionally useful.

## Rationale
The following sub-sections address a few points on my rationale for the design
of my debug note-taking methodology.

### Why "Sigil" and not "Bullet"?
For those familiar with bullet journalling, you may notice that I err on the
side of calling the symbol that prepends a note a "sigil" instead of a bullet.
I do this because sigil is the term used in some programming languages to refer
to symbols that identify the type of a variable[^2]. Hence, in the note-taking
context this terminology draws a nice parallel with the "type" of note taken.
"Bullet" on the other hand has much less meaning to me.

### Why use Sigils?
In my experience, sigils are quick to write and can be tweaked easily to
personal preference. Debug notes are not intended for presentation to others, so
readability by anyone other than the author is of little concern.

The four types of sigil cover most note-taking needs I have during a debugging
session. The use of a sigil at the start of a sentence makes it easy to identify
what each sentence is about. This makes it easy to summarise the set of actions
(">") I have taken, what facts I noticed about the system ("+", "*"), and why I
decided to look at different parts of the system ("~").

Being able to review my debugging actions has three main benefits. Firstly, when
working for another person, it makes it easier for me to recount what I have
done. Secondly, it is easier for me to decide what to look at next since all I
have found is summarised for me. Finally, it allows me to review my actions
later and improve my overall debugging strategy for the next bugs I encounter.

### Sigil Selection
I have tried to select the sigils to invoke their assigned meaning as closely as
possible based upon their cultural associations. All sigils have been selected
so they are included on a typical keyboard even though I typically use paper.

<ul style="list-style: none">
    <li><strong>></strong> looks like an arrow pointing right which could be interpreted as "moving onwards".</li>
    <li><strong>+</strong> is associated with "plus" and could be interpreted as "information added".</li>
    <li><strong>~</strong> looks like a wave or an approximately equal symbol and could be interpreted as "something uncertain".</li>
    <li><strong>*</strong> looks like a full stop and could be interpreted as marking an "end".</li>
</ul>

## Example
To demonstrate the note-taking system, I've contrived an example of a broken
UART receiver that would normally report received bytes over serial. The
following debug trace follows each step I took in this hypothetical to find the
root cause. I have added indentation to show the natural open-and-close
relationship that hypotheses "~" and conclusions "*" have in this notation.
In practice, I find that my notes don't have to be this explicit in order to be
useful.

<pre><code class="language-text"> + UART receiver not receiving data
 + All wires are connected and power is on
 ~ Transmitter is not sending data
    > Attached scope to UART
    + UART bytes visible on scope
 * Transmitter OK
 ~ Transport layer receiver not receiving packets
    > Attached GDB to receiver board
    > Attached breakpoint to transport receive callback
    + No callbacks
 * Transport layer at fault
 ~ Transport layer or UART not enabled in config
    + Both enabled in config
    + Init call missing in main
    > Added init call
    + Received bytes reported over USB serial
 * Init call missing from main caused receive failure
</code></pre>

## Conclusion
Take notes when you are debugging! You don't need a structured note-taking
method to do it, but it might help.

## Footnotes

[^1]: Bullet Journal, "Start Here," 2021,
    [https://web.archive.org/web/20210130214826/https://www.bulletjournal.com/pages/learn](https://web.archive.org/web/20210130214826/https://www.bulletjournal.com/pages/learn),
    (Archived source)

[^2]: Wikipedia, "Sigil (computer programming),"
    [https://en.wikipedia.org/wiki/Sigil_(computer_programming)](https://en.wikipedia.org/wiki/Sigil_(computer_programming))