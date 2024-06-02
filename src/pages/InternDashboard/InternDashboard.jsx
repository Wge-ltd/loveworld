import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import DashboardHeader from "../../components/Dashboard/DashboardHeader";
import DashboardCard from "../../components/Dashboard/DashboardCard";
import "./InternDashboard.scss";
import "../AdminDashboard/AdminDashboard.scss";
import "../AdminDashboard/AdminUsers/AdminUsers.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import Loading from "../../components/Loading";
import { useGetInternDashboard } from "../../services/queries/dashboard";

const InternDashboard = () => {
    const navigate = useNavigate();
    const { data, isLoading } = useGetInternDashboard();
    const { TotallInternTasks, TotallInternPendingLogs } = data || {};

    const user = JSON.parse(localStorage.getItem("love-world_user")) ?? {};

    const handleSearch = useCallback((searchQuery) => {}, []);

    return (
        <>
            <DashboardHeader title="Dashboard">
                <SearchBox onSearch={handleSearch} />
            </DashboardHeader>
            {isLoading ? (
                <Loading />
            ) : (
                <div className="dashboard_main">
                    <div className="dashboard_intern_card">
                        <div className="dashboard_intern_content">
                            <p>Welcome {user?.firstName}</p>
                            <div className="dashboardCard_info">
                                <span
                                    onClick={() => {
                                        navigate("/intern-profile");
                                    }}
                                    className="complete_profile"
                                >
                                    Complete profile
                                </span>
                                <span className="count">{"75%"}</span>
                            </div>
                        </div>
                    </div>
                    <div className="dashboard_cards">
                        <DashboardCard title="Tasks" count={TotallInternTasks} bgColor="#527AEF" />
                        <DashboardCard
                            title="Pending Log"
                            count={TotallInternPendingLogs}
                            bgColor="#F88342"
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default InternDashboard;
