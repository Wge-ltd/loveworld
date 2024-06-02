import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import { Formik, Form } from "formik";
import "./Checkout.scss";
import CheckIcon from "../../assets/SVGs/Check";
import TextInput from "../../components/TextInput";
import { CheckoutSchema } from "../../utils/schema";
import { PricesData, countryList } from "../../utils/staticData";
import Select from "../../components/Select";

const SummaryBox = ({ summary, btnRef }) => {
    const total = Number(summary?.price) + Number(summary?.tax);

    return (
        <div className="checkout_summaryBox">
            <h2>Order Summary</h2>
            <h3>{summary?.plan}</h3>
            <div className="checkout_summaryBoxItems">
                {summary?.features?.map((f, i) => (
                    <div className="checkout_summaryBoxItem" key={i}>
                        <CheckIcon />
                        {f?.title}
                    </div>
                ))}
            </div>
            <div className="checkout_summaryBoxPrice">
                <div>
                    <span>Sub Total</span>
                    <span>{summary?.price} Espees</span>
                </div>
                <div>
                    <span>Tax</span>
                    <span>{summary?.tax || 0} Espees</span>
                </div>
                <div>
                    <span>Total</span>
                    <span>{total || 0} Espees</span>
                </div>
                <button type="submit" onClick={() => btnRef.current.click()}>
                    Confirm Payment
                </button>
            </div>
        </div>
    );
};

const Checkout = () => {
    const btnRef = useRef();
    const location = useLocation();
    const summary = location?.state?.summary || PricesData[1];

    const handleCheckout = (data) => {};

    const handleSubmit = (values) => {
        Object.keys(values).forEach((key) => {
            if (values[key] === "") {
                delete values[key];
            }
        });

        handleCheckout(values);
    };

    return (
        <div className="checkout">
            <div className="form_container">
                <h1>Checkout</h1>
                <div className="checkout_form">
                    <Formik
                        initialValues={{
                            firstName: "",
                            lastName: "",
                            email: "",
                            number: "",
                            addressOne: "",
                            addressTwo: "",
                            country: "",
                            city: "",
                            state: "",
                            zip: "",
                        }}
                        validationSchema={CheckoutSchema}
                        onSubmit={(values) => handleSubmit(values)}
                    >
                        {(formik) => {
                            const { errors, touched } = formik;
                            return (
                                <Form>
                                    <div className="form_divide">
                                        <TextInput
                                            label="First name"
                                            id="firstName"
                                            name="firstName"
                                            touched={touched}
                                            error={errors.firstName}
                                        />
                                        <TextInput
                                            label="Last name"
                                            id="lastName"
                                            name="lastName"
                                            touched={touched}
                                            error={errors.lastName}
                                        />
                                        <TextInput
                                            label="Email"
                                            id="email"
                                            name="email"
                                            touched={touched}
                                            error={errors.email}
                                        />
                                        <TextInput
                                            label="Phone number"
                                            id="number"
                                            name="number"
                                            touched={touched}
                                            error={errors.number}
                                        />
                                    </div>
                                    <TextInput
                                        label="Address Line 1"
                                        id="addressOne"
                                        name="addressOne"
                                        touched={touched}
                                        error={errors.addressOne}
                                    />
                                    <TextInput
                                        label="Address Line 2"
                                        id="addressTwo"
                                        name="addressTwo"
                                        touched={touched}
                                        error={errors.addressTwo}
                                    />
                                    <div className="form_divide">
                                        <Select
                                            label="Country"
                                            id="country"
                                            name="country"
                                            options={countryList}
                                        />
                                        <TextInput
                                            label="City"
                                            id="city"
                                            name="city"
                                            touched={touched}
                                            error={errors.city}
                                        />
                                        <TextInput
                                            label="State/Province/Region"
                                            id="state"
                                            name="state"
                                            touched={touched}
                                            error={errors.state}
                                        />
                                        <TextInput
                                            label="ZIP/Postal Code"
                                            id="zip"
                                            name="zip"
                                            touched={touched}
                                            error={errors.zip}
                                        />
                                    </div>
                                    <button type="submit" className="hidden" ref={btnRef}></button>
                                </Form>
                            );
                        }}
                    </Formik>
                </div>
            </div>
            {summary && (
                <div className="summary">
                    <SummaryBox summary={summary} btnRef={btnRef} />
                </div>
            )}
        </div>
    );
};

export default Checkout;
