import CartWidget from "./CartWidget";
import {Link} from "react-router-dom"

const NavBar = () => {
    return(
  <>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <Link to="/" className="navbar-brand">BS-GAMES</Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ">
                  <li className="nav-item">
                    <Link to="category/juegos" className="nav-link">JUEGOS</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="category/consolas" className="nav-link">CONSOLAS</Link>
                  </li>
                </ul>
              </div>
              <div className="pe-3">
              <CartWidget/>
            </div>
            </div>
          </nav>
  </>
    );
  }

  export default NavBar;