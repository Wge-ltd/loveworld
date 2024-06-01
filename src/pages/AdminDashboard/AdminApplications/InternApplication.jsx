import { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";

import "../AdminDashboard.scss";
import Heading from "../../../components/Heading";
import TextInput from "../../../components/TextInput";
import BackArrow from "../../../assets/BackArrow.svg";
import Select from "../../../components/Select";
import { useGetSingleInternApplication } from "../../../services/queries/admin";
import { InternApplicationSchema } from "../../../utils/schema";
import { formatDate } from "../../../utils";
import Loading from "../../../components/Loading";

const InternApplication = () => {
    const { id: internAppId } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const [editOption, setEditOption] = useState(location.state?.editOption || false);
    const {
        data: internApplication,
        isLoading,
        isSuccess,
        isError,
    } = useGetSingleInternApplication(internAppId);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <>
            <img
                onClick={() => navigate(-1)}
                className="dashboard_backBtn"
                src={BackArrow}
                alt="back arrow"
            />
            <div className="adminDashboard">
                <Heading title="Intern Application">
                    <div className="dashboard_appButtons">
                        {/* <button onClick={() => navigate("/admin-applications")}>Discard</button> */}
                        <button
                            onClick={() => {
                                navigate(`/admin-intern-match/${internAppId}`);
                            }}
                        >
                            Match
                        </button>
                    </div>
                </Heading>
                <Formik
                    initialValues={{
                        firstName: internApplication?.firstName || "",
                        lastName: internApplication?.lastName || "",
                        email: internApplication?.email || "",
                        country: internApplication?.country || "",
                        field: internApplication?.field || "",
                        institution: internApplication?.institution || "",
                        level: internApplication?.level || "",
                        timeZone: internApplication?.timeZone || "",
                        applicationDate: formatDate(internApplication?.applicationDate) || "",
                        duration: internApplication?.duration || "",
                        studentType: internApplication?.studentType || "",
                    }}
                    validationSchema={InternApplicationSchema}
                >
                    {(formik) => {
                        const { touched, dirty, isValid } = formik;
                        return (
                            <Form>
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
                                    <Select
                                        label="Field"
                                        name="field"
                                        id="field"
                                        options={[
                                            {
                                                value: "Accounting",
                                                text: "Accounting",
                                            },
                                            {
                                                value: "Finance",
                                                text: "Finance",
                                            },
                                            {
                                                value: "Engineering",
                                                text: "Engineering",
                                            },
                                            {
                                                value: "Development",
                                                text: "Development",
                                            },
                                        ]}
                                        touched={touched}
                                        disabled={!editOption}
                                    />
                                    <TextInput
                                        label="Country"
                                        id="country"
                                        name="country"
                                        placeholder="Country"
                                        disabled={!editOption}
                                    />
                                    <TextInput
                                        label="Email*"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        disabled={!editOption}
                                        touched={touched}
                                    />
                                    <TextInput
                                        label="Application Date"
                                        id="applicationDate"
                                        name="applicationDate"
                                        type="date"
                                        placeholder="Date"
                                        disabled={!editOption}
                                    />
                                    <TextInput
                                        label="Time zone"
                                        id="timeZone"
                                        name="timeZone"
                                        placeholder="Time Zone"
                                        disabled={!editOption}
                                    />
                                    <TextInput
                                        label="Institution"
                                        id="institution"
                                        name="institution"
                                        placeholder="Institution"
                                        disabled={!editOption}
                                    />
                                    <Select
                                        label="Duration"
                                        name="duration"
                                        id="duration"
                                        options={[
                                            { value: "6 months", text: "6 months" },
                                            { value: "3 months", text: "3 months" },
                                            { value: "1 year", text: "1 year" },
                                        ]}
                                        touched={touched}
                                        disabled={!editOption}
                                    />
                                    <Select
                                        label="Student type?"
                                        id="studentType"
                                        name="studentType"
                                        options={[
                                            { value: "Undergraduate", text: "Undergraduate" },
                                            { value: "Graduate", text: "Graduate" },
                                            { value: "Out of school", text: "Out of school" },
                                        ]}
                                        touched={touched}
                                        disabled={!editOption}
                                    />
                                    <TextInput
                                        label="Level"
                                        id="level"
                                        name="level"
                                        placeholder="4th year"
                                        disabled={!editOption}
                                    />
                                </div>

                                {/* <div className="dashboard_rightAlign">
                                    <button
                                        className="dashboard_save"
                                        disabled={!(dirty && isValid)}
                                        type="submit"
                                    >
                                        Update
                                    </button>
                                </div> */}
                            </Form>
                        );
                    }}
                </Formik>
            </div>
        </>
    );
};

export default InternApplication;
