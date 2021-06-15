---
layout: default
title: Design Choices & Decisions
description: Explanation and justification behind all the choices that I consciously made for this website.
---

<h1>Desi<span class="ss01">gn</span></h1>

<h2>Fonts</h2>
<hr>
<h3>Architype Renner</h3>
<aside>Futura is one of the most recognizable fonts on the planet. It was initially designed by Paul Renner in 1920's
    Germany, following Bauhaus principles. Futura was the first font to touchdown on a celestial body besides Earth
    when it was used on the plaque carried by Apollo 11. It has a history of use in films by such directors as Stanley
    Kubrick and Wes Anderson.</aside>
<p>
    While Futura is a beautiful font with a storied history, its frequent use means that using it as a major heading
    could ring derivative. As such, I use a variant of Futura called Architype Renner for headings and accent text. It
    differs from vanilla Futura in its stylized alternate glyphs, such as the lowercase g you see above. These symbols
    are from Renner's early concept sketches of the font that would eventually be Futura. I love the sharp points and
    geometric purity that Futura brings to the page, and not many fonts can stand on their own as a 100px full-width
    header. It was designed 50 years before the Web existed, however, and as such it begins to crumble at smaller point
    sizes when used for body text on a screen. For that purpose, I might use…
</p>

<h3>Inter</h3>
<aside>Inter was developed by Rasmus Andersson of Figma and Spotify fame as an alternative to Roboto. He spent three
    years on the open font, and it's still being iterated on to this day. Inter is used by companies such as GitHub and
    Mozilla for body copy.</aside>
<p>Since Inter was designed with modern displays in mind, it renders beautifully at many weights and point sizes on
    screens of any DPI. It's also a gorgeous font as a heading, as seen in the splash pages of such projects as <a
        href="https://nextjs.org/">Next.js</a>.</p>

<!-- Old fonts that I no longer use on this website. -->
<!-- <h3>Proxima Nova</h3>
<aside>Proxima Nova was created by typographer Mark Simonson in 2005, and takes inspiration from Helvetica, Futura, and
    Akzidenz Grotesk, among others. It's designed with body-text legibility in mind, and incorporates modern type design
    very effectively, including features such as fractions, ligatures, and ordinals.</aside>
<p>Proxima Nova is a delightful font, and is typically my first port of call when I need a sans-serif body font. It
    loses some legibility at small sizes on low-DPI screens, but my designs usually don't require that. This is the font
    used for most text on my résumé. For longer pieces of writing (such as this one), however, I prefer a serifed font,
    such as...
</p>

<h3>Charter</h3>
<p>Charter was specifically designed for use in fax machines, which have a lower DPI than the 300 typically used in
    screenprinting at that time. Since many desktop monitors have a significantly lower DPI than 300 (although a typical
    phone easily surpasses this), Charter holds up remarkably well as a screen font. I find that serifs improve
    legibility at smaller point sizes, as well as for those with visual impairments (I strive to run a highly accessible
    site for all. I use HTML5's semantics to maintain structure for screenreaders and keep my colour palettes
    high-contrast (and <a class=broken-link future-href="/colour-themes">customizable</a>!) If you have a disability,
    and you find my website especially difficult to browse, I would greatly appreciate you contacting me at
    {{site.email-link}}).
</p> -->

<h2>Colours</h2>
<hr>
<p>I make no claims about being a preëminent colour scientist. As such, I'll delegate this to the experts. My main
    accent colour is <code>cmyk(0, 100, 0, 0)</code>, because it prints perfectly on poor (process) printers and paper,
    in the same
    manner a spot colour might in a professional printer's shop. Magenta was chosen because it's contrasty and
    interesting against a paper-white background. Pure cyan is too eye-bleedingly vivid, and pure yellow is an obvious
    non-starter. For the website, I've adapted it slightly, as RGB magenta isn't a very attractive colour on the web.
    This isn't a problem as the backdrop is no longer the blinding white of printer paper, and (hopefully) no one is
    printing out my website, so the issues with process colour have been elided.
</p>
<h3>Solarized</h3>
<aside>Solarized is the product of Ethan Schoonover, who has a detailed
    <a href="https://ethanschoonover.com/solarized/">writeup</a> on the various calculations he's made to ensure the
    optimal colours possible. With my limited understanding of colour science and theory, it seems accurate and
    methodical.
</aside>
<p>Solarized (Dark) is my preferred colour scheme for most applications. My terminals, code editors, and browsers use
    it. I even have a <a href="https://darkreader.org/">Chrome extension</a> that tries its best to convert the rest of
    the web to my solarized will. The light theme feels too yellowed for my taste, but the dark theme is exquisite, and
    I use sample colours from it for the default dark theme on my website. The full dark and light modes are also
    available on the <a class=broken-link future-href="/colour-themes">customization</a> page.
</p>