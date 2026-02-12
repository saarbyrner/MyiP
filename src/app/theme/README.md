# Theme Provider

## Overview

The `PlaybookThemeProvider` wraps your application with the MUI theme from `@saarbyrne/playbook`.

## Usage

Already configured in `App.tsx`:

```tsx
import { PlaybookThemeProvider } from './theme/PlaybookThemeProvider';

export default function App() {
  return (
    <PlaybookThemeProvider>
      {/* Your app */}
    </PlaybookThemeProvider>
  );
}
```

## What It Does

1. **Imports theme** from `@saarbyrne/playbook/themes`
2. **Wraps MUI ThemeProvider** with the playbook theme
3. **Filters Figma props** - Removes `data-fg-*` attributes that cause warnings
4. **Applies to all MUI components** - All components from `./components/playbook` automatically use the theme

## Files

- `PlaybookThemeProvider.tsx` - Main theme provider component
- `index.ts` - Export file

## Design System Integration

The theme works alongside CSS variables in `/src/styles/global.css`:

- **MUI components** → Use this theme provider
- **CSS variables** → Provide same tokens for non-MUI usage
- **Both synchronized** with @saarbyrne/playbook v1.2380.0

## Don't Modify

This component is carefully configured to work with both:
- MUI components
- Figma Make environment
- The design system CSS variables

Only modify if you need to:
- Update playbook package version
- Add custom theme overrides
- Debug theme issues

For most use cases, customize your design by editing `/src/styles/global.css` instead.
