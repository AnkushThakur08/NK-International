import React from "react";
// import Banner from "../../assets/banner5.jpg";
// import Banner2 from "../../assets/banner7.jpg";

import Banner1 from "../../assets/BannerImage1.jpg";
import Banner2 from "../../assets/BannerImage2.jpg";
import Banner3 from "../../assets/Banner3.jpg";

import { Link } from "react-router-dom";

const Carousel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      {/* Carousel Indicators */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      {/* Carousel Main Content */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Link to="/products">
            <img src={Banner1} className="d-block w-100" alt="banner" />
          </Link>
        </div>

        <div className="carousel-item ">
          <Link to="/products">
            <img src={Banner2} className="d-block w-100" alt="banner2" />
          </Link>
        </div>

        <div className="carousel-item">
          <Link to="/products">
            <img src={Banner3} className="d-block w-100" alt="banner" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
