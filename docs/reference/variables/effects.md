# Effects

## Filter System

Pre-built CSS filter values for visual effects like blur, brightness, and grayscale.

### Blur

| Variable | Value |
|---|---|
| `--tk-filter-blur-0` | blur(0px) |
| `--tk-filter-blur-2x` | blur(2px) |
| `--tk-filter-blur-4x` | blur(8px) |
| `--tk-filter-blur-8x` | blur(24px) |
| `--tk-filter-blur-full` | blur(100px) |

```css
.modal-backdrop {
  backdrop-filter: var(--tk-filter-blur-4x);
}
```

### Brightness

| Variable | Value |
|---|---|
| `--tk-filter-brightness-0` | brightness(1) |
| `--tk-filter-brightness-2x` | brightness(1.2) |
| `--tk-filter-brightness-4x` | brightness(1.5) |
| `--tk-filter-brightness-6x` | brightness(2) |

### Contrast

| Variable | Value |
|---|---|
| `--tk-filter-contrast-0` | contrast(1) |
| `--tk-filter-contrast-2x` | contrast(1.1) |
| `--tk-filter-contrast-5x` | contrast(1.5) |
| `--tk-filter-contrast-full` | contrast(4) |

### Grayscale

| Variable | Value |
|---|---|
| `--tk-filter-grayscale-0` | grayscale(0%) |
| `--tk-filter-grayscale-5x` | grayscale(50%) |
| `--tk-filter-grayscale-full` | grayscale(100%) |

```css
.disabled-image {
  filter: var(--tk-filter-grayscale-full);
}
```

### Hue Rotate

| Variable | Value |
|---|---|
| `--tk-filter-hue-rotate-0` | hue-rotate(0deg) |
| `--tk-filter-hue-rotate-4x` | hue-rotate(60deg) |
| `--tk-filter-hue-rotate-7x` | hue-rotate(180deg) |
| `--tk-filter-hue-rotate-full` | hue-rotate(360deg) |

### Invert

| Variable | Value |
|---|---|
| `--tk-filter-invert-0` | invert(0%) |
| `--tk-filter-invert-5x` | invert(50%) |
| `--tk-filter-invert-full` | invert(100%) |

### Saturate

| Variable | Value |
|---|---|
| `--tk-filter-saturate-0` | saturate(0) |
| `--tk-filter-saturate-4x` | saturate(1) |
| `--tk-filter-saturate-6x` | saturate(2) |
| `--tk-filter-saturate-full` | saturate(8) |

### Sepia

| Variable | Value |
|---|---|
| `--tk-filter-sepia-0` | sepia(0%) |
| `--tk-filter-sepia-5x` | sepia(50%) |
| `--tk-filter-sepia-full` | sepia(100%) |

## Opacity

| Variable | Value |
|---|---|
| `--tk-opacity-1x` | 0.1 |
| `--tk-opacity-3x` | 0.3 |
| `--tk-opacity-5x` | 0.5 |
| `--tk-opacity-7x` | 0.7 |
| `--tk-opacity-9x` | 0.9 |
| `--tk-opacity-full` | 1 |
