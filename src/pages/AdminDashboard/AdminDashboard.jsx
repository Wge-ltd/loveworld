import { useCallback } from "react";
import { useLocation } from "react-router-dom";

import "./AdminDashboard.scss";
import DashboardHeader from "../../components/Dashboard/DashboardHeader";
import Heading from "../../components/Heading";
import DashboardCard from "../../components/Dashboard/DashboardCard";
import SearchBox from "../../components/SearchBox/SearchBox";
import Loading from "../../components/Loading";
import User from "../../assets/SmilingUser.svg";
import NotificationIcon from "../../assets/Notification.svg";
import { useGetAdminDashboard } from "../../services/queries/admin";
import { joinUserName } from "../../utils";

const AdminDashboard = () => {
    const location = useLocation();
    const user = location.state?.user || {};
    const { data, isLoading, isError } = useGetAdminDashboard();
    const { TotallInterns, TotallCompanys, TotallApplications } = data || {};

    const handleSearch = useCallback((searchQuery) => {}, []);

    return (
        <>
            <DashboardHeader style={{ marginBottom: "1.75rem" }}>
                <SearchBox onSearch={handleSearch} />
                <div className="admin_header">
                    <div className="dashboard_notification">
                        <img src={NotificationIcon} alt="Notification" />
                        <span>3</span>
                    </div>
                    <img src={User} alt="Smiling Logo" />
                    <span className="profile_name">{joinUserName(user)}</span>
                </div>
            </DashboardHeader>
            <Heading title="Dashboard" />
            {isLoading ? (
                <Loading />
            ) : (
                <div className="admin_cards">
                    <DashboardCard title="Total Interns" count={TotallInterns} bgColor="#527AEF" />
                    <DashboardCard
                        title="Total Companies"
                        count={TotallCompanys}
                        bgColor="#F88342"
                    />
                    <div className="fullScreen">
                        <DashboardCard
                            count={TotallApplications}
                            title="Unmatched Applications"
                            bgColor="#527AEF"
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default AdminDashboard;
