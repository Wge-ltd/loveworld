import { useNavigate } from "react-router-dom";
import "./MatchSuccess.scss";
import CloseButton from "../../assets/Cross.svg";
import CheckedCircle from "../../assets/CheckedCircle.svg";

const MatchSuccess = ({
    name,
    type,
    countInterns, // for count of interns assigns to company
    popUpText,
    setIsMatched,
    onClose,
}) => {
    const navigate = useNavigate();
    const status = popUpText === "fail" ? "Failed" : "Successful";
    const text =
        type === "INTERNS"
            ? `You successfully Assigned ${countInterns} intern${countInterns > 1 ? "'s" : ""} to ${name}`
            : `You successfully Matched ${countInterns > 1 ? countInterns : "this"} intern to ${name}`;
    return (
        <div className="custom_overlay">
            <div className="matchSuccess">
                <img
                    onClick={() => {
                        setIsMatched(false);
                        onClose();
                    }}
                    className="matchSuccess_close"
                    src={CloseButton}
                    alt="Close"
                />
                <img src={CheckedCircle} alt="Checked Circle" />
                <h4>
                    {type === "INTERNS" ? "Assign" : "Match"} {status}
                </h4>
                {status === "Successful" && <span>{text}</span>}
                <button onClick={() => navigate("/admin-dashboard")}>Back to dashboard</button>
            </div>
        </div>
    );
};

export default MatchSuccess;
