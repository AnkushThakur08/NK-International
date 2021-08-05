import React from "react";

// Components
import Base from "../../components/Base/Base";
// Assets
import about from "../../assets/about.jpeg";
// CSS
import "./About.css";

const About = () => {
  return (
    <Base>
      <div className="container-lg my-4">
        <div className="row">
          <div
            className="pretty-header d-block justify-content-center justify-content-md-start d-md-block py-3"
            style={{ display: "inline-block" }}
          >
            <div
              style={{ display: "inline-block" }}
              className="text-center d-flex justify-content-center"
            >
              <h5 className="pretty-text text-center fs-3 mb-0">
                About us
                <div
                  className="bottom-style"
                  style={{
                    backgroundColor: "#FFBC00",
                    height: "4px",
                    marginTop: "-6px",
                  }}
                ></div>
              </h5>
            </div>
          </div>
        </div>

        <div className="row my-3 justify-content-center">
          <div className="col-md-7 text-center text-md-start">
            <img
              className="img-fluid"
              src={about}
              alt="about-image"
              style={{ width: "100% !important" }}
            />
          </div>

          <div className="col-md-5">
            <p className="lead text-muted">
              An About Us page helps your company make a good first impression,
              and is critical for building customer trust and loyalty. An About
              Us page should make sure to cover basic information about the
              store and its founders, explain the company's purpose and how it
              differs from the competition, and encourage discussion and
              interaction. Here are some free templates, samples, and example
              About Us pages to help your ecommerce store stand out from the
              crowd. When it comes to personalizing your online store, nothing
              is more effective than an About Us page. personalizing your online
              store, nothing is more effective than an About Us page.
              personalizing your online store, nothing is more effective than an
              About Us page.personalizing your online store, nothing is more
              effective than an About Us page.personalizing your online store,
              nothing is more effective than an About Us page.
            </p>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default About;
