# Kozuma website

Static site served by Cloudflare Workers (static assets) at https://kozuma.studio. No build step: `wrangler.jsonc` serves the repo root, `.assetsignore` keeps repo files out.

- `index.html`: studio homepage, English and French.
- `img/`: project icons.
- `_redirects`: `kozuma.studio/rewind` (the short link on Rewind cards) forwards to the Rewind site at https://rewind.kozuma.studio, which lives in the `Rewind-Site` repo.

Non-main branches get a preview URL from Cloudflare (needs the `previews` block in `wrangler.jsonc`).
