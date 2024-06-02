import { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";

import Select from "../../../components/Select";
import Heading from "../../../components/Heading";
import TextInput from "../../../components/TextInput";
import BackArrow from "../../../assets/BackArrow.svg";
import { useGetSingleCompanyApplication } from "../../../services/queries/admin";
import { companyApplicationSchema } from "../../../utils/schema";
import { cleanUpObject } from "../../../utils";
import Loading from "../../../components/Loading";

const CompanyApplication = () => {
    const { id: companyAppId } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const [editOption, setEditOption] = useState(location.state?.editOption || false);
    const {
        data: companyApplication,
        isLoading,
        isSuccess,
        isError,
    } = useGetSingleCompanyApplication(companyAppId);

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
            <Heading title="Company Application" />

            <Formik
                initialValues={{
                    companyName: companyApplication?.company?.companyName || "",
                    companyAddress: companyApplication?.company?.companyAddress || "",
                    companyPhoneNumber: companyApplication?.company?.companyPhoneNumber || "",
                    companyWebsite: companyApplication?.company?.companyWebsite || "",
                    internField: companyApplication?.internField || "",
                    typeOfIntern: companyApplication?.typeOfIntern || "",
                    duration: companyApplication?.duration || "",
                    descriptionOfWork: companyApplication?.descriptionOfWork || "",
                }}
                validationSchema={companyApplicationSchema}
            >
                {(formik) => {
                    const { touched } = formik;
                    return (
                        <Form>
                            <div className="companyDetails">
                                <TextInput
                                    label="Name of company*"
                                    id="companyName"
                                    name="companyName"
                                    placeholder="Enter company name"
                                    touched={touched}
                                    disabled={!editOption}
                                />
                                <TextInput
                                    label="Company Address*"
                                    id="companyAddress"
                                    name="companyAddress"
                                    placeholder="Enter address"
                                    touched={touched}
                                    disabled={!editOption}
                                />
                                <TextInput
                                    label="Phone number*"
                                    id="companyPhoneNumber"
                                    name="companyPhoneNumber"
                                    placeholder="Enter Phone number"
                                    touched={touched}
                                    disabled={!editOption}
                                />
                                <TextInput
                                    label="Company website*"
                                    id="companyWebsite"
                                    name="companyWebsite"
                                    placeholder="Website Link"
                                    touched={touched}
                                    disabled={!editOption}
                                />
                            </div>

                            <Heading title="Intern Details" />
                            <div className="internDetails">
                                <Select
                                    label="Interest field"
                                    name="internField"
                                    id="internField"
                                    options={[
                                        { value: "Accounting", text: "Accounting" },
                                        { value: "Finance", text: "Finance" },
                                        { value: "Engineering", text: "Engineering" },
                                        { value: "Development", text: "Development" },
                                    ]}
                                    touched={touched}
                                    disabled={!editOption}
                                />
                                <Select
                                    label="Type of intern"
                                    name="typeOfIntern"
                                    id="typeOfIntern"
                                    options={[
                                        { value: "Remote only", text: "Remote only" },
                                        { value: "Onsite", text: "Onsite" },
                                        { value: "Hybrid", text: "Hybrid" },
                                        { value: "USA based", text: "USA based" },
                                    ]}
                                    touched={touched}
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
                                <div className="secondRow">
                                    <TextInput
                                        label="Description of work the intern will do"
                                        id="descriptionOfWork"
                                        name="descriptionOfWork"
                                        as="textarea"
                                        style={{ height: "9rem" }}
                                        touched={touched}
                                        disabled={!editOption}
                                    />
                                </div>
                            </div>

                            <div className="dashboard_rightAlign">
                                <button
                                    className="dashboard_button"
                                    type="reset"
                                    onClick={() => navigate("/admin-applications")}
                                >
                                    Discard
                                </button>
                                <button
                                    className="dashboard_save"
                                    onClick={() =>
                                        navigate(`/admin-company-assign/${companyAppId}`, {
                                            state: {
                                                companyApplication: cleanUpObject(formik.values),
                                            },
                                        })
                                    }
                                >
                                    Assign
                                </button>
                            </div>
                        </Form>
                    );
                }}
            </Formik>
        </>
    );
};

export default CompanyApplication;
