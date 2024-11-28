// Language switching functionality
function switchLang(lang) {
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });

    // Update visible content
    document.querySelectorAll('[data-lang]').forEach(el => {
        if (el.getAttribute('data-lang') === lang) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });

    // Store language preference
    localStorage.setItem('preferredLanguage', lang);
}

// Mobile menu functionality
function setupMobileMenu() {
    const menuButton = document.querySelector('.mobile-menu-btn');
    const closeButton = document.querySelector('.mobile-close-btn');
    const mobileNav = document.querySelector('.mobile-nav');

    if (menuButton && closeButton && mobileNav) {
        menuButton.addEventListener('click', () => {
            mobileNav.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        closeButton.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
}

// Smooth scroll functionality
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Active navigation link
function setActiveNavLink() {
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-menu a').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Initialize functionality
document.addEventListener('DOMContentLoaded', () => {
    // Setup mobile menu
    setupMobileMenu();

    // Setup smooth scroll
    setupSmoothScroll();

    // Set active navigation link
    setActiveNavLink();

    // Set initial language
    const savedLang = localStorage.getItem('preferredLanguage') || 'my';
    switchLang(savedLang);
});
