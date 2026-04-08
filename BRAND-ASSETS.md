# Coffee Shop Brand Assets & Guidelines

## Brand Color Palette

### Primary Coffee Browns

```css
coffee-50:  #f7f3f0  /* Light cream, backgrounds */
coffee-100: #ede4d8  /* Soft beige, subtle backgrounds */
coffee-200: #dcc8b1  /* Light brown, borders */
coffee-300: #c8a882  /* Medium light brown, secondary text */
coffee-400: #b58b5a  /* Coffee with milk, accents */
coffee-500: #a67c52  /* Primary brand brown, main CTA */
coffee-600: #8b6f47  /* Rich coffee brown, primary text/logos */
coffee-700: #6f5a3c  /* Dark brown, emphasis */
coffee-800: #5c4a35  /* Deep brown, strong contrast */
coffee-900: #4e3f30  /* Darkest brown, maximum contrast */
```

### Color Usage Guidelines

**Primary Brand Color**: `coffee-600` (#8b6f47)

- Logo color
- Primary buttons and CTAs
- Header text and navigation
- Brand accents

**Background Colors**:

- Main backgrounds: `coffee-50` (#f7f3f0)
- Section backgrounds: `coffee-100` (#ede4d8)
- Cards and containers: `white` with `coffee-200` borders

**Text Colors**:

- Primary text: `coffee-800` (#5c4a35)
- Secondary text: `coffee-600` (#8b6f47)
- Light text on dark: `coffee-100` (#ede4d8)

## Logo Assets

### Primary Logo Files

| File               | Size     | Usage                | Format |
| ------------------ | -------- | -------------------- | ------ |
| `logo.png`         | Original | General use          | PNG    |
| `logo-primary.png` | Original | Backup/primary       | PNG    |
| `logo-header.png`  | 200x60   | Website header       | PNG    |
| `logo-large.png`   | 400x120  | High-res displays    | PNG    |
| `logo-social.png`  | 1200x630 | Social media sharing | PNG    |

### Icon Assets

| File               | Size    | Usage                  | Format |
| ------------------ | ------- | ---------------------- | ------ |
| `logo-icon-16.png` | 16x16   | Browser favicon        | PNG    |
| `logo-icon-32.png` | 32x32   | Small icons, favicon   | PNG    |
| `logo-icon-64.png` | 64x64   | Medium icons           | PNG    |
| `icon-192.png`     | 192x192 | PWA manifest           | PNG    |
| `icon-512.png`     | 512x512 | PWA manifest, high-res | PNG    |

### Web Integration Files

- `favicon.ico` - Browser favicon
- `site.webmanifest` - PWA configuration

## Typography

### Font Stack

```css
font-sans: ['Inter', 'sans-serif']     /* Clean, modern body text */
font-serif: ['Playfair Display', 'serif'] /* Elegant headers and accents */
```

### Font Usage Guidelines

- **Headers (H1-H3)**: Playfair Display (serif) for elegant, welcoming feel
- **Body Text**: Inter (sans-serif) for excellent readability
- **UI Elements**: Inter (sans-serif) for consistency and clarity

## Logo Usage Guidelines

### Minimum Sizes

- **Digital**: 120px width minimum
- **Print**: 1 inch width minimum
- **Favicon**: 16px minimum (simplified icon only)

### Clear Space

- Maintain clear space equal to the height of the coffee bean icon on all sides
- Never place logo closer than this distance to other elements

### Color Variations

- **Primary**: Coffee brown (#8b6f47) on light backgrounds
- **Reverse**: Light cream (#ede4d8) on dark backgrounds
- **Monochrome**: Black or white for single-color applications

### What NOT to Do

- ❌ Don't stretch or distort the logo
- ❌ Don't change the coffee brown color
- ❌ Don't add effects, shadows, or gradients
- ❌ Don't use logo smaller than minimum size requirements
- ❌ Don't place logo on busy backgrounds without clear space

## Implementation Notes

All logo assets are optimized for web use with:

- Transparent backgrounds where applicable
- Optimized file sizes for fast loading
- High contrast for accessibility
- Scalable designs that work across all devices

These assets are ready for immediate use in the website header, favicon, social media integration, and future print materials.
