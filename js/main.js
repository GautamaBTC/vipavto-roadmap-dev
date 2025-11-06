document.addEventListener('DOMContentLoaded', () => {
    // --- Theme Switcher ---
    const themeSwitcher = document.getElementById('theme-switcher');
    const body = document.body;
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.toggle('dark-theme', savedTheme === 'dark');
    }
    themeSwitcher.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark' : 'light');
    });

    // --- Burger Menu ---
    const burger = document.getElementById('burger-menu');
    const nav = document.querySelector('.nav');
    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
        burger.classList.toggle('active');
    });

    // --- Modal Window ---
    const openModalBtn = document.getElementById('open-modal-btn');
    const modalOverlay = document.getElementById('modal-overlay');
    const closeModalBtn = document.getElementById('modal-close-btn');
    openModalBtn.addEventListener('click', () => {
        modalOverlay.classList.add('visible');
    });
    closeModalBtn.addEventListener('click', () => {
        modalOverlay.classList.remove('visible');
    });
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('visible');
        }
    });

    // --- Scroll Animations ---
    const animatedElements = document.querySelectorAll('.service-card, .advantage-card, .testimonial-card, .contact-details, .map-container');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    animatedElements.forEach(el => observer.observe(el));

    // --- Counter Animation ---
    function animateCounter(element, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            element.textContent = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                element.textContent = end + '+'; // Добавляем "+" в конце
            }
        };
        window.requestAnimationFrame(step);
    }

    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.advantage-card h3');
                counters.forEach(counter => {
                    const target = parseInt(counter.innerText.replace('+', ''), 10);
                    if (!isNaN(target)) {
                        animateCounter(counter, 0, target, 1500);
                    }
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const advantagesSection = document.getElementById('advantages');
    if(advantagesSection) {
        counterObserver.observe(advantagesSection);
    }
});
