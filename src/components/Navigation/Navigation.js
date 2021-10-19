import "./Navigation.css";

const NavMenu = (props) => {
    return (
        <li className="nav-item">
            <a className="nav-link" href="">
                {props.name}
            </a>
        </li>
    );
};

function Navigation() {
    return (
        <div className="collapse navbar-collapse" id="navbarNav">
            <NavMenu name="menu1" />
            <NavMenu name="menu2" />
            <NavMenu name="menu3" />
            <NavMenu name="menu4" />
            <NavMenu name="menu5" />
            <NavMenu name="menu6" />
        </div>
    );
}

export default Navigation;
