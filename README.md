# Deeptest Analytics

Static company site for [deeptestanalytics.com](https://deeptestanalytics.com). Each section is its own page and there is no build step.

## Run locally

From this folder:

```bash
python3 -m http.server 8080
```

Open [http://localhost:8080/home](http://localhost:8080/home).

## Pages

- Home — `/home`
- What we build — `/what-we-build`
- Who it is for — `/who-it-is-for`
- Contact — `/contact`
- Not found — `404.html`

## Local checks

After starting the server:

1. Open every page from the main navigation.
2. Check the layout at desktop and phone widths.
3. Confirm the email links open `info@deeptestanalytics.com`.
4. Confirm `robots.txt` and `sitemap.xml` load directly.

## Assets

- Optimized WebP photos are served to supporting browsers, with JPEG fallbacks.
- `test-lifecycle.svg`, `result-flow.svg`, `team-view.svg`, and `favicon.svg` are original Deeptest Analytics artwork created for this site.
- `social-preview.jpg` is the 1200 × 630 social sharing image.

## Photographs

The source photos in `images/` are free to use under the [Unsplash License](https://unsplash.com/license) and contain no visible company logo:

- Circuit board — Alexandre Debiève, Unsplash photo `1518770660439-4636190af475`
- Source code — Florian Olivo, Unsplash photo `1542831371-29b0f74f9713`
- Engineering team — NESA by Makers, Unsplash photo `1531482615713-2afd69097998`
