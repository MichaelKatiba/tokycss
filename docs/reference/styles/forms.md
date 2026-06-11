# Form Styles

## Labels

Labels are block-level, semi-bold, and small. They sit above their associated input.

```css
label {
  font-size: var(--tk-text-sm);
  font-weight: 600;
  color: var(--tk-fg-5x);
}
```

Inline labels (wrapping a checkbox or radio) use flex layout with normal weight.

### Required Fields

Labels connected to required inputs automatically show an asterisk:

```html
<label>Email <input type="email" required /></label>
<!-- Renders: "Email *" -->
```

## Text Inputs

Applies to: `text`, `email`, `password`, `url`, `tel`, `number`, `search`, `date`, `datetime-local`, `month`, `week`, `time`.

Full width, padded, rounded, with a subtle background. Hover adds a border, focus adds a primary-colored ring.

```html
<input type="email" placeholder="you@example.com" />
```

## Textarea

Same styling as text inputs, with a minimum height of 5rem. Vertically resizable.

## Select

Styled with a custom chevron arrow. The native appearance is removed.

```html
<select>
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```

## Checkboxes & Radios

Custom styled: native appearance removed, 18px square (checkbox) or circle (radio). Checked state fills with the primary color.

- **Checkbox:** Square with rounded corners, white checkmark when checked
- **Radio:** Circular, white dot when checked

```html
<label>
  <input type="checkbox" /> Accept terms
</label>
```

## Range

Custom slider: 6px track with primary-colored thumb. The thumb scales up on hover.

```html
<input type="range" min="0" max="100" />
```

## Color

Styled swatch input with border and padding.

## File

Styled with a primary-colored file-selector button.

```html
<input type="file" />
```

## Progress

Custom styled progress bar with primary color fill and rounded track.

## Fieldset & Legend

Grouped form controls with border, padding, and an uppercase bold legend.

```html
<fieldset>
  <legend>Contact Details</legend>
  <!-- form controls -->
</fieldset>
```

## Disabled State

All form inputs reduce opacity and show a not-allowed cursor when disabled.
