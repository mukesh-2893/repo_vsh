import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar bg-light fixed-top">
          <div className="container-fluid ">
           
            <button
              className="navbar-toggler text-right"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-start"
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header ">
                <h5 className="offcanvas-title text-center" id="offcanvasNavbarLabel">
                 Artist Navbar
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body text-center">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3  my-3 mx-5 fs-4">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">
                      User
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/artists">
                     Artist
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/album">
                     Album
                    </Link>
                  </li>                  
                   
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
