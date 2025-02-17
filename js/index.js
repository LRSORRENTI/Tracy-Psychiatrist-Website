/** IntersectionObserver API */

document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: "0px",
        threshold: 0.1 // Trigger the callback when 10% of the element is visible
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in-visible");
                observer.unobserve(entry.target); // Stop observing once the element is visible
            }
        });
    }, observerOptions);
  
    // Select all elements to observe
    const elementsToObserve = document.querySelectorAll(".fade-in");
    elementsToObserve.forEach(element => {
        observer.observe(element);
    });
  });