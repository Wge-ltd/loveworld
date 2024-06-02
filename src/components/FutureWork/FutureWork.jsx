import React from "react";
import "./FutureWork.scss";
import { useNavigate } from "react-router-dom";

const FutureWork = () => {
    const navigate = useNavigate();
    return (
        <div className="futureWork">
            <div className="container">
                <h1>THE FUTURE OF WORK AWAITS</h1>
                <button className="work_button" onClick={() => navigate("/sign-up")}>
                    Enroll Now
                </button>
            </div>
        </div>
    );
};

export default FutureWork;
