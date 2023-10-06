import React from "react";
import PrimaryContent from "../pages/primary/PrimaryContent";
import Companies from "../pages/companies/Companies";
import OurFeature from "../pages/feature/OurFeature";
import SalesInfo from "../pages/sales/SalesInfo";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <>
      <PrimaryContent />
      <Companies />
      <OurFeature />
      <SalesInfo />
      <Footer />
    </>
  );
};

export default Home;
