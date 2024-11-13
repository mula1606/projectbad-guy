// Smooth Scrolling for Navbar Links
document.querySelectorAll(".nav-links a").forEach((anchor) => {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Contact Form Submit
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for contacting us! We will get back to you soon.");
  });
