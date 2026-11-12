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
    },
    "mhc": {
        name: "Marine Hazmat Course",
        description: "Learn safe handling practices for hazardous materials in maritime operations.",
        duration: "5 days",
        fee: "Contact us",
        type: "Value Added Course"
    },
    "mfwc": {
        name: "Marine Fire Watchman Course",
        description: "Prepare to monitor work areas and recognise fire hazards during marine work.",
        duration: "5 days",
        fee: "Contact us",
        type: "Value Added Course"
    },
    "mgot": {
        name: "Marine Gangway Operator Training",
        description: "Build skills for safe gangway operation and access between vessels and shore.",
        duration: "5 days",
        fee: "Contact us",
        type: "Value Added Course"
    },
    "mic": {
        name: "Marine Inspector Course",
        description: "Develop practical knowledge of inspection procedures in marine operations.",
        duration: "5 days",
        fee: "Contact us",
        type: "Value Added Course"
    },
    "PBC": {
        name: "Marine PSB Course",
        description: "Training for safe personnel transfer using a basket in offshore operations.",
        duration: "5 days",
        fee: "Contact us",
        type: "Value Added Course"
    },
    "SFC": {
        name: "Marine Scaffolding Familiarization Course (SFC)",
        description: "Get familiar with scaffolding systems and safe practices in marine settings.",
        duration: "5 days",
        fee: "Contact us",
        type: "Value Added Course"
    },
    "rc": {
        name: "Roustabout Course",
        description: "Learn the practical skills and safety basics needed for offshore roustabout work.",
        duration: "5 days",
        fee: "Contact us",
        type: "Value Added Course"
    },
    "rigging-scaffolding": {
        name: "Rigging and Scaffolding Training",
        description: "Build essential rigging and scaffolding skills for offshore work environments.",
        duration: "5 days",
        fee: "Contact us",
        type: "Value Added Course"
    },
    "mslh": {
        name: "Marine Safe Lifting & Hoisting Course",
        description: "Learn safe practices for lifting and hoisting operations in marine settings.",
        duration: "5 days",
        fee: "Contact us",
        type: "Value Added Course"
    },
    "mfo": {
        name: "Marine Forklift Operator Course",
        description: "Develop the operating skills and safety awareness needed to handle forklifts.",
        duration: "5 days",
        fee: "Contact us",
        type: "Value Added Course"
    },
    "scaffolding-inspector": {
        name: "Scaffolding Inspector Course",
        description: "Learn how to inspect scaffolding and identify potential safety issues.",
        duration: "5 days",
        fee: "Contact us",
        type: "Value Added Course"
    },
    "iadc": {
        name: "IADC Rig Pass Course",
        description: "Build foundational safety awareness for work on drilling rigs and related sites.",
        duration: "5 days",
        fee: "Contact us",
        type: "Value Added Course"
    },
    "huetoac": {
        name: "HUET OPITO Approved — Code 5095",
        description: "Training in helicopter underwater escape procedures for offshore travel.",
        duration: "5 days",
        fee: "Contact us",
        type: "Value Added Course"
    },
    "bosiet": {
        name: "BOSIET with EBS (OPITO Approved) — Code 5700",
        description: "Basic offshore safety and emergency response training, including EBS.",
        duration: "5 days",
        fee: "Contact us",
        type: "Value Added Course"
    },
    "huet": {
        name: "Helicopter Underwater Escape Training (HUET)",
        description: "Practise escape procedures for an aircraft emergency at sea.",
        duration: "5 days",
        fee: "Contact us",
        type: "Value Added Course"
    },
    "DPA": {
        name: "Designated Person Ashore (DPA)",
        description: "Understand the designated person's role in supporting shipboard safety management.",
        duration: "5 days",
        fee: "Contact us",
        type: "Value Added Course"
    },
    "mmha": {
        name: "Marine Mental Health Awareness",
        description: "Promote mental health awareness and wellbeing in maritime workplaces.",
        duration: "5 days",
        fee: "Contact us",
        type: "Value Added Course"
    },
    "RAII": {
        name: "Risk Assessment & Incident Investigation (RAII)",
        description: "Learn to assess risks, investigate incidents and identify preventive measures.",
        duration: "5 days",
        fee: "Contact us",
        type: "Value Added Course"
    },
    "MEC": {
        name: "Maritime English Course (MEC)",
        description: "Strengthen English communication skills for maritime work and operations.",
        duration: "5 days",
        fee: "Contact us",
        type: "Value Added Course"
    },
    "BTM-R": {
        name: "Bridge Team Management Refresher (BTM-R)",
        description: "Refresh bridge teamwork, communication and decision-making practices.",
        duration: "5 days",
        fee: "Contact us",
        type: "Value Added Course"
    },
    "BTRM": {
        name: "Bridge Team Resource Management (BTRM)",
        description: "Develop effective teamwork and resource management on the bridge.",
        duration: "5 days",
        fee: "Contact us",
        type: "Value Added Course"
    },
    "BTRM-2": {
        name: "Bridge Team Resource Management (BTRM)",
        description: "Build communication and coordination skills for safe bridge operations.",
        duration: "5 days",
        fee: "Contact us",
        type: "Value Added Course"
    },
    "BRM-R": {
        name: "Bridge Resource Management Refresher (BRM-R)",
        description: "Refresh resource management practices for bridge teams.",
        duration: "5 days",
        fee: "Contact us",
        type: "Value Added Course"
    },
    "BTRM-Re": {
        name: "Bridge Team Resource Management Refresher (BTRM-Refresher)",
        description: "Reinforce bridge team communication and decision-making skills.",
        duration: "5 days",
        fee: "Contact us",
        type: "Value Added Course"
    },
    "BTM": {
        name: "Bridge Team Management (BTM)",
        description: "Develop the teamwork and operational skills needed for effective bridge management.",
        duration: "5 days",
        fee: "Contact us",
        type: "Value Added Course"
    },
    "LCHS": {
        name: "Liquid Cargo Handling Simulator Training (LCHS)",
        description: "Practise liquid cargo handling procedures in a simulator environment.",
        duration: "5 days",
        fee: "Contact us",
        type: "Value Added Course"
    },
    "LCBHST": {
        name: "LNG Cargo & Ballast Handling Simulator Training",
        description: "Train in LNG cargo and ballast handling using a simulator.",
        duration: "5 days",
        fee: "Contact us",
        type: "Value Added Course"
    },
    "CSC": {
        name: "Crew Safety Course (CSC)",
        description: "Build awareness of safe practices and emergency response for crew members.",
        duration: "5 days",
        fee: "Contact us",
        type: "Value Added Course"
    },
    "WSH": {
        name: "Working Safety on Height (WSH)",
        description: "Learn safe working practices and hazard awareness for work at height.",
        duration: "5 days",
        fee: "Contact us",
        type: "Value Added Course"
    },
    "CCM": {
        name: "Crowd & Crisis Management (CCM)",
        description: "Prepare to manage crowds and respond effectively to crisis situations.",
        duration: "5 days",
        fee: "Contact us",
        type: "Value Added Course"
    },
    "AI": {
        name: "Accident Investigation (AI)",
        description: "Learn how to analyse incidents and identify measures to prevent recurrence.",
        duration: "5 days",
        fee: "Contact us",
        type: "Value Added Course"
    },
    "INC": {
        name: "Ice Navigation (INC)",
        description: "Build knowledge of navigation challenges and safe operations in icy waters.",
        duration: "5 days",
        fee: "Contact us",
        type: "Value Added Course"
    },
    "CSO": {
        name: "Company Security Officer (CSO)",
        description: "Understand company security responsibilities and maritime security procedures.",
        duration: "5 days",
        fee: "Contact us",
        type: "Value Added Course"
    },
    "BOSIET": {
        name: "Basic Offshore Safety Induction & Emergency Training (BOSIET)",
        description: "Prepare for offshore work with essential safety and emergency training.",
        duration: "5 days",
        fee: "Contact us",
        type: "Value Added Course"
    },
    "H2S": {
        name: "Hydrogen Sulphide Safety (H2S)",
        description: "Learn essential safety practices for work in areas where H2S may be present.",
        duration: "5 days",
        fee: "Contact us",
        type: "Value Added Course"
    },
    "H2S-OPITO": {
        name: "Hydrogen Sulphide Safety (H2S)",
        description: "Build awareness of H2S hazards and the safety procedures used to manage them.",
        duration: "5 days",
        fee: "Contact us",
        type: "Value Added Course"
    },
    "HLO": {
        name: "Helicopter Landing Officer (HLO)",
        description: "Prepare to coordinate safe helicopter landing operations at offshore facilities.",
        duration: "5 days",
        fee: "Contact us",
        type: "Value Added Course"
    },
    "HLA": {
        name: "Helicopter Landing Assistant (HLA)",
        description: "Develop skills to assist with helicopter landing operations and safety checks.",
        duration: "5 days",
        fee: "Contact us",
        type: "Value Added Course"
    },
    "H2S-2": {
        name: "H2S OPITO Approved — Code 9014",
        description: "OPITO-approved training covering H2S hazard awareness and emergency response.",
        duration: "5 days",
        fee: "Contact us",
        type: "Value Added Course"
    },
    "CA-EBS": {
        name: "CA-EBS (Compressed Air Emergency Breathing System)",
        description: "Learn the use of compressed air emergency breathing systems and related procedures.",
        duration: "5 days",
        fee: "Contact us",
        type: "Value Added Course"
    },
    "Rigging-Slinging": {
        name: "Rigging & Slinging Course",
        description: "Learn safe rigging, slinging and load-handling practices.",
        duration: "5 days",
        fee: "Contact us",
        type: "Value Added Course"
    },
    "Lifting-Hoisting": {
        name: "Lifting & Hoisting Course",
        description: "Build knowledge of safe lifting operations, equipment and procedures.",
        duration: "5 days",
        fee: "Contact us",
        type: "Value Added Course"
    },
    "Banksman-Slinger": {
        name: "Banksman & Slinger Training Course",
        description: "Practise safe load signalling, slinging and communication during lifting work.",
        duration: "5 days",
        fee: "Contact us",
        type: "Value Added Course"
    },
    "OEHTM": {
        name: "Offshore Emergency Helideck Team Member (OEHTM)",
        description: "Prepare helideck team members to support emergency response offshore.",
        duration: "5 days",
        fee: "Contact us",
        type: "Value Added Course"
    },
    "Drilling-Familiarization": {
        name: "Drilling Familiarization Course",
        description: "Get familiar with drilling operations, equipment and the offshore work environment.",
        duration: "5 days",
        fee: "Contact us",
        type: "Value Added Course"
    },
    "Winch-Operator": {
        name: "Winch Operator Course",
        description: "Develop safe operating skills for winch equipment and operations.",
        duration: "5 days",
        fee: "Contact us",
        type: "Value Added Course"
    },
    "OERTM": {
        name: "Offshore Emergency Response Team Member (OERTM)",
        description: "Prepare to support emergency response as part of an offshore team.",
        duration: "5 days",
        fee: "Contact us",
        type: "Value Added Course"
    },
    "Rig-Safety-Officer": {
        name: "Rig Safety Officer Course",
        description: "Build knowledge of safety oversight and hazard prevention on drilling rigs.",
        duration: "5 days",
        fee: "Contact us",
        type: "Value Added Course"
    },
    "Crane-Operator": {
        name: "Crane Operator Stage Course",
        description: "Develop practical crane operating skills and safe lifting practices.",
        duration: "5 days",
        fee: "Contact us",
        type: "Value Added Course"
    }
};

emailjs.init({
    publicKey: "UPJgWYUTS-uNOESHF"
});

const course = courses[new URLSearchParams(window.location.search).get("course")];

if (course) {
    document.title = `${course.name} | MarineCourse`;
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
