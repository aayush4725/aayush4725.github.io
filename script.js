function validateEmail(email) {
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

function initSignIn() {
    var signInBtn = document.querySelector(".sign-in-btn");
    if (!signInBtn) return;

    signInBtn.addEventListener("click", function () {
        alert("Sign In feature coming soon!");
    });
}

function initGetStarted() {
    var buttons = document.querySelectorAll(".get-started-btn");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            var form = button.closest(".email-form");
            var emailInput = form.querySelector(".email-input");
            var email = emailInput.value.trim();

            if (email === "") {
                alert("Please enter your email address.");
                return;
            }

            if (!validateEmail(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            alert("Welcome! Email submitted: " + email);
            emailInput.value = "";
        });
    });
}

function initFaqToggle() {
    var faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(function (item) {
        var button = item.querySelector(".faq-button");

        button.addEventListener("click", function () {
            var isActive = item.classList.contains("active");

            faqItems.forEach(function (other) {
                other.classList.remove("active");
            });

            if (!isActive) {
                item.classList.add("active");
            }
        });
    });
}

function initNavbarScroll() {
    var nav = document.querySelector("nav");
    if (!nav) return;

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            nav.classList.add("nav-scrolled");
        } else {
            nav.classList.remove("nav-scrolled");
        }
    });
}

function initTrendingArrows() {
    var container = document.querySelector(".trending-container");
    var scrollArea = document.querySelector(".trending-scroll");
    if (!container || !scrollArea) return;

    var leftBtn = document.createElement("button");
    leftBtn.className = "scroll-arrow scroll-arrow-left";
    leftBtn.innerHTML = "&#8249;";

    var rightBtn = document.createElement("button");
    rightBtn.className = "scroll-arrow scroll-arrow-right";
    rightBtn.innerHTML = "&#8250;";

    container.appendChild(leftBtn);
    container.appendChild(rightBtn);

    leftBtn.addEventListener("click", function () {
        scrollArea.scrollBy({ left: -400, behavior: "smooth" });
    });

    rightBtn.addEventListener("click", function () {
        scrollArea.scrollBy({ left: 400, behavior: "smooth" });
    });
}

function initLanguageSelect() {
    var selects = document.querySelectorAll(".language-select select");

    selects.forEach(function (select) {
        select.addEventListener("change", function () {
            alert("Language changed to " + select.value);
        });
    });
}

function initMovieCards() {
    var cards = document.querySelectorAll(".movie-card");

    cards.forEach(function (card) {
        card.addEventListener("click", function () {
            var number = card.querySelector(".movie-number").textContent;
            alert("You clicked on Trending Movie #" + number);
        });
    });
}

function initLiveCounter() {
    var display = document.getElementById("liveNumber");
    if (!display) return;

    var count = 84213;
    display.textContent = count.toLocaleString();

    setInterval(function () {
        var change = Math.floor(Math.random() * 40) - 15;
        count = count + change;
        display.textContent = count.toLocaleString();
    }, 2000);
}

document.addEventListener("DOMContentLoaded", function () {
    initSignIn();
    initGetStarted();
    initFaqToggle();
    initNavbarScroll();
    initTrendingArrows();
    initLanguageSelect();
    initMovieCards();
    initLiveCounter();
});