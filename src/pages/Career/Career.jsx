import React from "react";
import { Link } from "react-router-dom";
import "./Career.scss";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import UserFeedback from "../../components/UserFeedback";
import FutureWork from "../../components/FutureWork";

const careerLinksData = [
    {
        id: 1,
        title: "Architecture Internship",
    },
    {
        id: 2,
        title: "Computer Science Internship",
    },
    {
        id: 3,
        title: "Business Internship",
    },
    {
        id: 4,
        title: "Finance Internship",
    },
    {
        id: 5,
        title: "Fashion & Design Internship",
    },
    {
        id: 6,
        title: "Environment & Sustainability Internship",
    },
    {
        id: 7,
        title: "Health, Wellness & Sports Management Internship",
    },
    {
        id: 8,
        title: "Hospitality, Tourism & Events Internship",
    },
    {
        id: 9,
        title: "Healthcare & Pharmaceutical Internship",
    },
    {
        id: 10,
        title: "Startup Internship",
    },
    {
        id: 11,
        title: "Engineering Internship",
    },
    {
        id: 12,
        title: "Real Estate Internship",
    },
    {
        id: 13,
        title: "HR Internship",
    },
    {
        id: 14,
        title: "Marketing Internship",
    },
    {
        id: 15,
        title: "Legal Internship",
    },
    {
        id: 16,
        title: "Media & Communication Internship",
    },
    {
        id: 17,
        title: "International Development Internship",
    },
];

const MainContent = () => {
    return (
        <div className="career_main">
            <div className="career_mainContent">
                <h1>Career Fields</h1>
                <p>
                    Let’s make this process as smooth as possible to direct you to the right team.
                </p>
            </div>
        </div>
    );
};

const CareerLinks = () => {
    return (
        <div className="career_links">
            {careerLinksData.map((link) => (
                <Link
                    to={link?.id === 2 ? `/career-details/${link.id}` : `#`}
                    className="career_link"
                    key={link?.id}
                    state={{ title: link?.title }}
                >
                    <span>{link.title}</span>
                </Link>
            ))}
        </div>
    );
};

const Career = () => {
    return (
        <div className="career">
            <Navbar />
            <MainContent />
            <CareerLinks />
            <UserFeedback />
            <FutureWork />
            <Footer />
        </div>
    );
};

export default Career;
