import React from "react";
import { Link } from "react-router-dom";

interface props {
  hiddenNavbar: boolean;
}

const Navbar = ({ hiddenNavbar }: props) => {
  const logout = () => {
    localStorage.removeItem("Usuario");
  };

  return (
    <div hidden={hiddenNavbar}>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="container-fluid" >
            <Link className="navbar-brand" to="/home">
              Youvid
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/new-video">
                    New video
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link"  onClick={() => logout()} to="/">
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
