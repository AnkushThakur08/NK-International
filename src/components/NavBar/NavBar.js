import React from "react";

import { FaCartPlus, FaBars, FaSearch } from "react-icons/fa";

import { Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-md navbar-light p-4"
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
          <li
            className="nav-item active"
            style={{ paddingRight: "7px", paddingLeft: "7px" }}
          >
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>

          <li className="nav-item dropdown">
            <Link
              to="/"
              className="nav-link dropdown-toggle"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ paddingRight: "7px", paddingLeft: "7px" }}
            >
              Products
            </Link>
            <ul
              className="dropdown-menu dropdown-menu-right "
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <Link to="/" className="dropdown-item">
                  T-Shirt
                </Link>
              </li>

              <li>
                <Link to="/" className="dropdown-item">
                  Trousers
                </Link>
              </li>

              <li>
                <Link to="/" className="dropdown-item">
                  Formal Shirt
                </Link>
              </li>
            </ul>
          </li>

          <li
            className="nav-item"
            style={{ paddingRight: "7px", paddingLeft: "7px" }}
          >
            <Link to="/" className="nav-link">
              Women
            </Link>
          </li>

          <li
            className="nav-item"
            style={{ paddingRight: "7px", paddingLeft: "7px" }}
          >
            <Link to="/" className="nav-link">
              Men
            </Link>
          </li>

          <li
            className="nav-item"
            style={{ paddingRight: "7px", paddingLeft: "7px" }}
          >
            <Link to="/" className="nav-link">
              Kids
            </Link>
          </li>
        </ul>
      </div>
      <div className="mx-auto order-0">
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
          data-toggle="collapse"
          data-target=".dual-collapse2"
          style={{ right: "15px", position: " absolute" }}
        >
          <span className="navbar-toggler-icon "></span>
        </button>
      </div>
      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link
              to="/"
              className="nav-link"
              style={{ paddingRight: "7px", paddingLeft: "7px" }}
            >
              About Us
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/"
              className="nav-link"
              style={{ paddingRight: "7px", paddingLeft: "7px" }}
            >
              SignIn
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/"
              className="nav-link text-dark"
              style={{ paddingRight: "7px", paddingLeft: "7px" }}
            >
              <FaCartPlus size="25px" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
