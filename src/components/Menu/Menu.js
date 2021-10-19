import "./Menu.css";
import logo from "../logo.svg";
import Navigation from "../Navigation/Navigation";
import Login from "../Login/Login";

function Menu() {
    return (
        <nav>
            <div className="menu-logo-titre">
                <img src={logo} className="menu-logo" alt="logo" />
                <a href="" className="menu-titre">
                    Restaurant
                </a>
            </div>
            <Navigation />
            <Login />
        </nav>
    );
}

export default Menu;
