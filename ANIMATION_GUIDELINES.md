# Animation Guidelines

## 1. Animation Philosophy
Motion in this project must be elegant, cinematic, immersive, and restrained. We are emulating documentary film pacing and heavy stage curtains, not hyperactive video games or bubbly modern tech startups. Animations should carry physical weight and dramatic intent.

## 2. Cinematic Pacing Rules
- **Slow is Smooth:** Transitions should feel deliberate. Avoid snap-cuts or hyper-fast easing. Transition durations should average between 0.8s and 1.5s.
- **Eased to Perfection:** Utilize deep cubic-bezier curves (e.g., `power3.inOut` or `power4.inOut` in GSAP). Elements should start slow, glide, and ease gracefully into their final positions.
- **Weighted Reveals:** Elements should not pop into existence; they should fade softly, as if a spotlight is turning on.

## 3. Transition Styles
Slide transitions must simulate cinematic depth.
- **Camera Depth Illusion:** When transitioning forward, push the old slide backward in Z-space (scale down slightly) and pull the new slide into view with parallax offsets.
- **No Simple Scraping:** Avoid generic CSS-only scrolling. Cross-fading layered with Y-axis parallax pushes creates a documentary camera pan feel.

## 4. Intro Curtain Behavior
The initial load sets the tone for the entire experience.
- The red theatre curtains must move realistically. They should accelerate heavily before easing out entirely at the edges.
- Utilize a soft stage spotlight effect that fades in before the curtains open.
- Introduce atmospheric dust particles drifting in the light before revealing the first slide.

## 5. Reusable Animation Preset Philosophy
Do not hard-code arbitrary animations directly onto individual HTML elements via JavaScript targeting.
Instead, use a declarative HTML approach with presets mapping to robust GSAP timelines:
- `data-preset="titleReveal"`: Slow, masked upward wipe.
- `data-preset="subtitleFade"`: Cinematic blur-to-focus fade.
- `data-preset="imageParallax"`: Content scaling up inside an overflowing hidden mask.
- `data-preset="dramaticZoom"`: Extremely slow continuous zoom during slide lifecycle.
- `data-preset="timelineReveal"`: Phased stagger reveals for historical dates.

## 6. Atmosphere Effects Guidelines
Atmospheric layers (grain, vignette, particles) must enhance, not distract.
- **Film Grain & Vignette:** Keep opacity extremely low (~5-8%). They should be felt, not actively seen.
- **Particles:** Dust motes should drift slowly upward diagonally. They should be soft, blurred, and never move fast enough to draw the eye away from the content. Use CSS `translate3d` loops.

## 7. What to Avoid
- **DO NOT** use elastic or "bouncy" easing curves.
- **DO NOT** use glitch effects, neon cyberpunk lighting, or flashy motion graphics.
- **DO NOT** use confetti, spin animations, or hyperactive parallax triggers based on minor mouse movements.
- **DO NOT** animate elements constantly without purpose. Once the slide is revealed, the layout should rest.
