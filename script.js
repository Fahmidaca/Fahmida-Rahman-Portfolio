// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
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

// Form submission handler
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    themeToggle.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Add some basic animation on scroll (optional)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('section > .container').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Add loading state to external links
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', function(e) {
        this.classList.add('loading');
        // Remove loading class after 3 seconds as fallback
        setTimeout(() => {
            this.classList.remove('loading');
        }, 3000);
    });
});

// Profile image upload and drag & drop
const profileImg = document.getElementById('profile-img');
const fileInput = document.getElementById('file-input');
const editBtn = document.getElementById('edit-btn');

editBtn.addEventListener('click', () => fileInput.click());

fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (event) => {
            profileImg.src = event.target.result;
        };
        reader.readAsDataURL(file);
    } else {
        alert('Please select a valid image file.');
    }
});

profileImg.addEventListener('dragenter', (e) => {
    e.preventDefault();
    profileImg.style.border = '3px dashed #007bff';
});

profileImg.addEventListener('dragover', (e) => {
    e.preventDefault();
    profileImg.style.border = '3px dashed #007bff';
});

profileImg.addEventListener('dragleave', (e) => {
    profileImg.style.border = '5px solid white';
});

profileImg.addEventListener('drop', (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (event) => {
            profileImg.src = event.target.result;
        };
        reader.readAsDataURL(file);
    } else {
        alert('Please drop a valid image file.');
    }
    profileImg.style.border = '5px solid white';
});