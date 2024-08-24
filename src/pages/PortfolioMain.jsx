import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header/Header";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import HireMe from "../components/HireMe";

const PortfolioMain = () => {
  return (
    <div>
      <Navbar />
      <Header />
      {/* <Hero /> */}
      <Services />
      <Portfolio />
      <HireMe />
    </div>
  );
};

export default PortfolioMain;
