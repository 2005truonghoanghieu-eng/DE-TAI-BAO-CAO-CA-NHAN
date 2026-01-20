// js/contact-page.js
const form = document.getElementById("contactForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  msg.textContent = "Đã gửi liên hệ (demo). Cảm ơn bạn!";
  form.reset();
});
