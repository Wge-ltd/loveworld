import React from "react";

const Cube = (props) => {
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
                d="M25.84 4.51993L38.86 11.5399C40.38 12.3599 40.38 14.6999 38.86 15.5199L25.84 22.5399C24.68 23.1599 23.32 23.1599 22.16 22.5399L9.14 15.5199C7.62 14.6999 7.62 12.3599 9.14 11.5399L22.16 4.51993C23.32 3.89993 24.68 3.89993 25.84 4.51993Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M7.22 20.2601L19.32 26.3201C20.82 27.0801 21.78 28.6201 21.78 30.3001V41.7401C21.78 43.4001 20.04 44.4601 18.56 43.7201L6.46 37.6601C4.96 36.9001 4 35.3601 4 33.6801V22.2401C4 20.5801 5.74 19.5201 7.22 20.2601Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M40.78 20.2601L28.68 26.3201C27.18 27.0801 26.22 28.6201 26.22 30.3001V41.7401C26.22 43.4001 27.96 44.4601 29.44 43.7201L41.54 37.6601C43.04 36.9001 44 35.3601 44 33.6801V22.2401C44 20.5801 42.26 19.5201 40.78 20.2601Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default Cube;
