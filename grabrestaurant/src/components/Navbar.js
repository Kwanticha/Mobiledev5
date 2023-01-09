import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
         Grab Restaurats
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
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <Link className="navbar-nav">
            <Link className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </Link>
            <Link className="nav-item">
              <Link className="nav-link" to="./Add">
                Add
              </Link>
            </Link>
            <Link className="nav-item">
              <Link className="nav-link" to="./Search">
                Search
              </Link>
            </Link>
           
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
