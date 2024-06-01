import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./CareerDetails.scss";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FAQ from "../../components/FAQ";
import UserFeedback from "../../components/UserFeedback";
import FutureWork from "../../components/FutureWork";
import HeroImage from "../../assets/career-details-hero.png";

const DesktopHero = () => {
    const location = useLocation();
    const header = location.state?.title || "Computer Science Internships";
    return (
        <div className="career_hero">
            <div className="career_hero_content">
                <h1>{header}</h1>
                <p>
                    We connect you to global talent to bring fresh ideas for your organisation
                    development and redefine career development. Switch up old methods of talent
                    acquisition and employee development through remote work opportunities
                </p>
                <button className="career_button">Get Started</button>
            </div>
            <div className="career_hero_image">
                <img src={HeroImage} alt="career hero" />
            </div>
        </div>
    );
};

const Questions = [
    {
        q: "Quality Assessment Intern",
        a: "Testing is a fundamental part of a career in tech, nothing goes live without rigorous quality assessment. On a testing and QA internship, you’ll help to review an app and provide suggestions to elevate the design, layout, and overall application performance.",
    },
    {
        q: "Code Maintenance & Automation Intern",
        a: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
        q: "Python Developer Intern",
        a: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
];

const CareerFAQs = ({ isTabletScreen }) => {
    const navigate = useNavigate();
    return (
        <div
            className="career_faq"
            style={{
                backgroundColor: isTabletScreen ? "#FFF" : "#031E36",
            }}
        >
            <div className="container">
                <div className="career_faqContent">
                    <h3
                        style={{
                            color: isTabletScreen ? "#101828" : "#FFF",
                        }}
                    >
                        Key Projects on Internships in Computer Science
                    </h3>
                    <p
                        style={{
                            color: isTabletScreen ? "#475467" : "#94A3B8",
                        }}
                    >
                        Not only will you be able to put your academic knowledge into practice in a
                        global work environment on your remote internship, but you’ll also gain key
                        employability skills that will help you succeed in your career in tech.
                    </p>
                    <button className="career_button" onClick={() => navigate("/sign-up")}>
                        Enroll Now
                    </button>
                </div>
                <div className="career_questions">
                    {Questions.map((f, i) => (
                        <FAQ key={i} q={f.q} a={f.a} variant={isTabletScreen ? "light" : "dark"} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const CareerDetails = () => {
    return (
        <div className="career">
            <Navbar />
            <DesktopHero />
            <CareerFAQs />
            <UserFeedback />
            <FutureWork />
            <Footer />
        </div>
    );
};

export default CareerDetails;
