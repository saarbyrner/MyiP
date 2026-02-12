# 📚 Documentation Index

Quick reference to all documentation in this template.

---

## 🚀 Getting Started (Read in This Order)

### 1. **START_HERE.md** ⭐
**Purpose:** Main entry point - tells you where to go  
**Read this if:** You're using this template for the first time  
**Time:** 2 minutes  
[→ Open START_HERE.md](/START_HERE.md)

### 2. **TEMPLATE_USAGE.md** ⭐
**Purpose:** Step-by-step guide to using the template  
**Read this if:** You want to know how to get started in 5 minutes  
**Time:** 5 minutes  
[→ Open TEMPLATE_USAGE.md](/TEMPLATE_USAGE.md)

### 3. **Start Building!**
Once you've read the above, edit `/src/app/App.tsx` and start building!

---

## 📖 Reference Documentation

### **README.md**
**Purpose:** Complete template documentation  
**Read this if:** You want the full overview of the template  
**Contains:**
- Project structure
- How the design system works
- All available components
- Customization guide
- Best practices
- Development workflow

[→ Open README.md](/README.md)

### **DESIGN_SYSTEM.md** ⭐
**Purpose:** Complete CSS variables reference  
**Read this if:** You need to look up variable names  
**Contains:**
- All colors with hex values
- Spacing scale
- Typography variables
- Border & radius options
- Shadows
- Semantic color mappings
- How to customize

[→ Open DESIGN_SYSTEM.md](/DESIGN_SYSTEM.md)

### **guidelines/Guidelines.md** ⭐
**Purpose:** MUI component usage guidelines  
**Read this if:** You're wondering which component to use  
**Contains:**
- When to use each component
- Component default props
- Examples for every component
- Input, display, feedback, navigation, layout components
- Best practices

[→ Open Guidelines.md](/guidelines/Guidelines.md)

---

## 🔍 Template Information

### **PROJECT_STATUS.md**
**Purpose:** What's included in the template  
**Read this if:** You want to understand what files are essential  
**Contains:**
- Complete file checklist
- What was removed/kept
- Design philosophy
- Package versions
- Template features

[→ Open PROJECT_STATUS.md](/PROJECT_STATUS.md)

### **FILE_STRUCTURE.md**
**Purpose:** Visual project structure  
**Read this if:** You want to see the file tree  
**Contains:**
- Visual file tree
- File categories
- What to edit/ignore
- Quick reference

[→ Open FILE_STRUCTURE.md](/FILE_STRUCTURE.md)

### **CLEANUP_SUMMARY.md**
**Purpose:** What was done to create this template  
**Read this if:** You want to know what changed  
**Contains:**
- Summary of changes
- What was removed
- What was created
- Template quality checklist

[→ Open CLEANUP_SUMMARY.md](/CLEANUP_SUMMARY.md)

---

## 📂 Code Documentation

### **src/app/theme/README.md**
**Purpose:** How the theme provider works  
**Read this if:** You want to understand the MUI theme integration  
**Contains:**
- Theme provider overview
- How it integrates with playbook
- When to modify (rarely!)

[→ Open theme/README.md](/src/app/theme/README.md)

---

## 🎯 Quick Reference by Task

### "I'm new, where do I start?"
1. [START_HERE.md](/START_HERE.md)
2. [TEMPLATE_USAGE.md](/TEMPLATE_USAGE.md)

### "How do I use a component?"
1. [guidelines/Guidelines.md](/guidelines/Guidelines.md)
2. Check `/src/app/components/playbook.ts` for available components

### "What CSS variables are available?"
1. [DESIGN_SYSTEM.md](/DESIGN_SYSTEM.md)
2. Or open `/src/styles/global.css` directly

### "How do I customize colors?"
1. [DESIGN_SYSTEM.md - How to Customize section](/DESIGN_SYSTEM.md#how-to-customize)
2. Edit `/src/styles/global.css`

### "What files should I edit?"
1. [FILE_STRUCTURE.md](/FILE_STRUCTURE.md)
2. [PROJECT_STATUS.md](/PROJECT_STATUS.md)

### "I'm stuck, where's the full docs?"
1. [README.md](/README.md)

---

## 📊 Documentation Statistics

- **Total Documentation Files:** 8
- **Getting Started Guides:** 2
- **Reference Docs:** 3
- **Template Info:** 3
- **Code Docs:** 1 (theme)

---

## 📝 Documentation Maintenance

When updating this template, remember to update:
- [ ] Version numbers in README.md, PROJECT_STATUS.md, CLEANUP_SUMMARY.md
- [ ] Package versions in DESIGN_SYSTEM.md and PROJECT_STATUS.md
- [ ] CSS variables in DESIGN_SYSTEM.md if global.css changes
- [ ] Component lists if playbook.ts changes
- [ ] This index if new docs are added

---

## 🎨 Design System Files Reference

### Edit These to Customize
- `/src/styles/global.css` - Colors, spacing, typography
- `/src/styles/fonts.css` - Font imports

### Don't Edit (Auto-Generated/Protected)
- `/src/styles/theme.css` - Tailwind mappings
- `/src/app/theme/PlaybookThemeProvider.tsx` - Theme provider

### Import Components From
- `/src/app/components/playbook.ts`

---

## ✅ First-Time User Checklist

Before building, make sure you've:
- [ ] Read [START_HERE.md](/START_HERE.md)
- [ ] Read [TEMPLATE_USAGE.md](/TEMPLATE_USAGE.md)
- [ ] Skimmed [DESIGN_SYSTEM.md](/DESIGN_SYSTEM.md)
- [ ] Looked at `/src/styles/global.css`
- [ ] Checked [guidelines/Guidelines.md](/guidelines/Guidelines.md)
- [ ] Understood which files to edit ([FILE_STRUCTURE.md](/FILE_STRUCTURE.md))

---

## 🔗 External Resources

- [MUI Documentation](https://mui.com/) - Official MUI docs
- [MUI Components](https://mui.com/material-ui/all-components/) - All components
- [@saarbyrne/playbook](https://www.npmjs.com/package/@saarbyrne/playbook) - Your design system package

---

## 💡 Pro Tip

**Keep these tabs open while coding:**
1. [DESIGN_SYSTEM.md](/DESIGN_SYSTEM.md) - For variable names
2. [guidelines/Guidelines.md](/guidelines/Guidelines.md) - For component choices
3. [MUI Docs](https://mui.com/) - For component props

---

**Last Updated:** January 8, 2026  
**Template Version:** 1.0  
**Design System:** @saarbyrne/playbook v1.2380.0
