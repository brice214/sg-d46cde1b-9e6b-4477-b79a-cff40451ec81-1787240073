---
title: Design System & Global Styles
status: in_progress
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
- [ ] Import Google Fonts: Archivo (500,600,700) + Source Sans 3 (400,600)
- [ ] Define CSS variables in globals.css: primary blue, navy, gold, backgrounds, text colors
- [ ] Update tailwind.config.ts with custom colors and fonts
- [ ] Copy client photos from uploads/ to public/images/
- [ ] Test color contrast ratios (WCAG AA minimum)

## Acceptance
Design system tokens work across all components with consistent industrial aesthetic.