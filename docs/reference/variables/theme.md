# Theme Variables (Semantic Tokens)

Semantic tokens map the raw color scales to contextual roles — backgrounds and foregrounds. You never use `--tk-color-theme-5xlight` directly on a page; instead you use `--tk-bg-5x` and the framework handles light and dark mode.

## How It Works

- **Light mode:** backgrounds use tints, foregrounds use shades
- **Dark mode:** backgrounds use shades, foregrounds use tints

This inversion is handled automatically via `@media (prefers-color-scheme: dark)`.

## Backgrounds

| Variable | Light | Dark |
|---|---|---|
| `--tk-bg-5x` | Lightest tint | Lightest shade |
| `--tk-bg-4x` | 4th tint | 4th shade |
| `--tk-bg-3x` | 3rd tint | 3rd shade |
| `--tk-bg-2x` | 2nd tint | 2nd shade |
| `--tk-bg-1x` | 1st tint | 1st shade |

### Status Backgrounds

| Variable | Light | Dark |
|---|---|---|
| `--tk-bg-success` | Success light tint | Success dark shade |
| `--tk-bg-warning` | Warning light tint | Warning dark shade |
| `--tk-bg-error` | Error light tint | Error dark shade |
| `--tk-bg-info` | Info light tint | Info dark shade |

## Foregrounds

Foreground variables control text, icons, and other content.

| Variable | Light | Dark |
|---|---|---|
| `--tk-fg-5x` | Darkest shade (highest contrast) | Lightest tint |
| `--tk-fg-4x` | 4th shade | 4th tint |
| `--tk-fg-3x` | 3rd shade | 3rd tint |
| `--tk-fg-2x` | 2nd shade | 2nd tint |
| `--tk-fg-1x` | 1st shade (lowest contrast) | 1st tint |

### Status Foregrounds

| Variable | Light | Dark |
|---|---|---|
| `--tk-fg-success` | Success dark shade | Success light tint |
| `--tk-fg-warning` | Warning dark shade | Warning light tint |
| `--tk-fg-error` | Error dark shade | Error light tint |
| `--tk-fg-info` | Info dark shade | Info light tint |

```css
.alert {
  background: var(--tk-bg-warning);
  color: var(--tk-fg-warning);
}
```

## Focus

| Variable | Purpose |
|---|---|
| `--tk-focus-ring` | Primary focus indicator color |

## Manual Theme Override

Force light or dark mode by setting `data-theme` on the `<html>` element:

```html
<html data-theme="dark">
```

> **Known issue:** The `[data-theme="dark"]` selector currently sets `color-scheme: dark` but does not redeclare all semantic tokens. For full manual theme switching, the variable values need to be duplicated under the `[data-theme="dark"]` and `[data-theme="light"]` selectors.
