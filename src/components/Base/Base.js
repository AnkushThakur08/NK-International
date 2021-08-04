import React from "react";
import Footer from "../Footer/Footer";

import NavBar from "../NavBar/NavBar";
import SignIn from "../SignIn/SignIn";

const Base = ({ children }) => {
  return (
    <div>
      <NavBar />
      <SignIn />
      {children}
      <Footer />
    </div>
  );
};

export default Base;
