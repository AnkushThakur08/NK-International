import React from "react";
import product1 from "../../assets/men collection.jpg";
import product2 from "../../assets/women collection.jpg";
import product3 from "../../assets/kids collection.jpg";
import ScrollContainer from "react-indiana-drag-scroll";
import "./ProductImageShowcase.css";

const ProductImageShowcase = () => {
  const ProductSlider = () => (
    <div>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide d-none d-md-block"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="rounded"
              src={product1}
              alt="men"
              style={{ width: "100%" }}
            />
          </div>
          <div className="carousel-item">
            <img
              className="rounded"
              src={product2}
              alt="women"
              style={{ width: "100%" }}
            />
          </div>
          <div className="carousel-item">
            <img
              className="rounded"
              src={product3}
              alt="kids"
              style={{ width: "100%" }}
            />
          </div>
          <div className="carousel-item">
            <img
              className="rounded"
              src={product2}
              alt="women"
              style={{ width: "100%" }}
            />
          </div>
          <div className="carousel-item">
            <img
              className="rounded"
              src={product3}
              alt="kids"
              style={{ width: "100%" }}
            />
          </div>
          <div className="carousel-item">
            <img
              className="rounded"
              src={product2}
              alt="New york"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <ScrollContainer>
          <ul className="d-md-flex d-none carousel-indicators indicators-large justify-content-start">
            <li
              data-bs-target="#carouselExampleSlidesOnly"
              data-bs-slide-to="0"
              aria-current="true"
              aria-label="Slide 1"
              className="active"
            >
              <img className="rounded" src={product1} alt="" />
            </li>
            <li
              data-bs-target="#carouselExampleSlidesOnly"
              data-bs-slide-to="1"
              area-label="Slide 2"
            >
              <img className="rounded" src={product2} alt="" />
            </li>
            <li
              data-bs-target="#carouselExampleSlidesOnly"
              data-bs-slide-to="2"
              area-label="Slide 3"
            >
              <img className="rounded" src={product3} alt="" />
            </li>
            <li
              data-bs-target="#carouselExampleSlidesOnly"
              data-bs-slide-to="3"
              area-label="Slide 4"
            >
              <img className="rounded" src={product2} alt="" />
            </li>
            <li
              data-bs-target="#carouselExampleSlidesOnly"
              data-bs-slide-to="4"
              area-label="Slide 5"
            >
              <img className="rounded" src={product2} alt="" />
            </li>
            <li
              data-bs-target="#carouselExampleSlidesOnly"
              data-bs-slide-to="5"
              area-label="Slide 6"
            >
              <img className="rounded" src={product2} alt="" />
            </li>
          </ul>
        </ScrollContainer>
      </div>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide d-md-none d-block"
        data-ride="carousel"
      >
        <ol className="carousel-indicators indicators-small d-md-none d-flex">
          <li
            data-target="#carouselExampleSlidesOnly"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleSlidesOnly" data-slide-to="1"></li>
          <li data-target="#carouselExampleSlidesOnly" data-slide-to="2"></li>
          <li data-target="#carouselExampleSlidesOnly" data-slide-to="3"></li>
          <li data-target="#carouselExampleSlidesOnly" data-slide-to="4"></li>
          <li data-target="#carouselExampleSlidesOnly" data-slide-to="5"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={product1} alt="Los Angeles" style={{ width: "100%" }} />
          </div>
          <div className="carousel-item">
            <img src={product2} alt="Chicago" style={{ width: "100%" }} />
          </div>
          <div className="carousel-item">
            <img src={product3} alt="New york" style={{ width: "100%" }} />
          </div>
          <div className="carousel-item">
            <img src={product2} alt="New york" style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    </div>
  );

  return <ProductSlider />;
};

export default ProductImageShowcase;
