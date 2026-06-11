# Animation & Transition Variables

## Duration

| Variable | Value | Feel |
|---|---|---|
| `--tk-duration-2x` | 0.1s | Lightning fast |
| `--tk-duration-xs` | 0.2s | Very fast |
| `--tk-duration-sm` | 0.5s | Fast |
| `--tk-duration-md` | 0.8s | Standard |
| `--tk-duration-lg` | 1.2s | Slow |
| `--tk-duration-xl` | 2s | Very slow |
| `--tk-duration-2xl` | 4s | Slow motion |
| `--tk-duration-3xl` | 8s | Drawn out |

## Delay

| Variable | Value |
|---|---|
| `--tk-delay-xs` | 0.1s |
| `--tk-delay-sm` | 0.2s |
| `--tk-delay-md` | 0.4s |
| `--tk-delay-lg` | 0.6s |
| `--tk-delay-xl` | 0.8s |

## Easing Functions

### Standard

| Variable | Curve | Feel |
|---|---|---|
| `--tk-ease` | cubic-bezier(0.25, 0.1, 0.25, 1) | Smooth deceleration |
| `--tk-ease-in` | cubic-bezier(0.42, 0, 1, 1) | Slow start |
| `--tk-ease-out` | cubic-bezier(0, 0, 0.58, 1) | Slow end |
| `--tk-ease-in-out` | cubic-bezier(0.42, 0, 0.58, 1) | Slow start and end |

### Expressive

| Variable | Feel |
|---|---|
| `--tk-ease-elastic` | Bouncy rubber-band |
| `--tk-ease-bounce` | Bounces at end |
| `--tk-ease-back` | Slight overshoot |

### Physics-inspired

| Variable | Feel |
|---|---|
| `--tk-ease-spring` | Spring-like motion |
| `--tk-ease-gravity` | Gravity pull |
| `--tk-ease-snappy` | Quick snap |

```css
.element {
  transition: transform var(--tk-duration-xs) var(--tk-ease-snappy);
}
```

## Preset Animations

Apply these with the `animation` property.

| Variable | Definition |
|---|---|
| `--tk-animation-spin` | spin 1s linear infinite |
| `--tk-animation-ping` | ping 1s cubic-bezier(0, 0, 0.2, 1) infinite |
| `--tk-animation-pulse` | pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite |
| `--tk-animation-bounce` | bounce 1s infinite |
| `--tk-animation-fade` | fade 1s ease-in-out infinite |
| `--tk-animation-slide` | slide 1s ease-in-out infinite |

```css
.spinner {
  animation: var(--tk-animation-spin);
}
```

## Transition System

Pre-built transition shorthand values for common property groups.

| Variable | Value |
|---|---|
| `--tk-transition-all` | all 0.4s var(--tk-ease) |
| `--tk-transition-all-xs` | all 0.2s var(--tk-ease) |
| `--tk-transition-color` | color 0.4s var(--tk-ease) |
| `--tk-transition-background` | background 0.4s var(--tk-ease) |
| `--tk-transition-opacity` | opacity 0.4s var(--tk-ease) |
| `--tk-transition-transform` | transform 0.4s var(--tk-ease) |
| `--tk-transition-box-shadow` | box-shadow 0.4s var(--tk-ease) |

```css
.button {
  transition: var(--tk-transition-all-xs);
}
```

> **Note:** Some duration and easing values in the styles layer reference `--tk-duration-xs`, `--tk-duration-sm`, `--tk-duration-md`, and `--tk-ease` directly rather than using the presets above. This is intentional — the preset transitions are available for your custom use.
