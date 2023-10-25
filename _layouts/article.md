---
layout: default
---

<link rel="stylesheet" type="text/css" href="{{site.baseurl}}/css/articles.css" />

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.13.20/dist/katex.min.css" integrity="sha384-cRxb1HsKSl8bTfU9fBcGsjktUfQa6w+fwvkYnU8XjFH4Qg8To1+/9OXv5iRzrKX4" crossorigin="anonymous">

<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/default.min.css">

<h5>Published {{page.date | date: "%Y/%m/%d"}}</h5>

{{content}}

<script defer src="https://cdn.jsdelivr.net/npm/katex@0.13.20/dist/katex.min.js" integrity="sha384-ov99pRO2tAc0JuxTVzf63RHHeQTJ0CIawbDZFiFTzB07aqFZwEu2pz4uzqL+5OPG" crossorigin="anonymous"></script>
<script>
    function renderMath() {
        renderMathInElement(document.body, {
            delimiters: [
                {left: '$$', right: '$$', display: true},
                {left: '$', right: '$', display: false}
            ],
            throwOnError : false
        })
    }
</script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.13.20/dist/contrib/auto-render.min.js" integrity="sha384-+XBljXPPiv+OzfbB3cVmLHf4hdUFHlWNZN5spNQ7rmHTXpd7WvJum6fIACpNNfIR" crossorigin="anonymous" onload="renderMath()"></script>

<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/highlight.min.js" onload="hljs.highlightAll()"></script>