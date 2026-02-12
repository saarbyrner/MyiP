# 📂 Template File Structure

## Visual Project Structure

```
playbook-design-system-template/
│
├── 📘 START_HERE.md ⭐              ← Read this first!
├── 📘 TEMPLATE_USAGE.md ⭐          ← Step-by-step guide
├── 📘 README.md                    ← Complete documentation
├── 📘 DESIGN_SYSTEM.md ⭐          ← CSS variables reference
├── 📘 PROJECT_STATUS.md            ← Template status
├── 📘 CLEANUP_SUMMARY.md           ← What was done
├── 📦 package.json                 ← Dependencies
│
├── guidelines/
│   └── 📘 Guidelines.md ⭐         ← Component usage guidelines
│
└── src/
    ├── app/
    │   ├── 📝 App.tsx ⭐           ← Your starting point (clean template)
    │   │
    │   ├── components/
    │   │   ├── 🎨 playbook.ts ⭐  ← Import all MUI components from here
    │   │   ├── figma/              (system-protected, ignore)
    │   │   └── ui/                 (shadcn components, ignore)
    │   │
    │   └── theme/
    │       ├── 🎨 PlaybookThemeProvider.tsx ⭐  ← MUI theme wrapper
    │       ├── 📘 README.md
    │       └── index.ts
    │
    └── styles/
        ├── 🎨 global.css ⭐        ← ALL design tokens (edit this!)
        ├── 🎨 theme.css ⭐         ← Tailwind mappings
        ├── tailwind.css
        ├── fonts.css               ← Font imports
        └── index.css

⭐ = Essential files you need to know about
🎨 = Design system files
📝 = Where you build your app
📘 = Documentation
```

## File Categories

### 🚀 Get Started (Read These First)
1. `START_HERE.md` - Main entry point
2. `TEMPLATE_USAGE.md` - Quick start guide
3. `DESIGN_SYSTEM.md` - CSS variables

### 🎨 Design System Core (Essential)
```
/src/styles/global.css              ← Edit colors, spacing, typography
/src/app/theme/PlaybookThemeProvider.tsx  ← MUI theme provider
/src/app/components/playbook.ts     ← Import components from here
/src/styles/theme.css               ← Tailwind mappings
```

### 📝 Build Your App Here
```
/src/app/App.tsx                    ← Main application entry
/src/app/components/                ← Your custom components go here
```

### 📚 Documentation (Reference)
```
/START_HERE.md                      ← Entry point
/TEMPLATE_USAGE.md                  ← How to use the template
/README.md                          ← Full documentation
/DESIGN_SYSTEM.md                   ← CSS variables
/PROJECT_STATUS.md                  ← What's included
/guidelines/Guidelines.md           ← Component guidelines
```

### 🗑️ Ignore These (Optional/Protected)
```
/src/app/components/ui/             ← shadcn (not used in this system)
/src/imports/                       ← Figma imports (may be empty)
/src/app/components/figma/          ← Protected Figma components
```

## Quick Reference

### To Import Components:
```tsx
import { Button, TextField, Typography } from './components/playbook';
```

### To Customize Design:
Edit `/src/styles/global.css`:
```css
--grey-200: #YOUR_COLOR;
--spacing-4: 20px;
--font-family-base: 'Your Font', sans-serif;
```

### To Build Your App:
Edit `/src/app/App.tsx`:
```tsx
import { PlaybookThemeProvider } from './theme/PlaybookThemeProvider';
import { Box, Container } from './components/playbook';

export default function App() {
  return (
    <PlaybookThemeProvider>
      {/* Your app here */}
    </PlaybookThemeProvider>
  );
}
```

## Documentation Flow

```
For first-time users:
START_HERE.md → TEMPLATE_USAGE.md → Start building

For reference:
├── DESIGN_SYSTEM.md (CSS variables)
├── guidelines/Guidelines.md (component usage)
└── README.md (complete docs)

For understanding:
└── PROJECT_STATUS.md (what's included)
```

## Essential Files Checklist

### ✅ Must Know About
- [ ] `/START_HERE.md`
- [ ] `/TEMPLATE_USAGE.md`
- [ ] `/src/styles/global.css`
- [ ] `/src/app/components/playbook.ts`
- [ ] `/src/app/App.tsx`

### ✅ Reference When Needed
- [ ] `/DESIGN_SYSTEM.md`
- [ ] `/guidelines/Guidelines.md`
- [ ] `/README.md`

### ❌ Don't Touch
- `/src/app/theme/PlaybookThemeProvider.tsx` (unless you know what you're doing)
- `/src/styles/theme.css` (auto-generated mappings)
- `/src/app/components/ui/*` (system-protected)

## File Purposes at a Glance

| File | What It Does | When You Need It |
|------|-------------|------------------|
| `START_HERE.md` | Points you to the right docs | First time using template |
| `TEMPLATE_USAGE.md` | Step-by-step guide | Getting started |
| `README.md` | Complete documentation | Need full reference |
| `DESIGN_SYSTEM.md` | All CSS variables | Looking up variable names |
| `guidelines/Guidelines.md` | Component usage | Choosing which component to use |
| `global.css` | Design tokens | Customizing colors/spacing |
| `playbook.ts` | Component exports | Importing components |
| `App.tsx` | Your app entry | Building your application |
| `PlaybookThemeProvider.tsx` | MUI theme | Already configured, don't touch |

## Color Code Legend

```
⭐ = Critical - you need to know this
🎨 = Design system file
📝 = Where you write code
📘 = Documentation to read
📦 = Configuration (don't modify)
🗑️ = Optional/can ignore
```

---

**This structure ensures:**
- ✅ Clear documentation hierarchy
- ✅ Easy to find what you need
- ✅ No confusion about what to use
- ✅ Clean separation of concerns
- ✅ Ready for team collaboration
