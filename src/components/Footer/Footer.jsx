import React from "react";
import "./Footer.scss";
import LogoGold from "../../assets/LogoGold.svg";
import { useNavigate } from "react-router-dom";

const FooterOptions = [
    {
        title: "Platform",
        options: [
            {
                title: "Home",
                path: "/",
            },
            {
                title: "Benefits",
                path: "#",
            },
            {
                title: "Pricing",
                path: "/pricing",
            },
            {
                title: "Resources",
                path: "#",
            },
        ],
    },

    {
        title: "Resources",
        options: [
            {
                title: "Careers",
                path: "/careers",
            },
            {
                title: "Partnership",
                path: "/partnership",
            },
        ],
    },
    {
        title: "Resources",
        options: [
            {
                title: "About Us",
                path: "/about",
            },
            {
                title: "Help Centre",
                path: "/help",
            },
            {
                title: "Team",
                path: "/team",
            },
        ],
    },
    {
        title: "Internship",
        options: [
            {
                title: "Enroll",
                path: "/sign-up",
            },
            {
                title: "Become a partner",
                path: "/sign-up",
            },
            {
                title: "book free consultation call",
                path: "/help",
            },
        ],
    },
];

const Footer = () => {
    const navigate = useNavigate();
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer_main">
                    <div className="footer_logo">
                        <img src={LogoGold} alt="logo" />
                        <p>
                            internship match aligned to your career field, location, and timeframe.
                        </p>
                    </div>
                    <div className="footer_options">
                        {FooterOptions.map((o, i) => (
                            <div key={i} className="footer_option">
                                <h4>{o.title}</h4>
                                {o.options.map((t, j) => (
                                    <span key={j} onClick={() => navigate(t.path)}>
                                        {t.title}
                                    </span>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="footer_copyright">
                    © 2023, All Rights Reserved by LoveWorld Internship
                </div>
            </div>
        </footer>
    );
};

export default Footer;
