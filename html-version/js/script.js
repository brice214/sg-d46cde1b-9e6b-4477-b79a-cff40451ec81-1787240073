// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMobile = document.querySelector('.nav-mobile');
const header = document.getElementById('header');

if (menuToggle) {
    menuToggle.addEventListener('click', function() {
        navMobile.classList.toggle('active');
        
        // Animate hamburger icon
        const spans = this.querySelectorAll('span');
        if (navMobile.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = '';
            spans[1].style.opacity = '1';
            spans[2].style.transform = '';
        }
    });
}

// Close mobile menu when clicking on a link
const mobileLinks = document.querySelectorAll('.nav-mobile a');
mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
        navMobile.classList.remove('active');
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '1';
        spans[2].style.transform = '';
    });
});

// Header scroll effect
window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = 80;
            const targetPosition = target.offsetTop - headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const formMessage = document.querySelector('.form-message');

if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Add loading state
        contactForm.classList.add('loading');
        formMessage.style.display = 'none';
        formMessage.className = 'form-message';
        
        // Collect form data
        const formData = new FormData(contactForm);
        
        try {
            // Send form data to PHP script
            const response = await fetch('contact.php', {
                method: 'POST',
                body: formData
            });
            
            const result = await response.json();
            
            // Remove loading state
            contactForm.classList.remove('loading');
            
            if (result.success) {
                // Success message
                formMessage.textContent = result.message || 'Votre message a été envoyé avec succès. Nous vous contacterons bientôt.';
                formMessage.classList.add('success');
                formMessage.style.display = 'block';
                
                // Reset form
                contactForm.reset();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);
            } else {
                // Error message
                formMessage.textContent = result.message || 'Une erreur est survenue. Veuillez réessayer ou nous contacter directement par téléphone ou email.';
                formMessage.classList.add('error');
                formMessage.style.display = 'block';
            }
        } catch (error) {
            // Network error
            contactForm.classList.remove('loading');
            formMessage.textContent = 'Erreur de connexion. Veuillez vérifier votre connexion internet et réessayer.';
            formMessage.classList.add('error');
            formMessage.style.display = 'block';
        }
    });
}

// Fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe sections for fade-in animation
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});