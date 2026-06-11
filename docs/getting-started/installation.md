# Getting Started with TokyCSS

TokyCSS is a **Design System-first CSS Framework**. It styles your HTML automatically through element selectors, while giving you utility and layout classes for explicit control when you need it. There is no JavaScript — just one CSS file and your own customization layer.

## Browser Support

TokyCSS targets features that meet [Baseline Widely Available](https://web.dev/baseline/) status. Newer CSS features like `oklch()` and `@layer` are already widely supported across all modern browsers.

A small number of newer features are used intentionally where they add meaningful value. These are noted inline in the relevant documentation — it is your choice whether to adopt or override them.

## Quick Start

Add one `<link>` to your `<head>`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My Site</title>

  <!-- TokyCSS -->
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/tokycss@0.1/dist/toky.min.css"
  />

  <!-- Your custom styles -->
  <link rel="stylesheet" href="styleguide.css" />
</head>
<body>

  <h1>Hello, TokyCSS</h1>
  <p>Your content is already styled.</p>
  <button>Click me</button>

</body>
</html>
```

That is all you need. Your headings, paragraphs, forms, buttons, tables, and navigation all come with sensible defaults.

## Next Steps

- Learn how to brand the framework in [Customization](../customization/styleguide.md)
- Browse the [Variables reference](../reference/variables/colors.md) for design tokens
- Browse the [Styles reference](../reference/styles/reset.md) for styled elements
