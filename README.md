# Cindy Liu — Portfolio

Personal product design portfolio, rebuilt as a plain HTML/CSS/JS site (moved over from Wix) and hosted with GitHub Pages.

## Pages

| File | Page |
| --- | --- |
| `index.html` | Overview (home) |
| `portfolio.html` | Portfolio grid |
| `about.html` | About |
| `contact.html` | Contact |
| `vacuum.html` | Clean with Shin-Chan (desk vacuum project) |
| `watch.html` | watch (blank page, same as on Wix) |

## How it's put together

- `css/style.css` — all styles. Desktop sizes use a `--u` unit (1u = 1px at a 1268px-wide window), so the layout scales with the window just like the Wix version. Below 1024px it switches to the mobile layout.
- `js/main.js` — tile hover effect, mobile menu, and the contact form.
- `images/` — all photos, downloaded from the Wix site.

### Adding a project tile

Copy any `<div class="tile">…</div>` block in `portfolio.html` and change the two image paths and the two title lines. To make a tile open a project page, change `div` to `a` and add `href="your-page.html"` (see the vacuum tile).

### Contact form

GitHub Pages can't send email by itself, so the form opens the visitor's email app with their message filled in, addressed to cindyliu0413@gmail.com.

### Font

The site uses Neue Haas Grotesk Display Pro, loaded from Wix's font server (the same way the original site did). It falls back to Helvetica/Arial if that server is unavailable.
