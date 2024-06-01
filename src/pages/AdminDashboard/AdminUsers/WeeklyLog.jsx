import { Formik, Form } from "formik";
import { useParams } from "react-router-dom";

import "../../CompanyDashboard/WeeklyLog/CompanyWeeklyLog.scss";
import Heading from "../../../components/Heading";
import TextInput from "../../../components/TextInput";
import Loading from "../../../components/Loading";
import Select from "../../../components/Select";
import { CompanyWeeklyLogSchema } from "../../../utils/schema";
import { formatDate } from "../../../utils";
import { useGetSingleInternLog } from "../../../services/queries/admin";

const AdminWeeklyLog = () => {
    const { id: internId } = useParams();
    const { data, isLoading, isSuccess } = useGetSingleInternLog(internId);

    if (isLoading) return <Loading />;

    return (
        <>
            <Heading title="Interns weekly Log" />
            <Formik
                initialValues={{
                    hoursWorked: data?.hoursWorked || "",
                    mainCompletedProject: data?.mainCompletedProject || "",
                    nextWeekGoals: data?.nextWeekGoals || "",
                    goalsHighlight: data?.goalsHighlight || "",
                    skeellsLearnt: data?.skeellsLearnt || "",
                    chalengesFaced: data?.chalengesFaced || "",
                    nextWeekProject: data?.nextWeekProject || "",
                    nextWeekImprovment: data?.nextWeekImprovment || "",
                    supervisorSignature: data?.supervisorSignature || "",
                    supervisorDate: formatDate(data?.supervisorDate) || "",
                }}
                validationSchema={CompanyWeeklyLogSchema}
            >
                {(formik) => {
                    // const { touched, dirty, isValid } = formik;
                    return (
                        <>
                            <div className="company_weekly_log">
                                <Select
                                    value={data?.hoursWorked}
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
                                    value={data?.mainCompletedProject}
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
                                    value={data?.nextWeekGoals}
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
                                    value={data?.goalsHighlight}
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
                                    value={data?.skeellsLearnt}
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
                                    value={data?.chalengesFaced}
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
                                            value={data?.nextWeekProject}
                                            label="What Projects should the intern focus on next week?"
                                            id="nextWeekProject"
                                            name="nextWeekProject"
                                            as="textarea"
                                            style={{ height: "5.75rem" }}
                                            disabled
                                        />
                                        <TextInput
                                            value={data?.supervisorSignature}
                                            label="Signature"
                                            id="supervisorSignature"
                                            name="supervisorSignature"
                                            placeholder="Sign or enter full name"
                                            disabled
                                        />
                                    </div>
                                    <div className="secondCol">
                                        <TextInput
                                            value={data?.nextWeekImprovment}
                                            label="What is one thing the intern can do next week to improve?"
                                            id="nextWeekImprovment"
                                            name="nextWeekImprovment"
                                            as="textarea"
                                            style={{ height: "5.75rem" }}
                                            disabled
                                        />
                                        <TextInput
                                            value={formatDate(data?.supervisorDate)}
                                            type="date"
                                            label="Date"
                                            id="supervisorDate"
                                            name="supervisorDate"
                                            placeholder="dd/mm/yyyy"
                                            disabled
                                        />
                                    </div>
                                </div>
                            </Form>
                        </>
                    );
                }}
            </Formik>
        </>
    );
};

export default AdminWeeklyLog;
