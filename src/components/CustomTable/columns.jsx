import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EyeIcon from "../../assets/SVGs/Eye";
import DeleteIcon from "../../assets/SVGs/Delete";
import EditIcon from "../../assets/SVGs/Edit";
import { joinUserName } from "../../utils";
import { ErrorToast, SuccessToast } from "../../utils/toast";
import { useDeleteCompany, useDeleteIntern } from "../../services/mutations/admin";

export const useGetInternsColumns = () => {
    const navigate = useNavigate();
    const [internId, setInternId] = useState("");
    const { mutateAsync: deleteIntern } = useDeleteIntern(internId);

    const handleDelete = async () => {
        try {
            const res = await deleteIntern();
            if (res) {
                SuccessToast(res?.msg);
            }
        } catch (e) {
            ErrorToast(`Error deleting the Intern`);
        }
    };

    const internColumns = [
        {
            name: "S/N",
            selector: (row, index) => index + 1,
            sortable: true,
        },
        {
            name: "Name",
            selector: (row) => joinUserName(row),
            sortable: true,
        },
        {
            name: "Email",
            selector: (row) => row?.email,
            sortable: true,
        },
        {
            name: "Mobile",
            selector: (row) => row?.internPhoneNumber,
            sortable: true,
        },
        {
            name: "Department",
            selector: (row) => row?.field,
            sortable: true,
        },
        {
            name: "Weekly Log",
            cell: (row) => (
                <div className="dashboard_rightAlign">
                    <Link
                        className="dashboard_button"
                        to={`/admin-weeklyLog/${row?._id}`}
                        state={{ intern: row, editOption: false }}
                    >
                        View Log <EyeIcon />
                    </Link>
                </div>
            ),
        },
        {
            name: "Options",
            cell: (row) => (
                <div className="dashboard_rightAlign">
                    <EyeIcon
                        color="#F49941"
                        large
                        onClick={() =>
                            navigate(`/admin-interns/${row?._id}`, {
                                state: { intern: row, editOption: false },
                            })
                        }
                    />
                    <EditIcon
                        onClick={() =>
                            navigate(`/admin-interns/${row?._id}`, {
                                state: { intern: row, editOption: true },
                            })
                        }
                    />
                    <DeleteIcon
                        onClick={() => {
                            setInternId(row?._id);
                            handleDelete();
                        }}
                    />
                </div>
            ),
        },
    ];
    return internColumns;
};

export const useGetCompanyColumns = () => {
    const navigate = useNavigate();
    const [companyId, setCompanyId] = useState("");
    const { mutateAsync: deleteCompany } = useDeleteCompany(companyId);

    const handleDelete = async () => {
        try {
            const res = await deleteCompany();
            if (res) {
                SuccessToast(res?.msg);
            }
        } catch (e) {
            ErrorToast(`Error deleting the Company`);
        }
    };

    const companyColumns = [
        {
            name: "S/N",
            selector: (row, index) => index + 1,
            sortable: true,
        },
        {
            name: "Name",
            selector: (row) => joinUserName(row),
            sortable: true,
        },
        {
            name: "Email",
            selector: (row) => row?.email,
            sortable: true,
        },
        {
            name: "Mobile",
            selector: (row) => row?.companyPhoneNumber,
            sortable: true,
        },
        {
            name: "Website",
            selector: (row) => row?.companyWebsite,
            sortable: true,
        },
        {
            name: "Options",
            cell: (row) => (
                <div className="dashboard_rightAlign">
                    <EyeIcon
                        color="#F49941"
                        large
                        onClick={() =>
                            navigate(`/admin-companies/${row?._id}`, {
                                state: { company: row, editOption: false },
                            })
                        }
                    />
                    <EditIcon
                        onClick={() =>
                            navigate(`/admin-companies/${row?._id}`, {
                                state: { company: row, editOption: true },
                            })
                        }
                    />
                    <DeleteIcon
                        onClick={() => {
                            setCompanyId(row?._id);
                            handleDelete();
                        }}
                    />
                </div>
            ),
        },
    ];
    return companyColumns;
};

export const getInternsApplicationColumns = () => {
    const internApplicationColumns = [
        {
            name: "S/N",
            selector: (row, index) => index + 1,
            sortable: true,
        },
        {
            name: "Name",
            selector: (row) => joinUserName(row),
            sortable: true,
        },
        {
            name: "Email",
            selector: (row) => row?.email,
            sortable: true,
        },
        {
            name: "Application Date",
            selector: (row) => row?.date,
            sortable: true,
        },
        {
            name: "Department",
            selector: (row) => row?.field,
            sortable: true,
        },
        {
            name: "Options",
            cell: (row) => (
                <div className="dashboard_rightAlign">
                    <Link
                        className="dashboard_button"
                        to={`/admin-applications/intern/${row?._id}`}
                        state={{ internApplication: row, editOption: true }}
                    >
                        View
                    </Link>
                    <Link
                        className="dashboard_button_outline"
                        to={`/admin-intern-match/${row?._id}`}
                        state={{ internApplication: row }}
                    >
                        Match
                    </Link>
                </div>
            ),
        },
    ];
    return internApplicationColumns;
};

