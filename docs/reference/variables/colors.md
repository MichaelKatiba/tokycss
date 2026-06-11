# Colors

TokyCSS uses OKLCH for all color values — a perceptually-uniform color space that produces consistent tints and shades. You set one base color per role, and the framework generates a full scale of tints, shades, and alpha variants.

## Brand Colors

| Variable | Default | Role |
|---|---|---|
| `--tk-color-primary` | `oklch(0.52 0.20 270)` | Primary brand color |
| `--tk-color-secondary` | `oklch(0.62 0.14 195)` | Secondary brand color |
| `--tk-color-accent` | `oklch(0.72 0.17 75)` | Accent/highlight color |
| `--tk-color-theme` | `oklch(0.95 0.008 265)` | Low-chroma theme tint |

## Color Scale

Each brand color and the theme color generate the same structure:

- **Tints** (lighter): `--tk-color-*-5xlight` (near white) down to `--tk-color-*-1xlight` (barely lighter)
- **Shades** (darker): `--tk-color-*-1xdark` (barely darker) down to `--tk-color-*-5xdark` (near black)
- **Alpha variants**: `--tk-color-*-1a` (5% opacity) through `--tk-color-*-10a` (95% opacity)

For example, with `--tk-color-primary`, you get:

```
--tk-color-primary-5xlight    /* Lightest tint */
--tk-color-primary-4xlight
--tk-color-primary-3xlight
--tk-color-primary-2xlight
--tk-color-primary-1xlight
--tk-color-primary            /* Base */
--tk-color-primary-1xdark
--tk-color-primary-2xdark
--tk-color-primary-3xdark
--tk-color-primary-4xdark
--tk-color-primary-5xdark     /* Darkest shade */

--tk-color-primary-1a         /* 5% alpha */
--tk-color-primary-5a         /* 30% alpha */
--tk-color-primary-10a        /* 95% alpha */
```

## Semantic Colors

Four semantic colors are used for status messaging. Each has the same tint/shade/alpha structure.

| Variable | Default | Usage |
|---|---|---|
| `--tk-color-success` | `oklch(0.62 0.20 145)` | Success states |
| `--tk-color-warning` | `oklch(0.80 0.16 70)` | Warning states |
| `--tk-color-error` | `oklch(0.58 0.22 25)` | Error/danger states |
| `--tk-color-info` | `oklch(0.58 0.18 245)` | Info states |

```css
/* Example usage */
.notification {
  background: var(--tk-color-success-3xlight);
  color: var(--tk-color-success-5xdark);
  border: 1px solid var(--tk-color-success-3a);
}
```

## Shadows

Shadow tokens produce layered box-shadow values using the theme hue.

| Variable | Usage |
|---|---|
| `--tk-color-shadow-xs` | Subtle, close shadow |
| `--tk-color-shadow-sm` | Small shadow |
| `--tk-color-shadow-md` | Medium shadow |
| `--tk-color-shadow-lg` | Large shadow |
| `--tk-color-shadow-xl` | Extra large shadow |
| `--tk-color-shadow-2xl` | Largest shadow |

```css
.card {
  box-shadow: var(--tk-color-shadow-md);
}
```
