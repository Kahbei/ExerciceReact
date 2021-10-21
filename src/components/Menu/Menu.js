import "./Menu.css";
import logo from "../logo.svg";
import Navigation from "../Navigation/Navigation";
import Login from "../Login/Login";

const LogoTitre = () => {
    return (
        <>
            <a className="navbar-brand" href="#">
                <img
                    src={logo}
                    alt="logo"
                    width="30"
                    height="24"
                    className="d-inline-block align-text-top"
                />
                Restaurant
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
        </>
    );
};

function Menu(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <LogoTitre />
                <Navigation />
                <Login infoLoggin={props.infoLog} setLoggin={props.changeLog} />
            </div>
        </nav>
    );
}

export default Menu;
