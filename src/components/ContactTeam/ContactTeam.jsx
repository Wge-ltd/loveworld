import { Formik, Form } from "formik";
import "./ContactTeam.scss";
import GroupImage from "../GroupImage";
import TextInput from "../TextInput";
import ContactGroupImg from "../../assets/ContactGroup.svg";
import { ContactTeamSchema } from "../../utils/schema";

const ContactTeam = ({ help = false }) => {
    const handleSubmit = async (values) => {};

    return (
        <div className="contactTeam">
            <div className="container">
                <div className={help ? "contactTeam_help " : "contactTeam_image"}>
                    {help ? (
                        <img src={ContactGroupImg} alt="contact" />
                    ) : (
                        <GroupImage type="contact" />
                    )}
                </div>
                <div className="contactTeam_main">
                    <h1>{help ? "Contact our team" : "Why Wait?"}</h1>
                    <p>
                        {help
                            ? "Loveworld Internship sales and support teams are always ready to answer your questions and discuss our products and platforms. Send us a message, and we will get back to you as soon as possible"
                            : `Book a free consultation call with our corporate strategy team to
            elevate, engage and evolve your organization with Virtual
            Internships.`}
                    </p>
                    <Formik
                        initialValues={{
                            orgName: "",
                            email: "",
                            firstName: "",
                            lastName: "",
                            department: "",
                            location: "",
                            description: "",
                        }}
                        validationSchema={ContactTeamSchema}
                        onSubmit={(values) => handleSubmit(values)}
                    >
                        {(formik) => {
                            const { touched, isValid, dirty } = formik;
                            return (
                                <Form>
                                    <TextInput
                                        label="Organization name"
                                        id="orgName"
                                        name="orgName"
                                        touched={touched}
                                    />
                                    <TextInput
                                        label="Email"
                                        id="email"
                                        name="email"
                                        touched={touched}
                                    />
                                    <TextInput
                                        label="First name"
                                        id="firstName"
                                        name="firstName"
                                        touched={touched}
                                    />
                                    <TextInput
                                        label="Last name"
                                        id="lastName"
                                        name="lastName"
                                        touched={touched}
                                    />

                                    <TextInput
                                        label="Department"
                                        id="department"
                                        name="department"
                                        touched={touched}
                                    />
                                    <TextInput
                                        label="Location"
                                        id="location"
                                        name="location"
                                        touched={touched}
                                    />
                                    <TextInput
                                        as="textarea"
                                        placeholder="Enter a description..."
                                        id="description"
                                        name="description"
                                        touched={touched}
                                        containerClass="contactTeam_textarea"
                                    />

                                    <button
                                        type="submit"
                                        className={!(dirty && isValid) ? "disabled-btn" : ""}
                                        disabled={!(dirty && isValid)}
                                    >
                                        Book a free consultation call now
                                    </button>
                                </Form>
                            );
                        }}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default ContactTeam;
