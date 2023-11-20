document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel-inner');
    const totalSlides = document.querySelectorAll('.carousel-item').length;
    const slideWidth = document.querySelector('.carousel-item').clientWidth;
    let currentIndex = 0;

    function showSlide(index) {
      const transformValue = -index * slideWidth + 'px';
      carousel.style.transform = 'translateX(' + transformValue + ')';
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      showSlide(currentIndex);
    }

    setInterval(nextSlide, 3000);
  });