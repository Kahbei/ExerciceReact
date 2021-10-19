import About from "./About/About";
import "./App.css";
import Badge from "./Badge/Badge";
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
                    <Badge />
                    <Badge />
                    <Badge />
                    <Badge />
                </div>
            </main>
            <footer></footer>
        </>
    );
}

export default App;
