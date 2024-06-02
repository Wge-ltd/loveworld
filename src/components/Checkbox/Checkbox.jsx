import React, { useState } from "react";
import CheckedCheckbox from "../../assets/Checkedcheckbox.svg";
import EmptyCheckbox from "../../assets/emptyCheckbox.svg";
import "./Checkbox.scss";

const Checkbox = ({
    item,
    data = {},
    setData,
    name = "",
    masterChecked = false,
    setMasterChecked = () => {},
}) => {
    const handleCheckboxChange = (e) => {
        if (name === "all") {
            setMasterChecked(!masterChecked);
            setData((prevState) =>
                prevState.map((obj) => {
                    return {
                        ...obj,
                        checkbox: {
                            ...obj.checkbox,
                            isChecked: e.target.checked,
                        },
                    };
                }),
            );
            return;
        }

        setData((prevState) =>
            prevState.map((obj) => {
                if (obj.checkbox.id === item.checkbox.id) {
                    return {
                        ...obj,
                        checkbox: {
                            ...obj.checkbox,
                            isChecked: !obj.checkbox.isChecked,
                        },
                    };
                }
                return obj;
            }),
        );
    };

    const isChecked = name == "all" ? masterChecked : item?.checkbox?.isChecked;

    return (
        <div className="checkbox">
            <label style={{ display: "inline-block", position: "relative" }}>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={(e) => handleCheckboxChange(e)}
                />
                {isChecked ? (
                    <img src={CheckedCheckbox} alt="Checked" />
                ) : (
                    <img src={EmptyCheckbox} alt="Empty checkbox" />
                )}
            </label>
        </div>
    );
};

export default Checkbox;
