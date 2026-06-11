# Typography Styles

All typography is styled via element selectors — no classes needed.

## Headings

| Element | Size | Weight | Line Height |
|---|---|---|---|
| `h1` | `--tk-text-5xl` | 800 | `--tk-line-height-xs` |
| `h2` | `--tk-text-4xl` | 700 | `--tk-line-height-xs` |
| `h3` | `--tk-text-3xl` | 700 | `--tk-line-height-sm` |
| `h4` | `--tk-text-2xl` | 600 | `--tk-line-height-xs` |
| `h5` | `--tk-text-xl` | 600 | `--tk-line-height-xs` |
| `h6` | `--tk-text-lg` | 600 | `--tk-line-height-xs` |

Each heading has appropriate bottom margin. Headings use `text-wrap: balance` for optimal line breaks.

## Paragraphs

```css
p {
  font-size: var(--tk-text-md);
  color: var(--tk-fg-4x);
}
```

Paragraphs following `h1` or `h2` automatically use `--tk-text-lg` for lead/hero copy.

## Inline Elements

| Element | Style |
|---|---|
| `strong`, `b` | Font weight 700, high contrast (`--tk-fg-5x`) |
| `em`, `i` | Italic |
| `small` | `--tk-text-sm`, muted (`--tk-fg-2x`) |
| `mark` | Accent background with dark accent text, rounded padding |
| `code` | Monospace, primary-tinted background, rounded |
| `kbd` | Keyboard key style — bordered, shadowed, monospace |
| `samp` | Monospace |

## Links

Links inside `article`, `section`, or `main` (and not `[role="button"]`) are underlined with the primary color. Hover thickens and darkens the underline.

```css
a {
  color: var(--tk-color-primary);
  text-underline-offset: 0.15em;
}
```

## Blockquotes

Left-bordered with primary light, italic, larger text. The `cite` element renders as a right-aligned attribution with an em dash prefix.

```html
<blockquote>
  <p>Design is not just what it looks like.</p>
  <cite>Steve Jobs</cite>
</blockquote>
```

## Code Blocks

`<pre>` blocks use a monospace font, themed background, rounded corners, and horizontal scroll for long lines. Nested `<code>` inherits the pre styling.

## Lists

Ordered (`ol`) and unordered (`ul`) lists use default list markers with `--tk-size-32` padding. Nested lists are indented further.

```html
<article>
  <ul>
    <li>First item</li>
    <li>Second item</li>
  </ul>
</article>
```

## Horizontal Rules

`<hr>` renders as a thin line using `--tk-border-2xs` with generous vertical spacing.

## Details & Summary

`<details>` is bordered and rounded. `<summary>` has a triangular arrow indicator that rotates 90° when the details is open. The default browser marker is hidden.

```html
<details>
  <summary>Click to expand</summary>
  <p>Hidden content here.</p>
</details>
```

## Figures

`<figure>` has bottom margin. `<figcaption>` is centered, italic, small, and muted.
