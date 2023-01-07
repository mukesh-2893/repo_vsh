import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div className="fixed-top">
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary text-dark">
          <div className="container-fluid">
            <a href="#" className="navbar-brand">
              Policy Project
            </a>
            <button
              type="button"
              className="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse mx-5" id="navbarCollapse">
              <div className="navbar-nav">
                <Link className="nav-link active" aria-current="page" to="/">
                  Users
                </Link>
              </div>
              <div className="navbar-nav">
                <Link className="nav-link active" aria-current="page" to="/policy">
                  Policies
                </Link>
              </div>
              <div className="navbar-nav">
                <Link className="nav-link active" aria-current="page" to="/user.policy">
                  User Policy
                </Link>
              </div>
              <div className="navbar-nav">
                <Link className="nav-link active" aria-current="page" to="/claim">
                  Claim
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
