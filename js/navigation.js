/**
 * Navigation System
 * Handles keyboard, scroll UI updates, and mousewheel events.
 */

import { debounce } from './utils.js';

let navDotsContainer;
let progressBar;
let _controller;

export function initNavigation(slideController) {
    _controller = slideController;
    navDotsContainer = document.getElementById('nav-dots');
    progressBar = document.getElementById('progress-bar');

    buildDots(_controller.getTotal());
    bindEvents();
}

function buildDots(total) {
    navDotsContainer.innerHTML = '';
    for (let i = 0; i < total; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        
        dot.addEventListener('click', () => {
            _controller.goTo(i);
        });
        
        navDotsContainer.appendChild(dot);
    }
}

export function updateNavigationStatus(currentIndex, total) {
    // Update Dots
    const dots = navDotsContainer.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });

    // Update Progress Bar
    const progressPerc = ((currentIndex + 1) / total) * 100;
    progressBar.style.width = `${progressPerc}%`;
}

function bindEvents() {
    // Keyboard arrows
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === 'ArrowRight') {
            _controller.next();
        } else if (e.key === 'ArrowUp' || e.key === 'PageUp' || e.key === 'ArrowLeft') {
            _controller.prev();
        }
    });

    // Mouse wheel (Debounced to prevent hyper-scrolling)
    const handleWheel = debounce((e) => {
        if (e.deltaY > 0) {
            _controller.next();
        } else if (e.deltaY < 0) {
            _controller.prev();
        }
    }, 100); // 100ms debounce ensures one slide at a time

    document.addEventListener('wheel', handleWheel, { passive: false });
}
