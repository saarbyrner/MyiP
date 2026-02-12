# 🔄 Design System Architecture

## How Everything Connects

```
┌─────────────────────────────────────────────────────────────────┐
│                    YOUR APPLICATION                              │
│                      (App.tsx)                                   │
└───────────────────────────┬─────────────────────────────────────┘
                            │
                    ┌───────┴────────┐
                    │                │
            ┌───────▼──────┐  ┌─────▼──────────┐
            │   MUI Theme   │  │  CSS Variables │
            │   (Playbook)  │  │  (global.css)  │
            └───────┬───────┘  └────────┬───────┘
                    │                   │
         ┌──────────┴──────────┬────────┴──────────┐
         │                     │                    │
    ┌────▼─────┐      ┌────────▼────────┐   ┌─────▼──────┐
    │   MUI    │      │   Tailwind CSS   │   │   Custom   │
    │Components│      │     Classes      │   │   Styling  │
    └──────────┘      └──────────────────┘   └────────────┘
         │                     │                    │
         └─────────────────────┴────────────────────┘
                               │
                    ┌──────────▼───────────┐
                    │   Rendered UI        │
                    │  (Consistent Design) │
                    └──────────────────────┘
```

## Data Flow

### 1. Design System Source
```
@saarbyrne/playbook v1.2380.0
        │
        ├─► MUI Theme (colors, spacing, typography)
        │   └─► PlaybookThemeProvider.tsx
        │       └─► All MUI Components
        │
        └─► CSS Variables (same tokens)
            └─► global.css
                ├─► Tailwind classes
                ├─► Custom styling
                └─► Non-MUI components
```

### 2. Component Import Flow
```
Your Component
    │
    ├─► import from './components/playbook'
    │       │
    │       └─► playbook.ts
    │               │
    │               └─► Re-exports from @mui/material
    │                       │
    │                       └─► Uses PlaybookThemeProvider theme
    │
    └─► Wrapped in <PlaybookThemeProvider>
            │
            └─► Theme applied automatically
```

### 3. Styling Flow
```
Component Styling
    │
    ├─► MUI Components
    │   └─► Automatically styled by theme
    │       └─► Override with sx prop + CSS variables
    │
    └─► Custom Elements
        └─► Style with CSS variables
            └─► var(--text-primary), var(--spacing-4), etc.
```

## File Relationships

```
┌────────────────────────────────────────────────┐
│              Application Layer                  │
├────────────────────────────────────────────────┤
│  App.tsx                                       │
│    ├─ Imports from './components/playbook'    │
│    ���─ Wraps with PlaybookThemeProvider        │
└───────────────┬────────────────────────────────┘
                │
┌───────────────▼────────────────────────────────┐
│           Component Layer                       │
├────────────────────────────────────────────────┤
│  playbook.ts                                   │
│    └─ Exports all MUI components              │
│                                                │
│  YourCustomComponents.tsx                      │
│    ├─ Import from playbook                    │
│    └─ Style with CSS variables                │
└───────────────┬────────────────────────────────┘
                │
┌───────────────▼────────────────────────────────┐
│            Theme Layer                          │
├────────────────────────────────────────────────┤
│  PlaybookThemeProvider.tsx                     │
│    ├─ Imports theme from @saarbyrne/playbook  │
│    └─ Provides theme to all MUI components    │
│                                                │
│  global.css                                    │
│    ├─ CSS variables (same tokens as theme)    │
│    └─ Used for Tailwind & custom styling      │
└───────────────┬────────────────────────────────┘
                │
┌───────────────▼────────────────────────────────┐
│          Design System Source                   │
├────────────────────────────────────────────────┤
│  @saarbyrne/playbook v1.2380.0                 │
│    ├─ MUI theme configuration                 │
│    ├─ Colors, spacing, typography             │
│    └─ Component styling                       │
└────────────────────────────────────────────────┘
```

## Customization Flow

### Changing Colors
```
User Action: Edit global.css
    │
    ├─► Changes --grey-200 variable
    │
    ├─► CSS Variables update immediately
    │   └─► Tailwind classes use new color
    │   └─► Custom sx props use new color
    │
    └─► (Note: MUI theme still uses playbook colors)
        └─► For full consistency, update playbook package
```

### The Dual System Approach

```
┌─────────────────────────────────────────────────────────┐
│                  Design System                           │
├──────────────────────┬──────────────────────────────────┤
│   MUI Theme          │    CSS Variables                 │
│   (from playbook)    │    (in global.css)               │
│                      │                                  │
│   Used by:           │    Used by:                      │
│   • MUI components   │    • Tailwind classes            │
│   • PlaybookProvider │    • Custom elements             │
│                      │    • sx prop overrides           │
│                      │    • Non-MUI components          │
└──────────────────────┴──────────────────────────────────┘
                │                    │
                └────────┬───────────┘
                         │
              Both synchronized with
           @saarbyrne/playbook v1.2380.0
```

## Component Lifecycle

### 1. Import Phase
```tsx
import { Button } from './components/playbook';
//          ▲
//          │
//     playbook.ts re-exports from @mui/material
```

### 2. Render Phase
```tsx
<PlaybookThemeProvider>  ◄── Provides MUI theme
  <Button variant="contained">  ◄── Uses theme colors
    Click Me
  </Button>
</PlaybookThemeProvider>
```

### 3. Styling Phase
```tsx
// Automatic theme styling
<Button variant="contained" />

// Or override with CSS variables
<Button 
  variant="contained"
  sx={{ 
    fontFamily: 'var(--font-family-base)',
    backgroundColor: 'var(--primary-main)'
  }}
/>
```

## Why This Architecture?

### ✅ Benefits

1. **Single Source of Truth**
   - All design tokens come from @saarbyrne/playbook
   - Consistent across entire app

2. **Flexibility**
   - MUI components work out-of-the-box
   - CSS variables allow customization
   - Can override when needed

3. **Easy Updates**
   - Update playbook package → all components update
   - Edit global.css → custom styling updates

4. **Team Friendly**
   - Clear import patterns
   - Documented design tokens
   - Easy to onboard new developers

### 🔄 How Updates Work

```
@saarbyrne/playbook updated
    │
    ├─► npm install @saarbyrne/playbook@latest
    │
    ├─► MUI theme automatically updated
    │   └─► All MUI components get new styles
    │
    └─► Manually sync global.css
        └─► Update CSS variables to match new tokens
```

## Quick Reference

### For MUI Components
```tsx
import { Button, TextField } from './components/playbook';

// Uses theme automatically
<Button variant="contained">Submit</Button>
```

### For Custom Styling
```tsx
<Box sx={{
  color: 'var(--text-primary)',
  backgroundColor: 'var(--background-paper)',
  padding: 'var(--spacing-4)',
  borderRadius: 'var(--radius-md)',
  fontFamily: 'var(--font-family-base)',
}}>
  Custom Box
</Box>
```

### For Customization
```css
/* /src/styles/global.css */
--grey-200: #YOUR_COLOR;  /* Updates everywhere */
--spacing-4: 20px;         /* New spacing value */
--font-family-base: 'Your Font';  /* New font */
```

## Architecture Principles

1. **Import from playbook**
   - Never import directly from @mui
   - Always use `./components/playbook`

2. **Style with variables**
   - Never hardcode colors/spacing
   - Always use `var(--variable-name)`

3. **Customize via CSS**
   - Edit global.css for design changes
   - Don't modify component code

4. **Trust the theme**
   - PlaybookThemeProvider handles MUI
   - Components work automatically
   - Override only when needed

---

This architecture ensures consistency, maintainability, and ease of use for all team members.
