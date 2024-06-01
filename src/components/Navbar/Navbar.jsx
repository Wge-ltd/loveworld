import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.scss";
import LogoIcon from "../../assets/logo.svg";
import ArrowDown from "../../assets/SVGs/ArrowDown.jsx";
import Menu from "../../assets/menu.png";
import Cancel from "../../assets/Cancel.png";
import BlackProfileIcon from "../../assets/ProfileIcon.svg";
import WhiteProfileIcon from "../../assets/profile-circle.png";

const NavItem = ({ title, options, path }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const pathName = location.pathname;

    return (
        <div className={`navItem ${pathName === path ? "navItem_active" : ""}`}>
            <span onClick={() => navigate(path)}>{title}</span>
            {options?.length > 0 && (
                <>
                    <ArrowDown />
                    <div className="navItem_menu">
                        {options.map((opt, i) => (
                            <div
                                className={`${pathName === opt.path ? "navItem_active" : ""}`}
                                onClick={() => navigate(opt.path)}
                                key={i}
                            >
                                {opt.option}{" "}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

const NavMain = ({ menuActive }) => {
    const navigate = useNavigate();

    return (
        <>
            <div className="navbar_items">
                <NavItem title="Home" path="/" />
                <NavItem
                    title="Careers"
                    options={[
                        {
                            option: "Team",
                            path: "/team",
                        },
                    ]}
                    path="/careers"
                />
                <NavItem title="Partnership" path="/partnership" />
                <NavItem title="Pricing" path="/pricing" />
                <NavItem
                    title="Resources"
                    options={[
                        {
                            option: "About",
                            path: "/about",
                        },
                        {
                            option: "Help",
                            path: "/help",
                        },
                    ]}
                    path="#"
                />
            </div>
            <div className="navbar_login" onClick={() => navigate("/login")}>
                <img src={menuActive ? WhiteProfileIcon : BlackProfileIcon} alt="profile" />
                <span>Login</span>
            </div>
        </>
    );
};

const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false);
    const navigate = useNavigate();
    return (
        <nav className="navbar">
            <div className="container">
                <img
                    onClick={() => navigate("/")}
                    className="navbar_logo"
                    src={LogoIcon}
                    alt="logo"
                />
                <NavMain menuActive={menuActive} />
                <img
                    onClick={() => setMenuActive(!menuActive)}
                    className="cancel"
                    src={menuActive ? Cancel : Menu}
                    alt="close menu"
                />
            </div>
            {menuActive && (
                <div className="navbar_mobileMenu">
                    <NavMain menuActive={menuActive} />
                </div>
            )}
        </nav>
    );
};

export default Navbar;
