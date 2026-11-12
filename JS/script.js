
/* =========================================
   MARINECOURSE HERO SLIDER
   CHANGE EVERY 4 SECONDS
========================================= */

const heroSlides =
    document.querySelectorAll(".hero-slide");

const heroDots =
    document.querySelectorAll(".slider-dot");

let heroCurrent = 0;


function changeHeroSlide(index) {

    if (!heroSlides.length || !heroDots.length) return;

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

if (heroSlides.length && heroDots.length) {

    setInterval(function() {

        heroCurrent++;

        if (heroCurrent >= heroSlides.length) {

            heroCurrent = 0;

        }

        changeHeroSlide(heroCurrent);

    }, 4000);
}

/* WHY CHOOSE US COUNTERS */
const whyStatNumbers = document.querySelectorAll(".why-stat-number");
const whyStatFrames = new WeakMap();

function animateWhyStat(counter) {
    const target = Number(counter.dataset.count);
    const suffix = counter.dataset.suffix || "";
    const duration = 4000;

    if (!Number.isFinite(target)) {
        return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        counter.textContent = `${target.toLocaleString("en-IN")}${suffix}`;
        return;
    }

    const previousFrame = whyStatFrames.get(counter);
    if (previousFrame) {
        cancelAnimationFrame(previousFrame);
    }

    counter.textContent = `0${suffix}`;
    const startTime = performance.now();

    function updateCounter(currentTime) {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.round(target * easedProgress);

        counter.textContent = `${currentValue.toLocaleString("en-IN")}${suffix}`;

        if (progress < 1) {
            whyStatFrames.set(counter, requestAnimationFrame(updateCounter));
        } else {
            whyStatFrames.delete(counter);
        }
    }

    whyStatFrames.set(counter, requestAnimationFrame(updateCounter));
}

if (whyStatNumbers.length) {
    if ("IntersectionObserver" in window) {
        const whyStatsObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting && entry.intersectionRatio >= 1) {
                    animateWhyStat(entry.target);
                }
            });
        }, { threshold: 1 });

        whyStatNumbers.forEach(function(counter) {
            whyStatsObserver.observe(counter);
        });
    } else {
        whyStatNumbers.forEach(animateWhyStat);
    }
}


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




let loggedInUser = null;

try {
    loggedInUser = JSON.parse(localStorage.getItem("globalmoveUser"));
} catch (error) {
    localStorage.removeItem("globalmoveUser");
}

const username = loggedInUser && loggedInUser.name;

if (username) {
    document.querySelectorAll(".login-btn").forEach(function(button) {
        button.textContent = username;
        button.removeAttribute("href");
    });

    const registerLink = document.querySelector('.nav-links a[href="Register.html"]');

    if (registerLink) {
        const usernameLabel = document.createElement("span");
        usernameLabel.className = "nav-username";
        usernameLabel.textContent = username;
        registerLink.replaceWith(usernameLabel);
    }
}




        function toggleDropdown(event) {

            event.preventDefault();
            event.stopPropagation();

            const dropdown =
                document.getElementById("coursesDropdown");
            const toggle = event.currentTarget;
            const isOpen = dropdown.classList.toggle("show");

            toggle.setAttribute("aria-expanded", String(isOpen));
        }

        function closeDropdown() {
            const dropdown = document.getElementById("coursesDropdown");
            const toggle = document.querySelector(".dropdown-toggle");

            dropdown.classList.remove("show");
            toggle.setAttribute("aria-expanded", "false");
        }

        document.addEventListener("click", function(event) {
            if (!event.target.closest(".dropdown")) {
                closeDropdown();
            }
        });

        document.addEventListener("keydown", function(event) {
            if (event.key === "Escape") {
                closeDropdown();
            }
        });
