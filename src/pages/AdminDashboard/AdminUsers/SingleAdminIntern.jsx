import { useState, useRef } from "react";
import { Formik, Form } from "formik";
import { useLocation, useParams, useNavigate } from "react-router-dom";

import "./AdminUsers.scss";
import Heading from "../../../components/Heading";
import TextInput from "../../../components/TextInput";
import InternImage from "../../../assets/Intern.png";
import EyeIcon from "../../../assets/SVGs/Eye";
import EditIcon from "../../../assets/SVGs/Edit";
import DeleteIcon from "../../../assets/SVGs/Delete";
import BackArrow from "../../../assets/BackArrow.svg";
import { ErrorToast, SuccessToast } from "../../../utils/toast";
import { useDeleteIntern, useUpdateSingleIntern } from "../../../services/mutations/admin";
import Select from "../../../components/Select";
import DashboardHeader from "../../../components/Dashboard/DashboardHeader";
import { useGetSingleIntern } from "../../../services/queries/admin";
import { InternSchema } from "../../../utils/schema";
import { cleanUpObject, formatDate } from "../../../utils";
import Loading from "../../../components/Loading";

const SingleAdminIntern = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { id: internId } = useParams();
    const [editOption, setEditOption] = useState(location.state?.editOption || false);
    const [image, setImage] = useState(null);
    const fileInputRef = useRef(null);

    const title = editOption ? "Edit Intern" : "View Intern";

    const { mutateAsync: deleteIntern } = useDeleteIntern(internId);
    const { mutateAsync: updateSingleIntern } = useUpdateSingleIntern(internId);
    const { data: singleIntern, isLoading, isSuccess, isError } = useGetSingleIntern(internId);

    const handleDelete = async () => {
        try {
            const res = await deleteIntern();
            if (res) {
                SuccessToast(res?.msg);
                navigate("/admin-interns");
            }
        } catch (e) {
            ErrorToast(`Error deleting the Intern`);
        }
    };

    const handleBack = () => {
        if (editOption) {
            setEditOption(false);
        } else {
            navigate(-1);
        }
    };

    const handleImage = (e) => {
        if (!editOption) {
            e.preventDefault();
            return;
        }

        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                setImage(e.target.result);
            };

            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (values, actions) => {
        try {
            const newData = cleanUpObject(values);
            if (!newData) return;

            const res = await updateSingleIntern({
                ...newData,
                ...(image && { profilePictureUrl: image }),
            });
            if (res) {
                SuccessToast("Successfully updated");
                actions.resetForm({
                    values: {
                        firstName: res?.firstName || "",
                        lastName: res?.lastName || "",
                        email: res?.email || "",
                        level: res?.level || "",
                        country: res?.country || "",
                        institution: res?.institution || "",
                        field: res?.field || "",
                        graduationDate: formatDate(res?.graduationDate) || "",
                        timeZone: res?.timeZone || "",
                        dateOfBirth: formatDate(res?.dateOfBirth) || "",
                        isStudent: res?.isStudent,
                    },
                });
                setEditOption(false);
            }
        } catch (e) {
            ErrorToast(e?.response?.data?.msg ?? "Error Occurred!");
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
                    firstName: singleIntern?.firstName || "",
                    lastName: singleIntern?.lastName || "",
                    email: singleIntern?.email || "",
                    level: singleIntern?.level || "",
                    country: singleIntern?.country || "",
                    institution: singleIntern?.institution || "",
                    field: singleIntern?.field || "",
                    graduationDate: formatDate(singleIntern?.graduationDate) || "",
                    timeZone: singleIntern?.timeZone || "",
                    dateOfBirth: formatDate(singleIntern?.dateOfBirth) || "",
                    isStudent: singleIntern?.isStudent,
                }}
                validationSchema={InternSchema}
                onSubmit={(values, actions) => handleSubmit(values, actions)}
            >
                {(formik) => {
                    const { touched, dirty, isValid } = formik;
                    return (
                        <Form>
                            <Heading title={title}>
                                {editOption && (
                                    <button
                                        className="dashboard_button"
                                        type="submit"
                                        disabled={!isValid}
                                    >
                                        Save Changes
                                    </button>
                                )}
                            </Heading>
                            <div className="dashboard_company-form">
                                <TextInput
                                    label="First Name*"
                                    id="firstName"
                                    name="firstName"
                                    placeholder="Enter your first Name"
                                    disabled={!editOption}
                                    touched={touched}
                                />
                                <TextInput
                                    label="Last Name*"
                                    id="lastName"
                                    name="lastName"
                                    placeholder="Enter your lastName"
                                    disabled={!editOption}
                                    touched={touched}
                                />
                                <Select
                                    label="Field"
                                    id="field"
                                    name="field"
                                    touched={touched}
                                    disabled={!editOption}
                                    options={[
                                        { value: "Accounting", text: "Accounting" },
                                        { value: "Finance", text: "Finance" },
                                        { value: "Engineering", text: "Engineering" },
                                        { value: "Development", text: "Development" },
                                    ]}
                                />
                                <TextInput
                                    label="Country"
                                    id="country"
                                    name="country"
                                    placeholder="Enter the country"
                                    disabled={!editOption}
                                />
                                <TextInput
                                    label="Email*"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    disabled={!editOption}
                                    touched={touched}
                                />
                                <TextInput
                                    type="date"
                                    label="Graduation Date"
                                    id="graduationDate"
                                    name="graduationDate"
                                    placeholder="Enter Graduation Date"
                                    disabled={!editOption}
                                />
                                <TextInput
                                    label="Time zone"
                                    id="timeZone"
                                    name="timeZone"
                                    placeholder="Enter Time Zone"
                                    disabled={!editOption}
                                />
                                <TextInput
                                    label="Institution"
                                    id="institution"
                                    name="institution"
                                    placeholder="Enter your Institution"
                                    disabled={!editOption}
                                />
                                <TextInput
                                    type="date"
                                    label="DOB"
                                    id="dateOfBirth"
                                    name="dateOfBirth"
                                    placeholder="Enter date of birth"
                                    disabled={!editOption}
                                />
                                <Select
                                    label="Are you a student?"
                                    id="isStudent"
                                    name="isStudent"
                                    placeholder="yes or no"
                                    options={[
                                        { value: true, text: "Yes" },
                                        { value: false, text: "No" },
                                    ]}
                                    touched={touched}
                                    disabled={!editOption}
                                />
                                <TextInput
                                    label="Level"
                                    id="level"
                                    name="level"
                                    placeholder="Enter your level of qualification"
                                    disabled={!editOption}
                                />
                            </div>
                            <div className="dashboard_intern-imgBox">
                                <span>Image</span>
                                <img
                                    src={image || singleIntern?.profilePictureUrl || InternImage}
                                    alt="Intern User"
                                    // onClick={() => {
                                    //     editOption && fileInputRef.current.click();
                                    // }}
                                />
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    hidden
                                    onChange={handleImage}
                                    accept="image/*"
                                />
                            </div>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
};

export default SingleAdminIntern;
