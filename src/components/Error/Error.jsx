import { isRouteErrorResponse, useNavigate, useRouteError } from "react-router-dom";
import { useState } from "react";
import "./Error.scss";

const Error = () => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");
    const routerError = useRouteError();

    if (isRouteErrorResponse(routerError)) {
        if (routerError.status === 404) {
            setErrorMessage("This page does not exist!");
        }

        if (routerError.status === 401) {
            setErrorMessage("You are not authorized to see this");
        }

        if (routerError.status === 503) {
            setErrorMessage("Looks like our API is down");
        }
    }

    return (
        <div role="alert" className="error-page">
            <h1 className="error-message error-message-custom">{errorMessage && errorMessage}</h1>
            <h1 className="error-message error-message-status">
                {routerError &&
                    (routerError?.statusText || routerError?.data || routerError?.message)}
            </h1>
            <h1 className="error-message error-message-not-found">
                {!errorMessage && !routerError && "404 PAGE NOT FOUND!"}
            </h1>
            <button className="error-button error-button-home-error" onClick={() => navigate("/")}>
                Go Back Home
            </button>
        </div>
    );
};

export default Error;
