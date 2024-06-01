import { Formik, Form } from "formik";
import { useNavigate, useParams } from "react-router-dom";

import "./CompanyWeeklyLog.scss";
import Heading from "../../../components/Heading";
import TextInput from "../../../components/TextInput";
import Loading from "../../../components/Loading";
import Select from "../../../components/Select";
import { useGetCompanyLog } from "../../../services/queries/weeklyLog";
import { useUpdateCompanyLog } from "../../../services/mutations/weeklyLog";
import { ErrorToast, SuccessToast } from "../../../utils/toast";
import { CompanyWeeklyLogSchema } from "../../../utils/schema";
import { cleanUpObject, formatDate } from "../../../utils";

const CompanyWeeklyLog = () => {
    const { id: internId } = useParams();
    const navigate = useNavigate();
    const { data, isLoading } = useGetCompanyLog(internId);
    const { mutateAsync: updateCompanyLog } = useUpdateCompanyLog(internId);

    const handleSubmit = async (values, actions) => {
        try {
            const newData = cleanUpObject(values);
            if (!newData) return;
            if (!internId) {
                ErrorToast("No intern Selected, please select some interns from interns page");
                navigate("/company-interns");
                return;
            }

            const res = await updateCompanyLog(newData);
            if (res) {
                SuccessToast("Updated Successfully");
                actions.resetForm({
                    values: {
                        ...res,
                        supervisorDate: formatDate(res?.supervisorDate),
                    },
                });
            }
        } catch (e) {
            ErrorToast(e.response?.data?.msg ?? "Failed to update");
        }
    };

    if (isLoading) return <Loading />;

    return (
        <>
            <Heading title="Interns weekly Log" />
            <Formik
                initialValues={{
                    // read only fields
                    hoursWorked: data?.hoursWorked || "",
                    mainCompletedProject: data?.mainCompletedProject || "",
                    nextWeekGoals: data?.nextWeekGoals || "",
                    goalsHighlight: data?.goalsHighlight || "",
                    skeellsLearnt: data?.skeellsLearnt || "",
                    chalengesFaced: data?.chalengesFaced || "",
                    // editable fields
                    nextWeekProject: data?.nextWeekProject || "",
                    nextWeekImprovment: data?.nextWeekImprovment || "",
                    supervisorSignature: data?.supervisorSignature || "",
                    supervisorDate: formatDate(data?.supervisorDate) || "",
                }}
                validationSchema={CompanyWeeklyLogSchema}
                onSubmit={(values, actions) => handleSubmit(values, actions)}
            >
                {(formik) => {
                    const { touched, dirty, isValid } = formik;
                    return (
                        <>
                            <div className="company_weekly_log">
                                <Select
                                    id="hoursWorked"
                                    name="hoursWorked"
                                    label="How many hours did you actively work this week?"
                                    options={[
                                        { value: "1-3 hours", text: "1-3 hours" },
                                        { value: "3-6 hours", text: "3-6 hours" },
                                        { value: "6-8 hours", text: "6-8 hours" },
                                        { value: "10-15 hours", text: "10-15 hours" },
                                    ]}
                                    disabled
                                />
                                <TextInput
                                    label="What is the main project(s) that you worked on or completed this week?"
                                    id="mainCompletedProject"
                                    name="mainCompletedProject"
                                    as="textarea"
                                    style={{
                                        height: "100%",
                                        maxHeight: "fit-content",
                                        minHeight: "8rem",
                                    }}
                                    disabled
                                />
                                <TextInput
                                    label="What are your goals for next week?"
                                    id="nextWeekGoals"
                                    name="nextWeekGoals"
                                    as="textarea"
                                    style={{
                                        height: "100%",
                                        maxHeight: "fit-content",
                                        minHeight: "8rem",
                                    }}
                                    disabled
                                />
                                <TextInput
                                    id="goalsHighlight"
                                    name="goalsHighlight"
                                    label="Highlight your goals for this week?"
                                    as="textarea"
                                    style={{
                                        height: "100%",
                                        maxHeight: "fit-content",
                                        minHeight: "8rem",
                                    }}
                                    disabled
                                />
                                <TextInput
                                    label="What new skills, information or understanding have you taken away from this week?"
                                    id="skeellsLearnt"
                                    name="skeellsLearnt"
                                    as="textarea"
                                    style={{
                                        height: "100%",
                                        maxHeight: "fit-content",
                                        minHeight: "8rem",
                                    }}
                                    disabled
                                />
                                <TextInput
                                    label="Did you face any challenges this week that requires any assistance or more training on?"
                                    id="chalengesFaced"
                                    name="chalengesFaced"
                                    as="textarea"
                                    style={{
                                        height: "100%",
                                        maxHeight: "fit-content",
                                        minHeight: "8rem",
                                    }}
                                    disabled
                                />
                            </div>
                            <Form>
                                <Heading title="Supervisor's Review" />
                                <div className="supervisorReview">
                                    <div className="firstCol">
                                        <TextInput
                                            label="What Projects should the intern focus on next week?"
                                            id="nextWeekProject"
                                            name="nextWeekProject"
                                            as="textarea"
                                            style={{ height: "5.75rem" }}
                                            touched={touched}
                                        />
                                        <TextInput
                                            label="Signature"
                                            id="supervisorSignature"
                                            name="supervisorSignature"
                                            placeholder="Sign or enter full name"
                                            touched={touched}
                                        />
                                    </div>
                                    <div className="secondCol">
                                        <TextInput
                                            label="What is one thing the intern can do next week to improve?"
                                            id="nextWeekImprovment"
                                            name="nextWeekImprovment"
                                            as="textarea"
                                            style={{ height: "5.75rem" }}
                                            touched={touched}
                                        />
                                        <TextInput
                                            type="date"
                                            label="Date"
                                            id="supervisorDate"
                                            name="supervisorDate"
                                            placeholder="dd/mm/yyyy"
                                            touched={touched}
                                        />
                                    </div>
                                </div>

                                <div className="dashboard_rightAlign">
                                    <button
                                        className="dashboard_button"
                                        onClick={() => navigate("/company-interns")}
                                    >
                                        Discard
                                    </button>
                                    <button
                                        className="dashboard_save"
                                        type="submit"
                                        disabled={!(dirty && isValid)}
                                    >
                                        Save
                                    </button>
                                </div>
                            </Form>
                        </>
                    );
                }}
            </Formik>
        </>
    );
};

export default CompanyWeeklyLog;
