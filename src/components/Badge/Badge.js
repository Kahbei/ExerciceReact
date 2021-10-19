import "./Badge.css";
import logo from "../logo.svg";

function Badge() {
    return (
        <div className="badge">
            <img src={logo} alt="image-restaurant" />
            <div>
                <h2 className="badge-restaurant">Ritz</h2>
                <p>Lorem Ipsum bellum bellum bellum bellamos belleis bellum</p>
                <button className="btn-badge">Plus d'information</button>
            </div>
        </div>
    );
}

export default Badge;
