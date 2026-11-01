# Kozuma website

Static site served by Cloudflare Workers (static assets) at https://kozuma.studio. No build step: `wrangler.jsonc` serves the repo root, `.assetsignore` keeps repo files out.

- `index.html`: studio homepage, English and French. "Le carnet" is its dated log: add new entries at the top of the list, only for things that exist. The page shows the five latest and a button reveals the rest.
- `legal/`, `privacy/`: legal notice and privacy policy, generated from the homepage's head, header and footer (keep them in sync when those change). Placeholders to fill are wrapped in `<mark>`.
- `fonts/`: self-hosted IBM Plex (OFL), so no visitor data goes to Google Fonts.
- `img/`: project icons. `img/rewind/` holds the sample story cards from the Rewind site (`fr/` for French).
- `_redirects`: `kozuma.studio/rewind` (the short link on Rewind cards) forwards to the Rewind site at https://rewind.kozuma.studio, which lives in the `Rewind-Site` repo.

Non-main branches get a preview URL from Cloudflare (needs the `previews` block in `wrangler.jsonc`).
