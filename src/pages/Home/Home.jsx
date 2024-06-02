import React, { useEffect, useState, useRef } from "react";
import "./Home.scss";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import Navbar from "../../components/Navbar";
import UserFeedback from "../../components/UserFeedback";
import Footer from "../../components/Footer";
import TopContent from "../../components/TopContent";
import Breifcase from "../../assets/SVGs/Breifcase";
import People from "../../assets/SVGs/People";
import Book from "../../assets/SVGs/Book";
import Cube from "../../assets/SVGs/Cube";
import GroupImage from "../../components/GroupImage";
import { ErrorToast, SuccessToast } from "../../utils/toast";
import ScheduleMeeting from "../../components/Dashboard/ScheduleMeeting/ScheduleMeeting";
import { useVerifyEmail } from "../../services/queries/admin";

const InternshipSteps = [
    {
        title: "Uncover Opportunities",
        description:
            "discovered by registering with Loveworld Virtual Internship. Our platform opens doors to remote work experience opportunities and new career paths. Through a streamlined registration process, individuals can showcase their skills, interests, and aspirations, setting the stage for exciting virtual internship possibilities.",
    },
    {
        title: "Innovative Matching",
        description:
            "Once registered, participants are strategically paired with innovative departments, companies, and offices that align with their skills and career goals. Leveraging intelligent matching algorithms, we ensure that interns are connected with opportunities that best suit their profiles. Additionally, interns have the chance to upskill through our diverse array of training programs, conferences, and network meetups, enhancing their readiness for the virtual work environment.",
    },
    {
        title: "Develop Proficiency",
        description:
            "After successful pairing, interns embark on a definitive virtual work placement. This experience is not just about performing tasks; it&apos;s a comprehensive journey supported by a dedicated internship instructor. Through mentorship, guidance, and ongoing support, participants gain valuable hands-on experience in their chosen field, laying the foundation for future success.",
    },
    {
        title: "Continuous Support and Development",
        description:
            "Loveworld Virtual Internship is committed to the continuous growth of participants. Interns receive unwavering support from a committed internship instructor throughout their virtual placement. This mentorship ensures that interns not only navigate their current roles effectively but also develop the skills and resilience necessary for a successful career beyond the internship period.",
    },
];

