import React from "react";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start footer-main border-top bg-white">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0 d-flex flex-column align-items-center">
            <h5 className="text-uppercase">POLICY</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <Link to="/" className="text-dark footer_links">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link to="/" className="text-dark footer_links">
                  Terms Of Use
                </Link>
              </li>

              <li>
                <Link to="/" className="text-dark footer_links">
                  Return Policy
                </Link>
              </li>

              <li>
                <Link to="/" className="text-dark footer_links">
                  Report Abuse
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0 d-flex flex-column align-items-center">
            <h5 className="text-uppercase">ABOUT US</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <Link to="/" className="text-dark footer_links">
                  Brands
                </Link>
              </li>

              <li>
                <Link to="/" className="text-dark footer_links">
                  F. A.Qs
                </Link>
              </li>

              <li>
                <Link to="/" className="text-dark footer_links">
                  Career
                </Link>
              </li>

              <li>
                <Link to="/" className="text-dark footer_links">
                  Career
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0 d-flex flex-column align-items-center">
            <h5 className="text-uppercase">CATEGORIES</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <Link to="/" className="text-dark footer_links">
                  Clothing
                </Link>
              </li>

              <li>
                <Link to="/" className="text-dark footer_links">
                  Men
                </Link>
              </li>

              <li>
                <Link to="/" className="text-dark footer_links">
                  Women
                </Link>
              </li>

              <li>
                <Link to="/" className="text-dark footer_links">
                  Kids
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0 d-flex flex-column align-items-center">
            <h5 className="text-uppercase">CONNECT WITH US</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <Link to="/" className="text-dark footer_links">
                  Address
                </Link>
              </li>

              <li>
                <Link to="/" className="text-dark footer_links">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/" className="text-dark footer_links">
                  SiteMap
                </Link>
              </li>
              <li>
                <Link to="/" className="text-dark footer_links">
                  SiteMap
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="text-center p-3 text-secondary">
        © NK International 2021, All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
