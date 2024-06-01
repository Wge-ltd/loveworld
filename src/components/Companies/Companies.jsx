import React from "react";
import "./Companies.scss";
import PCompany1 from "../../assets/PCompany1.svg";
import PCompany2 from "../../assets/PCompany2.svg";
import PCompany3 from "../../assets/PCompany3.svg";
import PCompany4 from "../../assets/PCompany4.svg";
import PCompany5 from "../../assets/PCompany5.svg";
import PCompany6 from "../../assets/PCompany6.svg";

const CompaniesSVGs = [PCompany1, PCompany2, PCompany3, PCompany4, PCompany5, PCompany6];

const Companies = ({ title }) => {
    return (
        <div className="companies">
            <h4>{title ? title : "Proud to be recognized by"}</h4>
            <div className="companies_main">
                {CompaniesSVGs.map((c, i) => (
                    <img src={c} alt="company" key={i} />
                ))}
            </div>
        </div>
    );
};

export default Companies;
