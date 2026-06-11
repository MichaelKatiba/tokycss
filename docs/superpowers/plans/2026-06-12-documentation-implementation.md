# TokyCSS Documentation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Write 16 documentation Markdown files covering installation, customization, and full reference (variables + styles).

**Architecture:** Each file is a standalone Markdown document in the `docs/` folder, organized by topic. The Getting Started and Customization sections introduce the framework. The Reference section splits into Variables (design tokens) and Styles (what gets styled). All files are linked via relative paths where helpful.

**Tech Stack:** Markdown, CSS (framework code referenced inline).

---

### Task 1: `getting-started/installation.md`

**Files:**
- Create: `docs/getting-started/installation.md`

- [ ] **Step 1: Write the file**

Content outline:
- TokyCSS is a **Design System-first CSS Framework** — it provides automatic styling through element selectors plus utility and layout classes for explicit control.
- Browser support philosophy: targets Baseline Widely Available features. A few newer CSS features are used intentionally (documented inline); it's your choice whether to adopt them.
- Quick start: single `<link>` from jsDelivr CDN in `<head>`.
- Add `styleguide.css` for customization.
- Include full HTML boilerplate.
- Brief "Hello World" example showing a heading, paragraph, and button.

- [ ] **Step 2: Verify file exists and reads correctly**
  Run: `Get-ChildItem -LiteralPath "docs/getting-started/installation.md"`
  Expected: File exists with the structure above.

- [ ] **Step 3: Commit**

---

### Task 2: `customization/styleguide.md`

**Files:**
- Create: `docs/customization/styleguide.md`

- [ ] **Step 1: Write the file**

