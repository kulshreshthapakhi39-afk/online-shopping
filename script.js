// Explore button alerts
document.querySelectorAll(".explore-btn")?.forEach(button => {
  button.addEventListener("click", () => {
    alert("More information about this destination coming soon!");
  });
});

// Contact form handler
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for contacting TripVerse! We'll reply soon.");
    contactForm.reset();
  });
}