import React from "react";

const Eye = ({ color = "#FFF", large = false, onClick = () => {}, props }) => {
    if (large) {
        return (
            <svg
                onClick={onClick}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                style={{ cursor: "pointer" }}
                {...props}
            >
                <path
                    d="M15.5799 11.9999C15.5799 13.9799 13.9799 15.5799 11.9999 15.5799C10.0199 15.5799 8.41992 13.9799 8.41992 11.9999C8.41992 10.0199 10.0199 8.41992 11.9999 8.41992C13.9799 8.41992 15.5799 10.0199 15.5799 11.9999Z"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M11.9998 20.2702C15.5298 20.2702 18.8198 18.1902 21.1098 14.5902C22.0098 13.1802 22.0098 10.8102 21.1098 9.40021C18.8198 5.80021 15.5298 3.72021 11.9998 3.72021C8.46984 3.72021 5.17984 5.80021 2.88984 9.40021C1.98984 10.8102 1.98984 13.1802 2.88984 14.5902C5.17984 18.1902 8.46984 20.2702 11.9998 20.2702Z"
                    stroke={color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        );
    } else {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                style={{ cursor: "pointer" }}
                {...props}
            >
                <path
                    d="M16.9599 11.2586C17.305 11.7014 17.305 12.2993 16.9599 12.7414C15.8727 14.1336 13.2642 17 10.2189 17C7.1735 17 4.56506 14.1336 3.47785 12.7414C3.30991 12.5294 3.21875 12.2685 3.21875 12C3.21875 11.7315 3.30991 11.4706 3.47785 11.2586C4.56506 9.86643 7.1735 7 10.2189 7C13.2642 7 15.8727 9.86643 16.9599 11.2586Z"
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M10.2198 14.1431C11.4263 14.1431 12.4044 13.1837 12.4044 12.0003C12.4044 10.8168 11.4263 9.85742 10.2198 9.85742C9.01324 9.85742 8.03516 10.8168 8.03516 12.0003C8.03516 13.1837 9.01324 14.1431 10.2198 14.1431Z"
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        );
    }
};

export default Eye;
