import React from "react";
import "./EnrollContent.scss";
import Stars from "../../assets/Stars.svg";
import People from "../../assets/peoples.png";
import HandArrow from "../../assets/handArrow.png";

const EnrollContent = () => {
    return (
        <div className="enrollContent">
            <div>
                <img className="enrollContent_star" src={Stars} alt="Star" />
                <h2>Connect, Network and Impact</h2>
                <p>
                    Create an account and get full access to all features . Get started in 2
                    minutes.
                </p>
                <div className="enrollContent_users">
                    <img src={People} alt="Group of People" />
                    {/* <span>Join 40,000+ interns</span> */}
                </div>
                <img className="enrollContent_arrow" src={HandArrow} alt="Hand Arrow" />
            </div>
        </div>
    );
};

export default EnrollContent;
