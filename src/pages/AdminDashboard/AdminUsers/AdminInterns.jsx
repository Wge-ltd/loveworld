import { useState, useCallback } from "react";
import DataTable from "react-data-table-component";
import "./AdminUsers.scss";

import DashboardHeader from "../../../components/Dashboard/DashboardHeader";
import SearchBox from "../../../components/SearchBox/SearchBox";
import Loading from "../../../components/Loading";
import { useGetInternsColumns } from "./../../../components/CustomTable/columns";
import customStyles from "../../../components/CustomTable/styles";
import { useGetAllInterns } from "../../../services/queries/admin";

const AdminInterns = () => {
    const tableColumns = useGetInternsColumns();
    const { data, isLoading, isSuccess } = useGetAllInterns();
    const internsTableData = data?.models || [];

    const handleSearch = useCallback((searchText) => {
        // const filteredData = internsData.filter((item) => {
        //     return (
        //         item.name.toLowerCase().includes(searchText.toLowerCase()) ||
        //         item.email.toLowerCase().includes(searchText.toLowerCase()) ||
        //         item.number.toLowerCase().includes(searchText.toLowerCase()) ||
        //         item.department.toLowerCase().includes(searchText.toLowerCase())
        //     );
        // });
        // setData(filteredData);
    }, []);

    return (
        <>
            <DashboardHeader style={{ marginBottom: "1rem", height: "3.5rem" }} title={"Interns"}>
                <SearchBox onSearch={handleSearch} />
            </DashboardHeader>
            {isSuccess && (
                <DataTable
                    data={internsTableData}
                    columns={tableColumns}
                    progressPending={isLoading}
                    progressComponent={<Loading />}
                    customStyles={customStyles}
                    pagination
                />
            )}
        </>
    );
};

export default AdminInterns;
