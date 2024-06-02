import React, { useState } from "react";
import "./SignUp.scss";
import SignUpIntern from "./SignUpIntern";
import SignUpCompany from "./SignUpCompany";
import LoginImage from "../../assets/LoginImage.png";
import Logo from "../../assets/LogoGold.svg";

const USER_TYPES = {
    INTERN: "Intern",
    COMPANY: "Company",
};

const MainSignUp = ({ onPageChange, setUserType }) => {
    const onSignUpIntern = (type) => {
        onPageChange(`enroll-${type}`);
        setUserType(type);
    };

    return (
        <>
            <div className="login_main">
                <img src={Logo} alt="logo" />
                <h1>Welcome to Loveworld Virtual Internship</h1>
                <p>A platform that matches you with best interns across the globe</p>
                <button onClick={() => onSignUpIntern(USER_TYPES.INTERN)} className="login_button">
                    Sign up as an intern
                </button>
                <button onClick={() => onSignUpIntern(USER_TYPES.COMPANY)} className="login_button">
                    Sign up as a company
                </button>
            </div>
            <div className="login_image">
                <img src={LoginImage} alt="login" />
            </div>
        </>
    );
};

const SignUp = () => {
    const [page, setPage] = useState("main");
    const [userType, setUserType] = useState(USER_TYPES.COMPANY);

    const onPageChange = (pageName) => {
        setPage(pageName);
    };

    return (
        <div className="signUp">
            {page === "main" && (
                <MainSignUp setUserType={setUserType} onPageChange={onPageChange} />
            )}
            {userType === USER_TYPES.INTERN && page !== "main" && (
                <SignUpIntern page={page} onPageChange={onPageChange} />
            )}
            {userType === USER_TYPES.COMPANY && page !== "main" && (
                <SignUpCompany page={page} onPageChange={onPageChange} />
            )}
        </div>
    );
};

export default SignUp;
