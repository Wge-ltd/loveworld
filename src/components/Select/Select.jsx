import React, { forwardRef } from "react";
import "./Select.scss";
import { Field, ErrorMessage } from "formik";

const Select = forwardRef(({ options, id, name, label, ...rest }, ref) => {
    const selectOptions =
        [
            {
                value: "",
                text: "Select an option",
            },
            ...options,
        ] || [];
    return (
        <div className="select">
            {label && <label htmlFor={id}>{label}</label>}
            <Field as="select" id={id || name} name={name} ref={ref} {...rest}>
                {selectOptions?.map((option, i) => (
                    <option key={i} value={option?.value}>
                        {option?.text}
                    </option>
                ))}
            </Field>
            <ErrorMessage name={name} component="span" className="error" />
        </div>
    );
});

Select.displayName = "Select";

export default Select;