export const getCompanyApplicationColumns = () => {
    const companyApplicationColumns = [
        {
            name: "S/N",
            selector: (row, index) => index + 1,
            sortable: true,
        },
        {
            name: "Name",
            selector: (row) => row?.companyName,
            sortable: true,
        },
        {
            name: "Email",
            selector: (row) => row?.email,
            sortable: true,
        },
        {
            name: "Mobile",
            selector: (row) => row?.companyPhoneNumber,
            sortable: true,
        },
        {
            name: "Website",
            selector: (row) => row?.companyWebsite,
            sortable: true,
        },
        {
            name: "Options",
            cell: (row) => (
                <div className="dashboard_rightAlign">
                    <Link
                        className="dashboard_button"
                        to={`/admin-applications/company/${row?.applicationId}`}
                        state={{ companyApplication: row, editOption: true }}
                    >
                        View
                    </Link>
                    <Link
                        className="dashboard_button_outline"
                        to={`/admin-company-assign/${row?.applicationId}`}
                        state={{ companyApplication: row }}
                    >
                        Assign
                    </Link>
                </div>
            ),
        },
    ];
    return companyApplicationColumns;
};

export const getInternsMatchColumns = () => {
    const internMatchColumns = [
        {
            name: "Name",
            selector: (row) => joinUserName(row),
            sortable: true,
        },
        {
            name: "Email",
            selector: (row) => row?.email,
            sortable: true,
        },
        {
            name: "Application Date",
            selector: (row) => row?.date,
            sortable: true,
        },
        {
            name: "Department",
            selector: (row) => row?.field,
            sortable: true,
        },
    ];
    return internMatchColumns;
};

export const getCompanyMatchColumns = () => {
    const companyMatchColumns = [
        {
            name: "Name",
            selector: (row) => row?.companyName,
            sortable: true,
        },
        {
            name: "Email",
            selector: (row) => row?.email,
            sortable: true,
        },
        {
            name: "Mobile",
            selector: (row) => row?.companyPhoneNumber,
            sortable: true,
        },
        {
            name: "Website",
            selector: (row) => row?.companyWebsite,
            sortable: true,
        },
    ];
    return companyMatchColumns;
};

export const getCompanyInternsColumns = () => {
    const companyInternColumns = [
        {
            name: "S/N",
            selector: (row, index) => index + 1,
            sortable: true,
        },
        {
            name: "Name",
            selector: (row) => joinUserName(row),
            sortable: true,
        },
        {
            name: "Email",
            selector: (row) => row?.email,
            sortable: true,
        },
        {
            name: "Mobile",
            selector: (row) => row?.internPhoneNumber,
            sortable: true,
        },
        {
            name: "Department",
            selector: (row) => row?.field,
            sortable: true,
        },
        {
            name: "Weekly Log",
            cell: (row) => (
                <div className="dashboard_rightAlign">
                    <Link
                        className="dashboard_button"
                        to={`/company-weeklyLog/${row?._id}`}
                        state={{ companyIntern: row, editOption: false }}
                    >
                        View Log <EyeIcon />
                    </Link>
                </div>
            ),
        },
        {
            name: "Assign Tasks",
            cell: (row) => (
                <div className="dashboard_rightAlign">
                    <Link
                        className="dashboard_button"
                        to={`/company-assignTasks/${row?._id}`}
                        state={{ companyIntern: row, editOption: true }}
                    >
                        Assign Task
                    </Link>
                </div>
            ),
        },
    ];
    return companyInternColumns;
};

export const getInternTasksColumns = () => {
    const internTasksColumns = [
        {
            name: "S/N",
            selector: (row, index) => index + 1,
            sortable: true,
        },
        {
            name: "Title",
            selector: (row) => row?.title,
            sortable: true,
        },
        {
            name: "Duration",
            selector: (row) => row?.duration,
            sortable: true,
        },
        {
            name: "Weekly Hours",
            selector: (row) => row?.weeklyMinHours,
            sortable: true,
        },
        {
            name: "Description",
            selector: (row) => row?.description,
            sortable: true,
        },
        {
            name: "Option",
            cell: (row) => (
                <div className="dashboard_rightAlign">
                    <Link
                        className="dashboard_button"
                        to="/intern-tasks/detail"
                        state={{ task: row }}
                    >
                        View Task <EyeIcon />
                    </Link>
                </div>
            ),
        },
    ];

    return internTasksColumns;
};
