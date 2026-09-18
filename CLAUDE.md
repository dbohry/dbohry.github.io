# dbohry.github.io

Daniel Bohry's personal landing page. Static site, no build step, no framework. Style and conventions modeled on the sibling project `dkgg.de`.

## Design brief

Personal bio/contact page for a software engineer. Not the goofy "driveway" tone of `dkgg.de` — this one's the professional front door — but it borrows that project's visual language (neubrutalist/retro cards, hard shadows, theme toggle) and loosens the copy with light self-deprecating humor ("boring-in-the-best-way", the subtitle reroll, the glitch easter egg).

Non-negotiables:
- Real name, real contact links (email, GitHub `dbohry`, LinkedIn).
- Years-of-experience counter computed from 2014, not hardcoded.
- Two portraits that swap on click/hold (`avatar_256.webp` / `avatar_258.webp`).
- Hold the avatar 10s → hidden glitch easter egg (`body.glitch-mode`, red Impact-font shake).

## Stack

- Plain HTML/CSS/JS. No bundler, no framework, no package.json.
- Fonts: Google Fonts `Rubik` (body, 400-700) + `Space Mono` (eyebrow accent) + `Bebas Neue` (glitch-mode easter egg only).
- Deployed as-is (GitHub Pages via `CNAME` — none currently set; add one if a custom domain is wired up).

## Visual style

Playful neubrutalist look, shared with `dkgg.de`:
- Thick borders (`3px solid var(--border)`), hard offset drop shadows (`6px 6px 0 var(--border)`, no blur).
- Avatar and contact buttons lift + pop shadow further out on hover; buttons press toward the shadow on `:active`.
- Light/dark via CSS custom properties + `prefers-color-scheme`, overridable by `#theme-toggle` which sets `data-theme` on `<html>` and persists the choice in `localStorage`.

## Colors

CSS custom properties on `:root`, redefined under `@media (prefers-color-scheme: dark)` and mirrored in `[data-theme]` overrides. Never hardcode a color in a rule — add/reuse a var instead.

```
--bg, --ink, --card, --border, --shadow, --coral, --teal, --yellow
```

## Interaction pattern (keep consistent)

Same lift+shadow-pop language as `dkgg.de`:

```css
.thing{transition:transform .15s ease, box-shadow .15s ease}
.thing:hover{transform:translateY(-6px); box-shadow:8px 10px 0 var(--border)}
```

Buttons with a pressed state (`.btn`, `#theme-toggle`) translate toward the shadow and shrink it on `:active` instead.

## CSS conventions

- Single stylesheet (`css/style.css`), no preprocessor, no CSS-in-JS.
- Compact rule bodies (`selector{prop:val; prop:val}`) for simple rules; multi-line, one declaration per line, 2-space indent for complex ones.
- Sections ordered to match the DOM (reset/vars, theme toggle, hero, actions, footer, glitch-mode override, media queries).

## HTML conventions

- Semantic sectioning (`main > section`, `footer`), no div soup.
- External links get `target="_blank" rel="noopener"` (or `rel="me noopener"` for profile links).
- Cache-bust `style.css`/`script.js` via `?v=X.Y`; bump on visible changes.

## JS conventions

- Vanilla JS, no dependencies, `js/script.js` loaded at end of `body`.
- Small, self-contained behaviors (year/experience stamp, theme toggle, subtitle reroll, avatar hold easter egg) — no framework, keep it that way unless explicitly asked to add one.

## Tone

Professional but not stiff. Subtitle copy is a rotating set of self-deprecating "boring-in-the-best-way" one-liners — match that voice when adding new lines.
