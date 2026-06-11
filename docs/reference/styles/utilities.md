# Utility Styles

## Button Sizes

Modifier classes to change button padding and font size. Apply to `<button>`, `<a>`, or any `[role="button"]` element.

| Class | Padding | Font Size |
|---|---|---|
| `.btn--sm` | 0.375rem 0.75rem | `--tk-text-xs` |
| `.btn--md` | 0.75rem 1.5rem | `--tk-text-md` |
| `.btn--lg` | 1rem 2rem | `--tk-text-lg` |

```html
<button class="btn--sm">Small</button>
<button>Default</button>
<button class="btn--md">Medium</button>
<button class="btn--lg">Large</button>
```

## Aria States

### `[aria-busy="true"]`

Indicates a loading state. The cursor changes to `progress` and opacity drops.

```html
<button aria-busy="true">Saving...</button>
```

### `[aria-disabled="true"]`

Disables interaction. Pointer events are blocked, cursor shows `not-allowed`, and opacity drops.

```html
<button aria-disabled="true">Unavailable</button>
```

## Data Status

Color-coded backgrounds, borders, and text for status messages. Apply to any element.

| Attribute | Color | Use for |
|---|---|---|
| `data-status="success"` | Green | Success messages |
| `data-status="warning"` | Amber | Warning messages |
| `data-status="danger"` | Red | Error messages |
| `data-status="error"` | Red | Error messages (alias) |
| `data-status="info"` | Blue | Informational messages |

```html
<div data-status="success">Changes saved successfully.</div>
<div data-status="error">Something went wrong.</div>
```

## Screen Reader Only

Visually hides content while keeping it accessible to screen readers.

```html
<span data-sr-only>This text is only read by screen readers</span>
```

This clips the element to a 1px square, hides overflow, and removes any border or padding.
