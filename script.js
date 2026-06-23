// Wait until page loads
document.addEventListener("DOMContentLoaded", () => {

    // Sign In Button
    const signInBtn = document.querySelector(".sign-in-btn");

    signInBtn.addEventListener("click", () => {
        alert("Sign In button clicked!");
    });

    // Get Started Buttons
    const getStartedBtns = document.querySelectorAll(".get-started-btn");

    getStartedBtns.forEach(button => {
        button.addEventListener("click", () => {

            let emailInput;

            // Find the email input near the button
            const form = button.closest(".email-form");
            emailInput = form.querySelector(".email-input");

            const email = emailInput.value.trim();

            if (email === "") {
                alert("Please enter your email address.");
                return;
            }

            // Email Validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            alert(`Welcome! Email submitted: ${email}`);
        });
    });

    // FAQ Toggle (Alternative to inline onclick)
    const faqButtons = document.querySelectorAll(".faq-button");

    faqButtons.forEach(button => {
        button.addEventListener("click", () => {
            button.parentElement.classList.toggle("active");
        });
    });

});