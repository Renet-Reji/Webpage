document.addEventListener('DOMContentLoaded', () => {
    // === Navbar Scroll Effect ===
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // === Mobile Menu Toggle ===
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.querySelector('i').classList.toggle('fa-bars');
        menuToggle.querySelector('i').classList.toggle('fa-times');
    });

    // Close mobile menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.querySelector('i').classList.remove('fa-times');
            menuToggle.querySelector('i').classList.add('fa-bars');
        });
    });

    // === Typewriter Effect ===
    const typewriterTextElement = document.getElementById('typewriter-text');
    const roles = ["Full Stack Developer", "Problem Solver", "Tech Enthusiast", "Web Innovator"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100; // milliseconds per character

    function typeWriter() {
        const currentRole = roles[roleIndex];
        if (isDeleting) {
            typewriterTextElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriterTextElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            // Pause at end of word, then start deleting
            typingSpeed = 1500;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length; // Move to next role
            typingSpeed = 100; // Reset typing speed
        } else {
            typingSpeed = isDeleting ? 70 : 100;
        }

        setTimeout(typeWriter, typingSpeed);
    }
    typeWriter(); // Start the typewriter effect

    // === Section Scroll Animations ===
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2 // Trigger when 20% of the section is visible
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // === Projects Carousel ===
    const carousel = document.querySelector('.projects-carousel');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const projectCards = document.querySelectorAll('.project-card');

    let currentIndex = 0;

    function updateCarousel() {
        const cardWidth = projectCards[0].offsetWidth + 40; // Card width + gap
        carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    nextButton.addEventListener('click', () => {
        if (currentIndex < projectCards.length - 1) { // Show one card at a time on mobile
            currentIndex++;
        } else {
            currentIndex = 0; // Loop back to start
        }
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = projectCards.length - 1; // Loop to end
        }
        updateCarousel();
    });

    // Initial update and resize listener for responsiveness
    window.addEventListener('resize', () => {
        currentIndex = 0; // Reset position on resize
        updateCarousel();
    });
    updateCarousel(); // Set initial position

    // === Contact Form Submission (Example - no backend) ===
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // In a real application, you'd send this data to a server
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        console.log({ name, email, message });
        alert('Thank you for your message, ' + name + '! I will get back to you shortly.');

        // Optionally clear the form
        contactForm.reset();
    });

    // === Dynamic Footer Year ===
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // === Simulate image generation for project thumbnails ===
    // This is just to show a placeholder where the image would appear
    const projectImages = document.querySelectorAll('.project-card img');
    projectImages.forEach(img => {
        if (img.src.includes('via.placeholder.com')) {
            // You can replace this with actual image URLs
            // For now, it just ensures the placeholder works
            img.onload = () => console.log(`Loaded placeholder for: ${img.alt}`);
        }
    });
});
