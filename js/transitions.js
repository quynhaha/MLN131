/**
 * Transition Controller
 * Defines how slides enter and leave the screen.
 */

export function transitionSlides(currentSlide, nextSlide, direction, onComplete) {
    // direction: 1 = forward (down), -1 = backward (up)
    const tl = gsap.timeline({ onComplete });
    
    // Ensure next slide is visible but offscreen
    gsap.set(nextSlide, { 
        visibility: 'visible',
        yPercent: direction * 100,
        zIndex: 5
    });
    
    gsap.set(currentSlide, {
        zIndex: 1
    });

    // Cinematic push transition
    tl.to(currentSlide, {
        yPercent: -direction * 20, // Parallax push effect
        opacity: 0,
        duration: 1.2,
        ease: "power3.inOut"
    }, 0)
    .to(nextSlide, {
        yPercent: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.inOut"
    }, 0);
}

// Reset internal elements of a slide to their pre-animated state
export function resetSlideContent(slide) {
    const animElements = slide.querySelectorAll('.slide-anim');
    gsap.set(animElements, { opacity: 0, clearProps: "transform" });
}

// Animate elements inside a slide based on data attributes
export function animateSlideContentIn(slide, onComplete) {
    const animElements = slide.querySelectorAll('.slide-anim');
    if (animElements.length === 0) {
        if (onComplete) onComplete();
        return;
    }

    const tl = gsap.timeline({ onComplete });

    animElements.forEach((el) => {
        const animType = el.getAttribute('data-anim') || 'fade-in';
        const delay = parseFloat(el.getAttribute('data-delay')) || 0;

        let fromVars = { opacity: 0 };
        const toVars = { opacity: 1, duration: 1, ease: "power2.out", delay };

        switch (animType) {
            case 'fade-up':
                fromVars.y = 50;
                toVars.y = 0;
                break;
            case 'slide-right':
                fromVars.x = -50;
                toVars.x = 0;
                break;
            case 'slide-left':
                fromVars.x = 50;
                toVars.x = 0;
                break;
            case 'scale-up':
                fromVars.scale = 0.8;
                toVars.scale = 1;
                break;
            // Add more presets here as needed
        }

        tl.fromTo(el, fromVars, toVars, 0); // Start all animations relative to timeline start (factoring their own delays)
    });
}
