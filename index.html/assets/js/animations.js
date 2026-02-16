document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Slightly higher threshold for better visibility
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const delay = element.dataset.delay || 0;

                // Apply transition delay via inline style if specified
                if (delay > 0) {
                    element.style.transitionDelay = `${delay}ms`;
                }

                element.classList.add('visible');
                observer.unobserve(element);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    // Failsafe: Ensure elements are visible after 2 seconds even if observer fails
    setTimeout(() => {
        animatedElements.forEach(el => {
            if (getComputedStyle(el).opacity === '0') {
                el.classList.add('visible');
            }
        });
    }, 2000);
});
