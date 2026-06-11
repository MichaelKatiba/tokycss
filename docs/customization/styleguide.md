# Customizing TokyCSS

All customization happens in a single file — `styleguide.css`. This file sits alongside your HTML and overrides the framework's default design tokens.

## How It Works

Create a `styleguide.css` file with a `@layer styleguide` block. Inside, set your values on `:root`. Your custom layer loads after the framework defaults, so your values take precedence.

```css
@layer styleguide {
  :root {
    /* Your overrides here */
  }
}
```

> **Tip:** Use [Huemint](https://huemint.com/website-2/) to pick a color palette visually, then copy the OKLCH values.

## Brand Colors

The framework uses three brand colors. Each generates a full scale of tints, shades, and alpha variants automatically.

```css
--tk-color-primary: oklch(0.52 0.20 270);
--tk-color-secondary: oklch(0.62 0.14 195);
--tk-color-accent: oklch(0.72 0.17 75);
```

## Theme Hue

The theme color is a low-chroma neutral used for backgrounds and surfaces. Tint it slightly toward your brand:

```css
--tk-color-theme: oklch(0.95 0.008 265);
```

A higher chroma value (e.g., `0.02`) produces a more visible tint. A chroma of `0` produces a pure gray.

## Typography

Override font stacks for different roles:

```css
--tk-font-sans: "Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
--tk-font-serif: "Georgia", "Times New Roman", serif;
--tk-font-mono: "JetBrains Mono", "Fira Code", "SF Mono", Consolas, monospace;

--tk-font-display: var(--tk-font-sans);
--tk-font-heading: var(--tk-font-sans);
--tk-font-body: var(--tk-font-sans);
--tk-font-num: var(--tk-font-mono);
```

## Layout

Control the page width and side gutters:

```css
--tk-page-gutter: var(--tk-size-20);       /* Side padding */
--tk-content-width: 80ch;                    /* Main content lane width */
--tk-content-fill-width: 90ch;               /* Wider breakout lane */
```

## Fluid Scaling

The fluid type scale expands between two viewport widths. Adjust these bounds to control how aggressively text scales:

```css
--tk-fluid-scale-start: 480;   /* px — smallest viewport */
--tk-fluid-scale-end: 1440;    /* px — largest viewport */
```

## Complete Example

Here is a full `styleguide.css`:

```css
@layer styleguide {
  :root {
    /* Brand */
    --tk-color-primary: oklch(0.52 0.20 270);
    --tk-color-secondary: oklch(0.62 0.14 195);
    --tk-color-accent: oklch(0.72 0.17 75);
    --tk-color-theme: oklch(0.95 0.008 265);

    /* Fonts */
    --tk-font-sans: "Inter", system-ui, sans-serif;
    --tk-font-heading: var(--tk-font-sans);
    --tk-font-body: var(--tk-font-sans);

    /* Layout */
    --tk-page-gutter: var(--tk-size-20);
    --tk-content-width: 80ch;
  }
}
```

See the [Variables reference](../reference/variables/colors.md) for every design token you can override.
