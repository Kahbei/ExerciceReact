import "./Reservationbtn.css";
import logo from "../logo.svg";

function Reservationbtn() {
    return (
        <div className="reservationbtn">
            <button className="btn btn-lg btn-outline-dark">Prendre une réservation</button>
            <button className="btn btn-lg btn-outline-dark">Rejoindre une réservation</button>
        </div>
    );
}

export default Reservationbtn;
