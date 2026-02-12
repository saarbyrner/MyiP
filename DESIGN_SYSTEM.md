# Design System Documentation

This project uses a comprehensive CSS-based design system synchronized with `@saarbyrne/playbook v1.2380.0`. All design tokens are defined in `/src/styles/global.css` and work seamlessly with both MUI components and Tailwind CSS.

## How It Works

The application uses a **dual-layer approach**:

1. **MUI Components** → Use `@saarbyrne/playbook` theme via `PlaybookThemeProvider`
2. **CSS Variables** → Provide the same design tokens for non-MUI components, Tailwind classes, and direct styling

**This means you can update the entire application's styling by editing `/src/styles/global.css` without touching component code.**

## File Structure

- **`/src/styles/global.css`** - All design system tokens synchronized with @saarbyrne/playbook
- **`/src/styles/theme.css`** - Tailwind-compatible mappings and base styles
- **`/src/styles/tailwind.css`** - Tailwind CSS v4 configuration
- **`/src/app/theme/PlaybookThemeProvider.tsx`** - MUI theme provider wrapper

## Design System Variables

### Colors

All colors are synchronized with `@saarbyrne/playbook/themes/colors.js`:

```css
/* Grey Scale */
--grey-50: #fafafa;
--grey-100: #5f7089;
--grey-100-50: #afb7c4;
--grey-200: #3b4960; /* Primary text and icons */
--grey-200-12: rgba(59, 73, 96, 0.12);
--grey-300: #1f2d44;
--grey-400: #0d1b30;
--grey-disabled: #dedede;

/* Neutral Colors */
--neutral-100: #f6f6f6;
--neutral-200: #f1f2f3;
--neutral-400: #cfd4db;

/* Red (Error/Destructive) */
--red-100: #c31d2b;
--red-200: #b11b27;
--red-300: #931621;
--red-light: #feedee;

/* Orange (Warning) */
--orange-100: #ea7b5d;
--orange-200: #e55e38;
--orange-300: #c73f1a;
--orange-400: #ef6c00;

/* Yellow */
--yellow-100: #ffab00;
--yellow-200: #fff7e5;

/* Green (Success) */
--green-100: #43b374;
--green-200: #0a875a;
--green-300: #0a6644;

/* Blue (Info/Accent) */
--blue-info: #e5f6fd;
--blue-accent: #2e96ff;
--blue-100: #2a6ebb;

/* Beige/Brown */
--beige-50: #fff4e5;
--brown-600: #663c00;

/* Base Colors */
--white: #ffffff;
--black: #000000;

/* Navigation/Sidebar */
--nav-background: #1c2226;
--nav-background-dark: #121212;
--nav-selected: #0f28ff;
--nav-indicator: #f5f9fc;

/* Utility Colors */
--p04: #bec3c7;
--background: #fafafa;
```

**To change the primary color:** Edit `--grey-200` in `/src/styles/global.css`  
**To change error color:** Edit `--red-200` in `/src/styles/global.css`  
**To change success color:** Edit `--green-200` in `/src/styles/global.css`

### Spacing

Consistent spacing scale from 0px to 96px:

```css
--spacing-0: 0px;
--spacing-1: 4px;
--spacing-2: 8px;
--spacing-3: 12px;
--spacing-4: 16px;
--spacing-5: 20px;
--spacing-6: 24px;
--spacing-7: 28px;
--spacing-8: 32px;
--spacing-10: 40px;
--spacing-12: 48px;
--spacing-16: 64px;
--spacing-20: 80px;
--spacing-24: 96px;
```

### Typography

**Font Family:** All text uses `Open Sans` (defined in `/src/styles/fonts.css`)

```css
--font-family-base: "Open Sans", sans-serif;
```

**Font Sizes - Aligned with MUI Typography:**

```css
--font-size-h1: 96px;
--font-size-h2: 60px;
--font-size-h3: 48px;
--font-size-h4: 34px;
--font-size-h5: 24px;
--font-size-h6: 20px;
--font-size-subtitle1: 16px;
--font-size-subtitle2: 14px;
--font-size-body1: 16px;
--font-size-body2: 14px;
--font-size-caption: 12px;
--font-size-overline: 12px;
--font-size-button: 14px;
```

