import React, { useState } from "react";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";

import Loading from "../../components/Loading";
import EnrollContent from "../../components/EnrollContent";
import TextInput from "../../components/TextInput";
import logo from "../../assets/LogoGold.svg";
import GoogleIcon from "../../assets/GoogleIcon.svg";
import { useRegisterMutation } from "../../services/mutations/auth";
import { ErrorToast, SuccessToast } from "../../utils/toast";
import { EnrollInternSchema, SignUpInternSchema } from "../../utils/schema";
import { cleanUpObject } from "../../utils";

const EnrollIntern = ({ onPageChange, data, setInternData }) => {
    const navigate = useNavigate();

    const handleSubmit = async (values) => {
        try {
            const newData = cleanUpObject(values);
            if (!newData) return;
            setInternData(newData);
            onPageChange("intern-signupSetup");
        } catch (error) {
            ErrorToast("Registration failed. Please try again.");
        }
    };

    return (
        <>
            <div className="login_main">
                <img src={logo} alt="logo" />
                <p style={{ marginBottom: 0 }}>Step 1</p>
                <h2>Enroll</h2>

                <Formik
                    initialValues={{
                        firstName: data?.firstName || "",
                        lastName: data?.lastName || "",
                        email: data?.email || "",
                        password: data?.password || "",
                    }}
                    validationSchema={EnrollInternSchema}
                    onSubmit={(values) => handleSubmit(values)}
                >
                    {(formik) => {
                        const { errors, touched, dirty, isValid } = formik;
                        return (
                            <Form>
                                <TextInput
                                    label="First Name*"
                                    id="firstName"
                                    name="firstName"
                                    placeholder="Enter your first name"
                                    touched={touched}
                                    error={errors.name}
                                />
                                <TextInput
                                    label="Last Name*"
                                    id="lastName"
                                    name="lastName"
                                    placeholder="Enter your last name"
                                    touched={touched}
                                    error={errors.name}
                                />
                                <TextInput
                                    label="Email*"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    touched={touched}
                                    error={errors.email}
                                />
                                <TextInput
                                    label="Password*"
                                    id="password"
                                    name="password"
                                    type="password"
                                    touched={touched}
                                    placeholder="Create a password"
                                    error={errors.password}
                                />
                                <button
                                    type="submit"
                                    className="login_button"
                                    disabled={!(dirty && isValid)}
                                >
                                    Next
                                </button>
                            </Form>
                        );
                    }}
                </Formik>
                <button className="login_google">
                    <img src={GoogleIcon} alt="google" />
                    Sign up with Google
                </button>
                <div className="signup_login">
                    Already have an account? <span onClick={() => navigate("/login")}>Login</span>
                </div>
            </div>
            <EnrollContent />
        </>
    );
};

const SignUpSetupIntern = ({ onPageChange, data, setInternData }) => {
    const [isLoading, setIsLoading] = useState(false);
    const { mutateAsync: registerIntern } = useRegisterMutation();

    const handleSubmit = async (values) => {
        try {
            const newData = cleanUpObject(values);
            if (!newData) return;

            setIsLoading(true);
            const receivedData = {
                country: newData?.country,
                institution: newData?.institution,
                level: newData?.level,
                internPhoneNumber: newData?.internPhoneNumber,
            };
            setInternData((prev) => ({
                ...prev,
                ...receivedData,
            }));
            const sendingData = {
                ...data,
                ...receivedData,
            };

            const res = await registerIntern({ ...sendingData, userType: "Intern" });
            if (res) {
                SuccessToast(res?.msg);
                // navigate('/intern-dashboard');
            }
        } catch (error) {
            ErrorToast(error?.data?.msg || "Registration failed. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="login_main">
                <p style={{ marginBottom: "1rem" }}>Step 2</p>
                <h1>Let&apos;s get you set up</h1>
                <p>Please enter your details.</p>

                <Formik
                    initialValues={{
                        country: data?.country || "",
                        institution: data?.institution || "",
                        level: data?.level || "",
                        internPhoneNumber: data?.internPhoneNumber || "",
                    }}
                    validationSchema={SignUpInternSchema}
                    onSubmit={(values) => handleSubmit(values)}
                >
                    {(formik) => {
                        const { errors, touched, dirty, isValid } = formik;
                        return (
                            <Form>
                                <TextInput
                                    label="Country"
                                    id="country"
                                    placeholder="Enter your Country"
                                    name="country"
                                    touched={touched}
                                    error={errors.country}
                                />
                                <TextInput
                                    label="Institution"
                                    id="institution"
                                    name="institution"
                                    placeholder="Enter your Institution"
                                    touched={touched}
                                    error={errors.institution}
                                />
                                <TextInput
                                    label="Level"
                                    id="level"
                                    placeholder="Enter your level"
                                    name="level"
                                    touched={touched}
                                    error={errors.level}
                                />
                                <TextInput
                                    label="Phone Number*"
                                    id="internPhoneNumber"
                                    name="internPhoneNumber"
                                    placeholder="Enter phone number"
                                    touched={touched}
                                    error={errors.phoneNumber}
                                    type="tel"
                                />
                                {isLoading && <Loading size="sm" />}
                                <button
                                    type="submit"
                                    className="login_button"
                                    disabled={!(dirty && isValid)}
                                >
                                    Get Started
                                </button>
                            </Form>
                        );
                    }}
                </Formik>
                <button className="signup_prevButton" onClick={() => onPageChange("enroll-Intern")}>
                    Previous
                </button>
            </div>
            <EnrollContent />
        </>
    );
};

const SignUpIntern = ({ page, onPageChange }) => {
    const [internData, setInternData] = useState({});

    return (
        <>
            {page === "enroll-Intern" && (
                <EnrollIntern
                    data={internData}
                    setInternData={setInternData}
                    onPageChange={onPageChange}
                />
            )}
            {page === "intern-signupSetup" && (
                <SignUpSetupIntern
                    data={internData}
                    setInternData={setInternData}
                    onPageChange={onPageChange}
                />
            )}
        </>
    );
};

export default SignUpIntern;
