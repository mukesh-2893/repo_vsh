import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export class Navbar extends Component {
  render() {
    return (
      <>
        <header className="sticky-top">
          <div className="logo">
            <h2>Posts App</h2>
          </div>
          <nav className="ml-1 px-5">
            <ul className="text-primary">
              <li>
                <Link to="/">
                  Users
                </Link>
              </li>
              <li>
                <Link to="/posts">
                  Posts
                </Link>
              </li>
              <li>
                <a herf="#"></a>
              </li>
              <li>
                <a herf="#"></a>
              </li>
            </ul>
          </nav>
        </header>
      </>
    );
  }
}

export default Navbar;
