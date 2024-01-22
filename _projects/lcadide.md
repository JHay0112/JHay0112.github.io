---
title: lcadide
date: 2024-01-20
thumbnail: /img/projects/lcadide/main_page.png
---

Have you ever wanted to symbolically solve simple linear circuits but there hasn't been a convenient
and accessible GUI for you to use? Over the summer of 2022-2023 part of my work as a research
assistant involved developing a solution for this problem called 
<a href="https://lcadide.jordanhay.com" target="_blank">lcadide</a> (Figure 1) - a web-based 
symbolic circuit solver based on the 
<a href="https://github.com/mph-/lcapy" target="_blank">lcapy Python package</a> developed by 
Professor Michael Hayes of the University of Canterbury.

<figure>
    <img src="/img/projects/lcadide/main_page.png" />
    <figcaption>Figure 1. - Lcadide browser interface.</figcaption>
</figure>

Lcadide is browser-based to enable easy access to the circuit analysis tool without requiring users
to go through potentially complex installation instructions that would vary by operating systems. 
To do this, lcadide loads and interfaces with lcapy through the tool pyodide (hence the origin of 
the name lcadide - a portmanteau of lcapy and pyodide). This comes with the trade-off of a 
consistent slow load-time for lcadide, and some added difficulties in providing certain features.

Currently, lcadide's development is on some form of hiatus. Recently, I received feedback from a 
number of students who kindly tested the interface. There are a number of bugs and improvements that
they have identified that I intend to catalogue and work on. Some basic functionality is implemented
and I have occasionally used lcadide to sanity check results that I have produced by hand. More work
is required to take full advantage of lcapy's power and to provide a useful and intuitive interface
for end-users.