Content outline:
- `styleguide.css` is the single file you edit to brand the framework.
- Define `@layer styleguide` and put overrides in `:root`.
- Use Huemint (https://huemint.com/website-2/) to pick a palette visually.
- Set brand colors: `--tk-color-primary`, `--tk-color-secondary`, `--tk-color-accent`
- Tune theme hue: `--tk-color-theme` (a low-chroma color, ~0.008 chroma)
- Override font stacks: `--tk-font-sans`, `--tk-font-serif`, `--tk-font-mono`
- Adjust page gutter (`--tk-page-gutter`, default `--tk-size-20`) and content width (`--tk-content-width`, default `80ch`)
- Fluid scale bounds (`--tk-fluid-scale-start`, `--tk-fluid-scale-end`)
- Include a complete minimal example.

- [ ] **Step 2: Verify file exists**

- [ ] **Step 3: Commit**

---

### Task 3: `reference/variables/colors.md`

**Files:**
- Create: `docs/reference/variables/colors.md`

- [ ] **Step 1: Write the file**

Content outline:
- **Brand colors:** `--tk-color-primary`, `--tk-color-secondary`, `--tk-color-accent`
- **Theme:** `--tk-color-theme` — low-chroma tint base
- Each color has 5 tints (`--tk-color-*-5xlight` through `--tk-color-*-1xlight`), 5 shades (`--tk-color-*-1xdark` through `--tk-color-*-5xdark`), 10 alpha variants (`--tk-color-*-1a` through `--tk-color-*-10a`)
- **Semantic colors:** success (`oklch(0.62 0.20 145)`), warning (`oklch(0.80 0.16 70)`), error (`oklch(0.58 0.22 25)`), info (`oklch(0.58 0.18 245)`) — each with full tint/shade/alpha scale
- **Shadows:** `--tk-color-shadow` + `--tk-color-shadow-xs` through `--tk-color-shadow-2xl`
- Note: Tint/shade generation is an internal engine; you only need to set the base color and the framework generates the scale.
- Include code examples showing how to use color variables.

- [ ] **Step 2: Verify file exists**

- [ ] **Step 3: Commit**

---

### Task 4: `reference/variables/base.md`

**Files:**
- Create: `docs/reference/variables/base.md`

- [ ] **Step 1: Write the file**

Content outline:
- **Screen sizes:** `--tk-screen-sm` (480px), `--tk-screen-md` (768px), `--tk-screen-lg` (1024px), `--tk-screen-xl` (1280px), `--tk-screen-2xl` (1440px)
- **4px spacing system:** `--tk-size-unit` is 4px. Scale from `--tk-size-4` (4px) through `--tk-size-100` (100px) in 4px increments. Plus `--tk-size-2xs` (0.5px), `--tk-size-1` (1px), `--tk-size-2` (2px). Used for gaps, border-radius, padding, margin, inset.
- **Common values:** `--tk-value-auto`, `--tk-value-none`, `--tk-value-normal`, `--tk-value-inherit`, etc.
- **Percentage sizing:** `--tk-size-5p` through `--tk-size-100p`
- **Viewport sizing:** `--tk-size-*vw` and `--tk-size-*vh`
- **Cursor system:** `--tk-cursor-pointer`, `--tk-cursor-not-allowed`, etc.
- **Alignment:** `--tk-align-*` (baseline, top, middle, bottom, etc.)
- **Table:** `--tk-table-auto`, `--tk-table-fixed`, etc.
- **SVG:** `--tk-fill-current`, `--tk-stroke-*`

- [ ] **Step 2: Verify file exists**

- [ ] **Step 3: Commit**

---

### Task 5: `reference/variables/layout.md`

**Files:**
- Create: `docs/reference/variables/layout.md`

- [ ] **Step 1: Write the file**

Content outline:
- **Grid engine concept:** Uses CSS Grid with named grid lines (`full-start`, `gutter-start`, `fill-start`, `main-start`, `main-end`, `fill-end`, `gutter-end`, `full-end`) to create content-aware layout lanes.
- **Configure via styleguide.css:** `--tk-content-width` (main lane), `--tk-content-fill-width` (fill lane), `--tk-page-gutter` (side gutters).
- **Position:** `--tk-position-static` through `--tk-position-sticky`
- **Display:** `--tk-display-block` through `--tk-display-ruby-text`
- **Overflow:** `--tk-overflow-auto`, `--tk-overflow-hidden`, etc.
- **Flexbox:** `--tk-flex-direction-*`, `--tk-justify-*`, `--tk-align-*`
- **Grid:** `--tk-grid-auto-fit`, `--tk-grid-auto-fill`, placement variables
- **Aspect ratio:** `--tk-aspect-ratio-square`, `--tk-aspect-ratio-video`, etc.
- **Float/clear:** `--tk-float-*`, `--tk-clear-*`
- **Object fit/position:** `--tk-object-fit-*`
- **Visibility/Isolation:** `--tk-visibility-*`, `--tk-isolation-*`

- [ ] **Step 2: Verify file exists**

- [ ] **Step 3: Commit**

---

### Task 6: `reference/variables/border.md`

**Files:**
- Create: `docs/reference/variables/border.md`

- [ ] **Step 1: Write the file**

Content outline:
- **Border radius:** `--tk-radius-0` through `--tk-radius-full` (9999px)
- **Border widths:** `--tk-border-0` through `--tk-border-3xl`
- **Border styles:** `--tk-border-none`, `--tk-border-solid`, `--tk-border-dashed`, `--tk-border-dotted`, `--tk-border-double`, etc.
- **Outline:** `--tk-outline-none` through `--tk-outline-3xl`, and outline styles
- Include usage examples.

- [ ] **Step 2: Verify file exists**

- [ ] **Step 3: Commit**

---

### Task 7: `reference/variables/effects.md`

**Files:**
- Create: `docs/reference/variables/effects.md`

- [ ] **Step 1: Write the file**

Content outline:
- **Filter system:** blur (`--tk-filter-blur-0` through `--tk-filter-blur-full`), brightness, contrast, grayscale, hue-rotate, invert, saturate, sepia — each with intensity scale
- **Opacity:** `--tk-opacity-1x` (0.1) through `--tk-opacity-full` (1)
- Include usage examples for common effects like blurring backgrounds, adjusting brightness on hover, etc.

- [ ] **Step 2: Verify file exists**

- [ ] **Step 3: Commit**

---

### Task 8: `reference/variables/typography.md`

**Files:**
- Create: `docs/reference/variables/typography.md`

- [ ] **Step 1: Write the file**

Content outline:
- **Fluid type scale:** `--tk-text-xs` (12–14px) through `--tk-text-9xl` (128–160px). These automatically scale between viewport sizes.
- **Font weights:** `--tk-font-weight-100` through `--tk-font-weight-900`
- **Line heights:** `--tk-line-height-2xs` (0.55) through `--tk-line-height-3xl`
- **Letter spacing:** `--tk-letter-spacing-2xs` (-0.05em) through `--tk-letter-spacing-3xl` (0.2em)
- **Text decoration:** underline offset, thickness, style, position
- **Text transform:** uppercase, lowercase, capitalize
- **Text alignment:** left, center, right, justify, start, end
- **White space:** normal, nowrap, pre, pre-line, pre-wrap
- **Text indent, text shadow, text stroke**
- **List style:** type, position
- **Text direction, writing mode, text orientation**
- **Hyphens, word break, overflow wrap, text wrap**
- **User select, background properties**

- [ ] **Step 2: Verify file exists**

- [ ] **Step 3: Commit**

---

### Task 9: `reference/variables/animation.md`

**Files:**
- Create: `docs/reference/variables/animation.md`

- [ ] **Step 1: Write the file**

Content outline:
- **Duration values:** `--tk-duration-2x` (0.1s) through `--tk-duration-3xl` (8s)
- **Delay values:** `--tk-delay-2x` (0.05s) through `--tk-delay-3xl` (2s)
- **Easing functions:** Standard (`--tk-ease`, `--tk-ease-in`, `--tk-ease-out`, `--tk-ease-in-out`), expressive (`--tk-ease-elastic`, `--tk-ease-bounce`, `--tk-ease-back`), physics-inspired (`--tk-ease-spring`, `--tk-ease-gravity`, `--tk-ease-snappy`)
- **Preset animations:** `--tk-animation-spin`, `--tk-animation-ping`, `--tk-animation-pulse`, `--tk-animation-bounce`, `--tk-animation-fade`, `--tk-animation-slide`
- **Transition system:** `--tk-transition-2x` (150ms) through `--tk-transition-3xl` (500ms), and common presets like `--tk-transition-all`, `--tk-transition-color`, `--tk-transition-opacity`, etc.

- [ ] **Step 2: Verify file exists**

- [ ] **Step 3: Commit**

---

### Task 10: `reference/variables/theme.md`

**Files:**
- Create: `docs/reference/variables/theme.md`

- [ ] **Step 1: Write the file**

Content outline:
- **Semantic tokens** map design tokens to contextual roles (backgrounds, foregrounds).
- **Strategy:** In light mode backgrounds use tints and foregrounds use shades; dark mode inverts this.
- **Automatic dark mode** via `@media (prefers-color-scheme: dark)`.
- **Backgrounds:** `--tk-bg-5x` (lightest) through `--tk-bg-1x` (darkest). Status backgrounds: `--tk-bg-success`, `--tk-bg-warning`, `--tk-bg-error`, `--tk-bg-info`.
- **Foregrounds:** `--tk-fg-5x` (darkest/highest contrast) through `--tk-fg-1x` (lightest/lowest contrast). Status foregrounds: `--tk-fg-success`, `--tk-fg-warning`, `--tk-fg-error`, `--tk-fg-info`.
- **Focus:** `--tk-focus-ring`, `--tk-focus-ring-alt`.
- **Manual override:** `[data-theme="light"]` and `[data-theme="dark"]`.

- [ ] **Step 2: Verify file exists**

- [ ] **Step 3: Commit**

---

### Task 11: `reference/styles/reset.md`

**Files:**
- Create: `docs/reference/styles/reset.md`

- [ ] **Step 1: Write the file**

Content outline:
- Universal `box-sizing: border-box`, margin/padding reset
- Font smoothing and text-rendering
- Body defaults (font, color, background, max-width, min-height)
- Heading font and letter-spacing, `text-wrap: balance`
- Media elements default to `object-fit: cover`, `display: block`
- `data-img-fit` behavior: absolute-positioned first image for background effects
- Form elements inherit font
- `focus-visible` focus ring with `--tk-focus-ring`
- `::selection` styling
- Custom scrollbar styling (WebKit + Firefox)
- Reduced-motion media query
- Print styles (hide nav/buttons, show link URLs, remove shadows)
- Note: `hanging-punctuation` and `text-wrap: pretty` are newer CSS features not yet Baseline Widely Available — use is intentional.

- [ ] **Step 2: Verify file exists**

- [ ] **Step 3: Commit**

---

### Task 12: `reference/styles/typography.md`

**Files:**
- Create: `docs/reference/styles/typography.md`

- [ ] **Step 1: Write the file**

Content outline:
- **Headings:** h1 (5xl, 800), h2 (4xl, 700), h3 (3xl, 700), h4 (2xl, 600), h5 (xl, 600), h6 (lg, 600) — each with appropriate line-height and margin.
- **Paragraphs:** `--tk-text-md`, muted color. Adjacent to h1/h2 gets `--tk-text-lg` for lead styling.
- **Inline:** `strong`/`b` (700, high contrast), `em`/`i` (italic), `small` (smaller, muted), `code` (mono, highlighted), `kbd` (keyboard key style), `samp` (mono), `mark` (accent highlight).
- **Links:** Underlined with primary color, hover thickens underline and darkens color.
- **Pre:** Monospace, themed background, rounded, scrollable.
- **Blockquote:** Left-bordered, italic, with `cite` styling.
- **Lists:** ul (disc), ol (decimal) — scoped to article/section/main.
- **Horizontal rule:** Thin themed line.
- **Details/Summary:** Bordered, summary with animated arrow indicator (rotates on open).
- **Figure/Figcaption:** Centered, italic caption.

- [ ] **Step 2: Verify file exists**

- [ ] **Step 3: Commit**

---

### Task 13: `reference/styles/forms.md`

**Files:**
- Create: `docs/reference/styles/forms.md`

- [ ] **Step 1: Write the file**

Content outline:
- **Labels:** Block display, semi-bold, small, with margin below.
- **Text inputs** (text, email, password, url, tel, number, search, date, etc.), **textarea**, **select** — full width, padded, bordered, rounded. Hover adds subtle border; focus adds primary ring.
- **Placeholder:** Muted color.
- **Disabled:** Reduced opacity, not-allowed cursor.
- **Select:** Custom chevron via SVG background.
- **Checkbox/Radio:** Custom styled, rounded (checkbox square, radio circle). Checked fills with primary color, check icon for checkbox, dot for radio.
- **Range:** Custom track and thumb with hover scale.
- **Color input:** Styled swatch.
- **File:** Styled file-selector button.
- **Progress:** Custom bar with primary fill.
- **Fieldset/Legend:** Bordered, labeled group.
- **Required indicator:** `label:has(+ :required)::after` adds ` *`.

- [ ] **Step 2: Verify file exists**

- [ ] **Step 3: Commit**

---

### Task 14: `reference/styles/components.md`

**Files:**
- Create: `docs/reference/styles/components.md`

- [ ] **Step 1: Write the file**

Content outline:
- **Buttons:** Applied to `button`, `input[type="submit/button/reset"]`, `[role="button"]`. Inline-flex, padded, semi-bold, rounded. Active state scales down. Disabled reduces opacity.
- **Tables:** Full width, small text. `thead` has tinted background and uppercase styled `th`. `td` has subtle bottom border. `tbody tr` hover highlights. Last row removes border. Caption at bottom.
- **Dialog:** Centered modal with border-radius, shadow, backdrop blur. Open animation scales in with slight vertical travel.
- **Nav:** Horizontal flex list. Links have padding, rounded hover background. `aria-current="page"` gets primary color highlight.

- [ ] **Step 2: Verify file exists**

- [ ] **Step 3: Commit**

---

### Task 15: `reference/styles/layout.md`

**Files:**
- Create: `docs/reference/styles/layout.md`

- [ ] **Step 1: Write the file**

Content outline:
- **Semantic element defaults:**
  - `header`: flexbox with space-between, bottom border, padded.
  - `main`: centered with auto margin, padded.
  - Headers followed by main → first section gets extra top padding.
  - `section`: vertical padding.
  - `footer`: top border, centered text, muted.
  - `aside`: bordered, tinted background, small text.
- **`.layout--grid` system:**
  - Apply `.layout--grid` to `<body>` or a wrapper to activate the page grid.
  - All children default to the `main` content lane.
  - **Lane classes:** `.layout--main` (readable content), `.layout--fill` (wider breakout), `.layout--full` (edge-to-edge).
  - **Cross-lane utilities:** `.layout--main-start-fill-end`, `.layout--main-start-full-end`, `.layout--fill-start-main-end`, `.layout--full-start-main-end`, `.layout--full-start-fill-end`, `.layout--fill-start-full-end`.
  - Configure lane widths in `styleguide.css` via `--tk-content-width`, `--tk-content-fill-width`, `--tk-page-gutter`.

- [ ] **Step 2: Verify file exists**

- [ ] **Step 3: Commit**

---

### Task 16: `reference/styles/utilities.md`

**Files:**
- Create: `docs/reference/styles/utilities.md`

- [ ] **Step 1: Write the file**

Content outline:
- **Button size modifiers:** `.btn--sm`, `.btn--md`, `.btn--lg` — adjust padding and font-size on buttons.
- **`[aria-busy="true"]`:** Progress cursor, reduced opacity.
- **`[aria-disabled="true"]`:** Not-allowed cursor, half opacity, no pointer events.
- **`[data-status]`:** Color-coded backgrounds and borders — `success` (green), `warning` (amber), `danger`/`error` (red), `info` (blue).
- **`[data-sr-only]`:** Screen-reader-only utility — visually hidden but accessible.

- [ ] **Step 2: Verify file exists**

- [ ] **Step 3: Commit**

---

## Batch Commit Strategy

After all tasks complete, do a single commit grouping by section:

```bash
git add docs/getting-started/ docs/customization/
git commit -m "docs: add installation and customization guides"

git add docs/reference/variables/
git commit -m "docs: add design tokens reference (colors, base, layout, border, effects, typography, animation, theme)"

git add docs/reference/styles/
git commit -m "docs: add styles reference (reset, typography, forms, components, layout, utilities)"
```

Then push to dev.
