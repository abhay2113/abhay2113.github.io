
function animatedNumber(id, min, max, duration) {

    const element = document.getElementById(id);

    const target =
        Math.floor(Math.random() * (max - min + 1)) + min;

    let current = 0;
    const increment = target / (duration / 30);

    const timer = setInterval(() => {

        current += increment;

        if (current >= target) {
            current = target;
            clearInterval(timer);
        }

        element.textContent = Math.floor(current) + "+";

    }, 30);
}


const statsSection = document.querySelector(".stats");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            animatedNumber("exp", 10, 30, 2000);
            animatedNumber("ships", 500, 2000, 2500);
            animatedNumber("cntry", 20, 80, 2200);

            observer.unobserve(statsSection);
        }

    });

}, {
    threshold: 0.3
});

observer.observe(statsSection);










/* =========================================
   GLOBALMOVE PHOTO SLIDER
   CHANGE EVERY 2 SECONDS
========================================= */

const heroSlides =
    document.querySelectorAll(".hero-slide");

const heroDots =
    document.querySelectorAll(".slider-dot");

let heroCurrent = 0;


function changeHeroSlide(index) {

    heroSlides.forEach(function(slide) {

        slide.classList.remove("active");

    });


    heroDots.forEach(function(dot) {

        dot.classList.remove("active");

    });


    heroSlides[index].classList.add("active");

    heroDots[index].classList.add("active");

    heroCurrent = index;
}


/* Automatically change photo */

setInterval(function() {

    heroCurrent++;

    if (heroCurrent >= heroSlides.length) {

        heroCurrent = 0;

    }

    changeHeroSlide(heroCurrent);

}, 4000);


/* =========================================
   YOUR EXISTING MENU
========================================= */

function toggleMenu(){

    document
        .getElementById("navLinks")
        .classList.toggle("active");

}


document
    .querySelectorAll(".nav-links a")
    .forEach(function(link){

        link.addEventListener("click", function(){

            document
                .getElementById("navLinks")
                .classList.remove("active");

        });

    });


/* =========================================
   QUOTE
========================================= */

function sendQuote(event){

    event.preventDefault();

    alert(
        "Thank you! Your quote request has been received. " +
        "Our team will contact you shortly."
    );

}




const userArea = document.getElementById("userArea");

const username = localStorage.getItem("username");

if (username) {
    userArea.innerHTML = `
        <span class="username">Hi, ${username}</span>
    `;
}

localStorage.setItem("username", username);
