import { useState, useCallback } from "react";
import DataTable from "react-data-table-component";

import DashboardNewInterns from "../../components/Dashboard/DashboardNewInterns";
import DashboardHeader from "../../components/Dashboard/DashboardHeader";
import SearchBox from "../../components/SearchBox/SearchBox";
import Loading from "../../components/Loading";
import { getCompanyInternsColumns } from "../../components/CustomTable/columns";
import { coloredCustomStyles } from "../../components/CustomTable/styles";
import { useGetCompanyInternDashboard } from "../../services/queries/dashboard";

const Interns = () => {
    const { data, isLoading, isSuccess } = useGetCompanyInternDashboard();
    const [internsData, setInternsData] = useState(data?.alInterns);
    const [showNewInterns, setShowNewInterns] = useState(false);

    const handleSearch = useCallback((searchText) => {
        const filteredData = internsData?.filter((item) => {
            return (
                item?.firstName?.toLowerCase().includes(searchText.toLowerCase()) ||
                item?.lastName?.toLowerCase().includes(searchText.toLowerCase()) ||
                item?.email?.toLowerCase().includes(searchText.toLowerCase()) ||
                item?.field?.toLowerCase().includes(searchText.toLowerCase())
            );
        });
        setInternsData(filteredData);
    }, []);

    const tableColumns = getCompanyInternsColumns();

    if (showNewInterns) return <DashboardNewInterns setShowNewInterns={setShowNewInterns} />;

    return (
        <>
            <DashboardHeader title="Interns">
                <SearchBox onSearch={handleSearch} />
                <button
                    className="dashboard_button"
                    style={{ width: "8.68rem" }}
                    onClick={() => setShowNewInterns(true)}
                >
                    Request new interns
                </button>
            </DashboardHeader>
            {isSuccess && (
                <DataTable
                    data={internsData || data?.alInterns}
                    columns={tableColumns}
                    progressPending={isLoading}
                    progressComponent={<Loading />}
                    customStyles={coloredCustomStyles}
                    pagination
                />
            )}
        </>
    );
};

export default Interns;
