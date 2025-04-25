const testimonials = document.querySelectorAll(".testimonial-item");
let index = 0;

setInterval(() => {
  testimonials[index].classList.remove("active");
  index = (index + 1) % testimonials.length;
  testimonials[index].classList.add("active");
}, 2000);
// No longer required to set image via JS, kept for future use
const directorName = "Om Awasthi";
document.querySelector(".overlay h2").textContent = directorName;
