import React from "react";
import "./Heading.scss";

const Heading = ({ title, children, style = {} }) => {
    return (
        <div className="heading" style={style}>
            <h4 className="heading4">{title}</h4>
            {children}
        </div>
    );
};

export default Heading;
