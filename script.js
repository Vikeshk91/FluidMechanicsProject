// Add interactivity for the "More Details" button
/*document.getElementById('detailsBtn').addEventListener('click', function() {
    const extraDetails = document.getElementById('extraDetails');
    if (extraDetails.style.display === 'none') {
      extraDetails.style.display = 'block';
      this.textContent = 'Hide Details';
    } else {
      extraDetails.style.display = 'none';
      this.textContent = 'More Details';
    }
  });
  

// Scroll-triggered animation for sections
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const revealSection = () => {
    const triggerBottom = window.innerHeight * 0.8;

    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < triggerBottom) {
        section.classList.add("visible");
      } else {
        section.classList.remove("visible");
      }
    });
  };

  window.addEventListener("scroll", revealSection);
  revealSection(); // Run on load
});

*/

// Scroll-triggered animation for sections
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const revealSection = () => {
    const triggerBottom = window.innerHeight * 0.8;

    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < triggerBottom) {
        section.classList.add("visible");
      } else {
        section.classList.remove("visible");
      }
    });
  };

  window.addEventListener("scroll", revealSection);
  revealSection(); // Run on load
});
// JavaScript to Change Header Background on Scroll
document.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.background = "linear-gradient(90deg, #0056b3, #003f7f)";
    header.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
  } else {
    header.style.background = "linear-gradient(90deg, #007bff, #0056b3)";
    header.style.boxShadow = "none";
  }
});

// Loader Removal
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// Pause slider on hover
const slider = document.querySelector('.slider-container');

slider.addEventListener('mouseenter', () => {
  slider.style.animationPlayState = 'paused';
});

slider.addEventListener('mouseleave', () => {
  slider.style.animationPlayState = 'running';
});

 