const InternshipStep = () => {
    const timeoutRef = useRef(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);

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
        <div className="home_internSteps">
            <div className="container">
                <h1>How Our Internships Work</h1>

                <div className="home_internStepsMain">
                    {InternshipSteps.map((s, i) => (
                        <div key={i} className="home_internStepsBox">
                            <div
                                className="home_internStepsBoxContent"
                                onMouseEnter={() => handleMouseEnter(i)}
                                onMouseLeave={() => handleMouseLeave()}
                            >
                                <h3
                                    className={`transition-element ${hoveredIndex === i ? "hidden_display" : ""}`}
                                >
                                    {s.title}
                                </h3>
                                <p
                                    className={`transition-element ${hoveredIndex === i ? "" : "hidden_display"}`}
                                >
                                    {s.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const InternshipForData1 = [
    {
        title: "Students",
        description: "Flexible Integration with Studies",
        description_text:
            " If you're a student seeking to seamlessly integrate an internship into your academic schedule, Loveworld Virtual Internship is for you. Choose from virtual work placements lasting 1-4 months to gain valuable working experience even before you graduate. The experience gained will significantly enhance your CV, making you stand out in the competitive job market.",
    },
    {
        title: "Graduates",
        description: `Career Field Experience`,
        description_text:
            " For graduates aiming to accumulate more work experience in their desired career field, our virtual internship opportunities provide the perfect chance. Gain the practical experience needed to kickstart your career journey with hands-on internships that align with your aspirations.",
    },
    {
        title: "Companies",
        description: "Access Global Talent Pool",
        description_text:
            " Loveworld Virtual Internship actively collaborates with educational institutions and corporations to transform the working environment. By partnering with us, institutions and corporations contribute to the professional development of students and graduates, creating a bridge between academic learning and practical application.",
    },
    {
        title: "Educational Institutions/Partners",
        description: "Transformative Partnerships",
        description_text:
            "Companies looking to onboard ambitious, innovative, and dynamic interns on a global scale should consider partnering with Loveworld Virtual Internship. Our platform ensures a steady influx of talented individuals, providing companies with the opportunity to tap into a diverse pool of skilled interns ready to contribute to the success and innovation of the organization.",
    },
];

const InternshipFor = ({ header }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const timeoutRef = useRef(null);

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
        <div className="home_internFor">
            <div className="container">
                <div className="home_internForContent1">
                    <h1>{header}</h1>
                    <div className="home_internForContent1Parent">
                        <div className="home_internForContent1Main">
                            {InternshipForData1.map((d, i) => (
                                <div
                                    key={i}
                                    className="home_internForContent1Box"
                                    onMouseEnter={() => handleMouseEnter(i)}
                                    onMouseLeave={() => handleMouseLeave()}
                                >
                                    <div
                                        className={`boxTitleAndDescription transition-element ${
                                            hoveredIndex === i ? "hidden_display" : ""
                                        }`}
                                    >
                                        <h3>{d.title}</h3>
                                        <p>{d.description}</p>
                                    </div>

                                    <div
                                        className={`boxInformation transition-element ${
                                            hoveredIndex === i ? "" : "hidden_display"
                                        }`}
                                    >
                                        <p>{d.description_text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <GroupImage />
                    </div>
                </div>
            </div>
        </div>
    );
};

const WhyInternData = [
    {
        icon: Breifcase,
        title: "Remote Accessibility",
        description:
            "Remote Accessibility Loveworld Virtual Internship offers the unique advantage of gaining professional skills and work experience from the comfort of your own home. This flexibility allows participants, whether students, graduates, or career-switchers, to engage in valuable learning experiences without geographical constraints.",
    },
    {
        icon: People,
        title: "Tailored to Career Ambitions",
        description:
            "Our platform excels in matching participants with virtual internships that align with their specific career ambitions. Whether you're a student exploring options, a graduate seeking relevant industry exposure, or a career-switcher pursuing a new path, Loveworld ensures that your virtual internship is tailored to your professional goals.",
    },
    {
        icon: Book,
        title: "Professional Skills Development",
        description:
            "Participants in Loveworld Virtual Internships not only gain theoretical knowledge but also actively develop professional skills. The hands-on nature of virtual internships facilitates the application of theoretical concepts, enabling individuals to enhance their skill set and become more competitive in the job market.",
    },
    {
        icon: Cube,
        title: "Networking Opportunities",
        description:
            "Networking is a crucial aspect of career development, and Loveworld Virtual Internship recognizes its significance. Participants have the opportunity to build a global network of connections, engaging with mentors, industry professionals, and peers. This networking component adds an extra layer of value, providing avenues for mentorship, collaboration, and future career opportunities.",
    },
];

const WhyInternship = ({ isTabletScreen }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <div className="home_whyIntern">
            <div className="container">
                <div className="home_whyInternTop">
                    <h1>Why Choose Loveworld Internship</h1>
                    <p>
                        Loveworld Virtual Internships allows students, graduates, and
                        career-switchers to gain professional skills and work experience from the
                        comfort of their very own home, matched to their desired career ambitions.
                    </p>
                </div>
                <div className="home_whyInternBoxes">
                    {WhyInternData.map((d, i) => (
                        <React.Fragment key={`tablet_whyIntern_${i}`}>
                            {isTabletScreen ? (
                                <div key={i} className="home_whyInternBox">
                                    <d.icon />
                                    <h6>{d.title}</h6>
                                    <p>{d.description}</p>
                                </div>
                            ) : (
                                <div
                                    key={i}
                                    className="home_whyInternBox"
                                    onMouseEnter={() => handleMouseEnter(i)}
                                    onMouseLeave={() => handleMouseLeave()}
                                    style={{
                                        borderColor: hoveredIndex === i ? "#DA980A" : "#FFFCF5",
                                    }}
                                >
                                    <d.icon
                                        style={{
                                            fill: hoveredIndex === i ? "#DA980A" : "none",
                                        }}
                                    />
                                    <h6>{d.title}</h6>
                                    <p>{d.description}</p>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Home = () => {
    const width = useWindowWidth();
    const isTabletScreen = width < 767;

    const [newUser, setNewUser] = useState(false);
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const { data, isSuccess } = useVerifyEmail(
        searchParams.get("token"),
        searchParams.get("email"),
    );

    useEffect(() => {
        try {
            if (isSuccess) {
                SuccessToast(data?.msg);
                setNewUser(true);
            }
        } catch (error) {
            ErrorToast(`${error?.response?.data?.msg}! Already Verified`);
        } finally {
            navigate("/");
        }
    }, [data?.msg, isSuccess, navigate]);

    if (newUser) {
        return <ScheduleMeeting handleClose={() => setNewUser(false)} />;
    }

    return (
        <div className="home">
            <Navbar />
            <TopContent />
            <InternshipStep />
            <InternshipFor header="WHO IS LOVEWORLD VIRTUAL INTERNSHIP FOR?" />
            <WhyInternship isTabletScreen={isTabletScreen} />
            <UserFeedback />
            <Footer />
        </div>
    );
};

export default Home;
