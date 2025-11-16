// Modern Portfolio JavaScript - Attractive & Interactive

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initScrollEffects();
    initSmoothScroll();
    initParallax();
});

// Navigation
function initNavigation() {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');
    const allNavLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });
    }

    // Close mobile menu when clicking on links
    allNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                mobileToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // Close mobile menu on window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            mobileToggle?.classList.remove('active');
            navLinks?.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Smooth Scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll Effects - Fade in animations
function initScrollEffects() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe cards and sections
    const animatedElements = document.querySelectorAll('.project-card, .publication-card, .timeline-item, .skill-category');

    animatedElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(element);
    });
}

// Parallax effect for floating shapes
function initParallax() {
    const shapes = document.querySelectorAll('.shape');

    if (shapes.length === 0) return;

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        shapes.forEach((shape, index) => {
            const speed = 0.05 + (index * 0.02);
            const yPos = -(scrollY * speed);
            const rotation = scrollY * 0.05;
            shape.style.transform = `translate(${yPos * 0.5}px, ${yPos}px) rotate(${rotation}deg)`;
        });
    });

    // Mouse move parallax effect
    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;

        const xPercent = (clientX / innerWidth - 0.5) * 2;
        const yPercent = (clientY / innerHeight - 0.5) * 2;

        shapes.forEach((shape, index) => {
            const multiplier = (index + 1) * 10;
            shape.style.transform = `translate(${xPercent * multiplier}px, ${yPercent * multiplier}px)`;
        });
    });
}

// Add tilt effect to project cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.project-card:not(.featured), .publication-card:not(.featured)');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -5;
            const rotateY = ((x - centerX) / centerX) * 5;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
});
