# Amber & Oak — small business landing page

A single-page marketing site for a fictional woodworking workshop, built as
a demo of an **Angular 21 standalone** app with plain **Bootstrap + CSS**
(no SCSS, no Tailwind, no backend). Swap the copy, colors and images for
your own business and it's ready to ship.

## Stack

- Angular 21, standalone components (no `NgModule`)
- TypeScript, signals for the small bits of UI state (mobile menu, form)
- Bootstrap 5 CSS (imported as a plain stylesheet) + a small custom CSS
  design-token system in `src/styles.css`
- New Angular control-flow syntax (`@if`, `@for`, `@switch`) in templates
- No backend — the contact form is client-side only (see note below)

## Project structure

```
business-landing/
├─ angular.json            Workspace/build config (new esbuild application builder)
├─ package.json
├─ tsconfig*.json
├─ public/                 Static files copied as-is to the build output
│  └─ favicon.svg
├─ src/
│  ├─ index.html           Page shell, Google Fonts, meta tags
│  ├─ main.ts               Bootstraps the app
│  ├─ styles.css            Global tokens (colors/type), buttons, utilities
│  └─ app/
│     ├─ app.ts / app.html / app.css      Root shell (navbar + sections + footer)
│     ├─ app.config.ts                    Application providers
│     ├─ navbar/navbar.ts (.html/.css)    Sticky nav + mobile menu
│     ├─ hero/hero.ts (.html/.css)        Hero section with SVG illustration
│     ├─ services/services.ts (.html/.css)  "What we build" cards
│     ├─ about/about.ts (.html/.css)      Workshop story + trust stats
│     ├─ cta/cta.ts (.html/.css)          Full-width call-to-action band
│     ├─ contact/contact.ts (.html/.css)  Contact details + inquiry form
│     └─ footer/footer.ts (.html/.css)    Footer nav + social + copyright
└─ .github/workflows/deploy.yml           Optional CI deploy to GitHub Pages
```

Every component is a plain `.ts`/`.html`/`.css` trio (e.g. `navbar.ts`, not
`navbar.component.ts`) — configured via the `schematics` block in
`angular.json` so `ng generate component <name>` keeps using this naming if
you add more sections later.

The page is a **single route** — “Services”, “The workshop” and “Contact”
are anchor links (`#services`, `#about`, `#contact`) on one page, not
separate routes. That keeps things simple and sidesteps GitHub Pages' lack
of server-side routing entirely (no 404-redirect trick needed).

## Run it locally

You'll need [Node.js](https://nodejs.org) 20+ and npm.

```bash
cd business-landing
npm install
npm start          # same as: ng serve
```

Then open **http://localhost:4200**. The dev server reloads on save.

Other useful commands:

```bash
npm run build            # production build into dist/amber-oak-landing/browser
ng generate component app/testimonials   # scaffolds testimonials.ts etc. (no .component in the name)
```

## Customizing

- **Content**: edit the template (`.html`) of each section — copy, prices,
  address, hours, etc. all live inline, no CMS.
- **Colors/type**: change the CSS variables at the top of `src/styles.css`
  (`--walnut-950`, `--brass-500`, `--font-display`, ...); every component
  reads from those tokens.
- **Services list / icons**: edit the `services` array in
  `src/app/services/services.ts`.
- **Contact form**: it's client-side only today (see `contact.ts`) — it just
  shows a "message sent" state. GitHub Pages only serves static files, so to
  actually receive messages, wire the `onSubmit()` method to a form backend
  such as [Formspree](https://formspree.io), [Getform](https://getform.io),
  or Netlify Forms (a few lines — POST the model as JSON/FormData to their
  endpoint).

## Deploy to GitHub Pages

Two options — pick one.

### Option A — GitHub Actions (recommended, automatic on every push)

1. Push this project to a new GitHub repository, e.g. `amber-oak-landing`.
2. In the repo, go to **Settings → Pages** and set **Source** to
   **GitHub Actions**.
3. Open `.github/workflows/deploy.yml` and replace `<REPO_NAME>` in the
   `--base-href /<REPO_NAME>/` line with your actual repository name (this
   must match exactly, including case, since the site is served from
   `https://<user>.github.io/<REPO_NAME>/`).
4. Commit and push to `main`. The included workflow will build the app and
   publish `dist/amber-oak-landing/browser` to GitHub Pages automatically.
5. Your site will be live at `https://<your-username>.github.io/<REPO_NAME>/`.

   If you're deploying to a **user/organization page** instead
   (`<your-username>.github.io` repo, served at the domain root), use
   `--base-href /` instead of `/<REPO_NAME>/`.

### Option B — Manual deploy with `angular-cli-ghpages`

```bash
npm install            # first time only
npm run deploy         # builds and pushes dist/.../browser to the gh-pages branch
```

This uses the `deploy` script already in `package.json`, which runs:

```bash
ng build --configuration production --base-href /amber-oak-landing/
npx angular-cli-ghpages --dir=dist/amber-oak-landing/browser
```

Rename `amber-oak-landing` to your repo name in that script (or in
`package.json`) first. Then in **Settings → Pages**, set **Source** to
**Deploy from a branch**, branch `gh-pages`, folder `/ (root)`.

## Notes

- All business details (name, address, phone, hours) are placeholder
  content — replace before using this for a real business.
- Bootstrap's CSS is included for its grid/reset utilities and general
  compatibility, but the visual design itself is driven by the custom CSS
  in each component plus `src/styles.css`, not Bootstrap's default theme.
