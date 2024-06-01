import React, { useState, useEffect, useCallback } from "react";
import "./TopContent.scss";
import PersonImage from "../../assets/person.png";
import GuyImage from "../../assets/guy.png";
import GirlImage from "../../assets/girl.png";
import AfroGirlImage from "../../assets/afroGirl.png";
import HeroIcon1 from "../../assets/HeroIcon1.svg";
import HeroIcon2 from "../../assets/HeroIcon2.svg";
import HeroIcon3 from "../../assets/HeroIcon3.svg";
import HeroIcon4 from "../../assets/HeroIcon4.svg";
import HeroIcon5 from "../../assets/HeroIcon5.svg";
import PartnershipImage from "../../assets/PartnershipImg.svg";
import { useNavigate } from "react-router-dom";

const HeroIcons = [
    {
        icon: HeroIcon1,
        title: "Career Coach",
    },
    {
        icon: HeroIcon2,
        title: "Career Path",
    },
    {
        icon: HeroIcon3,
        title: "Work Experience",
    },
    {
        icon: HeroIcon4,
        title: "Work from Home",
    },
    {
        icon: HeroIcon5,
        title: "Professional Course",
    },
];

const imageList = [PersonImage, AfroGirlImage, GuyImage, GirlImage];

const TopContent = ({ partnership = false }) => {
    const navigate = useNavigate();
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const changeImage = useCallback(() => {
        setActiveImageIndex((prev) => (prev + 1) % imageList.length);
    }, []);

    useEffect(() => {
        const interval = setInterval(changeImage, 3000);
        return () => clearInterval(interval);
    }, [changeImage]);

    return (
        <div className="topContent">
            <div className="container">
                <div className="topContent_text">
                    <h1>
                        {partnership
                            ? "CONNECT WITH GLOBAL TALENT AT A CLICK"
                            : "BEST PLATFORM FOR SECURING INTERNSHIP PLACEMENTS"}
                    </h1>
                    <p>
                        {partnership
                            ? "We connect you to global talent to bring fresh ideas for your organisation development and redefine career development. Switch up old methods of talent acquisition and employee development through remote work opportunities"
                            : `Get connected to your ideal internship match that aligns with your
            career field from where you are at any time.`}
                    </p>
                    <button onClick={() => navigate("/sign-up")}>
                        {partnership ? "Become a Partner" : "Enroll Now"}
                    </button>
                </div>
                <div className="topContent_image">
                    {partnership && <img src={PartnershipImage} alt="person" />}

                    {!partnership && <img src={imageList[activeImageIndex]} alt="person" />}

                    {!partnership &&
                        HeroIcons.map((h, i) => (
                            <div className="topContent_hero" key={i}>
                                <img src={h.icon} alt="icon" />
                                <span>{h.title}</span>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default TopContent;
