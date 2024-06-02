import React, { useState, useRef } from "react";
import "./About.scss";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const MainContent = () => {
    return (
        <div className="about_main">
            <div className="about_mainContent">
                <h1>Our mission is to Guarantee your Unbeatable Advantage</h1>
                <p>
                    At Loveworld Virtual Internship, our mission is to make you stand out by
                    expanding your global mindset. Through our unique end-to-end platform, we are
                    dedicated to facilitating intelligent and rapid matches between students and
                    companies, providing seamless access to real global internships at the
                    world&apos;s most exciting companies.
                </p>
            </div>
        </div>
    );
};

const KeyAreasData = [
    {
        number: "01",
        title: "Global Mindset Development",
        description:
            "We prioritize the cultivation of a global mindset among our interns, fostering an appreciation for diverse perspectives, cultures, and business practices. Through exposure to international experiences, we aim to broaden horizons and instill a sense of adaptability in our participants.",
    },
    {
        number: "02",
        title: "Intelligent Matching",
        description:
            " Our focus includes implementing cutting-edge algorithms and technology to ensure intelligent and rapid matches between students and companies. By carefully aligning the skills, interests, and goals of interns with the needs of dynamic companies, we create mutually beneficial partnerships.",
    },
    {
        number: "03",
        title: "Real Global Internships",
        description:
            " We provide access to real global internships at some of the world&apos;s most exciting and innovative companies. Our commitment is to offer hands-on experiences that go beyond traditional boundaries, allowing interns to apply their knowledge in real-world scenarios and gain a competitive edge in their chosen fields.",
    },
    {
        number: "04",
        title: "Comprehensive Training Programs",
        description:
            " Before and during internships, we invest in the professional development of our interns. Our comprehensive training programs cover essential skills, industry-specific knowledge, and soft skills, ensuring that participants are well-prepared to excel in their roles and contribute meaningfully to their host organizations.",
    },
    {
        number: "05",
        title: "Global Network Activation",
        description:
            "Loveworld Virtual Internship focuses on unlocking a global network of relationships. We facilitate connections between interns, mentors, industry experts, and peers, creating a community that extends beyond borders. This network becomes a valuable resource for ongoing support, mentorship, and collaboration throughout and beyond the internship experience.",
    },
    {
        number: "06",
        title: "Innovation and Technology Integration",
        description:
            " Embracing the digital age, we emphasize innovation and technology integration in all aspects of our virtual internship programs. From the application process to the internship itself, we leverage technology to enhance efficiency, collaboration, and learning outcomes.",
    },
    {
        number: "07",
        title: "Holistic Personal and Professional Growth",
        description:
            " Our approach encompasses both personal and professional growth. We believe in nurturing well-rounded individuals, providing opportunities for self-discovery, leadership development, and the acquisition of skills that go beyond the immediate needs of the workplace.",
    },
    {
        number: "08",
        title: "Diversity and Inclusion",
        description:
            " Loveworld Virtual Internship is committed to promoting diversity and inclusion. We actively seek opportunities to engage interns from varied backgrounds, ensuring a rich and vibrant learning environment that reflects the global mosaic of talent.",
    },
];

const KeyAreas = () => {
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
        <div className="about_keyAreas">
            <div className="container">
                <h1>Key Areas we Focus on</h1>
                <div className="about_keyAreasBoxes">
                    {KeyAreasData.map((d, i) => (
                        <div key={i} className="about_keyAreasBox">
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
                                    {d.title}
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

export const JoinForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div className="about_joinForm">
            <h1>Join our careers newsletter</h1>
            <p>Be the first to know when new jobs are posted!</p>
            <form onSubmit={handleSubmit}>
                <div className="about_input">
                    <input type="text" placeholder="Enter your email" />
                    <span>
                        We care about your data in our <a href="#">privacy policy. </a>{" "}
                    </span>
                </div>
                <button type="submit">Subscribe</button>
            </form>
        </div>
    );
};

const About = () => {
    return (
        <div className="about">
            <Navbar />
            <MainContent />
            <KeyAreas />
            <JoinForm />
            <Footer />
        </div>
    );
};

export default About;
