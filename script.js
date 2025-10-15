// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
});

// Mobile menu toggle
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    if (mobileNav.style.display === 'flex') {
        mobileNav.style.display = 'none';
        menuBtn.innerHTML = '<i data-lucide="menu"></i>';
    } else {
        mobileNav.style.display = 'flex';
        menuBtn.innerHTML = '<i data-lucide="x"></i>';
    }
    
    // Re-initialize icons after DOM change
    lucide.createIcons();
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const mobileNav = document.getElementById('mobileNav');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const header = document.querySelector('.header');
    
    if (mobileNav && mobileNav.style.display === 'flex') {
        if (!header.contains(event.target)) {
            mobileNav.style.display = 'none';
            menuBtn.innerHTML = '<i data-lucide="menu"></i>';
            lucide.createIcons();
        }
    }
});

// Close mobile menu when clicking on a link
document.addEventListener('DOMContentLoaded', function() {
    const mobileLinks = document.querySelectorAll('.nav-link-mobile');
    const mobileNav = document.getElementById('mobileNav');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (mobileNav && mobileNav.style.display === 'flex') {
                mobileNav.style.display = 'none';
                menuBtn.innerHTML = '<i data-lucide="menu"></i>';
                lucide.createIcons();
            }
        });
    });
});

// Contact form handling
function handleFormSubmit(event) {
    event.preventDefault();
    
    const submitBtn = document.getElementById('submitBtn');
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    
    // Show loading state
    submitBtn.innerHTML = '<div class="spinner"></div><span>Sending...</span>';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        contactForm.style.display = 'none';
        successMessage.style.display = 'block';
        
        // Re-initialize icons
        lucide.createIcons();
    }, 1500);
}

// Reset contact form
function resetForm() {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    const submitBtn = document.getElementById('submitBtn');
    const form = document.querySelector('.contact-form');
    
    // Reset form
    form.reset();
    
    // Reset button
    submitBtn.innerHTML = '<i data-lucide="send"></i><span>Send Message</span>';
    submitBtn.disabled = false;
    
    // Show form, hide success message
    contactForm.style.display = 'block';
    successMessage.style.display = 'none';
    
    // Re-initialize icons
    lucide.createIcons();
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Newsletter form handling
document.addEventListener('DOMContentLoaded', function() {
    // Add loading spinner CSS
    const style = document.createElement('style');
    style.textContent = `
        .spinner {
            width: 20px;
            height: 20px;
            border: 2px solid #ffffff;
            border-top: 2px solid transparent;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    const newsletterForm = document.querySelector('.newsletter-form .form-group');
    if (newsletterForm) {
        const button = newsletterForm.querySelector('.btn');
        const input = newsletterForm.querySelector('.email-input');
        
        if (button && input) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                if (input.value && input.value.includes('@')) {
                    button.innerHTML = 'Subscribed!';
                    button.style.backgroundColor = '#10b981';
                    input.value = '';
                    
                    setTimeout(() => {
                        button.innerHTML = 'Subscribe Now';
                        button.style.backgroundColor = '#059669';
                    }, 3000);
                } else {
                    input.focus();
                    input.style.borderColor = '#ef4444';
                    setTimeout(() => {
                        input.style.borderColor = '#d1d5db';
                    }, 2000);
                }
            });
        }
    }
});

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.feature-card, .tree-card, .value-card, .post-card, .contact-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});