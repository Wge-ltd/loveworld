import { useCallback } from "react";
import DataTable from "react-data-table-component";

import Loading from "../../../components/Loading";
import NoInternTask from "./NoTask/NoInternTask";
import { getInternTasksColumns } from "../../../components/CustomTable/columns";
import { coloredCustomStyles } from "../../../components/CustomTable/styles";
import { useGetInternTasks } from "../../../services/queries/task";
import DashboardHeader from "../../../components/Dashboard/DashboardHeader";
import SearchBox from "../../../components/SearchBox/SearchBox";

const InternTasks = () => {
    const { data, isLoading, isSuccess, isError } = useGetInternTasks();

    const tableColumns = getInternTasksColumns();

    const handleSearch = useCallback((searchQuery) => {}, []);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <>
            <DashboardHeader title={"Tasks"}>
                <SearchBox onSearch={handleSearch} />
            </DashboardHeader>
            {isSuccess && data?.length !== 0 ? (
                <DataTable
                    data={data}
                    columns={tableColumns}
                    progressPending={isLoading}
                    progressComponent={<Loading />}
                    customStyles={coloredCustomStyles}
                    pagination
                />
            ) : (
                <NoInternTask />
            )}
        </>
    );
};

export default InternTasks;
