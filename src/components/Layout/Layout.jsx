import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Layout = ({ children, className }) => {
    return (
        <div className={className}>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