**Font Weights:**

```css
--font-weight-light: 300;
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

**Line Heights:**

```css
--line-height-tight: 1.2;
--line-height-normal: 1.5;
--line-height-relaxed: 1.75;
```

### Borders

```css
/* Border Widths */
--border-width-thin: 1px;
--border-width-medium: 2px;
--border-width-thick: 4px;

/* Border Colors */
--border-color-default: var(--grey-100-50);
--border-color-light: var(--p04);
--border-color-dark: var(--grey-200);
```

### Border Radius

```css
--radius-none: 0px;
--radius-xs: 1px;
--radius-sm: 2px;
--radius-md: 4px; /* Default */
--radius-lg: 6px;
--radius-xl: 8px;
--radius-2xl: 12px;
--radius-3xl: 16px;
--radius-full: 9999px; /* For pills/badges */
```

### Shadows

```css
--shadow-xs: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
--shadow-sm: 0px 1px 3px 0px rgba(0, 0, 0, 0.12), ...;
--shadow-md: 0px 4px 6px -1px rgba(0, 0, 0, 0.1), ...;
--shadow-lg: 0px 10px 15px -3px rgba(0, 0, 0, 0.1), ...;
--shadow-xl: 0px 20px 25px -5px rgba(0, 0, 0, 0.1), ...;
--shadow-nav: 0px 4.8px 14.4px 0px rgba(0, 0, 0, 0.18), ...;
```

## Semantic Colors

These are mapped from the base colors for easier use:

```css
/* Text */
--text-primary: var(--grey-200);
--text-secondary: var(--grey-300);
--text-disabled: var(--grey-disabled);
--text-on-white: var(--grey-200);
--text-on-dark: var(--white);

/* Backgrounds */
--background-default: var(--white);
--background-paper: var(--white);
--background-elevated: var(--white);
--background-overlay: rgba(0, 0, 0, 0.5);

/* Primary */
--primary-main: var(--grey-200);
--primary-dark: var(--grey-400);
--primary-light: var(--grey-100);
--primary-contrast: var(--white);
--primary-focus: var(--grey-200-12);

/* Secondary */
--secondary-main: var(--neutral-200);
--secondary-dark: var(--neutral-400);
--secondary-light: var(--neutral-100);
--secondary-contrast: var(--grey-200);

/* Error */
--error-main: var(--red-200);
--error-dark: var(--red-300);
--error-light: var(--red-100);
--error-contrast: var(--white);

/* Warning */
--warning-main: var(--orange-200);
--warning-dark: var(--orange-300);
--warning-light: var(--orange-100);
--warning-lighter: var(--yellow-100);
--warning-contrast: var(--white);

/* Success */
--success-main: var(--green-200);
--success-dark: var(--green-300);
--success-light: var(--green-100);
--success-contrast: var(--white);

/* Info */
--info-main: var(--grey-200);
--info-dark: var(--grey-400);
--info-light: var(--grey-100);
--info-blue: var(--blue-info);
--info-contrast: var(--white);

/* Inputs */
--input-background: rgba(0, 0, 0, 0.06);
--input-border: var(--border-default);
--input-filled: rgba(0, 0, 0, 0);
--input-hover: rgba(0, 0, 0, 0.09);
--input-focus-ring: rgba(59, 73, 96, 0.5);
```

## Component Usage

### MUI Components (Recommended)

Use components from `@saarbyrne/playbook` which are styled with the design system:

```tsx
import { Button, TextField, Typography } from './components/playbook';

// Components automatically use design system theme
<Button variant="contained">Submit</Button>
<TextField label="Email" />
<Typography variant="h5">Title</Typography>
```

### Direct CSS Variable Usage

For custom styling or overrides, use CSS variables via MUI's `sx` prop:

```tsx
<Button
  sx={{
    backgroundColor: "var(--primary-main)",
    color: "var(--primary-contrast)",
    fontSize: "var(--font-size-button)",
    fontWeight: "var(--font-weight-medium)",
    borderRadius: "var(--radius-md)",
    padding: "var(--spacing-2) var(--spacing-4)",
    fontFamily: "var(--font-family-base)",
  }}
