# Development Rules and Guidelines

This document outlines development rules and best practices to prevent common deployment issues and maintain code quality for the Livcap homepage project.

## 🚨 Critical Rules (Will Break Deployment)

### 1. ESLint Rules Compliance

#### **No Unused Variables**
- ❌ **Never** import or declare variables that aren't used
- ❌ **Never** leave unused function parameters
- ✅ **Always** remove unused imports before committing

```typescript
// ❌ BAD
import { Mic, Heart, Globe } from 'lucide-react'; // Only using Mic
const [unused, setUnused] = useState(false); // Never used

// ✅ GOOD  
import { Mic } from 'lucide-react'; // Only import what you need
// Remove unused variables entirely
```

#### **No Unescaped Entities in JSX**
- ❌ **Never** use raw quotes or apostrophes in JSX text
- ✅ **Always** escape special characters properly

```tsx
// ❌ BAD
<p>Livcap uses Apple's built-in frameworks</p>
<p>He said "Hello world"</p>

// ✅ GOOD
<p>Livcap uses Apple&apos;s built-in frameworks</p>
<p>He said &quot;Hello world&quot;</p>
```

**Common Escape Sequences:**
- `'` → `&apos;`
- `"` → `&quot;`
- `&` → `&amp;`
- `<` → `&lt;`
- `>` → `&gt;`

### 2. TypeScript Strict Mode
- ✅ **Always** define proper types for props and state
- ✅ **Always** handle potential undefined/null values
- ❌ **Never** use `any` type (use `unknown` if needed)

## 🧹 Pre-Commit Checklist

Before pushing any code, **ALWAYS** run:

```bash
# 1. Build check (catches most issues)
npm run build

# 2. Lint check  
npm run lint

# 3. Type check
npm run type-check

# 4. Fix auto-fixable issues
npm run lint --fix
```

## 📝 Code Quality Rules

### Component Structure
```tsx
// ✅ GOOD Component Structure
'use client';

import React, { useState, useEffect } from 'react';
import { Icon } from 'lucide-react';
import { SomeComponent } from '@/components/some-component';

interface ComponentProps {
  title: string;
  isVisible?: boolean;
}

export function MyComponent({ title, isVisible = false }: ComponentProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{title}</h1>
      {isVisible && <p>Content here</p>}
    </div>
  );
}
```

### File Naming Conventions
- **Components**: `kebab-case.tsx` (e.g., `theme-switcher.tsx`)
- **Pages**: `page.tsx` in appropriate directory
- **Hooks**: `use-hook-name.ts` (e.g., `use-page-animation.ts`)
- **Types**: `types.ts` or inline interfaces

### Import Organization
```typescript
// ✅ GOOD Import Order
'use client'; // Next.js directive first

// 1. React imports
import React, { useState, useEffect } from 'react';

// 2. Third-party libraries
import { useTheme } from 'next-themes';
import { Icon } from 'lucide-react';

// 3. Internal components (absolute paths)
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

// 4. Relative imports
import { helper } from './utils';
```

## 🔧 Responsive Design Rules

### Breakpoint Standards
```typescript
// ✅ Use consistent breakpoints
const sizes = {
  mobile: 'w-48 h-48',      // < 640px
  tablet: 'sm:w-56 sm:h-56', // 640px - 768px  
  desktop: 'lg:w-64 lg:h-64', // > 1024px
};
```

### Animation Responsiveness
- ✅ **Always** scale animations for mobile devices
- ✅ **Always** test animations on different screen sizes
- ✅ **Always** provide fallbacks for reduced motion

## 🎨 Styling Guidelines

### Tailwind CSS Best Practices
```tsx
// ✅ GOOD - Organized classes
<div className="
  w-full max-w-4xl mx-auto 
  p-6 sm:p-8 lg:p-12 
  bg-background/20 backdrop-blur-sm 
  rounded-3xl border border-border/20 
  shadow-lg
">

// ❌ BAD - Unorganized classes
<div className="w-full bg-background/20 p-6 max-w-4xl rounded-3xl mx-auto sm:p-8 backdrop-blur-sm lg:p-12 border shadow-lg border-border/20">
```

