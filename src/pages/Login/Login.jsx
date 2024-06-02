import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";

import "./Login.scss";
import TextInput from "../../components/TextInput";
import Loading from "../../components/Loading";
import ForgetPassword from "../../components/ForgetPassword";
import LoginImage from "../../assets/LoginImage.png";
import logo from "../../assets/LogoGold.svg";
import GoogleIcon from "../../assets/GoogleIcon.svg";
import CheckedCheckbox from "../../assets/Checkedcheckbox.svg";
import EmptyCheckbox from "../../assets/emptyCheckbox.svg";
import { SuccessToast, ErrorToast } from "../../utils/toast";
import { useLoginMutation } from "../../services/mutations/auth";
import { LoginSchema } from "../../utils/schema";

const Checkbox = ({ isChecked, setIsChecked }) => (
    <div className="login_checkbox">
        <label style={{ display: "inline-block", position: "relative" }}>
            <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
            {isChecked ? (
                <img src={CheckedCheckbox} alt="Checked" />
            ) : (
                <img src={EmptyCheckbox} alt="Empty checkbox" />
            )}
        </label>
    </div>
);

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { mutateAsync: loginUser } = useLoginMutation();
    const [isLoading, setIsLoading] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [isForgotPassword, setForgetPassword] = useState(false);
    const [resetObj, setResetObj] = useState({});

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        if (queryParams?.size) {
            setResetObj({
                token: queryParams.get("token"),
                email: queryParams.get("email"),
            });
        }
    }, [location.search]);

    const onSubmit = async (values, { setSubmitting }) => {
        try {
            setIsLoading(true);
            const data = {
                email: values.email.toLowerCase(),
                password: values.password,
            };
            const res = await loginUser(data);
            const { userType } = res?.user || {};
            if (userType) {
                // save user in local storage
                localStorage.setItem("love-world_user", JSON.stringify(res?.user));

                SuccessToast("Login Successful");
                if (userType === "Intern") {
                    navigate("/intern-dashboard");
                } else if (userType === "company") {
                    navigate("/company-dashboard");
                } else {
                    navigate("/admin-dashboard");
                }
            }
        } catch (error) {
            if (error?.response?.status === 500) {
                ErrorToast("Server down, Try again after a while");
            } else if (error?.response?.status) {
                ErrorToast(error?.response?.data?.msg);
            }
        } finally {
            setSubmitting(false);
            setIsLoading(false);
        }
    };

    return (
        <div className="login">
            {isForgotPassword || resetObj.token || resetObj.email ? (
                <div className="login_main">
                    <ForgetPassword resetObj={resetObj} setResetObj={setResetObj} />
                </div>
            ) : (
                <div className="login_main">
                    <img src={logo} alt="logo" />
                    <h1>Welcome back</h1>
                    <p>Welcome back! Please enter your details.</p>
                    <Formik
                        initialValues={{
                            email: "",
                            password: "",
                        }}
                        validationSchema={LoginSchema}
                        onSubmit={onSubmit}
                    >
                        {({ errors, touched, isValid, isSubmitting }) => (
                            <Form>
                                <TextInput
                                    label="Email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter email"
                                    touched={touched}
                                    error={errors.email}
                                />
                                <TextInput
                                    label="Password"
                                    id="password"
                                    name="password"
                                    placeholder="Enter password"
                                    touched={touched}
                                    error={errors.password}
                                    type="password"
                                />
                                {!isLoading ? (
                                    <div className="login_info">
                                        <div className="login_remember">
                                            <Checkbox
                                                isChecked={isChecked}
                                                setIsChecked={setIsChecked}
                                            />
                                            <span onClick={() => setIsChecked((prev) => !prev)}>
                                                Remember for 30 days
                                            </span>
                                        </div>
                                        <div
                                            className="login_forgetPassword"
                                            onClick={() => setForgetPassword(true)}
                                        >
                                            Forgot password
                                        </div>
                                    </div>
                                ) : (
                                    <Loading
                                        size="sm"
                                        style={{ marginTop: "0", fontSize: "5px" }}
                                    />
                                )}
                                <button
                                    type="submit"
                                    className="login_button"
                                    disabled={!isValid || isSubmitting}
                                >
                                    Sign in
                                </button>
                            </Form>
                        )}
                    </Formik>
                    <button className="login_google">
                        <img src={GoogleIcon} alt="google" />
                        Sign in with Google
                    </button>
                    <div className="login_signUp">
                        Don’t have an account?{" "}
                        <span onClick={() => navigate("/sign-up")}>Sign up</span>
                    </div>
                </div>
            )}
            <div className="login_image">
                <img src={LoginImage} alt="login" />
            </div>
        </div>
    );
};

export default Login;
