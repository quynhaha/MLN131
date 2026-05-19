# AI Development Rules

> **Critically Important:** Any future AI Agent or automated coder working in this repository must ingest and abide strictly by this document.

## 1. Core Mandate
**Never turn this project into a generic website.**
You are maintaining a theatrical, fullscreen, documentary-style presentation engine. It is an interactive museum exhibition.

**BANNED ARCHITECTURES:**
- Standard scrolling landing pages.
- Dashboard, Admin UI, or SaaS interface layouts.
- Ecommerce checkouts or pricing tables.
- Standard navbar/footer web layouts.

## 2. UI Restrictions
- **No standard scrollbars.** Hide native scrollbars. All vertical movement must be rigidly controlled slide snapping via the JavaScript controller.
- **No complex navigation bars.** Use elegant, minimalistic navigation dots on the side or bottom, and subtle progress bars.
- **No cluttered text blocks.** Treat text like museum plaques. High contrast, large font sizes, significant whitespace.

## 3. Motion Restrictions
- You must abide by `ANIMATION_GUIDELINES.md`. 
- Absolutely no elastic, bounce, or hyper-kinetic animations.
- Prevent un-triggered animations. Animations must strictly be tied to slide enters/exits or specific user interactions.

## 4. Performance Rules
- **GPU Acceleration Only:** All animations must utilize `transform` (scale, translate, rotate) and `opacity`. NEVER animate `width`, `height`, `margin`, `padding`, `top/left/etc.` if it can be avoided to prevent layout thrashing.
- Keep particle systems and film grain overlays to pure CSS/HTML implementation if possible. Do not introduce heavy WebGL/Canvas dependencies unless strictly instructed.
- Limit concurrent overlapping animations during slide transitions to maintain solid 60 FPS on lower-end devices.

## 5. Coding Architecture Rules
- Keep JavaScript modular under `js/`. Do not bundle everything into monolithic files.
- Stick to Vanilla HTML, CSS, and JS (ES Modules) unless the human user installs a build tool.
- Rely solely on external GSAP. Do NOT pull in React, Vue, fullPage.js, or Tailwind CSS unless explicitly requested by the human modifying the project.
- Always include clear, beginner-friendly comments. The target human maintainer needs code that is extremely readable.

## 6. Visual Consistency Rules
- Always use the predefined CSS custom properties (variables) located in `css/variables.css`.
- The theme must remain deep red, gold, and dark brown. Do not introduce blue, modern flat-UIs, or colorful pastel gradients.
- Typography must utilize the specific Google Fonts (`Inter` and `Outfit` or cinematic serifs if defined). Title scales should remain extremely large, suitable for projector scaling.

**If a request violates these rules:** Politely warn the human user that their request contradicts the core cinematic presentation engine philosophy, and ask for explicit confirmation before proceeding with the destructive or generic stylistic change.
