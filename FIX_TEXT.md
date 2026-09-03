# Fix: Make all text visible on dark neon backgrounds

## Problem
The site now uses dark backgrounds everywhere (bg-zinc-900, bg-zinc-800/50), but many components still have `text-gray-900 dark:text-white` patterns. The `text-gray-900` (almost black) is invisible on zinc backgrounds.

## Fix strategy
Since all backgrounds are dark (no light mode bg anywhere), just use single light text classes:
- `text-gray-900` → `text-white` (headings)
- `text-gray-800` → `text-white` 
- `text-gray-700` → `text-gray-200`
- `text-gray-600` → `text-gray-300` (body)
- `text-gray-500` → `text-gray-400` (muted)
- Remove `dark:` text prefixes everywhere

Files to fix:
- [x] Hero.jsx
- [x] About.jsx  
- [x] index.css (removed bad global overrides)
- [ ] Skills.jsx
- [ ] Education.jsx
- [ ] Projects.jsx
- [ ] Internship.jsx
- [ ] Certifications.jsx
- [ ] Achievements.jsx
- [ ] Resume.jsx
- [ ] Contact.jsx
- [ ] Navbar.jsx (nav link colors)
- [ ] Footer.jsx

