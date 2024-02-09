import Nav from "../components/Nav";
import Footer from "../components/Footer";
import React from "react";

const Container = function ({ children }) {
  console.log(children);
  return (
    <React.Fragment>
      <Nav />
      {children}
      <Footer />
    </React.Fragment>
  );
};
export default Container;
