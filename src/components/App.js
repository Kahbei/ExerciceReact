import { useState } from "react";

import About from "./About/About";
import "./App.css";
import Cards from "./Cards/Cards";
import Menu from "./Menu/Menu";
import Reservationbtn from "./Reservationbtn/Reservationbtn";

function App() {
    const [login, setLogin] = useState({
        uSurname: "Joel",
        uName: "Robuchon",
        token: "tresdfdgr",
        isLogged: false,
    });

    return (
        <>
            <header>
                <Menu infoLog={login} changeLog={setLogin} />
            </header>
            <main>
                <About />
                <Reservationbtn />
                <div className="card-resto">
                    <Cards resto="ninkasi" />
                    <Cards resto="cambodia" />
                    <Cards resto="goutdekyun" />
                    <Cards resto="basilicandco" />
                </div>
            </main>
            <footer></footer>
        </>
    );
}

export default App;
