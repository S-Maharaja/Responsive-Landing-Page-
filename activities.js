// Toggle menu on mobile
document.getElementById('menu-icon').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    if (navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
    } else {
        navLinks.classList.add('open');
    }
});

// Change navbar background color on scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#555';
    } else {
        navbar.style.backgroundColor = '#333';
    }
});

