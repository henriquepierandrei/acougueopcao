
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


document.addEventListener('DOMContentLoaded', function() {
    const marquee = document.getElementById('marquee');
    const pauseBtn = document.getElementById('pauseBtn');
    const speedBtn = document.getElementById('speedBtn');
    
    let isPaused = false;
    let currentSpeed = 1;
    const speeds = [1, 1.5, 0.5];
    let speedIndex = 0;
    
    // Pausar/continuar a animação
    pauseBtn.addEventListener('click', function() {
        isPaused = !isPaused;
        marquee.style.animationPlayState = isPaused ? 'paused' : 'running';
        pauseBtn.innerHTML = isPaused ? '▶' : '❙❙';
    });
    
    // Alternar velocidade
    speedBtn.addEventListener('click', function() {
        speedIndex = (speedIndex + 1) % speeds.length;
        currentSpeed = speeds[speedIndex];
        marquee.style.animationDuration = (20 / currentSpeed) + 's';
        
        // Feedback visual da velocidade
        if (currentSpeed === 1) {
            speedBtn.innerHTML = '▶▶';
        } else if (currentSpeed > 1) {
            speedBtn.innerHTML = '▶▶▶';
        } else {
            speedBtn.innerHTML = '▶';
        }
    });
    
    // Duplicar conteúdo para loop mais suave
    marquee.innerHTML += marquee.innerHTML;
});