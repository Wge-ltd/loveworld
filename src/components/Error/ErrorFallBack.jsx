import "./Error.scss";

const ErrorFallback = () => {
    return (
        <div role="alert" className="error-fallback">
            <h1 className="error-message">Something Went Wrong!</h1>
            <button
                className="error-button error-button-refresh"
                onClick={() => {
                    window.location.reload();
                }}
            >
                Refresh
            </button>
            <button
                className="error-button"
                onClick={() => {
                    window.location.href = "/";
                }}
            >
                Go Back Home
            </button>
        </div>
    );
};

export default ErrorFallback;
