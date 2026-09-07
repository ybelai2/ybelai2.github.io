document.addEventListener("DOMContentLoaded", () => {
    // 1. Set current year in footer
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // 2. Subtle scroll reveal animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once revealed
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // 3. Update local time for Maryland (EST/EDT) in the footer
    const timeDisplay = document.getElementById('time-display');
    
    function updateTime() {
        if (!timeDisplay) return;
        
        const now = new Date();
        const options = { 
            timeZone: 'America/New_York', 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: true
        };
        
        const timeString = now.toLocaleTimeString('en-US', options);
        timeDisplay.textContent = `MD, USA — ${timeString}`;
    }

    // Update time immediately, then every minute
    updateTime();
    setInterval(updateTime, 60000);
});
