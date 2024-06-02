import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import EnrollContent from "../../components/EnrollContent";
import TextInput from "../../components/TextInput";
import Loading from "../../components/Loading";
import logo from "../../assets/LogoGold.svg";
import GoogleIcon from "../../assets/GoogleIcon.svg";
import { useRegisterMutation } from "../../services/mutations/auth";
import { ErrorToast, SuccessToast } from "../../utils/toast";
import { EnrollCompaniesSchema, SignUpCompanySchema } from "../../utils/schema";
import { cleanUpObject } from "../../utils";

const EnrollCompanies = ({ data, onPageChange, setCompanyData }) => {
    const navigate = useNavigate();

    const handleSubmit = async (values) => {
        const newData = cleanUpObject(values);
        if (!newData) return;

        const data = {
            companyName: newData?.companyName,
            companyAddress: newData?.companyAddress,
            companyWebsite: newData?.companyWebsite,
            companyPhoneNumber: newData?.companyPhoneNumber,
        };
        setCompanyData(data);
        onPageChange("company-signupSetup");
    };

    return (
        <>
            <div className="login_main">
                <img src={logo} alt="logo" />
                <p style={{ marginBottom: 0 }}>Step 1</p>
                <h2>Enroll</h2>
                <Formik
                    initialValues={{
                        companyName: data?.companyName || "",
                        companyAddress: data?.companyAddress || "",
                        companyPhoneNumber: data?.companyPhoneNumber || "",
                        companyWebsite: data?.companyWebsite || "",
                    }}
                    validationSchema={EnrollCompaniesSchema}
                    onSubmit={(values) => handleSubmit(values)}
                >
                    {(formik) => {
                        const { errors, touched, dirty, isValid } = formik;
                        return (
                            <Form>
                                <TextInput
                                    label="Name of Company*"
                                    id="companyName"
                                    name="companyName"
                                    placeholder="Enter company name"
                                    touched={touched}
                                    error={errors.name}
                                />
                                <TextInput
                                    label="Company address*"
                                    id="companyAddress"
                                    name="companyAddress"
                                    placeholder="Enter Address"
                                    touched={touched}
                                    error={errors.address}
                                />
                                <TextInput
                                    label="Phone Number*"
                                    id="companyPhoneNumber"
                                    name="companyPhoneNumber"
                                    placeholder="Enter phone number"
                                    touched={touched}
                                    error={errors.number}
                                    type="tel"
                                />
                                <TextInput
                                    label="Website Link*"
                                    id="companyWebsite"
                                    name="companyWebsite"
                                    placeholder="Website link"
                                    touched={touched}
                                    error={errors.website}
                                    type="url"
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
                    Already have an account?
                    <span onClick={() => navigate("/login")}>login</span>
                </div>
            </div>
            <EnrollContent />
        </>
    );
};

const SignUpSetupCompany = ({ onPageChange, companyData, setCompanyData }) => {
    const [isLoading, setIsLoading] = useState(false);
    const { mutateAsync: registerCompany } = useRegisterMutation();

    const handleSubmit = async (values) => {
        try {
            const newData = cleanUpObject(values);
            if (!newData) return;

            setIsLoading(true);
            const data = {
                firstName: newData?.firstName,
                lastName: newData?.lastName,
                email: newData?.email,
                password: newData?.password,
            };
            setCompanyData((prev) => ({
                ...prev,
                ...data,
            }));
            const sendingData = {
                ...companyData,
                ...data,
            };

            const res = await registerCompany({ ...sendingData, userType: "company" });
            if (res) {
                SuccessToast(res?.msg);
                // navigate(`/${userType}-dashboard`)
            }
        } catch (error) {
            ErrorToast(error?.response?.data?.msg);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="login_main">
                <h1>Supervisor contact</h1>
                <p style={{ marginBottom: "1rem" }}>Step 2</p>
                <p>you’re almost there!</p>

                <Formik
                    initialValues={{
                        firstName: companyData?.firstName || "",
                        lastName: companyData?.lastName || "",
                        email: companyData?.email || "",
                        password: companyData?.password || "",
                    }}
                    validationSchema={SignUpCompanySchema}
                    onSubmit={(values) => handleSubmit(values)}
                >
                    {(formik) => {
                        const { errors, touched, dirty, isValid } = formik;
                        return (
                            <Form>
                                <TextInput
                                    label="First name"
                                    id="firstName"
                                    name="firstName"
                                    placeholder="Enter first name"
                                    touched={touched}
                                />
                                <TextInput
                                    label="Last name"
                                    id="lastName"
                                    name="lastName"
                                    placeholder="Enter last name"
                                    touched={touched}
                                />
                                <TextInput
                                    label="Email"
                                    id="email"
                                    name="email"
                                    touched={touched}
                                    placeholder="Enter email"
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
                <button
                    className="signup_prevButton"
                    onClick={() => onPageChange("enroll-Company")}
                >
                    Previous
                </button>
            </div>
            <EnrollContent />
        </>
    );
};

const SignUpCompany = ({ page, onPageChange }) => {
    const [companyData, setCompanyData] = useState({});
    return (
        <>
            {page === "enroll-Company" && (
                <EnrollCompanies
                    data={companyData}
                    setCompanyData={setCompanyData}
                    onPageChange={onPageChange}
                />
            )}
            {page === "company-signupSetup" && (
                <SignUpSetupCompany
                    companyData={companyData}
                    setCompanyData={setCompanyData}
                    onPageChange={onPageChange}
                />
            )}
            {/* {page == "company-detail" && <SignUpCompanyDetail onPageChange={onPageChange} />} */}
        </>
    );
};

export default SignUpCompany;
