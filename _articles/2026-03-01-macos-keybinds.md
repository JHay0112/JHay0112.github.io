---
title: The problem with MacOS keyboard shortcuts
thumbnail: /img/posts/2026/03/macos-keybinds.jpg
---

(This article was written as part of achieving [my goals for writing
microthemes](/articles/2026/02/mini-essays).)

## Introduction

For the past six months, I have been switching between a MacOS computer at work,
and a Debian computer at home. I do programming with both computers, and for the
most part the experience is quite comparable. Both take a UNIX-like approach to
their operating system after all. However, a small niggle with how MacOS
approaches keyboard shortcuts has brought me some pain.

My personal computer runs Sway[^1] as it's window manager, and recently I have
been using Vim[^2] more-and-more as my text editor. Both Sway and Vim share a 
similar ethos when it comes to the interface they provided to users. They are 
designed to be controlled primarily by the keyboard via keyboard shortcuts.
Both also offer a considerable amount of customisation to the user.

## My Mental Model of Modifiers

With Sway in particular, it is a common convention to use the same
(configurable) key as the first key in any keyboard shortcut. This key is
normally known as `mod` in Sway's parlance, most obviously so in the default
configuration Sway provides[^3]. A typical choice for `mod` is what Apple would
call the "Command" key and Microsoft would call the "Windows" key. Since it is
most common to do so in the Linux community, I refer to it as the "Super" key.

To me this distinction works out quite naturally. By reserving "Super" for use
by the window manager exclusively, a natural hierarchy of keyboard shortcuts
results. 

 1. "Super" is used to spawn, kill, and navigate between applications.
 2. "Control" is used to navigate and control applications themselves.

This means that when my finger goes to either key, it is because I have a
distinct use-case in mind. Either, I am attempting to manipulate the operating
system and numerous applications I have open. Or, I am attempting to manipulate
the program that is currently active.

This distinction between the "Super" and "Control" keys helps to simplify my 
mental model of the computer's operation by separating concerns. For the purpose
of committing these keyboard shortcuts to memory this organisation is an 
excellent choice because at no time am I mixing keyboard shortcuts for the
operating system with those that depend on the current application.

## MacOS's Model of Modifiers

MacOS ignores the separation of concerns entirely, and as far as I can tell,
there is no easy way to rectify it. The place I notice this most egregiously is
when browsing with Firefox. On my home and work computers, to change tabs I use
`Ctrl+Tab` to move to the next tab, and `Ctrl+Shift+Tab` to move to the
previous tab. On my home computer, to close a tab I use `Ctrl+w`, whilst my work
computer changes this to be `Super+w`. 

My best guess for why Firefox behaves this way can be found in Apple's Human 
Interface Guidelines[^4]. The section on keyboards[^5] provides a list of
"Standard keyboard shortcuts" which specifies both the `Tab`/`Shift+Tab` and
`w` key behaviours Firefox implements. However, Firefox has an immediate
problem. "Super", which Apple specifies as the preferred main modifier[^5]
already has systemwide bindings for `Super+Tab` and `Super+Shift+Tab` and hence
falls back to "Control" as a last resort. 

## Conclusion

This is a disappointing limitation on the part of Apple's human interface
design. Apple prefers that designers use the "Super" key, but also uses it for
their own purposes. In an ideal world and per Apple's Guidelines, "Option" would
fill the gap, but this modifier is not common outside of Apple's ecosystem.
Hence, designers such as those of Firefox have to strike a compromise between
the behaviour that their users expect from other computers, and the behaviour 
that Apple will permit on their hardware. Apple alone does not define the
"cultural conventions" of computers, and the separation of concerns between
"Super" and "Control" keys seems like an obvious winner for simplifying the
mental model of users.

## Footnotes 

[^1]: swaywm, "Sway," 
    [https://swaywm.org/](https://swaywm.org/)

[^2]: Vim, "welcome home : vim online," 
    [https://www.vim.org/](https://www.vim.org/)

[^3]: swaywm, "Default config for sway,"
    [https://github.com/swaywm/sway/blob/master/config.in](https://github.com/swaywm/sway/blob/master/config.in)

[^4]: Apple, "Human Interface Guidelines,"
    [https://developer.apple.com/design/human-interface-guidelines](https://developer.apple.com/design/human-interface-guidelines)

[^5]: Apple, "Human Interface Guidelines - Keyboards,"
    [https://developer.apple.com/design/human-interface-guidelines/keyboards](https://developer.apple.com/design/human-interface-guidelines/keyboards)
