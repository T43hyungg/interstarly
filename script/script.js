let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    // Reset slides
    slides.forEach(slide => slide.classList.remove('active'));

    // Update index and show the slide
    currentSlide = (index + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');

    // Move slides
    document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Automatic slide change
setInterval(() => {
    showSlide(currentSlide + 1);
}, 3000); // Change slide every 3 seconds
