# 🚀 START HERE

## Welcome to the Playbook Design System Template!

This is a **clean, production-ready template** for building React applications with the @saarbyrne/playbook design system.

---

## 📖 Quick Navigation

### 🆕 First Time Using This Template?
**👉 Read this first:** [`TEMPLATE_USAGE.md`](/TEMPLATE_USAGE.md)  
_Step-by-step guide to get started in 5 minutes_

### 📚 Complete Documentation
**👉 Full documentation:** [`README.md`](/README.md)  
_Complete template overview, project structure, and best practices_

### 🎨 Design System Reference
**👉 Design tokens:** [`DESIGN_SYSTEM.md`](/DESIGN_SYSTEM.md)  
_All CSS variables (colors, spacing, typography, etc.)_

### 🧩 Component Guidelines
**👉 When to use each component:** [`guidelines/Guidelines.md`](/guidelines/Guidelines.md)  
_MUI component usage guidelines_

### ✅ Template Status
**👉 What's included:** [`PROJECT_STATUS.md`](/PROJECT_STATUS.md)  
_Complete list of files, what was removed, and template features_

---

## ⚡ Quick Start (60 seconds)

### 1. Understand the Core Concept

**Import components from playbook:**
```tsx
import { Button, Typography, TextField } from './components/playbook';
```

**Use CSS variables for styling:**
```tsx
<Box sx={{
  color: 'var(--text-primary)',
  padding: 'var(--spacing-4)',
  fontFamily: 'var(--font-family-base)'
}}>
  Content
</Box>
```

**Customize by editing CSS:**
```css
/* /src/styles/global.css */
--grey-200: #YOUR_COLOR;  /* Changes primary color everywhere */
```

### 2. Essential Files

| File | Purpose |
|------|---------|
| `/src/styles/global.css` | **Edit colors, spacing, typography here** |
| `/src/app/components/playbook.ts` | **Import all components from here** |
| `/src/app/App.tsx` | **Build your app here** |

### 3. Available Components

Import any of these from `./components/playbook`:

**Most Common:**
- `Button`, `TextField`, `Typography`
- `Box`, `Container`, `Stack`, `Grid`
- `Card`, `Paper`, `AppBar`
- `Alert`, `Dialog`, `Snackbar`
- `DataGrid`, `Table`, `Tabs`

**See full list:** [`/src/app/components/playbook.ts`](/src/app/components/playbook.ts)

---

## 🎯 Your First 5 Minutes

1. ✅ **Read** [`TEMPLATE_USAGE.md`](/TEMPLATE_USAGE.md) (3 minutes)
2. ✅ **Open** `/src/styles/global.css` and look at the variables (1 minute)
3. ✅ **Open** `/src/app/App.tsx` and see the template code (1 minute)

## 📋 Your First Hour

1. ✅ Skim [`DESIGN_SYSTEM.md`](/DESIGN_SYSTEM.md) to see available variables
2. ✅ Read [`guidelines/Guidelines.md`](/guidelines/Guidelines.md) to understand components
3. ✅ Customize colors in `/src/styles/global.css`
4. ✅ Delete template code in `/src/app/App.tsx`
5. ✅ Build a simple component using playbook

---

## 🚫 Common Mistakes (Avoid These!)

### ❌ DON'T import directly from @mui
```tsx
import Button from '@mui/material/Button';  // ❌ WRONG
```

### ✅ DO import from playbook
```tsx
import { Button } from './components/playbook';  // ✅ CORRECT
```

---

### ❌ DON'T hardcode values
```tsx
<Box sx={{ color: '#3b4960', padding: '16px' }}>  // ❌ WRONG
```

### ✅ DO use CSS variables
```tsx
<Box sx={{ color: 'var(--text-primary)', padding: 'var(--spacing-4)' }}>  // ✅ CORRECT
```

---

### ❌ DON'T delete essential files
- `/src/styles/global.css`
- `/src/app/theme/PlaybookThemeProvider.tsx`
- `/src/app/components/playbook.ts`

---

## 💡 Pro Tips

✨ **Keep these files open while coding:**
- `/DESIGN_SYSTEM.md` - Reference CSS variables
- `/guidelines/Guidelines.md` - Choose the right component

✨ **Before using a component:**
1. Check if it's exported in `/src/app/components/playbook.ts`
2. Read usage guidelines in `/guidelines/Guidelines.md`
3. Import from `./components/playbook`

✨ **When styling:**
- Always use `fontFamily: 'var(--font-family-base)'`
- Use spacing variables: `var(--spacing-4)` not `16px`
- Use color variables: `var(--text-primary)` not `#3b4960`

---

## 🆘 Need Help?

| Issue | Solution |
|-------|----------|
| "How do I...?" | Check [`TEMPLATE_USAGE.md`](/TEMPLATE_USAGE.md) |
| "What variables exist?" | See [`DESIGN_SYSTEM.md`](/DESIGN_SYSTEM.md) |
| "Which component should I use?" | Read [`guidelines/Guidelines.md`](/guidelines/Guidelines.md) |
| "What's in this template?" | View [`PROJECT_STATUS.md`](/PROJECT_STATUS.md) |

---

## 📦 What's Included

✅ @saarbyrne/playbook v1.2380.0 fully integrated  
✅ All MUI components available  
✅ CSS variables for easy customization  
✅ Clean starting point (no demo code)  
✅ Comprehensive documentation  
✅ Production-ready setup  

---

## 🎓 Learning Path

### Day 1: Understanding
- Read [`TEMPLATE_USAGE.md`](/TEMPLATE_USAGE.md)
- Skim [`DESIGN_SYSTEM.md`](/DESIGN_SYSTEM.md)

### Day 2: Exploring
- Look at `/src/styles/global.css` variables
- Read [`guidelines/Guidelines.md`](/guidelines/Guidelines.md)
- Try changing colors in `global.css`

### Day 3: Building
- Delete template code in `/src/app/App.tsx`
- Import components from `./components/playbook`
- Build a simple component

### Day 4-5: Creating
- Build your actual application
- Reference docs as needed
- Use CSS variables for all styling

---

## ✨ You're Ready!

This template is **production-ready** and includes everything you need. 

**Next step:** Read [`TEMPLATE_USAGE.md`](/TEMPLATE_USAGE.md) to get started!

---

**Template Version:** 1.0  
**Design System:** @saarbyrne/playbook v1.2380.0  
**Last Updated:** January 8, 2026
