import React from "react";
import "./Help.scss";
import Layout from "../../components/Layout";
import ContactTeam from "../../components/ContactTeam";
import TeamFAQ from "../../components/TeamFAQ";

const HelpTop = () => {
    return (
        <div className="help_top">
            <h1>Help Center</h1>
            <p>Many Countries, Multiple Departments, one Mission</p>
        </div>
    );
};

const Help = () => {
    return (
        <Layout className="help">
            <HelpTop />
            <ContactTeam help />
            <TeamFAQ />
        </Layout>
    );
};

export default Help;
