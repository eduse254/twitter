document.addEventListener('DOMContentLoaded', function () {
    // Carousel functionality for projects.html
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentItem = 0;

    function showSlide(n) {
        carouselItems[currentItem].classList.remove('active');
        currentItem = (n + carouselItems.length) % carouselItems.length;
        carouselItems[currentItem].classList.add('active');
    }

    if (document.getElementById('prev')) { // Only if on projects page
        document.getElementById('prev').addEventListener('click', () => showSlide(currentItem - 1));
        document.getElementById('next').addEventListener('click', () => showSlide(currentItem + 1));
    }

    // Contact Form Handling for contact.html
    const form = document.getElementById('contactForm');
    if (form) { // Only if on contact page
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            // ... form handling logic ...
        });
    }

    // General functionality like smooth scrolling or tooltips can be added here
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Highlight the current page in navigation
    const currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('nav ul li a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});