import { useMemo, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import "./Pricing.scss";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CheckIcon from "../../assets/SVGs/Check";
import TeamFAQ from "../../components/TeamFAQ";
import FutureWork from "../../components/FutureWork";
import { PricesData } from "../../utils/staticData";
import { usePayment } from "../../services/mutations/payment";
import { ErrorToast } from "../../utils/toast";

const tabs = ["Monthly", "Annual", "Bi-Annual"];

const PriceBoxes = ({ isActiveTab }) => {
    const user = useMemo(() => JSON.parse(localStorage.getItem("love-world_user")) ?? {}, []);
    const userType = useMemo(() => user?.userType, [user]);
    const isCompany = useMemo(() => userType && userType === "company", [userType]);

    if (!isCompany) {
        localStorage.removeItem("love-world_user");
        return <Navigate to="/login" />;
    }
    return (
        <div className="pricing_priceBoxes">
            <PriceBox plan={PricesData[isActiveTab]} />
        </div>
    );
};

const PriceBox = ({ plan }) => {
    const navigate = useNavigate();
    const { mutateAsync: makePayment } = usePayment();

    const handlePayment = async () => {
        try {
            const res = await makePayment({
                plan: plan?.code,
            });
            if (res) {
                window.location.href = res?.paymentUrl;
            }
        } catch (error) {
            ErrorToast(error ?? "Error making payment");
        }
    };

    return (
        <div className={`pricing_priceBox ${plan?.best ? "pricing_priceBoxBest" : ""} `}>
            <h1>${plan?.price} /</h1>
            <h1>{plan?.price} Espees</h1>
            <h3>{plan?.plan}</h3>
            <h5>{plan?.valid}</h5>
            <div className="pricing_priceBoxItems">
                {plan?.features.map((f, i) => (
                    <div
                        className={`pricing_priceBoxItem ${
                            !f?.available ? "pricing_priceBoxItemFused" : ""
                        } `}
                        key={i}
                    >
                        <CheckIcon />
                        {f?.title}
                    </div>
                ))}
            </div>
            <button className="pricing_priceBoxBtn1" onClick={() => handlePayment()}>
                Get started
            </button>
            <button className="pricing_priceBoxBtn2" onClick={() => navigate("/help")}>
                Chat to sales
            </button>
        </div>
    );
};

const Pricing = () => {
    const [isActiveTab, setIsActiveTab] = useState(1);

    return (
        <div className="pricing">
            <Navbar />
            <div className="pricing_top">
                <h1>Pricing plans</h1>
                <p>This Plan is for the Host Company/Departments</p>
                <div className="pricing_topOptions">
                    {tabs?.map((t, i) => (
                        <span
                            className={`${isActiveTab === i ? "pricing_topOptionActive" : ""}`}
                            onClick={() => setIsActiveTab(i)}
                            key={i}
                        >
                            {t} billing
                        </span>
                    ))}
                </div>
            </div>
            <PriceBoxes isActiveTab={isActiveTab} />
            <TeamFAQ />
            <FutureWork />
            <Footer />
        </div>
    );
};

export default Pricing;
