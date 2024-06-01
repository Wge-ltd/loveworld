import React from "react";

const Book = (props) => {
    return (
        <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M44 33.4799V9.33989C44 6.93989 42.04 5.15989 39.66 5.35989H39.54C35.34 5.71989 28.96 7.85989 25.4 10.0999L25.06 10.3199C24.48 10.6799 23.52 10.6799 22.94 10.3199L22.44 10.0199C18.88 7.79989 12.52 5.67989 8.32 5.33989C5.94 5.13989 4 6.93989 4 9.31989V33.4799C4 35.3999 5.56 37.1999 7.48 37.4399L8.06 37.5199C12.4 38.0999 19.1 40.2999 22.94 42.3999L23.02 42.4399C23.56 42.7399 24.42 42.7399 24.94 42.4399C28.78 40.3199 35.5 38.0999 39.86 37.5199L40.52 37.4399C42.44 37.1999 44 35.3999 44 33.4799Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M24 10.98V40.98"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M15.5 16.98H11"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M17 22.98H11"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default Book;
