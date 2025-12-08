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
function validateForm(e){
    e.preventDefault();
    
    let myForm = document.getElementById("myForm");
    let errorSpans = document.querySelectorAll(".message");
    let isValid = true;

    // reset display of the error inputs before validating
    myForm.firstName.classList.remove("errorInput");
    myForm.lastName.classList.remove("errorInput");
    myForm.phoneNumber.classList.remove("errorInput");
    myForm.email.classList.remove("errorInput");
    myForm.message.classList.remove("errorInput");
    
    errorSpans.forEach(function(span){
      span.classList.remove("error");
    });
    
    document.querySelector("#success").classList.remove("show");
    document.querySelector("#success").classList.add("hide");
    
 
    let phoneRegex =  /^\d{3}-\d{3}-\d{4}$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // FIRST NAME
    if(myForm.firstName.value === ""){
      myForm.firstName.classList.add("errorInput");
      errorSpans[0].classList.add("error");
      isValid = false;
    }

    // LAST NAME
    if(myForm.lastName.value === ""){
      myForm.lastName.classList.add("errorInput");
      errorSpans[1].classList.add("error");
      isValid = false;
    }

    // PHONE VALIDATION (only if phone is selected)
    if (document.querySelector('input[name="contactPref"]:checked')?.value === "phone") {
      if(!phoneRegex.test(myForm.phoneNumber.value)){
        myForm.phoneNumber.classList.add("errorInput");
        errorSpans[2].classList.add("error");
        isValid = false;
      }
    }

    // EMAIL VALIDATION (only if email is selected)
    if (document.querySelector('input[name="contactPref"]:checked')?.value === "email") {
      if(!emailRegex.test(myForm.email.value)){
        myForm.email.classList.add("errorInput");
        errorSpans[3].classList.add("error");
        isValid = false;
      }
    }

    // MESSAGE
    if(myForm.message.value === ""){
      myForm.message.classList.add("errorInput");
      errorSpans[4].classList.add("error");
      isValid = false;
    }

    // SUCCESS
    if(isValid){      
      document.querySelector("#success").classList.remove("hide");
      document.querySelector("#success").classList.add("show");
  
      let successP = document.getElementById("formSub");
      successP.innerHTML =
        '<strong>First Name:</strong> ' + myForm.firstName.value +
        "<br><strong>Last Name:</strong>" + myForm.lastName.value +
        "<br><strong>Phone Number:</strong>"  + myForm.phoneNumber.value +
        "<br><strong>Email:</strong>" + myForm.email.value +
        "<br><strong>Message:</strong>" + myForm.message.value;
      
      myForm.firstName.value = '';
      myForm.lastName.value = '';
      myForm.phoneNumber.value = '';
      myForm.email.value = '';
      myForm.message.value = '';
      myForm.firstName.focus();
    }
}

// attach event handler to call for form validation on submission
document.getElementById("myForm").addEventListener("submit", validateForm);


