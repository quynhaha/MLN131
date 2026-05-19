# Project Vision

## 1. Project Identity
This repository is an **Interactive Storytelling Presentation Website**. It functions as a fullscreen cinematic slide presentation and documentary-style storytelling engine. The core identity is inspired by interactive museum exhibitions and professional keynote presentations. 

**This is NOT:**
- A startup landing page
- A SaaS website
- An ecommerce platform
- A dashboard UI
- A generic free-scrolling web page

It operates with the exact behavior of high-end, immersive digital presentations (akin to Canva or Keynote), rebuilt for the open web.

## 2. Experience Goals
The primary goal is to guide the user through a structured narrative. The user is an audience member attending an exhibition or viewing a documentary. 
- **Focus over Freedom:** Content is framed carefully slide-by-slide. Unrestricted free-scrolling is disabled to ensure pacing and narrative weight.
- **Immersion:** The interface gracefully steps out of the way, allowing cinematic visuals and dramatic motion to tell the story.

## 3. Storytelling Philosophy
Information should not be dumped onto the screen. It should be revealed incrementally. Text acts similarly to museum exhibition placards, summarizing history with powerful, emotional brevity. Dramatic reveals, paced pacing, and heavy emphasis on historical gravitas are key.

## 4. Presentation Behavior
The framework relies on a rigid slide-and-snap architecture.
- **Scroll Snapping:** The mouse wheel acts as a trigger to change slides sequentially, not to scroll down a continuous page. One wheel tick = one slide transition.
- **Keyboard Navigation:** Arrow keys and Page Up/Down keys drive the presentation forward and backward.
- **Full Viewport Reliance:** Every section requires a minimum height of `100vh` and cannot exceed it. Content must be scaled appropriately to fit within screen bounds.

## 5. Visual Direction
**Theme:** Vietnamese Revolutionary Aesthetic. 
- **Color Palette:** Deep theatre curtain reds (`#8B0000`), metallic golds (`#d4af37`), warm dark browns, and muted historical off-whites for typography.
- **Atmosphere:** Historic, intense, dramatic, and respectful. Use vignette fading, subtle film grain, and high-contrast dramatic lighting to emphasize historical weight.
- **Typography:** Titles are monolithic and monumental; subtitles and body text are clean, highly legible, but styled like printed archival documents.

## 6. Technical Philosophy
Our codebase must remain:
- **Modular:** Features are split logically (e.g., transitions, main logic, styles).
- **Lightweight & Scalable:** Avoid unnecessary npm dependencies (like heavy UI frameworks). Rely on Vanilla JS, HTML, CSS, and GSAP. 
- **GPU-friendly:** Ensure animations utilize `transform` and `opacity` to avoid reflowing layout. Keep atmospheric effects (particles, grain) strictly optimized to prevent browser lag.
- **Maintainable:** The structure must remain beginner-friendly. Over-engineered abstractions are prohibited.
