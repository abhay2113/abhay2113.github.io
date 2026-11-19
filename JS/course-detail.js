const courses = {
    tasco: {
        name: "TASCO",
        description: "Advanced Training For Oil Tanker Cargo Operations.",
        type: "Advance Modular Course"
    },
    chemco: {
        name: "CHEMCO",
        description: "Chemical Tanker Cargo Operations.",
        type: "Advance Modular Course"
    },
    "hv-m": {
        name: "HV-(M)",
        description: "High voltage safety and switch gear training.",
        type: "Advance Modular Course"
    },
    "hv-o": {
        name: "HV-(O)",
        description: "High Voltage Safety And Switch Gear.",
        type: "Advance Modular Course"
    },
    otcto: {
        name: "OTCTO",
        description: "Basic oil tanker and chemical tanker operations training.",
        type: "Basic Modular Course"
    },
    psf: {
        name: "PSF",
        description: "Passenger Ship Familiarization.",
        type: "Basic Modular Course"
    },
    "medical-examiners": {
        name: "Medical Examiners",
        description: "Familiarisation Course for Medical Examiner of Seafarers.",
        type: "Basic Modular Course"
    },
    augff: {
        name: "AUGFF",
        description: "Augmentation of Fire Prevention and Fire Fighting Course.",
        type: "Basic Modular Course"
    },
    stsdsd: {
        name: "STSDSD",
        description: "Security Training for Seafarers with designated Security Duties.",
        type: "Basic Modular Course"
    },
    "r-fpff-with-fpff": {
        name: "R-FPFF with FPFF",
        description: "Refresher Training For Proficiency In Fire Prevention And Fire Fighting.",
        type: "Basic Modular Course"
    },
    "r-pst": {
        name: "R-PST",
        description: "Refresher Training For Personal Survival Techniques.",
        type: "Basic Modular Course"
    },
    sfs: {
        name: "sF",
        description: "SFS.",
        type: "Basic Modular Course"
    },
    pscrb: {
        name: "PSCRB",
        description: "Proficiency in Survival Craft and Rescue Boats.",
        type: "Advance Modular Course"
    },
    mfa: {
        name: "MFA",
        description: "Medical First Aid.",
        type: "Advance Modular Course"
    },
    aff: {
        name: "AFF",
        description: "Advanced Fire Fighting training.",
        type: "Advance Modular Course"
    },
    "r-pscrb-pst": {
        name: "R-PSCRB with PST",
        description: "Ref.-Proficiency In Survival Craft And Rescue Boats.",
        type: "Advance Modular Course"
    },
    "r-aff": {
        name: "R-AFF",
        description: "Reff.-Advanced Fire Fighting.",
        type: "Advance Modular Course"
    },
    "r-mfa": {
        name: "R-MFA",
        description: "Reff.-Medical First Aid.",
        type: "Advance Modular Course"
    },
    "rut-m": {
        name: "RUT (M)",
        description: "Deck Officer (Revalidation).",
        type: "Advance Modular Course"
    },
    "rut-o": {
        name: "RUT (O)",
        description: "Deck Officer Re-validation (Operational).",
        type: "Advance Modular Course"
    },
    "mhc": {
        name: "Marine Hazmat Course",
        description: "Learn safe handling practices for hazardous materials in maritime operations.",
        type: "Value Added Course"
    },
    "mfwc": {
        name: "Marine Fire Watchman Course",
        description: "Prepare to monitor work areas and recognise fire hazards during marine work.",
        type: "Value Added Course"
    },
    "mgot": {
        name: "Marine Gangway Operator Training",
        description: "Build skills for safe gangway operation and access between vessels and shore.",
        type: "Value Added Course"
    },
    "mic": {
        name: "Marine Inspector Course",
        description: "Develop practical knowledge of inspection procedures in marine operations.",
        type: "Value Added Course"
    },
    "PBC": {
        name: "Marine PSB Course",
        description: "Training for safe personnel transfer using a basket in offshore operations.",
        type: "Value Added Course"
    },
    "SFC": {
        name: "Marine Scaffolding Familiarization Course (SFC)",
        description: "Get familiar with scaffolding systems and safe practices in marine settings.",
        type: "Value Added Course"
    },
    "rc": {
        name: "Roustabout Course",
        description: "Learn the practical skills and safety basics needed for offshore roustabout work.",
        type: "Value Added Course"
    },
    "rigging-scaffolding": {
        name: "Rigging and Scaffolding Training",
        description: "Build essential rigging and scaffolding skills for offshore work environments.",
        type: "Value Added Course"
    },
    "mslh": {
        name: "Marine Safe Lifting & Hoisting Course",
        description: "Learn safe practices for lifting and hoisting operations in marine settings.",
        type: "Value Added Course"
    },
    "mfo": {
        name: "Marine Forklift Operator Course",
        description: "Develop the operating skills and safety awareness needed to handle forklifts.",
        type: "Value Added Course"
    },
    "scaffolding-inspector": {
        name: "Scaffolding Inspector Course",
        description: "Learn how to inspect scaffolding and identify potential safety issues.",
        type: "Value Added Course"
    },
    "iadc": {
        name: "IADC Rig Pass Course",
        description: "Build foundational safety awareness for work on drilling rigs and related sites.",
        type: "Value Added Course"
    },
    "huetoac": {
        name: "HUET OPITO Approved — Code 5095",
        description: "Training in helicopter underwater escape procedures for offshore travel.",
        type: "Value Added Course"
    },
    "bosiet": {
        name: "BOSIET with EBS (OPITO Approved) — Code 5700",
        description: "Basic offshore safety and emergency response training, including EBS.",
        type: "Value Added Course"
    },
    "huet": {
        name: "Helicopter Underwater Escape Training (HUET)",
        description: "Practise escape procedures for an aircraft emergency at sea.",
        type: "Value Added Course"
    },
    "DPA": {
        name: "Designated Person Ashore (DPA)",
        description: "Understand the designated person's role in supporting shipboard safety management.",
        type: "Value Added Course"
    },
    "mmha": {
        name: "Marine Mental Health Awareness",
        description: "Promote mental health awareness and wellbeing in maritime workplaces.",
        type: "Value Added Course"
    },
    "RAII": {
        name: "Risk Assessment & Incident Investigation (RAII)",
        description: "Learn to assess risks, investigate incidents and identify preventive measures.",
        type: "Value Added Course"
    },
    "MEC": {
        name: "Maritime English Course (MEC)",
        description: "Strengthen English communication skills for maritime work and operations.",
        type: "Value Added Course"
    },
    "BTM-R": {
        name: "Bridge Team Management Refresher (BTM-R)",
        description: "Refresh bridge teamwork, communication and decision-making practices.",
        type: "Value Added Course"
    },
    "BTRM": {
        name: "Bridge Team Resource Management (BTRM)",
        description: "Develop effective teamwork and resource management on the bridge.",
        type: "Value Added Course"
    },
    "BTRM-2": {
        name: "Bridge Team Resource Management (BTRM)",
        description: "Build communication and coordination skills for safe bridge operations.",
        type: "Value Added Course"
    },
    "BRM-R": {
        name: "Bridge Resource Management Refresher (BRM-R)",
        description: "Refresh resource management practices for bridge teams.",
        type: "Value Added Course"
    },
    "BTRM-Re": {
        name: "Bridge Team Resource Management Refresher (BTRM-Refresher)",
        description: "Reinforce bridge team communication and decision-making skills.",
        type: "Value Added Course"
    },
    "BTM": {
        name: "Bridge Team Management (BTM)",
        description: "Develop the teamwork and operational skills needed for effective bridge management.",
        type: "Value Added Course"
    },
    "LCHS": {
        name: "Liquid Cargo Handling Simulator Training (LCHS)",
        description: "Practise liquid cargo handling procedures in a simulator environment.",
        type: "Value Added Course"
    },
    "LCBHST": {
        name: "LNG Cargo & Ballast Handling Simulator Training",
        description: "Train in LNG cargo and ballast handling using a simulator.",
        type: "Value Added Course"
    },
    "CSC": {
        name: "Crew Safety Course (CSC)",
        description: "Build awareness of safe practices and emergency response for crew members.",
        type: "Value Added Course"
    },
    "WSH": {
        name: "Working Safety on Height (WSH)",
        description: "Learn safe working practices and hazard awareness for work at height.",
        type: "Value Added Course"
    },
    "CCM": {
        name: "Crowd & Crisis Management (CCM)",
        description: "Prepare to manage crowds and respond effectively to crisis situations.",
        type: "Value Added Course"
    },
    "AI": {
        name: "Accident Investigation (AI)",
        description: "Learn how to analyse incidents and identify measures to prevent recurrence.",
        type: "Value Added Course"
    },
    "INC": {
        name: "Ice Navigation (INC)",
        description: "Build knowledge of navigation challenges and safe operations in icy waters.",
        type: "Value Added Course"
    },
    "CSO": {
        name: "Company Security Officer (CSO)",
        description: "Understand company security responsibilities and maritime security procedures.",
        type: "Value Added Course"
    },
    "BOSIET": {
        name: "Basic Offshore Safety Induction & Emergency Training (BOSIET)",
        description: "Prepare for offshore work with essential safety and emergency training.",
        type: "Value Added Course"
    },
    "H2S": {
        name: "Hydrogen Sulphide Safety (H2S)",
        description: "Learn essential safety practices for work in areas where H2S may be present.",
        type: "Value Added Course"
    },
    "H2S-OPITO": {
        name: "Hydrogen Sulphide Safety (H2S)",
        description: "Build awareness of H2S hazards and the safety procedures used to manage them.",
        type: "Value Added Course"
    },
    "HLO": {
        name: "Helicopter Landing Officer (HLO)",
        description: "Prepare to coordinate safe helicopter landing operations at offshore facilities.",
        type: "Value Added Course"
    },
    "HLA": {
        name: "Helicopter Landing Assistant (HLA)",
        description: "Develop skills to assist with helicopter landing operations and safety checks.",
        type: "Value Added Course"
    },
    "H2S-2": {
        name: "H2S OPITO Approved — Code 9014",
        description: "OPITO-approved training covering H2S hazard awareness and emergency response.",
        type: "Value Added Course"
    },
    "CA-EBS": {
        name: "CA-EBS (Compressed Air Emergency Breathing System)",
        description: "Learn the use of compressed air emergency breathing systems and related procedures.",
        type: "Value Added Course"
    },
    "Rigging-Slinging": {
        name: "Rigging & Slinging Course",
        description: "Learn safe rigging, slinging and load-handling practices.",
        type: "Value Added Course"
    },
    "Lifting-Hoisting": {
        name: "Lifting & Hoisting Course",
        description: "Build knowledge of safe lifting operations, equipment and procedures.",
        type: "Value Added Course"
    },
    "Banksman-Slinger": {
        name: "Banksman & Slinger Training Course",
        description: "Practise safe load signalling, slinging and communication during lifting work.",
        type: "Value Added Course"
    },
    "OEHTM": {
        name: "Offshore Emergency Helideck Team Member (OEHTM)",
        description: "Prepare helideck team members to support emergency response offshore.",
        type: "Value Added Course"
    },
    "Drilling-Familiarization": {
        name: "Drilling Familiarization Course",
        description: "Get familiar with drilling operations, equipment and the offshore work environment.",
        type: "Value Added Course"
    },
    "Winch-Operator": {
        name: "Winch Operator Course",
        description: "Develop safe operating skills for winch equipment and operations.",
        type: "Value Added Course"
    },
    "OERTM": {
        name: "Offshore Emergency Response Team Member (OERTM)",
        description: "Prepare to support emergency response as part of an offshore team.",
        type: "Value Added Course"
    },
    "Rig-Safety-Officer": {
        name: "Rig Safety Officer Course",
        description: "Build knowledge of safety oversight and hazard prevention on drilling rigs.",
        type: "Value Added Course"
    },
    "Crane-Operator": {
        name: "Crane Operator Stage Course",
        description: "Develop practical crane operating skills and safe lifting practices.",
        type: "Value Added Course"
    }
};

