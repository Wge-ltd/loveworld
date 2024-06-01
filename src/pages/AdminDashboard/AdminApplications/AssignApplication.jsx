import { useState, useCallback } from "react";
import DataTable from "react-data-table-component";
import { useParams, useLocation } from "react-router-dom";

import MatchSuccess from "../../../components/MatchSuccess/MatchSuccess";
import DashboardHeader from "../../../components/Dashboard/DashboardHeader";
import SearchBox from "../../../components/SearchBox/SearchBox";
import Loading from "../../../components/Loading";
import { getInternsMatchColumns } from "../../../components/CustomTable/columns";
import customStyles from "../../../components/CustomTable/styles";
import { useGetAllInternsApplications } from "../../../services/queries/admin";
import { useMatchApplication } from "../../../services/mutations/admin";
import { ErrorToast, SuccessToast } from "../../../utils/toast";

const AssignApplication = () => {
    const location = useLocation();
    const { id: appId } = useParams();
    const [isMatched, setIsMatched] = useState(false);
    const [matchedInterns, setMatchedInterns] = useState();
    const [popUpText, setPopUpText] = useState("");
    const [selectedRows, setSelectedRows] = useState([]);
    const [toggledClearRows, setToggleClearRows] = useState(false);

    const companyName = location.state?.companyApplication?.companyName || "";

    const { mutateAsync: matchApplication } = useMatchApplication();
    const { data: internsApplications, isLoading: internsLoading } = useGetAllInternsApplications();

    const matchCompanyApplication = async (data) => {
        try {
            const res = await matchApplication(data);
            if (res) {
                setPopUpText("success");
                SuccessToast(res ?? "Assigned Successfully");
                setIsMatched(true);
            }
        } catch (e) {
            setPopUpText("fail");
            ErrorToast(e?.response?.data?.msg ?? "Failed to assign");
        }
    };

    const assignUser = async () => {
        const idArray = selectedRows.map((item) => item._id);
        if (!idArray.length) {
            ErrorToast("Kindly select an intern to assign");
            return;
        }

        const sendingData = {
            InternId: idArray,
            companyApplicationId: appId,
        };
        const count = idArray.length;
        setMatchedInterns(count);
        matchCompanyApplication(sendingData);
    };

    const handleSearch = useCallback((searchQuery) => {}, []);

    const handleSelectedRows = useCallback(({ selectedRows }) => {
        setSelectedRows(selectedRows);
    }, []);

    return (
        <>
            <DashboardHeader title={"Interns"}>
                <SearchBox onSearch={handleSearch} />
                {!isMatched && (
                    <button
                        className="dashboard_button"
                        disabled={selectedRows?.length === 0}
                        onClick={() => assignUser()}
                    >
                        Assign
                    </button>
                )}
            </DashboardHeader>
            <DataTable
                data={internsApplications?.InternApplications}
                columns={getInternsMatchColumns()}
                progressPending={internsLoading}
                progressComponent={<Loading />}
                selectableRows
                onSelectedRowsChange={handleSelectedRows}
                clearSelectedRows={toggledClearRows}
                customStyles={customStyles}
                pagination
            />

            {isMatched && (
                <div className="dashboard_success">
                    <MatchSuccess
                        name={companyName}
                        popUpText={popUpText}
                        type={"INTERNS"}
                        countInterns={matchedInterns}
                        setIsMatched={setIsMatched}
                        onClose={() => setToggleClearRows(!toggledClearRows)}
                    />
                </div>
            )}
        </>
    );
};

export default AssignApplication;
