# Deeptest Analytics

Static company site for [deeptestanalytics.com](https://deeptestanalytics.com). The site leads with the Accessibility Audit Application; the planned test-framework tools have a short section on the home page. Each section is its own page and there is no build step.

## Run locally

From this folder:

```bash
python3 -m http.server 8080
```

Open [http://localhost:8080/home/](http://localhost:8080/home/).

## Pages

- Home — `/home`
- What we build (the Accessibility Audit Application) — `/what-we-build`
- Who it is for — `/who-it-is-for`
- Trial and pricing — `/pricing`
- Contact (early access requests) — `/contact`
- Not found — `404.html`

The header, footer and `<head>` are repeated in every page. When one changes, change it in all six files.

## What the pages may claim

The site states what the app does, so keep it true when the app changes:

- **Coverage numbers** on `/what-we-build` (55 level A and AA criteria: 19 checked, 16 partly, 20 for a person) come from the app's coverage table. Check them with `acc list-rules --level AA` after a release.
- **"The automated checks now report no violations here"** on `/home` is a statement about this site. Audit every page with the app before publishing a change, and fix what it finds or reword the sentence.
- **Early access wording** (`/pricing`: unsigned installers; every page: "Request early access" email buttons) is to be replaced with a download page once the installers are code-signed and the license text is final.
- **No prices** are published yet; `/pricing` says prices are on request.
- The app does not certify conformance. No page may say or imply that it makes a site compliant.

## Local checks

After starting the server:

1. Open every page from the main navigation.
2. Check the layout at desktop and phone widths.
3. Confirm the "Request early access" buttons open an email to `info@deeptestanalytics.com`.
4. Confirm `robots.txt` and `sitemap.xml` load directly.
5. Audit all pages with the Accessibility Audit Application; the result must have no violations.

## Assets

- `app-*.webp/.jpg` and `report-*.webp/.jpg` are real screenshots of the Accessibility Audit Application, taken from an audit of the previous version of this site (2026-11-11). Each has a 1600-pixel WebP, an 800-pixel WebP and a JPEG fallback.
- Each screenshot is a link to its full-size image. `lightbox.js` (the site's only script) opens it over the whole page in a `<dialog>` instead; without the script the link still shows the image. Escape, the Close button or a click outside the picture closes it.
- `test-lifecycle.svg` and `favicon.svg` are original Deeptest Analytics artwork created for this site.
- `social-preview.jpg` is the 1200 × 630 social sharing image.

## Photographs

`social-preview.jpg` is made from a photo that is free to use under the [Unsplash License](https://unsplash.com/license) and contains no visible company logo:

- Circuit board — Alexandre Debiève, Unsplash photo `1518770660439-4636190af475`
