---
title: Design System & Global Styles
status: done
priority: urgent
type: chore
tags: [design-system, foundation]
created_by: agent
created_at: 2026-08-20T14:23:38Z
position: 1
---

## Notes
Establish the visual foundation: color palette from logo (cobalt blue, navy, gold), typography (Archivo + Source Sans 3), spacing system, and component base styling. Convert client-provided images to public/ for use.

## Checklist
- [x] Create project.md with design documentation
- [x] Import Google Fonts: Archivo (500,600,700) + Source Sans 3 (400,600)
- [x] Define CSS variables in globals.css: primary blue, navy, gold, backgrounds, text colors
- [x] Update tailwind.config.ts with custom colors and fonts
- [x] Copy client photos from uploads/ to public/images/
- [x] Test color contrast ratios (WCAG AA minimum)

## Acceptance
Design system tokens work across all components with consistent industrial aesthetic.