import React, { useState, useRef } from "react";
import "./Partnership.scss";
import Layout from "../../components/Layout";
import TopContent from "../../components/TopContent";
import GroupImage from "../../components/GroupImage";
import ContactTeam from "../../components/ContactTeam";
import FutureWork from "../../components/FutureWork";

const WorkStepsData = [
    {
        number: "01",
        step: "Company Signup",
        description:
            "Companies interested in partnering with Loveworld Virtual Internship begin by filling out a signup form. This form collects essential information about the company, including industry, size, location, internship preferences, and contact details.",
    },
    {
        number: "02",
        step: "Profile Review and Approval",
        description:
            "Loveworld Virtual Internship reviews the company profile to ensure alignment with the platform's goals and values. Once approved, the company gains access to the platform's resources and becomes visible to potential interns",
    },
    {
        number: "03",
        step: "Internship Posting",
        description:
            "Approved companies can post internship positions on the platform, specifying details such as roles, duration, requirements, and any additional information. This information helps attract suitable candidates interested in virtual internships.",
    },
    {
        number: "04",
        step: "Candidate Matching",
        description:
            "Loveworld Virtual Internship uses advanced algorithms to intelligently match companies with suitable candidates based on the company's requirements and the interns' skills, qualifications, and career goals. This ensures a mutually beneficial and productive partnership.",
    },
    {
        number: "05",
        step: "Virtual Onboarding",
        description:
            "Once a company and an intern express mutual interest, the virtual onboarding process begins. This involves orientation, setting expectations, and providing necessary resources for a smooth start to the virtual internship.",
    },
    {
        number: "06",
        step: "Internship Collaboration",
        description:
            "During the internship period, companies actively engage with interns, providing mentorship, feedback, and a supportive environment for professional growth. Loveworld Virtual Internship facilitates networking opportunities, enhancing the overall intern experience.",
    },
    {
        number: "07",
        step: "Feedback and Evaluation:",
        description:
            "Companies provide feedback on the interns' performance, and interns have the opportunity to evaluate their virtual internship experience. This feedback loop helps both parties improve and contributes to the ongoing enhancement of the platform.",
    },
];

const workUniversitiesData = [
    {
        number: "01",
        step: "University Partnership Inquiry",
        description:
            "Universities interested in partnering with Loveworld Virtual Internship express their interest through an inquiry. This initiates the discussion on how the platform can align with the university's goals and contribute to the students' educational experience.",
    },
    {
        number: "02",
        step: "Agreement and Integration",
        description:
            "Upon agreement, Loveworld Virtual Internship and the university formalize the partnership. Integration processes are set up to seamlessly connect the virtual internship opportunities with the university's academic programs.",
    },
    {
        number: "03",
        step: "Student Onboarding",
        description:
            "The university assists students in signing up for Loveworld Virtual Internship, providing guidance on how to create profiles, search for internships, and apply for positions. This onboarding process ensures students are well-prepared to leverage virtual internships for their educational and career advancement.",
    },
    {
        number: "04",
        step: "Curriculum Alignment",
        description:
            "Loveworld Virtual Internship collaborates with the university to align internship opportunities with the curriculum. This ensures that virtual internships complement the students' academic studies, offering practical experiences that enhance their learning.",
    },
    {
        number: "05",
        step: "Monitoring and Support",
        description:
            "Throughout the virtual internship period, the university monitors students' progress, ensuring they are meeting academic requirements and extracting maximum value from the experience. Support services are available to address any challenges that may arise.",
    },
    {
        number: "06",
        step: "Feedback and Assessment",
        description:
            "Universities actively engage in the feedback process, providing insights into the effectiveness of virtual internships in meeting educational objectives. This collaborative feedback loop allows for continuous improvement and optimization of the partnership.",
    },
    {
        number: "07",
        step: "Graduate Employability:",
        description:
            "Loveworld Virtual Internship contributes to the university's goal of enhancing graduate employability. The practical skills and experiences gained through virtual internships position students for success in their future careers.",
    },
];

const WorkSteps = ({ isUniversity }) => {
    const timeoutRef = useRef(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const title = isUniversity ? "How it Works for Universities" : "How it Works for Companies";

    const data = isUniversity ? workUniversitiesData : WorkStepsData;

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
        clearTimeout(timeoutRef.current);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setHoveredIndex(null);
        }, 200);
    };

    return (
        <div className="partnership_workSteps">
            <div className="container">
                <h1>{title}</h1>
                <div className="partnership_workStepsBoxes">
                    {data?.map((d, i) => (
                        <div key={i} className="partnership_workStepsBox">
                            <div
                                className="home_internStepsBoxContent"
                                onMouseEnter={() => handleMouseEnter(i)}
                                onMouseLeave={() => handleMouseLeave()}
                            >
                                <h1>{d.number}</h1>
                                <h3
                                    className={`transition-element ${
                                        hoveredIndex === i ? "hidden_display" : ""
                                    }`}
                                >
                                    {d.step}
                                </h3>
                                <p
                                    className={`transition-element ${
                                        hoveredIndex === i ? "" : "hidden_display"
                                    }`}
                                >
                                    {d.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const WhyPartnership = () => {
    return (
        <div className="partnership_whyPart">
            <div className="partnership_whyPartContent">
                <h1>Why Your Organization Should Partner With Us</h1>
                <h5>
                    Loveworld Virtual Internship is one stop to deliver healthy, diverse and
                    sustainable talents for your organisation.
                </h5>
                <p>
                    1. Gain Increased access to diverse talent. <br />
                    2. Improve workplace Diversity <br /> 3. Increase your employees’ career
                    progression opportunities <br />
                    4. Allow your business grow sustainably, whilst opening up opportunities for
                    global talents globally
                </p>
            </div>
            <GroupImage type="partner" />
        </div>
    );
};

const Partnership = () => {
    return (
        <Layout className="partnership">
            <TopContent partnership />
            <WorkSteps />
            <WhyPartnership />
            <WorkSteps isUniversity />
            <ContactTeam />
            <FutureWork />
        </Layout>
    );
};

export default Partnership;
