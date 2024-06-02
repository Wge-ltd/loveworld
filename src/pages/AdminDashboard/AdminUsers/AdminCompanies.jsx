import React, { useState, useCallback } from "react";
import DataTable from "react-data-table-component";
import "./AdminUsers.scss";

import DashboardHeader from "../../../components/Dashboard/DashboardHeader";
import SearchBox from "../../../components/SearchBox/SearchBox";
import Loading from "../../../components/Loading";
import { useGetCompanyColumns } from "./../../../components/CustomTable/columns";
import customStyles from "../../../components/CustomTable/styles";
import { useGetAllCompanies } from "../../../services/queries/admin";

const AdminCompanies = () => {
    const {
        data: companiesData,
        isLoading: companiesLoading,
        isSuccess: isCompanySuccess,
        isError: isCompanyError,
    } = useGetAllCompanies();
    const companiesTableData = companiesData?.models || [];

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

    const tableColumns = useGetCompanyColumns();

    return (
        <>
            <DashboardHeader style={{ marginBottom: "1rem", height: "3.5rem" }} title={"Companies"}>
                <SearchBox onSearch={handleSearch} />
            </DashboardHeader>
            {isCompanySuccess && (
                <DataTable
                    data={companiesTableData}
                    columns={tableColumns}
                    progressPending={companiesLoading}
                    progressComponent={<Loading />}
                    customStyles={customStyles}
                    pagination
                />
            )}
        </>
    );
};

export default AdminCompanies;
