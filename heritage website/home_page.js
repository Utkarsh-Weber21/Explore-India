document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    let currentSlide = 0;
  
    function showSlide(index) {
      slides.forEach((slide) => {
        slide.style.transform = `translateX(-${index * 100}%)`;
      });
    }
  
    function activateDot(index) {
      dots.forEach((dot) => {
        dot.classList.remove("active");
      });
      dots[index].classList.add("active");
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
      activateDot(currentSlide);
    }
  
    function goToSlide(index) {
      currentSlide = index;
      showSlide(currentSlide);
      activateDot(currentSlide);
    }
  
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        goToSlide(index);
      });
    });
  
    setInterval(nextSlide, 5000); // Change slide every 5 seconds
  });
  