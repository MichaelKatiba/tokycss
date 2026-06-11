# Layout Styles

## Element Defaults

Semantic layout elements come with sensible defaults.

### Header

Flexbox container with space-between alignment, bottom border, and padded.

```html
<header>
  <div>Logo</div>
  <nav><!-- links --></nav>
</header>
```

### Main

Centered with `margin-inline: auto` and vertical/horizontal padding.

If a `<header>` precedes `<main>`, the first `<section>` inside main gets extra top padding to account for the header.

### Section

Vertical padding on all sections.

### Footer

Top border, centered text, muted color, padded.

```html
<body>
  <header><!-- ... --></header>
  <main><!-- ... --></main>
  <footer>&copy; 2026 My Company</footer>
</body>
```

### Aside

Tinted background, bordered, rounded, small text. Good for side notes and callouts.

```html
<aside>
  <p>Quick tip: TokyCSS is fully responsive.</p>
</aside>
```

## Page Grid System

The `.layout--grid` class creates a CSS Grid layout with named content lanes. Put it on `<body>` or a wrapper element.

```html
<body class="layout--grid">
  <header><!-- spans main by default --></header>
  <main class="layout--fill"><!-- wider breakout --></main>
  <footer><!-- spans main by default --></footer>
</body>
```

All direct children default to the **main** content lane. Use these classes to control placement:

| Class | Placement |
|---|---|
| `.layout--main` | Readable content lane |
| `.layout--fill` | Wider breakout lane |
| `.layout--full` | Edge-to-edge |

### Cross-Lane Utilities

For elements that need to span across lane boundaries:

| Class | Spans from | to |
|---|---|---|
| `.layout--main-start-fill-end` | main-start | fill-end |
| `.layout--main-start-full-end` | main-start | full-end |
| `.layout--fill-start-main-end` | fill-start | main-end |
| `.layout--full-start-main-end` | full-start | main-end |
| `.layout--full-start-fill-end` | full-start | fill-end |
| `.layout--fill-start-full-end` | fill-start | full-end |

```html
<section class="layout--full-start-main-end">
  <h2>This section bleeds into the left gutter</h2>
</section>
```

Configure lane widths in your `styleguide.css` (see [Layout Variables](../variables/layout.md) for all options):

```css
@layer styleguide {
  :root {
    --tk-content-width: 80ch;
    --tk-content-fill-width: 90ch;
    --tk-page-gutter: var(--tk-size-20);
  }
}
```
