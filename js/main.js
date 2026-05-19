/**
 * Main Application Entrypoint
 * Bootstraps the presentation, initializes controllers and GSAP plugins.
 */

import { initNavigation } from './navigation.js';
import { initSlideController } from './slide-controller.js';
import { playIntroSequence } from './animation-controller.js';

document.addEventListener("DOMContentLoaded", () => {
    // Register GSAP plugins if needed
    if (typeof gsap !== 'undefined') {
        // Normally ScrollTrigger would be used here if we were doing a scroll-based timeline,
        // but since we are doing fullscreen slide snapping, we will manage state in JS.
        // ScrollTrigger is preloaded in index.html for future scroll-triggered internal slide animations if needed.
        gsap.config({ nullTargetWarn: false });
    } else {
        console.error("GSAP is not loaded.");
        return;
    }

    // Initialize systems
    const slideController = initSlideController();
    initNavigation(slideController);

    // Start cinematic intro
    playIntroSequence(() => {
        // Callback after intro finishes
        slideController.showInitialSlide();
    });
});
