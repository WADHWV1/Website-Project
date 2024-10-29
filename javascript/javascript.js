document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.querySelector(".mobile-menu");
  const nav = document.querySelector("nav");
  const form = document.querySelector(".contact-form");
  const suppliers = document.querySelectorAll(".supplier");
  const supplierGrid = document.querySelector(".supplier-grid");
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  const cartItems = [];

  mobileMenu.addEventListener("click", function () {
    nav.classList.toggle("active");
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    validateForm();
  });

  // Cart functionality
  addToCartButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      const product = button.parentElement;
      const productName = product.querySelector("img").alt; // Get product name from the image alt
      const productPrice = product.querySelector(".price").innerText; // Get product price
      cartItems.push({ name: productName, price: productPrice });
      alert(`${productName} has been added to your trolley.`);
    });
  });

  // Validate form (existing function)
  // ... [existing validateForm, showError, clearError, validateEmail functions] ...

  // Sorting functionality
  function sortSuppliers(category) {
    supplierGrid.innerHTML = "";
    suppliers.forEach((supplier) => {
      if (supplier.dataset.category === category || category === "all") {
        supplierGrid.appendChild(supplier);
      }
    });
  }

  // Example of how to use the sort function
  document.getElementById("sort-food").addEventListener("click", function () {
    sortSuppliers("food");
  });
  // ... [existing sort button listeners] ...
});

document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Basic validation
    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
      return;
    }

    // Simple email validation (basic)
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Simulate successful submission
    alert("Thank you, " + name + "! Your message has been sent.");

    // Clear the form
    contactForm.reset();
  });
});
// javascript.js

document.addEventListener("DOMContentLoaded", function () {
  const addToTrolleyButtons = document.querySelectorAll(".add-to-trolley");
  const popup = document.getElementById("popup");
  const closeButton = document.querySelector(".close-button");

  addToTrolleyButtons.forEach((button) => {
    button.addEventListener("click", function () {
      popup.style.display = "block"; // Show popup
    });
  });

  closeButton.addEventListener("click", function () {
    popup.style.display = "none"; // Hide popup when close button is clicked
  });

  window.addEventListener("click", function (event) {
    if (event.target === popup) {
      popup.style.display = "none"; // Hide popup if clicking outside of it
    }
  });
});
