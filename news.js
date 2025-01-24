// JavaScript for News Page

// Slider Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('#featured-news .slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Initialize Slider
showSlide(currentSlide);
setInterval(nextSlide, 5000); // Change slides every 5 seconds

// Search Bar Functionality
const searchBar = document.getElementById('search-bar');
const newsItems = document.querySelectorAll('.news-item');

searchBar.addEventListener('input', () => {
    const query = searchBar.value.toLowerCase();
    newsItems.forEach((item) => {
        const title = item.querySelector('h2').textContent.toLowerCase();
        const summary = item.querySelector('.news-summary').textContent.toLowerCase();
        if (title.includes(query) || summary.includes(query)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
});
