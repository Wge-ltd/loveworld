import React, { forwardRef } from "react";
import "./TextInput.scss";
import { Field, ErrorMessage } from "formik";

const TextInput = forwardRef(
    (
        {
            id,
            label,
            name,
            touched,
            containerClass = "",
            error,
            classChange = false,
            type = "text",
            ...rest
        },
        ref,
    ) => {
        return (
            <div className={`${classChange ? "" : " textInput"} ${containerClass} `}>
                {label && <label htmlFor={id}>{label}</label>}
                <Field
                    name={name}
                    ref={ref}
                    type={type}
                    id={id}
                    className={error && touched[id] ? "textInput_error" : null}
                    {...rest}
                />
                <ErrorMessage name={name} component="span" className="error" />
            </div>
        );
    },
);

TextInput.displayName = "TextInput";

export default TextInput;
