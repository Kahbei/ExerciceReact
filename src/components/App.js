import About from "./About/About";
import "./App.css";
import Cards from "./Cards/Cards";
import Menu from "./Menu/Menu";
import Reservationbtn from "./Reservationbtn/Reservationbtn";

function App() {
    return (
        <>
            <header>
                <Menu />
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
