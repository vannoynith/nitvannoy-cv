// script.js
// Enhanced for better performance and modern features

AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
});

// Contact form submission (demo)
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message sent successfully! (This is a demo; integrate with EmailJS or similar for real functionality.)');
        form.reset();
    });
}

// Animate skill bars
document.addEventListener('DOMContentLoaded', () => {
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Skills section intersected');
                document.querySelectorAll('.skill-progress').forEach(bar => {
                    bar.style.width = bar.getAttribute('data-width');
                });
                progressObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const skillsSection = document.querySelector('.skills');
    if (skillsSection) {
        progressObserver.observe(skillsSection);
        document.querySelectorAll('.skill-progress').forEach(bar => {
            bar.setAttribute('data-width', bar.getAttribute('data-width') || '0%');
            bar.style.width = '0%';
        });
    }
});