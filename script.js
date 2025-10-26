document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-links');

    // --- 1. Mobile Menu Toggle ---
    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
        menuToggle.querySelector('i').classList.toggle('fa-bars');
        menuToggle.querySelector('i').classList.toggle('fa-times');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
                menuToggle.querySelector('i').classList.remove('fa-times');
                menuToggle.querySelector('i').classList.add('fa-bars');
            }
        });
    });
    
    // --- 2. Typewriter Effect ---
    const typewriterElement = document.getElementById('typewriter-text');
    const roles = ["Full Stack Developer", "Problem Solver", "Code Architect"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const speed = 120;

    function handleTypewriter() {
        const currentText = roles[roleIndex];
        
        if (isDeleting) {
            typewriterElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriterElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        let timeout;
        if (isDeleting) {
            timeout = (charIndex === 0) ? 1500 : speed / 2; // Pause longer when done deleting
        } else {
            timeout = (charIndex === currentText.length) ? 2000 : speed; // Pause longer when word is complete
        }

        if (charIndex === currentText.length && !isDeleting) {
            isDeleting = true;
        } else if (charIndex === 0 && isDeleting) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }

        setTimeout(handleTypewriter, timeout);
    }
    handleTypewriter();


    // --- 3. Scroll Reveal (Making sections appear dynamically) ---
    const sections = document.querySelectorAll('section');
    const observerOptions = { rootMargin: '0px', threshold: 0.1 };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0'; // Initial state
        section.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
        section.style.transform = 'translateY(50px)';
        observer.observe(section);
    });


    // --- 4. Interactive Project Tabs ---
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-project');

            // Deactivate all buttons and content
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Activate clicked button and corresponding content
            button.classList.add('active');
            document.getElementById(`project-${targetId}`).classList.add('active');
        });
    });

    // --- 5. Contact Form Submission Simulation ---
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('c_name').value;
        // In a real site, you'd use Fetch API to send data to a backend endpoint (like Netlify Forms or a serverless function)
        alert(`Message sent from ${name}! Thank you for connecting. (Form submission is simulated)`);
        contactForm.reset();
    });

    // --- 6. Footer Year ---
    document.getElementById('current-year').textContent = new Date().getFullYear();
});
