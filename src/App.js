import React from "react";
import NavBar from "./components/navbar/NavBar";
import { Box } from "@mui/material";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#0F1038", height: "100vh" }}>
        <NavBar />
        {/* <Footer /> */}
      </Box>
    </>
  );
};

export default App;
