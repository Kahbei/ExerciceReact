import "./Login.css";
import logo from "../logo.svg";

const NameAndPhoto = (props) => {
    console.log(props);
    return (
        <>
            <img
                src={logo}
                width="48"
                heigth="48"
                className="d-inline-block align-text-top"
                alt="profil"
            />
            <div className="navbar-text profil-name">
                <p>{props.prenom}</p>
                <p>{props.name}</p>
            </div>
        </>
    );
};

function Login(props) {
    console.log(props.infoLoggin);
    const handleClick = (etat) => {
        let t = { ...props.infoLoggin };
        if (etat) {
            t.isLogged = etat;
        } else {
            t.isLogged = etat;
        }

        props.setLoggin(t);
    };

    return (
        <div className="login-profil">
            {props.infoLoggin.isLogged && (
                <NameAndPhoto name={props.infoLoggin.uName} prenom={props.infoLoggin.uSurname} />
            )}
            <button
                className="btn btn-outline-light"
                onClick={() => handleClick(!props.infoLoggin.isLogged)}
            >
                {props.infoLoggin.isLogged ? `Déconnexion` : "Connexion"}
            </button>
        </div>
    );
}

export default Login;
