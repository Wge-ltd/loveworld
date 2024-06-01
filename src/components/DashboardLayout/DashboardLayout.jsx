import { useMemo } from "react";
import { Navigate } from "react-router-dom";
import "./DashboardLayout.scss";
import Sidebar from "../Sidebar";
import { allowedRoutes } from "../../utils/links";

const DashboardLayout = ({ navigation, children }) => {
    const user = useMemo(() => JSON.parse(localStorage.getItem("love-world_user")) ?? {}, []);
    const userType = useMemo(() => user?.userType, [user]);
    const isAuthenticated = useMemo(() => userType && userType !== "", [userType]);

    const isRouteAllowed = useMemo(
        () =>
            allowedRoutes[userType]?.some((route) => window.location.pathname.search(route) !== -1),
        [userType],
    );

    // If the user is not authenticated or the route is not allowed, redirect to login
    if (!isAuthenticated || !isRouteAllowed) {
        localStorage.removeItem("love-world_user");
        return <Navigate to="/login" />;
    }

    return (
        <div className="dashboard">
            <div className="dashboard_sidenav">
                <Sidebar navigation={navigation} user={user} />
            </div>
            <div className="dashboard_main">{children}</div>
        </div>
    );
};

export default DashboardLayout;
