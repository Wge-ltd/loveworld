import { useState, useCallback, useMemo } from "react";
import DataTable from "react-data-table-component";
import { useParams } from "react-router-dom";

import MatchSuccess from "../../../components/MatchSuccess/MatchSuccess";
import DashboardHeader from "../../../components/Dashboard/DashboardHeader";
import SearchBox from "../../../components/SearchBox/SearchBox";
import Loading from "../../../components/Loading";
import { getCompanyMatchColumns } from "../../../components/CustomTable/columns";
import customStyles from "../../../components/CustomTable/styles";
import { useGetAllCompaniesApplications } from "../../../services/queries/admin";
import { useMatchApplication } from "../../../services/mutations/admin";
import { ErrorToast, SuccessToast } from "../../../utils/toast";

const MatchApplication = () => {
    const { id: appId } = useParams();
    const [popUpText, setPopUpText] = useState("");
    const [isMatched, setIsMatched] = useState(false);
    const [selectedRows, setSelectedRows] = useState([]);
    const [companyName, setCompanyName] = useState("");
    const [matchedInterns, setMatchedInterns] = useState();
    const [toggledClearRows, setToggleClearRows] = useState(false);

    const { mutateAsync: matchApplication } = useMatchApplication();
    const { data: companiesApplications, isLoading } = useGetAllCompaniesApplications();
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

    const matchInternApplication = async (data) => {
        try {
            const res = await matchApplication(data);
            if (res) {
                setPopUpText("success");
                SuccessToast(res ?? "Matched Successfully");
                setIsMatched(true);
            }
        } catch (e) {
            setPopUpText("fail");
            ErrorToast(e?.response?.data?.msg ?? "Failed to match");
        }
    };

    const matchUser = async () => {
        setCompanyName(selectedRows[0]?.companyName);
        const idArray = selectedRows.map((item) => item?.applicationId);
        if (!idArray.length) {
            ErrorToast("Kindly select a company to match");
            return;
        }

        const sendingData = {
            companyApplicationId: idArray,
            InternId: appId,
        };
        const count = idArray.length;
        setMatchedInterns(count);
        matchInternApplication(sendingData);
    };

    const handleSearch = useCallback((searchQuery) => {}, []);

    const handleSelectedRows = useCallback(({ selectedRows }) => {
        setSelectedRows(selectedRows);
    }, []);

    return (
        <>
            <DashboardHeader title="Companies">
                <SearchBox onSearch={handleSearch} />
                {!isMatched && (
                    <button
                        className="dashboard_button"
                        disabled={selectedRows?.length === 0}
                        onClick={() => matchUser()}
                    >
                        Assign
                    </button>
                )}
            </DashboardHeader>
            <DataTable
                data={companiesTableData}
                columns={getCompanyMatchColumns()}
                progressPending={isLoading}
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
                        type={"COMPANY"}
                        countInterns={matchedInterns}
                        setIsMatched={setIsMatched}
                        onClose={() => setToggleClearRows(!toggledClearRows)}
                    />
                </div>
            )}
        </>
    );
};

export default MatchApplication;
