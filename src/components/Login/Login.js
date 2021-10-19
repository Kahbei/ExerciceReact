import "./Login.css";
import logo from "../logo.svg";

function Login() {
    return (
        <div className="dflex">
            <div className="login-profil">
                <img
                    src={logo}
                    width="48"
                    heigth="48"
                    className="d-inline-block align-text-top"
                    alt="profil"
                />
                <div className="navbar-text profil-name">
                    <p>Pierre</p>
                    <p>Martin</p>
                </div>
                <button className="btn btn-outline-light">Déconnexion</button>
            </div>
        </div>
    );
}

export default Login;
