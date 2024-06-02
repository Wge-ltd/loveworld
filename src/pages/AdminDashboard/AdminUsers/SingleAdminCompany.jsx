import { useState } from "react";
import { Formik, Form } from "formik";
import { useLocation, useParams, useNavigate } from "react-router-dom";

import "./AdminUsers.scss";
import EyeIcon from "../../../assets/SVGs/Eye";
import EditIcon from "../../../assets/SVGs/Edit";
import DeleteIcon from "../../../assets/SVGs/Delete";
import BackArrow from "../../../assets/BackArrow.svg";
import Heading from "../../../components/Heading";
import TextInput from "../../../components/TextInput";
import { ErrorToast, InfoToast, SuccessToast } from "../../../utils/toast";
import { useDeleteCompany, useUpdateSingleCompany } from "../../../services/mutations/admin";
import Select from "../../../components/Select";
import { useGetSingleCompany } from "../../../services/queries/admin";
import DashboardHeader from "../../../components/Dashboard/DashboardHeader";
import { AdminCompanySchema } from "../../../utils/schema";
import { cleanUpObject } from "../../../utils";
import Loading from "../../../components/Loading";

const SingleAdminCompany = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { id: companyId } = useParams();
    const [editOption, setEditOption] = useState(location.state?.editOption || false);
    const { mutateAsync: deleteCompany } = useDeleteCompany(companyId);
    const { mutateAsync: updateSingleCompany } = useUpdateSingleCompany(companyId);
    const { data: singleCompany, isLoading, isSuccess, isError } = useGetSingleCompany(companyId);

    const title = editOption ? "Edit Company" : "Company Details";

    const handleDelete = async () => {
        try {
            const res = await deleteCompany();
            if (res) {
                SuccessToast(res?.msg);
                navigate("/admin-companies");
            }
        } catch (e) {
            ErrorToast(`Error deleting the Company`);
        }
    };

    const handleBack = () => {
        if (editOption) {
            setEditOption(false);
        } else {
            navigate(-1);
        }
    };

    const handleSubmit = async (values, actions) => {
        try {
            const newData = cleanUpObject(values);
            if (!newData) return;

            const res = await updateSingleCompany({
                companyName: newData.companyName,
                companyPhoneNumber: newData.companyPhoneNumber,
                companyAddress: newData.companyAddress,
                companyWebsite: newData.companyWebsite,
                intrest: newData.intrest,
                internDuration: newData.internDuration,
                firstName: newData.firstName,
                lastName: newData.lastName,
                email: newData.email,
                supervisorPhoneNumber: newData.supervisorPhoneNumber,
            });
            if (res) {
                SuccessToast("Successfully updated");
                actions.resetForm({
                    values: {
                        companyName: res?.companyName || "",
                        companyPhoneNumber: res?.companyPhoneNumber || "",
                        companyAddress: res?.companyAddress || "",
                        companyWebsite: res?.companyWebsite || "",
                        intrest: res?.intrest || "",
                        internDuration: res?.internDuration || "",
                        firstName: res?.firstName || "",
                        lastName: res?.lastName || "",
                        email: res?.email || "",
                        supervisorPhoneNumber: res?.supervisorPhoneNumber || "",
                        __t: res?.__t || "",
                    },
                });
                setEditOption(false);
            }
        } catch (e) {
            ErrorToast(e.response?.data?.msg ?? "Error Occurred!");
        }
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="dashboard_userView">
            <DashboardHeader>
                <div className="dashboard_options">
                    <img
                        onClick={() => handleBack()}
                        className="dashboard_backBtn"
                        src={BackArrow}
                        alt="Back"
                    />
                    <div className="dashboard_options_icons">
                        {editOption ? (
                            <EyeIcon color="#F49941" large onClick={() => setEditOption(false)} />
                        ) : (
                            <EditIcon onClick={() => setEditOption(true)} />
                        )}
                        <DeleteIcon onClick={handleDelete} />
                    </div>
                </div>
            </DashboardHeader>

            <Formik
                initialValues={{
                    companyName: singleCompany?.companyName || "",
                    companyPhoneNumber: singleCompany?.companyPhoneNumber || "",
                    companyAddress: singleCompany?.companyAddress || "",
                    companyWebsite: singleCompany?.companyWebsite || "",
                    intrest: singleCompany?.intrest || "",
                    internDuration: singleCompany?.internDuration || "",
                    firstName: singleCompany?.firstName || "",
                    lastName: singleCompany?.lastName || "",
                    email: singleCompany?.email || "",
                    supervisorPhoneNumber: singleCompany?.supervisorPhoneNumber || "",
                    __t: singleCompany?.__t || "",
                }}
                validationSchema={AdminCompanySchema}
                onSubmit={(values, actions) => handleSubmit(values, actions)}
            >
                {(formik) => {
                    const { errors, touched, dirty, isValid } = formik;
                    return (
                        <Form>
                            <Heading title={title}>
                                {editOption && (
                                    <button
                                        type="submit"
                                        className="dashboard_button"
                                        disabled={!(dirty && isValid)}
                                    >
                                        Save Changes
                                    </button>
                                )}
                            </Heading>
                            <div className="dashboard_company-form">
                                <TextInput
                                    label="Name of company"
                                    id="companyName"
                                    name="companyName"
                                    placeholder="enter company name"
                                    disabled={!editOption}
                                    touched={touched}
                                />
                                <TextInput
                                    label="Company website"
                                    id="companyWebsite"
                                    name="companyWebsite"
                                    type="url"
                                    placeholder="example.com"
                                    disabled={!editOption}
                                />
                                <TextInput
                                    label="Company address"
                                    id="companyAddress"
                                    name="companyAddress"
                                    placeholder="enter company address"
                                    disabled={!editOption}
                                    touched={touched}
                                />
                                <TextInput
                                    label="Phone number"
                                    id="companyPhoneNumber"
                                    name="companyPhoneNumber"
                                    placeholder="enter phone number"
                                    disabled={!editOption}
                                />
                                <TextInput
                                    label="Interest"
                                    id="intrest"
                                    name="intrest"
                                    placeholder="....."
                                    disabled={!editOption}
                                />
                                <TextInput
                                    label="Intern type"
                                    id="__t"
                                    name="__t"
                                    placeholder="......"
                                    disabled={!editOption}
                                />
                                <Select
                                    label="Duration"
                                    id="internDuration"
                                    name="internDuration"
                                    options={[
                                        { value: "6 months", text: "6 months" },
                                        { value: "3 months", text: "3 months" },
                                        { value: "1 year", text: "1 year" },
                                    ]}
                                    disabled={!editOption}
                                />
                            </div>
                            <Heading
                                style={{ marginBottom: "2.5rem" }}
                                title="Supervisors Contact"
                            />
                            <div className="dashboard_company-container">
                                <div className="dashboard_company-supervisor">
                                    <TextInput
                                        label="First name"
                                        id="firstName"
                                        name="firstName"
                                        placeholder="Enter first name"
                                        touched={touched}
                                        disabled={!editOption}
                                    />
                                    <TextInput
                                        label="Email"
                                        id="email"
                                        name="email"
                                        touched={touched}
                                        placeholder="Enter email"
                                        error={errors.email}
                                        disabled={!editOption}
                                    />
                                    <TextInput
                                        label="Last name"
                                        id="lastName"
                                        name="lastName"
                                        placeholder="Enter last name"
                                        touched={touched}
                                        disabled={!editOption}
                                    />
                                    <TextInput
                                        label="Phone number"
                                        id="supervisorPhoneNumber"
                                        name="supervisorPhoneNumber"
                                        placeholder="Enter phone number"
                                        touched={touched}
                                        disabled={!editOption}
                                    />
                                </div>
                            </div>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
};

export default SingleAdminCompany;
