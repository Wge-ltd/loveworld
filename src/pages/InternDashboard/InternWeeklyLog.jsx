import { useState } from "react";
import { Formik, Form } from "formik";

import "../CompanyDashboard/WeeklyLog/CompanyWeeklyLog.scss";
import Heading from "../../components/Heading";
import Loading from "../../components/Loading";
import Select from "../../components/Select";
import TextInput from "../../components/TextInput";
import { useUpdateInternLog } from "../../services/mutations/weeklyLog";
import { useGetInternLog } from "../../services/queries/weeklyLog";
import { WeeklyLogSchema } from "../../utils/schema";
import { ErrorToast, SuccessToast } from "../../utils/toast";
import { cleanUpObject } from "../../utils";

const InternWeeklyLog = () => {
    const { data, isLoading } = useGetInternLog();
    const { mutateAsync: updateInternLog } = useUpdateInternLog();

    const handleSubmit = async (values, actions) => {
        try {
            const newData = cleanUpObject(values);
            if (!newData) return;
            const res = await updateInternLog(newData);
            if (res) {
                SuccessToast("Weekly log updated successfully");
                actions.resetForm({
                    values: {
                        hoursWorked: res.hoursWorked,
                        goalsHighlight: res.goalsHighlight,
                        mainCompletedProject: res.mainCompletedProject,
                        skeellsLearnt: res.skeellsLearnt,
                        nextWeekGoals: res.nextWeekGoals,
                        chalengesFaced: res.chalengesFaced,
                    },
                });
            }
        } catch (e) {
            ErrorToast(e ?? "Error updating weekly log");
        }
    };

    if (isLoading) return <Loading />;

    return (
        <>
            <Heading title="Weekly Log" />
            <Formik
                initialValues={{
                    hoursWorked: data?.hoursWorked || "",
                    goalsHighlight: data?.goalsHighlight || "",
                    mainCompletedProject: data?.mainCompletedProject || "",
                    skeellsLearnt: data?.skeellsLearnt || "",
                    nextWeekGoals: data?.nextWeekGoals || "",
                    chalengesFaced: data?.chalengesFaced || "",
                }}
                validationSchema={WeeklyLogSchema}
                onSubmit={(values, actions) => handleSubmit(values, actions)}
            >
                {(formik) => {
                    const { touched, dirty, isValid } = formik;
                    return (
                        <Form>
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
                                    touched={touched}
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
                                    touched={touched}
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
                                    touched={touched}
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
                                    touched={touched}
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
                                    touched={touched}
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
                                    touched={touched}
                                />
                            </div>
                            <div className="dashboard_rightAlign" style={{ marginTop: "3rem" }}>
                                <button className="dashboard_button" type="reset">
                                    Discard
                                </button>
                                <button
                                    className="dashboard_save"
                                    type="submit"
                                    disabled={!(dirty && isValid)}
                                >
                                    Submit
                                </button>
                            </div>
                        </Form>
                    );
                }}
            </Formik>
        </>
    );
};

export default InternWeeklyLog;
