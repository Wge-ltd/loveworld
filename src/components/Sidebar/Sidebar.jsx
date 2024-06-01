import { useNavigate, NavLink, Link } from "react-router-dom";

import "./Sidebar.scss";
import logo from "../../assets/LogoGold.svg";
import User from "../../assets/user.svg";
import LogOut from "../../assets/logOut.svg";
import { ErrorToast, SuccessToast } from "../../utils/toast";
import { useLogoutMutation } from "../../services/mutations/auth";
import { joinUserName } from "../../utils";

const Sidebar = ({ navigation, user }) => {
    const navigate = useNavigate();
    const { mutateAsync: logout } = useLogoutMutation();

    const onLogout = async () => {
        try {
            const res = await logout();
            if (res) {
                localStorage.removeItem("love-world_user");
                SuccessToast(res?.msg);
                navigate("/login", {
                    state: null,
                });
            }
        } catch (e) {
            ErrorToast("Error logging out");
        }
    };

    return (
        <div className="sidebar">
            <div className="sidebar_content">
                <div className="sidebar_logo">
                    <img src={logo} alt="logo" />
                </div>
                <nav className="sidebar_navigation">
                    {navigation.map((n, i) =>
                        n.path === "#" ? (
                            <Link key={i} to={n?.path} className="sidebar_navItem">
                                <n.icon />
                                <span>{n.title}</span>
                            </Link>
                        ) : (
                            <NavLink key={i} to={n?.path} className="sidebar_navItem">
                                <n.icon />
                                <span>{n.title}</span>
                            </NavLink>
                        ),
                    )}
                </nav>
            </div>
            <div className="sidebar_detail">
                <div className="sidebar_user">
                    <img src={User} alt="User" className="sidebar_userImg" />
                    <div className="sidebar_user-box">
                        <span className="sidebar_username">{joinUserName(user)}</span>
                        <span className="sidebar_usermail">{user?.email}</span>
                    </div>
                    <img
                        className="sidebar_logout"
                        src={LogOut}
                        alt="Log out"
                        onClick={() => onLogout()}
                    />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
