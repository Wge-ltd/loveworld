import React from "react";
import "./DashboardCard.scss";
import Group from "../../../assets/group.svg";
import BgImage from "../../../assets/CardBg.png";

const DashboardCard = ({ title, count, bgColor }) => {
    const containerStyle = {
        background: bgColor,
    };

    return (
        <div className="dashboardCard" style={containerStyle}>
            <img className="dashboardCard_bg" src={BgImage} alt="Background" />
            <img src={Group} alt="Group" />
            <div className="dashboardCard_info">
                <span className="dashboardCard_title">{title}</span>
                <span className="dashboardCard_count">{count || 0}</span>
            </div>
        </div>
    );
};

export default DashboardCard;
