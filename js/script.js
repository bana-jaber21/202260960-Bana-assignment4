
/* ============================================================
   2. Dark / Light theme toggle (persisted in localStorage)
   ============================================================ */
function initTheme() {
    const saved = localStorage.getItem('theme');
    const theme = saved || 'dark';
    applyTheme(theme);
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    const icon = document.querySelector('.theme-icon');
    if (icon) icon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

function initThemeToggle() {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;
    btn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        applyTheme(current === 'dark' ? 'light' : 'dark');
    });
}

/* ============================================================
   3. Smooth scrolling for nav links (enhances CSS scroll-behavior
      for older browsers and adds active-state highlighting)
   ============================================================ */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            const target = document.querySelector(link.getAttribute('href'));
            if (!target) return;
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Close mobile menu if open
            document.getElementById('navLinks')?.classList.remove('open');
        });
    });
}

/* ============================================================
   4. Mobile hamburger menu
   ============================================================ */
function initHamburger() {
    const btn = document.getElementById('hamburger');
    const links = document.querySelector('.nav-links');
    if (!btn || !links) return;

    btn.addEventListener('click', () => {
        const isOpen = links.classList.toggle('open');
        btn.setAttribute('aria-expanded', isOpen);
    });

    // Close on outside click
    document.addEventListener('click', e => {
        if (!btn.contains(e.target) && !links.contains(e.target)) {
            links.classList.remove('open');
            btn.setAttribute('aria-expanded', 'false');
        }
    });
}

/* ============================================================
   5. Contact form validation & submission feedback
   ============================================================ */
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const fields = {
        name:    { el: document.getElementById('name'),    error: document.getElementById('nameError') },
        email:   { el: document.getElementById('email'),   error: document.getElementById('emailError') },
        message: { el: document.getElementById('message'), error: document.getElementById('messageError') },
    };

    function validateField(key) {
        const { el, error } = fields[key];
        let msg = '';

        if (!el.value.trim()) {
            msg = 'This field is required.';
        } else if (key === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value.trim())) {
            msg = 'Please enter a valid email address.';
        }

        error.textContent = msg;
        el.classList.toggle('error', !!msg);
        return !msg;
    }

    // Live validation on blur
    Object.keys(fields).forEach(key => {
        fields[key].el.addEventListener('blur', () => validateField(key));
        fields[key].el.addEventListener('input', () => {
            if (fields[key].el.classList.contains('error')) validateField(key);
        });
    });

    form.addEventListener('submit', e => {
        e.preventDefault();

        const allValid = Object.keys(fields).map(validateField).every(Boolean);
        if (!allValid) return;

        const btn = document.getElementById('submitBtn');
        const success = document.getElementById('formSuccess');

        btn.disabled = true;
        btn.textContent = 'Sending…';

        // Simulate async send (no backend)
        setTimeout(() => {
            btn.textContent = 'Sent!';
            success.hidden = false;
            form.reset();
            Object.values(fields).forEach(({ el }) => el.classList.remove('error'));

            setTimeout(() => {
                btn.disabled = false;
                btn.textContent = 'Send Message';
                success.hidden = true;
            }, 4000);
        }, 1000);
    });
}

/* ============================================================
   6. Scroll-reveal: fade sections in as they enter the viewport
   ============================================================ */
function initScrollReveal() {
    if (!('IntersectionObserver' in window)) return;

    const style = document.createElement('style');
    style.textContent = `
        .reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .reveal.visible { opacity: 1; transform: none; }
    `;
    document.head.appendChild(style);

    const targets = document.querySelectorAll('.project-card, .about-grid, .contact-grid');
    targets.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    targets.forEach(el => observer.observe(el));
}

/* ============================================================
   7. Navbar: add .scrolled class once user scrolls past hero
   ============================================================ */
function initNavScroll() {
    const nav = document.querySelector('.navbar');
    if (!nav) return;
    const hero = document.querySelector('.hero');
    const update = () => {
        const threshold = hero ? hero.offsetHeight - 80 : 100;
        nav.classList.toggle('scrolled', window.scrollY > threshold);
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
}

/* ============================================================
   Init
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initThemeToggle();
    initSmoothScroll();
    initHamburger();
    initContactForm();
    initScrollReveal();
    initNavScroll();
});
