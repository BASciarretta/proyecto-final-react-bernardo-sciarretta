import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="">
              BS-GAMES
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
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="">
                    JUEGOS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">
                    CONSOLAS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">
                    PC
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">
                    COMPONENTES
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </div>
  );
}

export default App;
