# Base Variables

## Screen Sizes

Reference breakpoints for responsive design.

| Variable | Value |
|---|---|
| `--tk-screen-sm` | 480px |
| `--tk-screen-md` | 768px |
| `--tk-screen-lg` | 1024px |
| `--tk-screen-xl` | 1280px |
| `--tk-screen-2xl` | 1440px |

## Spacing System

A 4px-based spacing scale. The base unit is `--tk-size-unit` (4px). Each size is a multiple of this unit.

| Variable | Value | Variable | Value |
|---|---|---|---|
| `--tk-size-2xs` | 0.5px | `--tk-size-2` | 2px |
| `--tk-size-4` | 4px | `--tk-size-8` | 8px |
| `--tk-size-12` | 12px | `--tk-size-16` | 16px |
| `--tk-size-20` | 20px | `--tk-size-24` | 24px |
| `--tk-size-28` | 28px | `--tk-size-32` | 32px |
| `--tk-size-36` | 36px | `--tk-size-40` | 40px |
| `--tk-size-44` | 44px | `--tk-size-48` | 48px |
| `--tk-size-52` | 52px | `--tk-size-56` | 56px |
| `--tk-size-60` | 60px | `--tk-size-64` | 64px |
| `--tk-size-68` | 68px | `--tk-size-72` | 72px |
| `--tk-size-76` | 76px | `--tk-size-80` | 80px |
| `--tk-size-84` | 84px | `--tk-size-88` | 88px |
| `--tk-size-92` | 92px | `--tk-size-96` | 96px |
| `--tk-size-100` | 100px |

Use these for gaps, border-radius, padding, margin, and inset:

```css
.card {
  padding: var(--tk-size-24);
  gap: var(--tk-size-8);
  border-radius: var(--tk-size-8);
}
```

## Common Values

| Variable | Value | Purpose |
|---|---|---|
| `--tk-value-auto` | auto | Browser-default sizing |
| `--tk-value-none` | none | Remove defaults |
| `--tk-value-normal` | normal | Reset to normal |
| `--tk-value-inherit` | inherit | Inherit from parent |
| `--tk-value-0` | 0 | Zero value |

## Percentage Sizing

Available in 5% increments from 5% to 100%.

```css
--tk-size-50p: 50%;   /* Half width */
--tk-size-100p: 100%; /* Full width */
```

## Viewport Sizing

```css
--tk-size-50vw: 50vw;  /* Half viewport width */
--tk-size-100vh: 100vh; /* Full viewport height */
```

## Cursor System

| Variable | Value |
|---|---|
| `--tk-cursor-pointer` | pointer |
| `--tk-cursor-not-allowed` | not-allowed |
| `--tk-cursor-grab` | grab |
| `--tk-cursor-text` | text |

## Vertical Alignment

| Variable | Value |
|---|---|
| `--tk-align-baseline` | baseline |
| `--tk-align-top` | top |
| `--tk-align-middle` | middle |
| `--tk-align-bottom` | bottom |

## SVG

| Variable | Value |
|---|---|
| `--tk-fill-current` | currentColor |
| `--tk-stroke-current` | currentColor |
