// Typing effect
const typing = document.querySelector(".typing");
const roles = ["Data Analyst", "Web Developer", "Problem Solver"];
let roleIndex = 0;
let charIndex = 0;

function typeRole() {
  if (charIndex < roles[roleIndex].length) {
    typing.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeRole, 100);
  } else {
    setTimeout(eraseRole, 1500);
  }
}

function eraseRole() {
  if (charIndex > 0) {
    typing.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseRole, 50);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeRole, 500);
  }
}

document.addEventListener("DOMContentLoaded", typeRole);

// Scroll fade-in
const fadeElems = document.querySelectorAll(".fade-in");
window.addEventListener("scroll", () => {
  fadeElems.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

// Contact form alert
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Message sent! I will get back to you soon.");
});
