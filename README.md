# Kozuma

My personal site, where I show what I make under the name Kozuma: apps, websites, tools and games.

**Live at https://kozuma.studio**

![The homepage in dark mode](screenshots/home.png)

## What's on it

- my projects, with Rewind's real story cards you can scroll or drag with the mouse
- my journey, from my first week of code to now, built from a small list in `js/journey.js`
- a contact section, a legal notice and a privacy page
- English and French, and a light / dark theme, both remembered in the browser

It's plain HTML, CSS and JavaScript, no framework and no build step. The fonts (IBM Plex) are hosted on
the site itself so nothing goes to Google Fonts, and the only outside script is Cloudflare's Web Analytics
(no cookies), which Cloudflare adds on its side.

## Hosting

The site runs on Cloudflare Workers as static assets: `wrangler.jsonc` serves the `public/` folder.
A GitHub Action (`.github/workflows/deploy.yml`) deploys it with Wrangler on every push to `main`,
and pull requests get their own preview URL.

`public/_headers` sets the security headers, including the Content Security Policy, and
`public/_redirects` forwards `kozuma.studio/rewind` (the short link printed on Rewind's cards) to
https://rewind.kozuma.studio.

## Running it locally

```
cd public
python -m http.server
```

then open http://localhost:8000. `_headers` and `_redirects` only apply on Cloudflare.

- `index.html`: the homepage
- `legal/`, `privacy/`, `404.html`: the other pages
- `css/style.css`: one stylesheet for every page
- `js/site.js`: the theme button and the EN / FR switch, on every page
- `js/home.js`: the homepage's journey list, timeline chevron and draggable Rewind cards
- `js/journey.js`: the entries of the journey section, the fields are explained at the top
- `fonts/`, `img/`: self-hosted IBM Plex and the images
