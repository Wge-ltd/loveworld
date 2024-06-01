import { Formik, Form, FieldArray } from "formik";
import { useParams } from "react-router-dom";

import "./AssignTask.scss";
import Heading from "../../../components/Heading";
import TextInput from "../../../components/TextInput";
import { ErrorToast, SuccessToast } from "../../../utils/toast";
import { useCompanyCreateTask } from "../../../services/mutations/task";
import Select from "../../../components/Select";
import { AssignTaskSchema } from "../../../utils/schema";
import { cleanUpObject } from "../../../utils";
import Task from "../../../components/Dashboard/Task";

const AssignTask = () => {
    const { id: internId } = useParams();
    const { mutateAsync: createCompanyTask } = useCompanyCreateTask(internId);

    const handleSubmit = async (values) => {
        try {
            const transformedData = {
                intrestField: values?.intrestField,
                duration: values?.duration,
                weeklyMinHours: values?.weeklyMinHours,
                selectedInterns: values?.selectedInterns,
                deadLine: values?.deadLine,
                title: values?.tasks[0]?.title,
                description: values?.tasks[0]?.description,
                type: values?.tasks[0]?.type,
            };
            const cleanedData = cleanUpObject(transformedData);

            const res = await createCompanyTask(cleanedData);
            if (res) {
                SuccessToast("Task Assigned Successfully");
            }
        } catch (e) {
            ErrorToast(e ?? "Failed to assign task");
        }
    };

    return (
        <>
            <Heading title="Interns Tasks" />
            <Formik
                validationSchema={AssignTaskSchema}
                initialValues={{
                    intrestField: "",
                    duration: "",
                    weeklyMinHours: "",
                    selectedInterns: "",
                    deadLine: "",
                    tasks: [
                        { title: "", description: "", type: "" },
                        // { title: '', description: '', type: '' },
                        // { title: '', description: '', type: '' },
                        // { title: '', description: '', type: '' },
                    ],
                }}
                onSubmit={(values) => handleSubmit(values)}
            >
                {(formik) => {
                    const { values, touched, dirty, isValid } = formik;
                    return (
                        <Form>
                            <div className="assignTask">
                                <Select
                                    label="Interest Field"
                                    id="intrestField"
                                    name="intrestField"
                                    options={[
                                        { value: "Accounting", text: "Accounting" },
                                        { value: "Finance", text: "Finance" },
                                        { value: "Engineering", text: "Engineering" },
                                        { value: "Development", text: "Development" },
                                    ]}
                                    touched={touched}
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
                                />
                                <TextInput
                                    label="Weekly minimum hours"
                                    id="weeklyMinHours"
                                    name="weeklyMinHours"
                                    placeholder="5"
                                    type="number"
                                    touched={touched}
                                />
                                <TextInput
                                    label="Selected interns"
                                    id="selectedInterns"
                                    name="selectedInterns"
                                    placeholder="6"
                                    type="number"
                                    touched={touched}
                                />
                                <TextInput
                                    label="Deadline"
                                    id="deadLine"
                                    name="deadLine"
                                    placeholder="dd/mm/yyyy"
                                    type="date"
                                    touched={touched}
                                />
                            </div>
                            <div className="assignTask_list">
                                <FieldArray name="tasks">
                                    {({ push }) => (
                                        <>
                                            {values.tasks.map((task, index) => (
                                                <Task key={index} task={task} index={index} />
                                            ))}
                                        </>
                                    )}
                                </FieldArray>
                            </div>
                            <div className="dashboard_rightAlign">
                                <button className="dashboard_button" type="reset">
                                    Discard
                                </button>
                                <button
                                    className="dashboard_save"
                                    type="submit"
                                    disabled={!(dirty && isValid)}
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

export default AssignTask;
