import React from "react";

import { FaCartPlus, FaBars, FaSearch } from "react-icons/fa";
import { GrCart } from "react-icons/gr";

import { Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-md navbar-light p-2"
      style={{ background: "#929292 !important" }}
    >
      <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <ul
          className="navbar-nav mr-auto"
          style={{
            fontWeight: "500",
            fontSize: "15px",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          <li className="nav-item active ps-md-3 ps-0">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>

          <li className="nav-item dropdown">
            <Link
              to="/"
              className="nav-link dropdown-toggle px-md-3 px-0"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Categories
            </Link>
            <ul
              className="dropdown-menu dropdown-menu-right "
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <Link to="/" className="dropdown-item">
                  Men
                </Link>
              </li>

              <li>
                <Link to="/" className="dropdown-item">
                  Women
                </Link>
              </li>

              <li>
                <Link to="/" className="dropdown-item">
                  Kids
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              About Us
            </Link>
          </li>
        </ul>
      </div>
      <div className="mx-auto order-0 d-flex align-items-center">
        <Link
          to="/"
          className="navbar-brand mx-auto title"
          style={{
            fontWeight: "500",
            fontSize: "25px",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          <b> NK INTERNATIONAL </b>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target=".dual-collapse2"
          style={{ right: "15px", position: " absolute" }}
        >
          <FaBars />
        </button>
      </div>
      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link
              className="nav-link"
              style={{ cursor: "pointer" }}
              data-bs-toggle="modal"
              data-bs-target="#signinModal"
            >
              SignIn
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/"
              className="nav-link px-md-3 px-0 align-items-center d-flex"
            >
              <span className="pe-1">Cart</span>
              <GrCart size="20px" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