const courseId = new URLSearchParams(window.location.search).get("course");
const course = courses[courseId];
const courseData = window.COURSE_DATA[courseId];

if (course && courseData) {
    const courseImage = getCourseImageUrl(courseId);
    document.querySelector(".course-detail-hero").style.backgroundImage =
        `linear-gradient(90deg, rgba(5, 15, 30, .88), rgba(5, 15, 30, .48)), url("${courseImage}")`;
    document.title = `${course.name} | MarineCourse`;
    document.getElementById("course-name").textContent = course.name;
    document.getElementById("course-category").textContent = course.type;
    document.getElementById("course-description").textContent = course.description;
    document.getElementById("course-overview").textContent =
        `This course provides focused maritime training. ${course.description}`;
    document.getElementById("course-objectives").textContent =
        `This course helps participants develop knowledge and practical skills for ${course.name}, in line with the course requirements.`;
    document.getElementById("course-duration").textContent = courseData.duration;
    document.getElementById("course-type").textContent = course.type;
    document.getElementById("course-fee").textContent = courseData.fee;
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
            duration: courseData.duration,
            course_duration: courseData.duration,
            course_type: course.type,
            fee: courseData.fee,
            course_fee: courseData.fee,
            reply_to: formData.get("email").trim()
        };

        button.disabled = true;
        status.textContent = "Sending your enquiry...";

        emailjs.send(window.EMAILJS_CONFIG.serviceId, window.EMAILJS_CONFIG.templateId2, templateParams)
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
