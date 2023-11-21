document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel-inner'); //reference carousel container
    const totalSlides = document.querySelectorAll('.carousel-item').length; //gets total # of slides in carousel
    const slideWidth = document.querySelector('.carousel-item').clientWidth; //gets width of single side
    let currentIndex = 0; //initialize current index of displayed slide

    function showSlide(index) { //function to show specific slide based on given index
      const transformValue = -index * slideWidth + 'px';
      carousel.style.transform = 'translateX(' + transformValue + ')';
    }

    function nextSlide() { //function to move slides
      currentIndex = (currentIndex + 1) % totalSlides;
      showSlide(currentIndex);
    }

    setInterval(nextSlide, 3000); //automatically changes to next slide every 3000 milliseconds, or 3 seconds
  });