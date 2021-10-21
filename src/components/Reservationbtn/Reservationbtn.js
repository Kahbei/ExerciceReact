import "./Reservationbtn.css";
import logo from "../logo.svg";

function Reservationbtn() {
    const consoleLogDisplay = () => {
        return console.log("Coucou");
    };

    return (
        <div className="reservationbtn">
            <button className="btn btn-lg btn-outline-dark" onClick={consoleLogDisplay}>
                Prendre une réservation
            </button>
            <button className="btn btn-lg btn-outline-dark">Rejoindre une réservation</button>
        </div>
    );
}

export default Reservationbtn;
