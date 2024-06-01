import React, { useState } from "react";
import { Formik, Form } from "formik";
import { object, string } from "yup";

import TextInput from "../TextInput";
import Logo from "../../assets/logo.svg";
import { useForgotPasswordMutation, useResetPasswordMutation } from "../../services/mutations/auth";
import Loading from "../Loading";
import { ErrorToast, SuccessToast } from "../../utils/toast";
import { cleanUpObject } from "../../utils";

const ForgetPassword = ({ resetObj, setResetObj }) => {
    const { mutateAsync: forgotPassword } = useForgotPasswordMutation();
    const { mutateAsync: resetPassword } = useResetPasswordMutation();
    const [isLoading, setIsLoading] = useState(false);
    const reset = Object.keys(resetObj).length;

    const ForgotPasswordSchema = object().shape({
        email: !reset && string().trim().email().required("Email is required"),
        password:
            reset &&
            string()
                .trim()
                .min(8, "Password must be at least 8 characters")
                .required("Password is required"),
    });

    const userForgotPassword = async (data) => {
        setIsLoading(true);
        try {
            const res = await forgotPassword(data);
            res?.msg && SuccessToast(res?.msg);
        } catch (e) {
            ErrorToast(e.response?.data?.msg ?? "Couldn't send reset link, Please try again");
        } finally {
            setIsLoading(false);
        }
    };

    const userResetPassword = async (data) => {
        setIsLoading(true);
        try {
            const res = await resetPassword(data);
            res?.msg && SuccessToast(res?.msg);
            setResetObj({});
        } catch (e) {
            ErrorToast(e.response?.data?.msg ?? "Couldn't reset password, Please try again");
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = async (values) => {
        try {
            const newData = cleanUpObject(values);
            if (!newData) return;

            const data = { email: newData.email };
            if (reset) {
                data.token = resetObj?.token;
                data.password = newData.password;
                userResetPassword(data);
            } else {
                userForgotPassword(data);
            }
        } catch (error) {
            ErrorToast(error ?? "Failed to send reset link");
        }
    };

    return (
        <>
            <img src={Logo} alt="logo" />
            <h3 style={{ marginBottom: "2rem" }}>{reset ? "Reset" : "Forgot"} Password</h3>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                validationSchema={ForgotPasswordSchema}
                onSubmit={(values) => handleSubmit(values)}
            >
                {(formik) => {
                    const { errors, touched, isValid } = formik;
                    return (
                        <Form>
                            <TextInput
                                label="Email"
                                id="email"
                                name="email"
                                placeholder="Enter email"
                                touched={touched}
                                error={errors.email}
                            />
                            {reset ? (
                                <TextInput
                                    label="Password"
                                    id="password"
                                    name="password"
                                    placeholder="Create new password"
                                    touched={touched}
                                    error={errors.password}
                                    type="password"
                                />
                            ) : null}
                            {isLoading && <Loading size="sm" />}
                            <button type="submit" className="login_button" disabled={!isValid}>
                                {reset ? "Reset" : "Submit"}
                            </button>
                        </Form>
                    );
                }}
            </Formik>
        </>
    );
};

export default ForgetPassword;
