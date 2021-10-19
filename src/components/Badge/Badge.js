import "./Badge.css";
import logoDefault from "../logo.svg";
import goutdekyun from "../goutdekyun.jpg";
import cambodia from "../cambodia.jpg";
import ninkasi from "../ninkasi.jpg";
import basilicandco from "../basilicandco.jpg";

function Badge(props) {
    let titre;
    let logo;

    switch (props.resto) {
        case "goutdekyun":
            logo = goutdekyun;
            titre = "Le goût de Kyun";
            break;

        case "basilicandco":
            logo = basilicandco;
            titre = "Basilic & Co";
            break;

        case "cambodia":
            logo = cambodia;
            titre = "Le Cambodia";
            break;

        case "ninkasi":
            logo = ninkasi;
            titre = "Ninkasi";
            break;

        default:
            logo = logoDefault;
            titre = "Titre test";
            break;
    }

    return (
        <div className="badge">
            <img src={logo} alt="image-restaurant" />
            <div>
                <h2 className="badge-restaurant">{titre}</h2>
                <p>Lorem Ipsum bellum bellum bellum bellamos belleis bellum</p>
                <button className="btn-badge">Plus d'information</button>
            </div>
        </div>
    );
}

export default Badge;
