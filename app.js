// Frame Perfect Productions - JavaScript

// Wait for DOM to be fully loaded
// Global Tab Function
function openTab(evt, tabName) {
    // Hide all tab content
    var tabContent = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    // Remove active class from all tab links
    var tabLinks = document.getElementsByClassName("tab-link");
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    // Show the current tab and add active class to the button
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // ===== Tab Initialization (Optional safety) =====
    // Ensure "Consultation" is open by default if CSS/HTML didn't catch it, though HTML inline style handles it.


    // ===== Smooth Scrolling Enhancement =====
    const navLinks = document.querySelectorAll('.nav a, .cta-button, .footer-section a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
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

    window.addEventListener('scroll', function () {
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

    const observer = new IntersectionObserver(function (entries) {
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

    // ===== Console Welcome Message =====
    console.log('%c Frame Perfect Productions ', 'background: #f0a500; color: #0a0a0a; font-size: 20px; font-weight: bold; padding: 10px;');
    console.log('%c Capturing the Punchline ', 'background: #1a1a1a; color: #f0a500; font-size: 14px; padding: 5px;');
});