>
  Custom Button
</Button>
```

### Tailwind Classes

Tailwind classes automatically use the design system variables:

```tsx
<div className="bg-background text-foreground p-4 rounded-md">
  Content
</div>
```

## Component-Specific Variables

```css
/* Avatar */
--avatar-size-sm: 32px;
--avatar-size-md: 40px;
--avatar-size-lg: 56px;

/* Chip */
--chip-height: 32px;
--chip-padding-x: 12px;
--chip-font-size: 13px;

/* Button */
--button-height-sm: 32px;
--button-height-md: 40px;
--button-height-lg: 48px;
--button-padding-x-sm: 12px;
--button-padding-x-md: 16px;
--button-padding-x-lg: 24px;
```

## Z-Index

```css
--z-index-dropdown: 1000;
--z-index-sticky: 1020;
--z-index-fixed: 1030;
--z-index-modal-backdrop: 1040;
--z-index-modal: 1050;
--z-index-popover: 1060;
--z-index-tooltip: 1070;
```

## Transitions

```css
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-base: 200ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-slow: 300ms cubic-bezier(0.4, 0, 0.2, 1);
```

## How to Customize

### Change Primary Color

Edit `/src/styles/global.css`:

```css
--grey-200: #YOUR_COLOR; /* Changes primary color everywhere */
```

### Change Default Border Radius

Edit `/src/styles/global.css`:

```css
--radius-md: 8px; /* Changes from 4px to 8px everywhere */
```

### Change Spacing Scale

Edit `/src/styles/global.css`:

```css
--spacing-4: 20px; /* Changes base spacing from 16px to 20px */
```

### Change Typography

Edit `/src/styles/global.css`:

```css
--font-family-base: "Roboto", sans-serif;
--font-size-body1: 18px; /* Larger body text */
```

**Note:** Font faces must be defined in `/src/styles/fonts.css`

### Change Navigation Colors

Edit `/src/styles/global.css`:

```css
--nav-background: #YOUR_COLOR;
--nav-selected: #YOUR_ACCENT_COLOR;
```

## Integration with @saarbyrne/playbook

The design system is synchronized with `@saarbyrne/playbook v1.2380.0`:

- **MUI Theme:** Provided by `PlaybookThemeProvider` using `rootTheme` from the package
- **CSS Variables:** Mirror the theme colors, spacing, and typography for non-MUI usage
- **Components:** Import from `./components/playbook` to use pre-styled MUI components

```tsx
// App.tsx structure
import { PlaybookThemeProvider } from "./theme/PlaybookThemeProvider";

export default function App() {
  return (
    <PlaybookThemeProvider>
      {/* All MUI components automatically use design system */}
      <YourApp />
    </PlaybookThemeProvider>
  );
}
```

## Benefits

✅ **Centralized styling** - Change design tokens in one place  
✅ **Dual approach** - MUI theme + CSS variables for maximum flexibility  
✅ **Type-safe** - Works with TypeScript  
✅ **Performance** - Browser-native CSS variables  
✅ **Easy theming** - Update colors/spacing without touching components  
✅ **Playbook synchronized** - Matches your team's design system package  
✅ **No JavaScript overhead** - Pure CSS solution

## Typography Best Practices

**CRITICAL:** All generated text MUST use `Open Sans` font face defined in the CSS:

- MUI Typography components automatically use the correct font
- Custom text should use `fontFamily: 'var(--font-family-base)'` in `sx` prop
- Never hardcode font families or font sizes - always use CSS variables

```tsx
// ✅ Correct - uses design system
<Typography variant="body1">Text</Typography>

// ✅ Correct - custom with CSS variables
<Box sx={{ fontFamily: 'var(--font-family-base)', fontSize: 'var(--font-size-body1)' }}>
  Text
</Box>

// ❌ Wrong - hardcoded values
<Box sx={{ fontFamily: 'Arial', fontSize: '16px' }}>
  Text
</Box>

```