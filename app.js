// Frame Perfect Productions - JavaScript

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== Form Handling =====
    const bookingForm = document.getElementById('bookingForm');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                service: document.getElementById('service').value,
                date: document.getElementById('date').value,
                message: document.getElementById('message').value
            };
            
            // Validate form
            if (!formData.name || !formData.email || !formData.service) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Display success message
            alert('Thank you for your booking request! We will contact you shortly.');
            
            // Log form data (in production, this would be sent to a server)
            console.log('Booking Request:', formData);
            
            // Reset form
            bookingForm.reset();
        });
    }
    
    // ===== Smooth Scrolling Enhancement =====
    const navLinks = document.querySelectorAll('.nav a, .cta-button, .footer-section a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle internal links
            if (href && href.startsWith('#')) {
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // ===== Header Scroll Effect =====
    const header = document.querySelector('.header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Add/remove shadow based on scroll position
        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.8)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.5)';
        }
        
        lastScroll = currentScroll;
    });
    
    // ===== Video Card Animations =====
    const videoCards = document.querySelectorAll('.video-card');
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    videoCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // ===== Form Input Validation =====
    const emailInput = document.getElementById('email');
    
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (this.value && !emailPattern.test(this.value)) {
                this.style.borderColor = '#ff4444';
            } else {
                this.style.borderColor = '#333';
            }
        });
        
        emailInput.addEventListener('input', function() {
            this.style.borderColor = '#333';
        });
    }
    
    // ===== Date Input Minimum Date =====
    const dateInput = document.getElementById('date');
    
    if (dateInput) {
        // Set minimum date to today
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }
    
    // ===== Console Welcome Message =====
    console.log('%c Frame Perfect Productions ', 'background: #f0a500; color: #0a0a0a; font-size: 20px; font-weight: bold; padding: 10px;');
    console.log('%c Capturing the Punchline ', 'background: #1a1a1a; color: #f0a500; font-size: 14px; padding: 5px;');
});
