import React from "react";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contracts from "./components/pages/contracts/Contracts";
import Nodes from "./components/pages/nodes/Nodes";
import Wallets from "./components/pages/wallets/Wallets";
import Validator from "./components/pages/validator/Validator";

const App = () => {
  return (
    <>
      <Router>
        <Box sx={{ backgroundColor: "#0F1038", height: "100vh" }}>
          <NavBar />
          {/* <Footer /> */}
          <Routes>
            <Route path="/" element={<Contracts />}>
              Contracts
            </Route>
            <Route path="/nodes" element={<Nodes />}>
              Nodes
            </Route>
            <Route path="/validator" element={<Validator />}>
              Validator
            </Route>
            <Route path="/wallets" element={<Wallets />}>
              Wallets
            </Route>
          </Routes>
        </Box>
      </Router>
    </>
  );
};

export default App;
