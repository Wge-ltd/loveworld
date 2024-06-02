import { useState, useCallback, useMemo } from "react";
import DataTable from "react-data-table-component";

import AppHeading from "../../../components/AppHeading";
import SearchBox from "../../../components/SearchBox/SearchBox";
import DashboardHeader from "../../../components/Dashboard/DashboardHeader";
import Loading from "../../../components/Loading";
import {
    getInternsApplicationColumns,
    getCompanyApplicationColumns,
} from "../../../components/CustomTable/columns";
import customStyles from "../../../components/CustomTable/styles";
import {
    useGetAllInternsApplications,
    useGetAllCompaniesApplications,
} from "../../../services/queries/admin";

const AdminApplications = () => {
    const [currentTab, setCurrentTab] = useState("INTERNS");
    const {
        data: internsApplications,
        isLoading: internsLoading,
        isSuccess: internsSuccess,
        isError: internError,
    } = useGetAllInternsApplications(currentTab);
    const {
        data: companiesApplications,
        isLoading: companiesLoading,
        isSuccess: companiesSuccess,
        isError: companiesError,
    } = useGetAllCompaniesApplications(currentTab);
    const internsTableData = internsApplications?.InternApplications || [];
    const companiesTableData = useMemo(
        () =>
            companiesApplications?.companyApplications.map((application) => ({
                email: application?.company?.email,
                companyName: application?.company?.companyName,
                companyPhoneNumber: application?.company?.companyPhoneNumber,
                companyWebsite: application?.company?.companyWebsite,
                _id: application?.company?._id,
                __t: application?.company?.__t,
                applicationId: application?._id,
            })),
        [companiesApplications?.companyApplications],
    );

    const handleSearch = useCallback((searchQuery) => {}, []);

    const tableColumns =
        currentTab === "INTERNS" ? getInternsApplicationColumns() : getCompanyApplicationColumns();

    return (
        <>
            <DashboardHeader title="Applications">
                <SearchBox onSearch={handleSearch} />
            </DashboardHeader>
            <AppHeading currentTab={currentTab} setCurrentTab={setCurrentTab} />
            <DataTable
                data={currentTab === "INTERNS" ? internsTableData : companiesTableData}
                columns={tableColumns}
                progressPending={internsLoading || companiesLoading}
                progressComponent={<Loading />}
                customStyles={customStyles}
                pagination
            />
        </>
    );
};

export default AdminApplications;
