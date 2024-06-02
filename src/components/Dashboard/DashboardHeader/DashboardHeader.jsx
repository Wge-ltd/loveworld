import React from "react";
import "./DashboardHeader.scss";

const DashboardHeader = ({ title, children, style = {} }) => {
    return (
        <div className="dashboardHeader" style={style}>
            {title && <h4>{title}</h4>}
            {children}
        </div>
    );
};

export default DashboardHeader;
