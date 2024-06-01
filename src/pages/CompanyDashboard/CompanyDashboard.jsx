import { useCallback } from "react";

import DashboardHeader from "./../../components/Dashboard/DashboardHeader";
import DashboardCard from "../../components/Dashboard/DashboardCard";
import SearchBox from "../../components/SearchBox/SearchBox";
import Loading from "../../components/Loading";
import { useGetCompanyDashboard } from "../../services/queries/dashboard";

const CompanyDashboard = () => {
    const { data, isLoading } = useGetCompanyDashboard();

    const { TotallInterns, TotallCompanyPendingLogs } = data || {};

    const handleSearch = useCallback((searchQuery) => {}, []);

    return (
        <>
            <DashboardHeader title="Dashboard">
                <SearchBox onSearch={handleSearch} />
            </DashboardHeader>
            {isLoading ? (
                <Loading />
            ) : (
                <div className="dashboard_cards">
                    <DashboardCard title="Total Interns" count={TotallInterns} bgColor="#527AEF" />
                    <DashboardCard
                        title="Pending Log"
                        count={TotallCompanyPendingLogs}
                        bgColor="#F88342"
                    />
                </div>
            )}
        </>
    );
};

export default CompanyDashboard;
