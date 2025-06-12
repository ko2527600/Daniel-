// Toggle Mobile Menu
const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  nav.classList.toggle('active');
};

// Scroll to Contact Section
const hireBtn = document.getElementById("hireBtn");
const contactBtn = document.getElementById("contactBtn");
const contactSection = document.getElementById("contact");

hireBtn?.addEventListener("click", () => {
  contactSection.scrollIntoView({ behavior: "smooth" });
});

contactBtn?.addEventListener("click", () => {
  contactSection.scrollIntoView({ behavior: "smooth" });
});

// Handle Form Submission
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = form.querySelector('input[placeholder="Enter Your Full Name"]').value;
  const email = form.querySelector('input[placeholder="Enter Your Email"]').value;
  const message =
    form.querySelector("textarea")?.value ||
    form.querySelector('input[placeholder="Enter Your Message"]')?.value;

  console.log("Form submitted!");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  // Show alert and on-page message
  alert("Thank you for reaching out!");

  const thankYou = document.createElement("p");
  thankYou.textContent = "Thank you for reaching out!";
  thankYou.style.color = "limegreen";
  thankYou.style.fontWeight = "bold";
  thankYou.style.marginTop = "1em";
  form.appendChild(thankYou);

  // Remove message after 3 seconds
  setTimeout(() => {
    thankYou.remove();
  }, 3000);

  // ✅ Reset form fields
  form.reset();
});

// Mouse Events: Button hover effects
const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
  btn.addEventListener("mouseover", () => {
    btn.style.backgroundColor = "#4CAF50"; // green shade
  });

  btn.addEventListener("mouseout", () => {
    btn.style.backgroundColor = ""; // revert to original
  });
});
