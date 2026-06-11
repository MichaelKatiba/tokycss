# Reset & Base Styles

The framework applies a modern CSS reset to normalize browser inconsistencies.

## Box Model

```css
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```

## Root

Font smoothing, text-rendering, and `text-size-adjust` are set on `:root` for consistent rendering across platforms.

## Body

```css
body {
  background-color: var(--tk-bg-5x);
  color: var(--tk-fg-4x);
  font-family: var(--tk-font-body);
  font-size: var(--tk-text-md);
  line-height: var(--tk-line-height-md);
  max-width: var(--tk-screen-2xl);
  margin-inline: auto;
  min-height: 100dvh;
}
```

## Headings

Headings inherit `--tk-font-heading`, use wider letter spacing, and enable `text-wrap: balance` for visually pleasing line breaks.

## Media

Images, pictures, video, canvas, and SVG default to `display: block` with `object-fit: cover` and `max-width: 100%`.

### data-img-fit

Add `data-img-fit` to a container to make the first child image position absolutely as a background-fill element:

```html
<div data-img-fit>
  <img src="hero.jpg" alt="" />
  <h1>Overlay content</h1>
</div>
```

## Focus

Interactive elements show a `--tk-focus-ring` outline when focused via keyboard (`:focus-visible`). Mouse clicks do not trigger the outline.

## Selection

Selected text uses a primary-tinted background. Adjust via `::selection` or override `--tk-color-primary-5a` and `--tk-color-primary-5xlight`.

## Scrollbar

Custom thin scrollbar styling applied to WebKit and Firefox.

```css
::-webkit-scrollbar { width: 8px; }
* { scrollbar-width: thin; }
```

## Reduced Motion

When the user prefers reduced motion, all transitions and animations are reduced to near-instant durations.

## Print

Print styles hide navigation, buttons, and dialogs. Links display their URL after the text. All shadows are removed.

> **Note:** `hanging-punctuation` and `text-wrap: pretty` are newer CSS features not yet Baseline Widely Available. The framework uses them intentionally for improved typography — your browser will gracefully ignore them if unsupported.
