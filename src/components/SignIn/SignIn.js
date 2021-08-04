import React from "react";

import "../SignIn/SignIn.css";

const SignIn = () => {
  return (
    <div
      className="modal fade"
      id="signinModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="signinModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content" style={{ borderRadius: "12px" }}>
          <div className="modal-header border-0 p-0">
            <button
              type="button"
              className="btn-close text-black"
              data-bs-dismiss="modal"
              aria-label="Close"
              style={{ padding: "1rem 1rem", margin: "0rem 0rem -1rem auto" }}
            >
              <span aria-hidden="true"></span>
            </button>
          </div>

          <div className="modal-body pt-0 border-0 px-5">
            {/* Modal Tabs */}
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  // id="signinModalLabel"
                  id="signin-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#signin"
                  type="button"
                  role="tab"
                  aria-controls="signin"
                  aria-selected="true"
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: "500",
                    color: "#212529",
                    textAlign: "center",
                    padding: "10px 64px",
                    fontSize: "20px",
                  }}
                >
                  SignIn
                </button>
              </li>

              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  // id="signupModalLabel"
                  id="signup-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#signup"
                  type="button"
                  role="tab"
                  aria-controls="signup"
                  aria-selected="false"
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: "500",
                    color: "#212529",
                    textAlign: "center",
                    padding: "10px 64px",
                    fontSize: "20px",
                  }}
                >
                  SignUp
                </button>
              </li>
            </ul>

            {/* Modal Tabs */}

            {/* Modal Content */}
            <div className="tab-content" id="myTabContent">
              {/* Modal Content 1 */}
              <div
                className="tab-pane fade show active"
                id="signin"
                role="tabpanel"
                aria-labelledby="signin-tab"
              >
                <p
                  className="lead text-center my-4 p-2"
                  style={{
                    color: "#7D7D7d",
                    fontSize: "15px",
                    fontFamily: "Montserrat",
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>

                <form>
                  <div className="form-group">
                    <input
                      type="tel"
                      className="form-control my-3"
                      id="phone"
                      name="phone"
                      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                      placeholder="Mobile Number"
                      style={{ borderRadius: "10px" }}
                    />
                    <div className="form-check ml-3 mt-4">
                      <input
                        type="checkbox"
                        className="form-check-input mt-1 checkbox"
                        id="signedCheckBox"
                        style={{ height: "18px", width: "18px" }}
                      />
                      <label
                        className="form-check-label mb-3"
                        htmlFor="signedCheckBox"
                      >
                        Remember Me
                      </label>
                    </div>
                    <div class="d-grid gap2">
                      <button
                        type="submit"
                        className="btn btn-success btn-lg btn-block my-3"
                        style={{
                          fontWeight: "500",
                          fontSize: "20px",
                          fontFamily: "Montserrat",
                        }}
                      >
                        Sign in
                      </button>
                    </div>
                  </div>
                </form>

                <div
                  className="signup-prompt my-3 text-center"
                  style={{ fontSize: "13px", fontFamily: "Libre Baskerville" }}
                >
                  Not a member yet? &nbsp;
                  <span
                    style={{
                      fontWeight: "600",
                      fontFamily: "Montserrat ",
                    }}
                    type="btn"
                    className="ml-2"
                  >
                    Sign up
                  </span>
                </div>
              </div>

              {/* Modal Content 1 */}

              {/* Modal Content 2 */}
              <div
                className="tab-pane fade"
                id="signup"
                role="tabpanel"
                aria-labelledby="signup-tab"
              >
                <p
                  className="lead text-center my-4 p-2"
                  style={{
                    color: "#7D7D7d",
                    fontSize: "15px",
                    fontFamily: "Montserrat",
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>

                <input
                  type="text"
                  class="form-control my-3"
                  id="name"
                  name="name"
                  placeholder="Enter Your Name"
                  aria-describedby="name"
                  style={{ borderRadius: "10px" }}
                />

                <input
                  type="email"
                  class="form-control my-3"
                  id="email"
                  name="email"
                  placeholder="Enter Email"
                  aria-describedby="emailHelp"
                  style={{ borderRadius: "10px" }}
                />

                <input
                  type="tel"
                  className="form-control my-3"
                  id="phone"
                  name="phone"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  placeholder="Mobile Number"
                  style={{ borderRadius: "10px" }}
                />

                <div class="d-grid gap2">
                  <button
                    type="submit"
                    className="btn btn-success btn-lg btn-block my-3"
                    style={{
                      fontWeight: "500",
                      fontSize: "20px",
                      fontFamily: "Montserrat",
                    }}
                  >
                    Sign up
                  </button>
                </div>
              </div>

              {/* Modal Content 2 */}
            </div>

            {/* Modal Content ends */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