### Class Organization Order
1. Layout (width, height, position)
2. Spacing (margin, padding)
3. Typography (font, text)
4. Colors (background, text, border)
5. Effects (shadow, blur, transforms)
6. Responsive modifiers

## 🚀 Performance Rules

### Image Optimization
```tsx
// ✅ GOOD
<Image
  src="/icon.png"
  alt="Descriptive alt text"
  width={120}
  height={120}
  className="rounded-3xl"
/>

// ❌ BAD
<img src="/icon.png" /> // No optimization, no alt text
```

### State Management
- ✅ **Always** use `useState` for component state
- ✅ **Always** use `useEffect` cleanup functions
- ❌ **Never** create unnecessary re-renders

## 🧪 Testing Considerations

### Manual Testing Checklist
- [ ] Test on mobile (responsive design)
- [ ] Test dark/light theme switching
- [ ] Test navigation between pages
- [ ] Test with disabled JavaScript
- [ ] Test loading states

### Browser Compatibility
- ✅ Test in Safari (primary macOS browser)
- ✅ Test in Chrome
- ✅ Test in Firefox
- ✅ Ensure Next.js features work correctly

## 📚 Documentation Requirements

### Component Documentation
```tsx
/**
 * Navigation component with theme switcher and responsive menu
 * 
 * @param className - Optional additional CSS classes
 * @example
 * <Navigation className="custom-nav" />
 */
export function Navigation({ className = "" }: NavigationProps) {
```

### README Updates
- ✅ Update README when adding new features
- ✅ Document new dependencies
- ✅ Update setup instructions if needed

## 🔄 Git Workflow

### Commit Message Format
```
type(scope): description

feat(navigation): add responsive mobile menu
fix(animation): resolve theme switching icon issue  
docs(readme): update installation instructions
style(footer): improve responsive layout
refactor(components): extract reusable button component
```

### Branch Naming
- `feature/feature-name`
- `fix/bug-description`
- `docs/documentation-update`
- `style/styling-improvements`

## ⚡ Quick Reference Commands

```bash
# Fix common issues automatically
npm run lint --fix

# Check for unused dependencies
npx depcheck

# Build and test locally before push
npm run build && npm run start

# Check bundle size
npm run analyze

# Clean and reinstall dependencies (if issues)
rm -rf node_modules package-lock.json && npm install
```

## 🚨 Emergency Fixes

If deployment fails, check these in order:

1. **ESLint errors**: Run `npm run lint --fix`
2. **TypeScript errors**: Run `npm run type-check`
3. **Build errors**: Run `npm run build` locally
4. **Dependency issues**: Check `package-lock.json` conflicts
5. **Environment variables**: Verify all required env vars are set

---

## 📋 Deployment Issue Records

### Issue #1: Unused Import Causing Build Failure
**Date**: January 4, 2025  
**Error**: `@typescript-eslint/no-unused-vars` - 'Clock' is defined but never used  
**Location**: `src/app/page.tsx:3:43`  
**Cause**: Imported `Clock` from `lucide-react` but never used it in the component  
**Solution**: Remove unused import from the import statement  
**Prevention**: 
- Always run `npm run lint` before pushing
- Use ESLint auto-fix: `npm run lint --fix`  
- Remove unused imports immediately when refactoring code

```typescript
// ❌ CAUSED BUILD FAILURE
import { Shield, Zap, ArrowRight, Github, Clock, Rocket } from 'lucide-react';

// ✅ FIXED - Removed unused Clock import
import { Shield, Zap, ArrowRight, Github, Rocket } from 'lucide-react';
```

**Build Error Details**:
```
Failed to compile.
./src/app/page.tsx
3:43  Error: 'Clock' is defined but never used.  @typescript-eslint/no-unused-vars
```

---

## 💡 Pro Tips

- **Use VSCode extensions**: ESLint, Prettier, Tailwind CSS IntelliSense
- **Enable auto-fix on save** in your editor
- **Run pre-commit hooks** to catch issues early
- **Test the build locally** before every push
- **Keep dependencies updated** regularly
- **Use TypeScript strict mode** for better error catching

---

*Remember: A failed deployment affects everyone. Taking 2 minutes to run checks saves hours of debugging!* 🎯