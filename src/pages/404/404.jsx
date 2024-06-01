import { Link } from "react-router-dom";
import "./404.scss";
import NotFoundImg from "../../assets/404.png";
import NotFoundVector from "../../assets/404Vector.png";

const NotFound = () => {
    return (
        <main className="not_found">
            <div className="not_found__container">
                <h1>404</h1>
                <p>Oops! it seems you follow backlink</p>
                <Link to="/" className="not_found__link">
                    Back to home
                </Link>
                <div className="not_found__img__container">
                    <img src={NotFoundImg} alt="404" className="not_found__img" />
                    <img src={NotFoundVector} alt="404" className="not_found__vector" />
                </div>
            </div>
        </main>
    );
};

export default NotFound;
