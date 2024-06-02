import React from "react";
import "./UserFeedback.scss";
import UserAvatar from "../../assets/UserAvatar.svg";
import Dots from "../../assets/Dots3.svg";

const UserFeedback = () => {
    return (
        <div className="userFeedback">
            <h1>What Our Alumni Say About Startup Internships</h1>
            <h3>
                i enjoyed working on the projects given to me because they are real life projects.
            </h3>
            <img src={UserAvatar} className="userFeedback_user" alt="avatar" />
            <h4>Kayla Matt</h4>
            <h5> Mechanical engineering intern</h5>
            <img src={Dots} alt="dots" className="userFeedback_topDots" />
            <img src={Dots} alt="dots" className="userFeedback_bottomDots" />
            <div className="userFeedback_circle1" />
            <div className="userFeedback_circle2" />
        </div>
    );
};

export default UserFeedback;
