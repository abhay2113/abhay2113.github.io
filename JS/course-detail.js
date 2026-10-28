const courses = {
    tasco: {
        name: "TASCO",
        description: "Advanced training for oil tanker cargo operations.",
        duration: "6 days",
        fee: "₹ 5,500",
        type: "Tanker training"
    },
    "hv-m": {
        name: "HV-(M)",
        description: "High voltage safety and switch gear training.",
        duration: "4 days",
        fee: "₹ 6,000",
        type: "Safety training"
    },
    otcto: {
        name: "OTCTO",
        description: "Basic oil tanker and chemical tanker operations training.",
        duration: "6 days",
        fee: "₹ 4,500",
        type: "Tanker training"
    },
    pscrb: {
        name: "PSCRB",
        description: "Proficiency in Survival Craft and Rescue Boats.",
        duration: "5 days",
        fee: "Contact us",
        type: "Advance Modular Course"
    },
    mfa: {
        name: "MFA",
        description: "Medical First Aid training for maritime personnel.",
        duration: "5 days",
        fee: "Contact us",
        type: "Advance Modular Course"
    },
    iasco: {
        name: "IASCO",
        description: "Advanced training for oil tanker cargo operations.",
        duration: "10 days",
        fee: "Contact us",
        type: "Advance Modular Course"
    },
    aff: {
        name: "AFF",
        description: "Advanced Fire Fighting training.",
        duration: "5 days",
        fee: "Contact us",
        type: "Advance Modular Course"
    },
    "r-pscrb-pst": {
        name: "R-PSCRB WITH PST",
        description: "Refresher training in Proficiency in Survival Craft and Rescue Boats.",
        duration: "1 day",
        fee: "Contact us",
        type: "Advance Modular Course"
    },
    "rut-o": {
        name: "RUT (O)",
        description: "Deck Officer Re-validation (Operational).",
        duration: "5 days",
        fee: "Contact us",
        type: "Advance Modular Course"
    }
};

emailjs.init({
    publicKey: "UPJgWYUTS-uNOESHF"
});

const course = courses[new URLSearchParams(window.location.search).get("course")];

if (course) {
    document.title = `${course.name} Course | GlobalMove`;
    document.getElementById("course-name").textContent = course.name;
    document.getElementById("course-category").textContent = course.type;
    document.getElementById("course-description").textContent = course.description;
    document.getElementById("course-overview").textContent =
        `This course provides focused maritime training. ${course.description}`;
    document.getElementById("course-objectives").textContent =
        `This course helps participants develop knowledge and practical skills for ${course.name}, in line with the course requirements.`;
    document.getElementById("course-duration").textContent = course.duration;
    document.getElementById("course-type").textContent = course.type;
    document.getElementById("course-fee").textContent = course.fee;
    document.getElementById("enquiry-course").value = course.name;

    window.sendCourseEnquiry = function (event) {
        event.preventDefault();

        const form = event.currentTarget;
        const button = form.querySelector('button[type="submit"]');
        const status = document.getElementById("enquiry-status");
        const formData = new FormData(form);
        const templateParams = {
            course: course.name,
            course_name: course.name,
            name: formData.get("name").trim(),
            candidate_name: formData.get("name").trim(),
            email: formData.get("email").trim(),
            phone: formData.get("phone").trim(),
            mobile: formData.get("phone").trim(),
            duration: course.duration,
            course_duration: course.duration,
            course_type: course.type,
            fee: course.fee,
            course_fee: course.fee,
            reply_to: formData.get("email").trim()
        };

        button.disabled = true;
        status.textContent = "Sending your enquiry...";

        emailjs.send("service_4ltkjwh", "template_t3jel75", templateParams)
            .then(function () {
                status.textContent = "Your enquiry was sent successfully. We will contact you soon.";
                form.reset();
                document.getElementById("enquiry-course").value = course.name;
            })
            .catch(function (error) {
                status.textContent = "Could not send your enquiry. Please try again.";
                console.error("EmailJS course enquiry failed:", error);
            })
            .finally(function () {
                button.disabled = false;
            });
    };
} else {
    document.title = "Course details unavailable | GlobalMove";
    document.getElementById("course-name").textContent = "Course details unavailable";
    document.getElementById("course-description").textContent =
        "We could not find details for this course. Return to the courses page to select a course.";
    document.getElementById("course-overview").textContent =
        "Please choose a course from the courses page or contact the institute for assistance.";
    document.getElementById("course-objectives").textContent =
        "Course objectives will be available once a valid course has been selected.";
    document.getElementById("course-enquiry").hidden = true;
    document.querySelector(".course-summary").hidden = true;
}
