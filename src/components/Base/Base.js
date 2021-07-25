import React from "react";
import Footer from "../Footer/Footer";

import NavBar from "../NavBar/NavBar";

const Base = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Base;
