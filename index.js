const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = ()=> {
	nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());

// ********************************************************************************** slide image in class section
document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 1;

    function slideBanner() {
        const totalSlides = document.getElementsByClassName('bgImg').length;
        const nextSlide = (currentSlide % totalSlides) + 1;

        document.getElementById(`banner${nextSlide}`).style.transform = 'translateX(0)';
        document.getElementById(`banner${currentSlide}`).style.transform = 'translateX(100%)';

        currentSlide = nextSlide;
    }

    setInterval(slideBanner, 3000); 
});



// -------------------------------------------------------------------------------- form
// JavaScript code to get form values and alert them
function handleSubmit(event) {
    event.preventDefault(); // Prevents the default form submission behavior

    // Get form elements
    const fullName = document.querySelector('input[type="text"][placeholder="Enter name"]').value;
    const email = document.querySelector('input[type="email"][placeholder="Enter email"]').value;
    const mobileNo = document.querySelector('input[type="text"][placeholder="Mobile no."]').value;

    // Get selected radio button values for Duration
    const durationOptions = document.querySelector('input[name="duration"]:checked');
    const durationValue = durationOptions ? durationOptions.value : null;

    // Get selected radio button values for Mode of payment
    const paymentOptions = document.querySelector('input[name="payment"]:checked');
    const paymentValue = paymentOptions ? paymentOptions.value : null;

    // Get selected radio button values for Personal Training
    const trainingOptions = document.querySelector('input[name="training"]:checked');
    const trainingValue = trainingOptions ? trainingOptions.value : null;

    // Get checkbox value for terms acceptance
    const termsAccepted = document.querySelector('input[name="terms"]:checked');

    // Check if all required fields are filled
    if (fullName && email && mobileNo && durationValue && paymentValue && trainingValue && termsAccepted) {
        // All required fields are filled, alert the values
        alert("Full Name: " + fullName +
            "\nEmail: " + email +
            "\nMobile No.: " + mobileNo +
            "\nDuration: " + durationValue +
            "\nMode of Payment: " + paymentValue +
            "\nPersonal Training: " + trainingValue +
            "\nTerms Accepted: Yes");
    }
    else {
        // If any required field is missing, show an alert
        alert("Please fill in all required fields and accept the terms.");
    }
}
