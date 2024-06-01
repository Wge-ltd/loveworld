import { useState } from "react";
import "./FAQ.scss";

const FAQ = ({ q, a, variant = "light" }) => {
    const [open, setOpen] = useState(false);
    return (
        <div
            className={`faq ${variant === "light" ? "light" : "dark"}`}
            style={{
                backgroundColor: variant === "dark" && open ? "#475467" : "",
            }}
        >
            <div className="faq_content">
                <h3>{q}</h3>
                <p className={`${open ? "faq_open" : ""}`}>{a}</p>
            </div>
            <button onClick={() => setOpen(!open)}>
                <span>{open ? "—" : "+"}</span>
            </button>
        </div>
    );
};

export default FAQ;
