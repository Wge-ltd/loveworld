import Heading from "../../Heading";
import TextInput from "../../TextInput";
import Select from "../../Select";
import { Formik, Form } from "formik";

import { ErrorToast, SuccessToast } from "../../../utils/toast";
import { useCompanyCreateApplication } from "../../../services/mutations/application";
import { RequestNewInternsSchema } from "../../../utils/schema";
import { cleanUpObject } from "../../../utils";

const DashboardNewInterns = ({ setShowNewInterns }) => {
    const { mutateAsync: createCompanyApplication } = useCompanyCreateApplication();

    const handleSubmit = async (values) => {
        try {
            const newData = cleanUpObject(values);
            if (!newData) return;

            const res = await createCompanyApplication(newData);
            if (res) {
                SuccessToast("New intern application created successfully");
                setShowNewInterns(false);
            }
        } catch (e) {
            ErrorToast("Failed to create new intern application");
        }
    };

    return (
        <Formik
            validationSchema={RequestNewInternsSchema}
            onSubmit={(values) => handleSubmit(values)}
            initialValues={{
                internField: "",
                typeOfIntern: "",
                duration: "",
                descriptionOfWork: "",
            }}
        >
            {(formik) => {
                const { touched, isValid, dirty } = formik;
                return (
                    <Form>
                        <Heading title="Intern Application Details" />
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
                            <div className="secondRow">
                                <TextInput
                                    label="Description of work the intern will do"
                                    id="descriptionOfWork"
                                    name="descriptionOfWork"
                                    as="textarea"
                                    style={{ height: "11.5rem" }}
                                    touched={touched}
                                />
                            </div>
                        </div>
                        <div className="dashboard_rightAlign">
                            <button
                                className="dashboard_button"
                                type="reset"
                                onClick={() => setShowNewInterns(false)}
                            >
                                Discard
                            </button>
                            <button
                                className="dashboard_save"
                                type="submit"
                                disabled={!(dirty && isValid)}
                            >
                                Apply
                            </button>
                        </div>
                    </Form>
                );
            }}
        </Formik>
    );
};

export default DashboardNewInterns;
