# Component Styles

## Buttons

Buttons are styled on `<button>`, `input[type="submit"]`, `input[type="button"]`, `input[type="reset"]`, and `[role="button"]`.

```css
button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.625rem var(--tk-size-24);
  font-size: var(--tk-text-sm);
  font-weight: 600;
  border-radius: var(--tk-size-8);
  cursor: pointer;
}
```

- **Active:** scales down slightly (scale 0.97) for tactile feedback
- **Disabled:** 50% opacity, not-allowed cursor, no transform
- Smooth transitions on all visual properties

```html
<button>Click me</button>
<button disabled>Disabled</button>
<div role="button">Div as button</div>
```

For size variants, see [Utilities](utilities.md).

## Tables

Full-width tables with styled header and alternating row hover.

```html
<table>
  <caption>Monthly sales</caption>
  <thead>
    <tr>
      <th>Month</th>
      <th>Revenue</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$12,000</td>
    </tr>
    <tr>
      <td>February</td>
      <td>$15,000</td>
    </tr>
  </tbody>
</table>
```

- `thead`: themed background, bottom border
- `th`: uppercase, small, muted, bold
- `td`: bottom border, muted color
- `tbody tr`: hover highlights with alpha background
- Last row removes bottom border
- `caption`: sits below the table, small and muted

## Dialog

Centered modal with backdrop blur and an entry animation.

```html
<dialog open>
  <h2>Modal Title</h2>
  <p>Modal content here.</p>
  <button>Close</button>
</dialog>
```

- Centered using `position: fixed; inset: 0; margin: auto`
- `::backdrop` uses theme color at 55% opacity with `backdrop-filter: blur(4px)`
- Open animation scales in with a subtle translateY

## Nav

Nav links are styled as a horizontal row with hover and active states.

```html
<nav>
  <ul>
    <li><a href="/" aria-current="page">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>
```

- `nav ul`: horizontal flex with gaps
- `nav a`: rounded padding, hover background, no underline
- `[aria-current="page"]` or `[aria-current="true"]`: primary color highlight
