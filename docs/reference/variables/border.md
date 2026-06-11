# Border Variables

## Border Radius

Controls the roundness of element corners.

| Variable | Value | Visual |
|---|---|---|
| `--tk-radius-0` | 0 | Sharp corners |
| `--tk-radius-2xs` | 1px | Barely visible |
| `--tk-radius-xs` | 2px | Subtle |
| `--tk-radius-sm` | 4px | Soft |
| `--tk-radius-md` | 8px | Standard |
| `--tk-radius-lg` | 12px | Prominent |
| `--tk-radius-xl` | 16px | Very rounded |
| `--tk-radius-2xl` | 20px | Extra rounded |
| `--tk-radius-3xl` | 24px | Maximum rounding |
| `--tk-radius-full` | 9999px | Fully round (circles/pills) |

```css
.button {
  border-radius: var(--tk-radius-sm);
}

.avatar {
  border-radius: var(--tk-radius-full);
}
```

## Border Width

| Variable | Value |
|---|---|
| `--tk-border-0` | 0px |
| `--tk-border-2xs` | 1px |
| `--tk-border-xs` | 2px |
| `--tk-border-sm` | 4px |
| `--tk-border-md` | 8px |
| `--tk-border-lg` | 12px |

## Border Style

| Variable | Value |
|---|---|
| `--tk-border-none` | none |
| `--tk-border-solid` | solid |
| `--tk-border-dashed` | dashed |
| `--tk-border-dotted` | dotted |
| `--tk-border-double` | double |

## Outline

| Variable | Value |
|---|---|
| `--tk-outline-none` | none |
| `--tk-outline-2xs` | 1px |
| `--tk-outline-xs` | 2px |
| `--tk-outline-sm` | 4px |
| `--tk-outline-md` | 8px |
