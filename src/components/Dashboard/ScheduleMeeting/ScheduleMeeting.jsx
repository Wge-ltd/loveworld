import { useState } from "react";
import { Formik, Form } from "formik";

import "./ScheduleMeeting.scss";
import TextInput from "../../TextInput";
import CloseButton from "../../../assets/Cross.svg";
import CheckCircle from "../../../assets/CheckedCircle.svg";
import { ScheduleMeetingSchema } from "../../../utils/schema";

const ScheduleMeeting = ({ handleClose }) => {
    const [isSuccessful, setIsSuccessful] = useState(false);
    const handleSubmit = (values) => {
        setIsSuccessful(true);
    };

    return (
        <div className="custom_overlay">
            <div className="custom_overlay_container">
                <div className="dashboard_new_user">
                    <img
                        onClick={handleClose}
                        className="schedule_meeting_close"
                        src={CloseButton}
                        alt="Close"
                    />
                    {isSuccessful && <img src={CheckCircle} alt="Success" />}
                    <h2>{isSuccessful ? "Successful" : "Schedule a meeting"}</h2>
                    <p>
                        {isSuccessful
                            ? "Check Your email for meeting link"
                            : " Schedule a meeting with Loveworld Virtual Internship representative to direct you on how to use our products."}
                    </p>
                    {isSuccessful ? (
                        <button className="schedule_meeting_button" onClick={handleClose}>
                            Back to dashboard
                        </button>
                    ) : (
                        <Formik
                            initialValues={{
                                time: "",
                                date: "",
                                location: "",
                            }}
                            validationSchema={ScheduleMeetingSchema}
                            onSubmit={(values) => handleSubmit(values)}
                        >
                            {(formik) => {
                                const { touched, dirty, isValid } = formik;
                                return (
                                    <Form>
                                        <div className="dashboard_new_user_form">
                                            <TextInput
                                                id="time"
                                                name="time"
                                                type="time"
                                                placeholder="10 : 30 AM"
                                                touched={touched}
                                            />
                                            <TextInput
                                                id="date"
                                                name="date"
                                                type="date"
                                                placeholder="24, Jan, 2024"
                                                touched={touched}
                                            />
                                            <TextInput
                                                id="location"
                                                name="location"
                                                placeholder="Kings Conference Video"
                                                touched={touched}
                                            />
                                            <button
                                                type="submit"
                                                className="schedule_meeting_button"
                                                disabled={!(dirty && isValid)}
                                            >
                                                Schedule Meeting
                                            </button>
                                        </div>
                                    </Form>
                                );
                            }}
                        </Formik>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ScheduleMeeting;
