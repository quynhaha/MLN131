/**
 * Slide Controller
 * Manages the state of the active slide.
 */

import { transitionSlides, animateSlideContentIn, resetSlideContent } from './transitions.js';
import { updateNavigationStatus } from './navigation.js';

export function initSlideController() {
    const slides = Array.from(document.querySelectorAll('.slide'));
    console.log('DEBUG: Slides detected:', slides.length);
    console.log('DEBUG: Slide details:', slides.map((s, i) => ({
        index: i,
        classes: s.className,
        dataIndex: s.dataset.index
    })));
    let currentIndex = 0;
    let isAnimating = true; // Lock immediately until intro finishes

    const getTotalSlides = () => slides.length;

    const showInitialSlide = () => {
        // Slide 0 is conceptually active, run its content animation
        isAnimating = false;
        animateSlideContentIn(slides[0]);
        updateNavigationStatus(0, getTotalSlides());
    };

    const goToSlide = (nextIndex) => {
        if (isAnimating) return;
        if (nextIndex === currentIndex) return;
        if (nextIndex < 0 || nextIndex >= slides.length) return;

        isAnimating = true;
        const currentSlide = slides[currentIndex];
        const nextSlide = slides[nextIndex];
        const direction = nextIndex > currentIndex ? 1 : -1;

        // Reset the content state of next slide before transitioning
        resetSlideContent(nextSlide);

        // Transition between the two sections
        transitionSlides(currentSlide, nextSlide, direction, () => {
            currentSlide.classList.remove('active');
            nextSlide.classList.add('active');
            
            // Animate content of new slide
            animateSlideContentIn(nextSlide, () => {
                isAnimating = false;
            });
        });

        currentIndex = nextIndex;
        updateNavigationStatus(currentIndex, getTotalSlides());
    };

    return {
        next: () => goToSlide(currentIndex + 1),
        prev: () => goToSlide(currentIndex - 1),
        goTo: (idx) => goToSlide(idx),
        getCurrentIndex: () => currentIndex,
        getTotal: getTotalSlides,
        showInitialSlide
        // isAnimating state could be exposed if needed
    };
}
