// Hamburger

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
});



// Menu
function switchProduct(productId){
    let gallery = document.querySelectorAll('#menu section');
    gallery.forEach(product =>{
        if(product.id.startsWith('product')){
            product.classList.add('hiddenItem');
            product.classList.remove('currentItem');
        }
    });

    let displayImg = document.getElementById(productId);
    if(displayImg){
        displayImg.classList.remove('hiddenItem');
        displayImg.classList.add('currentItem');
    }
}

// event Listeners for Gallery
document.getElementById('btn1').addEventListener('click', () => switchProduct('product1'));
document.getElementById('btn2').addEventListener('click', () => switchProduct('product2'));
document.getElementById('btn3').addEventListener('click', () => switchProduct('product3'));
document.getElementById('btn4').addEventListener('click', () => switchProduct('product4'));



// Form
// Form fields
const emailField = document.getElementById("emailField");
const phoneField = document.getElementById("phoneField");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");

// Toggle visibility + disable inactive inputs
document.querySelectorAll("input[name='contactPref']").forEach((radio) => {
  radio.addEventListener("change", () => {
    if (radio.value === "email") {
      emailField.classList.remove("hidden");
      phoneField.classList.add("hidden");
      emailInput.disabled = false;
      phoneInput.disabled = true;
      phoneInput.value = "";
    } else {
      phoneField.classList.remove("hidden");
      emailField.classList.add("hidden");
      phoneInput.disabled = false;
      emailInput.disabled = true;
      emailInput.value = "";
    }
  });
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let valid = true;

  // Clear errors
  document.querySelectorAll(".error").forEach(err => err.textContent = "");

  // Name validation
  const nameRegex = /^[A-Za-z]+$/;
  const first = document.getElementById("firstName").value.trim();
  const last = document.getElementById("lastName").value.trim();

  if (!nameRegex.test(first)) {
    document.getElementById("firstNameError").textContent = "Only letters allowed.";
    valid = false;
  }
  if (!nameRegex.test(last)) {
    document.getElementById("lastNameError").textContent = "Only letters allowed.";
    valid = false;
  }

  // Contact preference
  const pref = document.querySelector("input[name='contactPref']:checked");
  if (!pref) {
    document.getElementById("contactPrefError").textContent = "Select a contact preference.";
    valid = false;
  }

  // Email validation
  if (pref && pref.value === "email") {
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      document.getElementById("emailError").textContent = "Enter a valid email address.";
      valid = false;
    }
  }

  // Phone validation
  if (pref && pref.value === "phone") {
    const phone = phoneInput.value.trim();
    const phoneRegex = /^\d{10}$/;

    if (!phoneRegex.test(phone)) {
      document.getElementById("phoneError").textContent = "Enter a valid 10-digit phone number.";
      valid = false;
    }
  }

  // Message validation
  const message = document.getElementById("message").value.trim();
  if (message.length === 0) {
    document.getElementById("messageError").textContent = "Message is required.";
    valid = false;
  }

});

