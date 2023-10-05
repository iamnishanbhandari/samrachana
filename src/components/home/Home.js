import React from "react";
import PrimaryContent from "../pages/primary/PrimaryContent";
import { Box } from "@mui/material";
import Companies from "../pages/companies/Companies";
import OurFeature from "../pages/feature/OurFeature";
import SalesInfo from "../pages/sales/SalesInfo";

const Home = () => {
  return (
    <>
      <PrimaryContent />
      <Companies />
      <OurFeature />
      <SalesInfo />
    </>
  );
};

export default Home;
