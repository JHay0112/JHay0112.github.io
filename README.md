# JHay0112.github.io
The Website of Jordan Hay

## License
Source code is under the MIT License, website content is copyright of Jordan Hay.

## Local Build

### Installation
Jekyll and Github Pages rely upon an old version of Ruby (~2.7.x) to run. This
has caused me numerous installation issues over the past few years. The
following installation process was found by trial and error and should work for
most Linux distributions.

First, install a Ruby environment manager such as `rbenv`[^1]. On a Linux
distribution that uses aptitude (Debian, Ubuntu, Mint, etc) this can be done
with
```bash
sudo apt install rbenv
```

Second, use the environment manager to install and active a version of Ruby 
circa 2.7.x. Using `rbenv` to install and activate Ruby 2.7.0 this looks like
```bash
rbenv install 2.7.0
rbenv local 2.7.0
ruby --version 
```
If the install has worked correctly, the last command will have an output
similar to
```
ruby 2.7.0p0 (2019-12-25 revision 647ee6f091) [x86_64-linux]
```

Finally, install jekyll, bundler, and the dependencies from Gemfile:
```bash
gem install jekyll
gem install bundler -v 2.4.22 
bundle install
```
I found that an older version of bundler was required to support Ruby 2.7.0.
Your mileage may vary. 

### Serving
To build and host the website locally use 

```bash
bundle exec jekyll serve
```
The website shall be made available on `localhost:4321` if all succeeds.

## Footnotes

[^1]: https://github.com/rbenv/rbenv
