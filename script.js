// Smooth scroll to a specific section
function smoothScroll(targetId) {
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth"
    });
  }
  
  // Reveal elements on scroll using Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  });
  
  const revealElements = document.querySelectorAll(".reveal");
  revealElements.forEach((el) => observer.observe(el));
  