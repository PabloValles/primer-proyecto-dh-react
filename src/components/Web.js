import React from "react";
import Encabezado from "./Encabezado";
import Banner from "./Banner";
import Product from "./Product";
import Footer from "./Footer";

function Web() {
  return (
    <div className="container">
      <Encabezado />
      <Banner />
      <Product />
      <Footer />
    </div>
  );
}
export default Web;
