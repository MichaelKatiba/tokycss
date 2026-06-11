# Layout Variables

## Grid Layout Engine

TokyCSS uses a CSS Grid system with named grid lines to create content-aware page layouts. The grid defines three horizontal lanes:

- **Main** — the primary readable content area (default 80ch)
- **Fill** — a wider breakout area extending beyond main
- **Full** — edge-to-edge, spanning the whole viewport

Named grid lines mark the boundaries:

```
| full-start | gutter | fill-start | breakout | main-start | content | main-end | breakout | fill-end | gutter | full-end |
```

All direct children of `.layout--grid` default to the **main** lane. Override with lane classes (see [Layout Styles](../styles/layout.md) for the class system).

Configure the lane widths in `styleguide.css`:

```css
@layer styleguide {
  :root {
    --tk-content-width: 80ch;        /* Main lane width */
    --tk-content-fill-width: 90ch;   /* Fill lane width */
    --tk-page-gutter: var(--tk-size-20);  /* Side gutters */
  }
}
```

## Position

| Variable | Value |
|---|---|
| `--tk-position-static` | static |
| `--tk-position-relative` | relative |
| `--tk-position-absolute` | absolute |
| `--tk-position-fixed` | fixed |
| `--tk-position-sticky` | sticky |

## Display

| Variable | Value |
|---|---|
| `--tk-display-block` | block |
| `--tk-display-inline` | inline |
| `--tk-display-inline-block` | inline-block |
| `--tk-display-flex` | flex |
| `--tk-display-inline-flex` | inline-flex |
| `--tk-display-grid` | grid |
| `--tk-display-none` | none |

## Overflow

| Variable | Value |
|---|---|
| `--tk-overflow-auto` | auto |
| `--tk-overflow-hidden` | hidden |
| `--tk-overflow-visible` | visible |
| `--tk-overflow-scroll` | scroll |

## Flexbox

**Direction:**
```css
--tk-flex-direction-row: row;
--tk-flex-direction-column: column;
--tk-flex-direction-row-reverse: row-reverse;
```

**Justify content (main axis):**
```css
--tk-justify-start: flex-start;
--tk-justify-center: center;
--tk-justify-between: space-between;
--tk-justify-around: space-around;
--tk-justify-evenly: space-evenly;
```

**Align items (cross axis):**
```css
--tk-align-start: flex-start;
--tk-align-end: flex-end;
--tk-align-center: center;
--tk-align-baseline: baseline;
--tk-align-stretch: stretch;
```

## Grid

```css
--tk-grid-auto-fit: auto-fit;
--tk-grid-auto-fill: auto-fill;
```

## Aspect Ratios

```css
--tk-aspect-ratio-square: 1 / 1;
--tk-aspect-ratio-video: 16 / 9;
--tk-aspect-ratio-portrait: 3 / 4;
--tk-aspect-ratio-landscape: 4 / 3;
--tk-aspect-ratio-widescreen: 21 / 9;
--tk-aspect-ratio-golden: 1.618 / 1;
```
