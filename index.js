
// Menu Mobile
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const closeMenu = document.getElementById('closeMenu');

hamburger.addEventListener('click', () => {
    nav.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    nav.classList.remove('active');
});

// Header scroll effect
const header = document.getElementById('header');
const toTop = document.getElementById('toTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
        toTop.classList.add('active');
    } else {
        header.classList.remove('scrolled');
        toTop.classList.remove('active');
    }

    // Scroll animations
    const animateElements = document.querySelectorAll('.about-image, .about-text, .product-card, .map-container, .info-card');

    animateElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementPosition < windowHeight - 100) {
            element.classList.add('animate');
        }
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Close mobile menu if open
            nav.classList.remove('active');

            // Scroll to target with smooth behavior
            window.scrollTo({
                top: targetElement.offsetTop - 90,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize elements with animation classes
document.addEventListener('DOMContentLoaded', () => {
    // Simulate loading state
    setTimeout(() => {
        const animateElements = document.querySelectorAll('.about-image, .about-text, .product-card, .map-container, .info-card');

        animateElements.forEach((element, index) => {
            setTimeout(() => {
                const elementPosition = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (elementPosition < windowHeight - 100) {
                    element.classList.add('animate');
                }
            }, index * 100);
        });
    }, 500);
});
