+++
title = "Design Choices & Decisions"
description = "Explanation and justification behind all the choices that I consciously made for this website."
+++

# Desi<span class="ss01">gn</span>

## Fonts
<hr>

### Architype Renner
<aside>Futura is one of the most recognizable fonts on the planet. It was initially designed by Paul Renner in 1920's Germany, following Bauhaus principles. Futura was the first font to touchdown on a celestial body besides Earth when it was used on the plaque carried by Apollo 11. It has a history of use in films by such directors as Stanley Kubrick and Wes Anderson.</aside>

While Futura is a beautiful font with a storied history, its frequent use means that using it as a major heading could ring derivative. 
As such, I use a variant of Futura called Architype Renner for headings and accent text. 
It differs from vanilla Futura in its stylized alternate glyphs, such as the lowercase g you see above. 
These symbols are from Renner's early concept sketches of the font that would eventually be Futura. 
I love the sharp points and geometric purity that Futura brings to the page, and not many fonts can stand on their own as a 100px full-width header. 
It was designed 50 years before the Web existed, however, and as such it begins to crumble at smaller point sizes when used for body text on a screen. 
For that purpose, I might use…

### Inter
<aside>Inter was developed by Rasmus Andersson of Figma and Spotify fame as an alternative to Roboto. 
He spent three years on the open font, and it's still being iterated on to this day. 
Inter is used by companies such as GitHub and Mozilla for body copy.</aside>

Since Inter was designed with modern displays in mind, it renders beautifully at many weights and point sizes on screens of any DPI. 
It's also a gorgeous font as a heading, as seen in the splash pages of such projects as [Next.js](https://nextjs.org/).

## Colours
<hr>

I make no claims about being a preëminent colour scientist. 
As such, I'll delegate this to the experts. 
My main accent colour is `cmyk(0, 100, 0, 0)`, because it prints perfectly on poor (process) printers and paper, in the same manner a spot colour might in a professional printer's shop. 
Magenta was chosen because it's contrasty and interesting against a paper-white background. 
Pure cyan is too eye-bleedingly vivid, and pure yellow is an obvious non-starter. 
For the website, I've adapted it slightly, as RGB magenta isn't a very attractive colour on the web. 
This isn't a problem as the backdrop is no longer the blinding white of printer paper, and (hopefully) no one is printing out my website, so the issues with process colour have been elided.


### Solarized
<aside>Solarized is the product of Ethan Schoonover, who has a detailed <a href="https://ethanschoonover.com/solarized/">writeup</a> on the various calculations he's made to ensure the most optimal colours possible. 
With my limited understanding of colour science and theory, it seems accurate and methodical.
</aside>

Solarized (Dark) is my preferred colour scheme for most applications. 
My terminals, code editors, and browsers use it. 
I even have a [Chrome extension](https://darkreader.org/) that tries its best to convert the rest of the web to my solarized will. 
The light theme feels too yellowed for my taste, but the dark theme is exquisite, and I use sample colours from it for the default dark theme on my website. 
The full dark and light modes are also available on the <a class=broken-link future-href="/colour-themes">customization</a> page.
