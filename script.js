// =========================================================
// FAST.SITE — small configuration area
// Replace the placeholder values below before launch.
// =========================================================
const SITE_CONFIG = {
  whatsappNumber: "27820000000", // South African number, digits only. Example: 27821234567
  whatsappMessage: "Hi, I'd like to get a business landing page for R750. I'd like to find out more.",
  socials: {
    facebook: "#",
    instagram: "#",
    tiktok: "#",
    linkedin: "#"
  }
};

// WhatsApp links
const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`;
document.querySelectorAll("#whatsappLink, #floatingWhatsapp").forEach(link => {
  link.href = whatsappUrl;
});

// Social links
document.querySelectorAll("[data-social]").forEach(link => {
  const platform = link.dataset.social;
  link.href = SITE_CONFIG.socials[platform] || "#";
  if (link.href !== "#") {
    link.target = "_blank";
    link.rel = "noopener";
  }
});

// Current year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile navigation
const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");

menuToggle.addEventListener("click", () => {
  const isOpen = header.classList.toggle("menu-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    header.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// FAQ accordion
document.querySelectorAll(".faq-item button").forEach(button => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    const wasOpen = item.classList.contains("open");

    document.querySelectorAll(".faq-item").forEach(other => other.classList.remove("open"));
    if (!wasOpen) item.classList.add("open");
  });
});

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Header background changes slightly after scrolling
window.addEventListener("scroll", () => {
  header.style.background = window.scrollY > 20
    ? "rgba(246,247,248,.94)"
    : "rgba(246,247,248,.82)";
}, { passive: true });
