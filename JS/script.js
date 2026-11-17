
/* =========================================
   MARINECOURSE HERO SLIDER
   CHANGE EVERY 4 SECONDS
========================================= */

const courseImageUrls = {
    tanker: "https://images.pexels.com/photos/36563588/pexels-photo-36563588/free-photo-of-oil-tanker-at-sea-during-sunset.jpeg?auto=compress&cs=tinysrgb&w=1200",
    cargo: "https://images.pexels.com/photos/33284879/pexels-photo-33284879/free-photo-of-cargo-ships-anchored-at-coastal-port-under-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1200",
    offshore: "https://images.pexels.com/photos/3192662/pexels-photo-3192662.jpeg?auto=compress&cs=tinysrgb&w=1200",
    // fire: "https://images.pexels.com/photos/20659632/pexels-photo-20659632/free-photo-of-firefighters-with-water-hose.jpeg?auto=compress&cs=tinysrgb&w=1200",
    fire: "../images/fire.jpg",
    lifeboat: "https://images.pexels.com/photos/38209970/pexels-photo-38209970/free-photo-of-lifeboats-securely-mounted-on-deck-of-cruise-ship.jpeg?auto=compress&cs=tinysrgb&w=1200",
    medical: "https://images.pexels.com/photos/31852746/pexels-photo-31852746/free-photo-of-comprehensive-first-aid-supplies-kit-essentials.jpeg?auto=compress&cs=tinysrgb&w=1200",
    helicopter: "https://images.pexels.com/photos/35676602/pexels-photo-35676602/free-photo-of-yellow-helicopter-hovering-above-cargo-ship-at-sea.jpeg?auto=compress&cs=tinysrgb&w=1200",
    scaffolding: "https://images.pexels.com/photos/33998571/pexels-photo-33998571/free-photo-of-intricate-scaffold-structure-on-building-site.jpeg?auto=compress&cs=tinysrgb&w=1200",
    forklift: "https://images.pexels.com/photos/39752902/pexels-photo-39752902/free-photo-of-industrial-forklift-at-urban-dockyard.jpeg?auto=compress&cs=tinysrgb&w=1200",
    lifting: "https://images.pexels.com/photos/11454241/pexels-photo-11454241.jpeg?auto=compress&cs=tinysrgb&w=1200",
    bridge: "https://images.pexels.com/photos/21753183/pexels-photo-21753183/free-photo-of-bridge-console-on-the-of-a-ferry-sailing-along-the-shore.jpeg?auto=compress&cs=tinysrgb&w=1200",
    chemical: "https://images.pexels.com/photos/209230/pexels-photo-209230.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gangway: "https://images.pexels.com/photos/16258517/pexels-photo-16258517/free-photo-of-industrial-ship-and-crane.jpeg?auto=compress&cs=tinysrgb&w=1200",
    inspection: "https://images.pexels.com/photos/36672961/pexels-photo-36672961/free-photo-of-dock-worker-inspecting-cargo-ship-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1200",
    safety: "https://images.pexels.com/photos/17420865/pexels-photo-17420865/free-photo-of-rescue-man-pouring-water-from-a-ship.jpeg?auto=compress&cs=tinysrgb&w=1200",
    wellbeing: "https://images.pexels.com/photos/8942683/pexels-photo-8942683.jpeg?auto=compress&cs=tinysrgb&w=1200"
};

function getCourseImageUrl(courseText) {
    const text = String(courseText || "").toLowerCase();

    if (/otcto|oil tanker|chemical tanker|tanker cargo|iasco|tasco/.test(text)) return courseImageUrls.tanker;
    if (/gangway/.test(text)) return courseImageUrls.gangway;
    if (/inspector|inspection|incident|accident|risk assessment/.test(text)) return courseImageUrls.inspection;
    if (/mental health|wellbeing/.test(text)) return courseImageUrls.wellbeing;
    if (/stsdsd|security|emergency response|\boertm\b|crew safety|crowd|crisis|\bsf\b/.test(text)) return courseImageUrls.safety;
    if (/helicopter|huet|helideck|hlo|hla|ca-ebs/.test(text)) return courseImageUrls.helicopter;
    if (/medical|first aid|examiner|\bmfa\b/.test(text)) return courseImageUrls.medical;
    if (/fire|firefighting|\baff\b|augff|fpff/.test(text)) return courseImageUrls.fire;
    if (/scaffold|working safety on height|\bwsh\b/.test(text)) return courseImageUrls.scaffolding;
    if (/forklift/.test(text)) return courseImageUrls.forklift;
    if (/crane|lifting|hoisting|sling|rigging|banksman|winch/.test(text)) return courseImageUrls.lifting;
    if (/bridge|navigation|\bbtm\b|\bbrm\b|\bbtrm\b|ice navigation|\bdpa\b|maritime english|\bmec\b|\brut\b/.test(text)) return courseImageUrls.bridge;
    if (/lifeboat|survival|rescue|pscrb|\bpst\b|\bpsf\b|passenger ship|\boehtm\b/.test(text)) return courseImageUrls.lifeboat;
    if (/chemical|hazmat|h2s|hydrogen sulphide/.test(text)) return courseImageUrls.chemical;
    if (/lng|tanker|cargo|lchs/.test(text)) return courseImageUrls.cargo;
    if (/offshore|bosiet|roustabout|drilling|oil rig|\brig\b|\bpsb\b|high voltage|hv-\(m\)|crew transfer|personnel transfer|rig safety/.test(text)) return courseImageUrls.offshore;

    return courseImageUrls.bridge;
}

document.querySelectorAll(".course-landing-page .course-card").forEach(function(card) {
    const title = card.querySelector(".course-card-content h3");
    card.style.backgroundImage = `url("${getCourseImageUrl(title && title.textContent)}")`;
});

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
