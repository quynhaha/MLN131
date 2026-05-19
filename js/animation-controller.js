/**
 * Animation Controller
 * Contains standalone cinematic sequences (like intro).
 */

export function playIntroSequence(onComplete) {
    const tl = gsap.timeline({
        onComplete: onComplete
    });

    const leftCurtain = document.getElementById('curtain-left');
    const rightCurtain = document.getElementById('curtain-right');

    // Add slight delay for dramatic effect
    tl.to({}, { duration: 0.5 })
      .to(leftCurtain, {
          xPercent: -100,
          duration: 2.5,
          ease: "power4.inOut"
      }, "open")
      .to(rightCurtain, {
          xPercent: 100,
          duration: 2.5,
          ease: "power4.inOut"
      }, "open")
      .set('.curtain-container', { display: 'none' }); // Remove from DOM flow when done
}
