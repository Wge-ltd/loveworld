import { useMemo } from "react";
import { Form, Formik } from "formik";
import { useLocation } from "react-router-dom";
import "./SingleTaskDetail.scss";
import TextInput from "../../../components/TextInput";
import Heading from "../../../components/Heading";
import { formatDate } from "./../../../utils/index";

const SingleTaskDetail = () => {
    const location = useLocation();
    const data = useMemo(() => location.state?.task ?? {}, [location.state]);

    return (
        <Formik
            initialValues={{
                title: data?.title || "",
                deadLine: formatDate(data?.deadLine) || "",
                intrestField: data?.intrestField || "",
                duration: data?.duration || "",
                weeklyMinHours: data?.weeklyMinHours || "",
                selectedInterns: data?.selectedInterns || "",
                description: data?.description || "",
            }}
        >
            {(formik) => {
                // const {} = formik;
                return (
                    <>
                        <Heading title={"Intern Task"} />
                        <Form>
                            <div className="internTask">
                                <TextInput
                                    value={data?.title}
                                    label="Title"
                                    id="title"
                                    name="title"
                                    disabled
                                />
                                <TextInput
                                    value={formatDate(data?.deadLine)}
                                    label="Deadline"
                                    id="deadLine"
                                    name="deadLine"
                                    disabled
                                />
                                <TextInput
                                    value={data?.intrestField}
                                    label="Interest field"
                                    id="intrestField"
                                    name="intrestField"
                                    disabled
                                />
                                <TextInput
                                    value={data?.duration}
                                    label="Duration"
                                    id="duration"
                                    name="duration"
                                    disabled
                                />
                                <TextInput
                                    value={data?.weeklyMinHours}
                                    label="Weekly minimum hours"
                                    id="weeklyMinHours"
                                    name="weeklyMinHours"
                                    disabled
                                />
                                <TextInput
                                    value={data?.selectedInterns}
                                    label="Selected interns"
                                    id="selectedInterns"
                                    name="selectedInterns"
                                    disabled
                                />
                                <div className="interntask_description">
                                    <TextInput
                                        value={data?.description}
                                        label="Description"
                                        as="textarea"
                                        id="description"
                                        name="description"
                                        style={{ height: "12.68rem" }}
                                        disabled
                                    />
                                </div>
                            </div>
                        </Form>
                    </>
                );
            }}
        </Formik>
    );
};

export default SingleTaskDetail;
