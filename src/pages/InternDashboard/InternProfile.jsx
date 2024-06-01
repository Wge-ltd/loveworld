import { useState, useRef } from "react";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";

import Heading from "../../components/Heading";
import TextInput from "../../components/TextInput";
import DeleteIcon from "../../assets/SVGs/Delete";
import EditIcon from "../../assets/SVGs/Edit";
import EyeIcon from "../../assets/SVGs/Eye";
import BackArrow from "../../assets/BackArrow.svg";
import VerticalDotImage from "../../assets/vertical-dot.svg";
import CompleteProfile from "../../components/Dashboard/CompleteProfile/CompleteProfile";
import { calculateFileSize, cleanUpObject, formatDate, trimFileName } from "../../utils";
import { ErrorToast, SuccessToast } from "../../utils/toast";
import Select from "../../components/Select";
import { InternSchema } from "../../utils/schema";
import { useGetInternProfile } from "../../services/queries/dashboard";
import Loading from "./../../components/Loading";
import { useUpdateIntern } from "../../services/mutations/dashboard";
import DashboardHeader from "../../components/Dashboard/DashboardHeader";

const InternProfile = () => {
    const navigate = useNavigate();
    const { data, isLoading } = useGetInternProfile();
    const profileData = data?.internProfile;
    const { mutateAsync: updateSingleIntern } = useUpdateIntern(profileData?._id);

    const fileInputRef = useRef(null);
    const CVRef = useRef(null);
    const [CV, setCV] = useState(null);
    const [image, setImage] = useState(null);
    const [CVData, setCVData] = useState(null);
    const [editOption, setEditOption] = useState(false);
    const [showOptions, setShowOptions] = useState(false);
    const [isComplete, setIsComplete] = useState(() =>
        profileData?.cvUrl && profileData?.oneMinVideoUrl ? true : false,
    );

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

    const handleCVUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setCVData(file);
            const reader = new FileReader();

            reader.onload = (e) => {
                setCV(e.target.result);
            };

            reader.readAsDataURL(file);
        }
    };

    const handleCVDrop = (e) => {
        e.preventDefault();
        const file = e.profileDataTransfer.files[0];
        if (file) {
            setCVData(file);
            const reader = new FileReader();

            reader.onload = (e) => {
                setCV(e.target.result);
            };

            reader.readAsDataURL(file);
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
            const profileData = cleanUpObject(values);
            if (!profileData) return;
            const res = await updateSingleIntern({
                ...profileData,
                ...(CV && { cv: CV }),
                ...(image && { profilePicture: image }),
            });
            if (res) {
                SuccessToast("Successfully updated");
                navigate("/intern-dashboard");
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
            }
        } catch (e) {
            ErrorToast(e?.response?.data?.msg ?? "Error Occurred!");
        }
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <>
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
                    </div>
                </div>
            </DashboardHeader>
            <Formik
                initialValues={{
                    firstName: profileData?.firstName || "",
                    lastName: profileData?.lastName || "",
                    email: profileData?.email || "",
                    level: profileData?.level || "",
                    country: profileData?.country || "",
                    institution: profileData?.institution || "",
                    field: profileData?.field || "",
                    graduationDate: formatDate(profileData?.graduationDate) || "",
                    timeZone: profileData?.timeZone || "",
                    dateOfBirth: formatDate(profileData?.dateOfBirth) || "",
                    isStudent: profileData?.isStudent,
                }}
                validationSchema={InternSchema}
                onSubmit={(values, actions) => handleSubmit(values, actions)}
            >
                {(formik) => {
                    const { touched, dirty, isValid } = formik;
                    return (
                        <Form className="adminDashboard">
                            <Heading title={"My Profile"}>
                                {editOption && (
                                    <button
                                        className="dashboard_button"
                                        type="submit"
                                        disabled={!(dirty && isValid)}
                                    >
                                        Save Changes
                                    </button>
                                )}
                            </Heading>
                            <div className="dashboard_intern-form">
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
                                <TextInput
                                    label="Field"
                                    id="field"
                                    name="field"
                                    placeholder="Enter the field"
                                    disabled={!editOption}
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
                                        { text: "Yes", value: true },
                                        { text: "No", value: false },
                                    ]}
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
                            <div className="dashboard_intern-form_files">
                                <div className="dashboard_intern-imgBox">
                                    <span>Image</span>
                                    <img
                                        src={image || profileData?.profilePictureUrl}
                                        alt="Intern User"
                                        onClick={() => {
                                            editOption && fileInputRef.current.click();
                                        }}
                                    />
                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        hidden
                                        onChange={handleImage}
                                        accept="image/*"
                                    />
                                </div>
                                {/* <embed src={profileData?.cvUrl} width="300" height="200" /> */}
                                {!profileData?.cvUrl && (
                                    <div className="dashboard_intern-imgBox">
                                        <span>Resume</span>
                                        <div
                                            className="upload_container"
                                            style={{
                                                border: CV ? "none" : "2px dashed #868686",
                                                background: CV ? "#F1F2F4" : "none",
                                            }}
                                            onDragOver={(e) => e.preventDefault()}
                                            onDrop={handleCVDrop}
                                        >
                                            <>
                                                <img
                                                    src={CV || profileData?.cvUrl}
                                                    alt="Doc"
                                                    onClick={() => {
                                                        CVRef.current.click();
                                                    }}
                                                />
                                                <div className="upload_texts">
                                                    <p>{trimFileName(CVData?.name)}</p>
                                                    <span>{calculateFileSize(CVData?.size)}</span>
                                                </div>
                                                <img
                                                    src={VerticalDotImage}
                                                    alt="options"
                                                    className="options_image"
                                                    onClick={() => setShowOptions(!showOptions)}
                                                />
                                                {showOptions && (
                                                    <div className="upload_options">
                                                        <p className="edit">
                                                            <EditIcon
                                                                color="#DA980A"
                                                                onClick={() => {
                                                                    CVRef.current.click();
                                                                    setShowOptions(false);
                                                                }}
                                                            />
                                                            Edit Resume
                                                        </p>
                                                        <p className="delete">
                                                            <DeleteIcon
                                                                onClick={() => {
                                                                    setCV(null);
                                                                    setShowOptions(false);
                                                                }}
                                                            />
                                                            Delete
                                                        </p>
                                                    </div>
                                                )}
                                            </>
                                        </div>
                                        <input
                                            ref={CVRef}
                                            type="file"
                                            hidden
                                            onChange={handleCVUpload}
                                            accept=".pdf,.doc,.docx"
                                        />
                                    </div>
                                )}
                            </div>
                        </Form>
                    );
                }}
            </Formik>
            {!isComplete && (
                <CompleteProfile id={profileData?._id} handleClose={() => setIsComplete(true)} />
            )}
        </>
    );
};

export default InternProfile;
