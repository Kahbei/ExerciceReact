import "./Login.css";
import logo from "../logo.svg";

function Login() {
    return (
        <div className="login">
            <div className="login-profil">
                <img src={logo} className="profil-photo" alt="profil" />
                <div className="profil-name">
                    <p>Pierre</p>
                    <p>Martin</p>
                </div>
                <button className="btn-deconnection">Déconnexion</button>
            </div>
        </div>
    );
}

export default Login;
