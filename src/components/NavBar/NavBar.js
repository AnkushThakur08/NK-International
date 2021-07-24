import React from "react";

import logo from "../../assets/logo.jpg";
import { FaCartPlus, FaBars } from "react-icons/fa";

import { Link } from "react-router-dom";

import "../../App.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg text-white bg-theme">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand text-white">
          {/* LOGO */}
          {/* <img class="brandlogo" alt="logo" src={logo} height="60px" /> */}
          NK INTERNATIONAL
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <FaBars color="#fff" style={{ border: "none" }} />
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link active text-white"
                aria-current="page"
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                Categories
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                About Us
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                SignIn
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                <FaCartPlus size="25px" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
