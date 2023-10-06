import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          //   border: "1px solid red",
          display: "flex",
          justifyContent: "space-evenly",
          backgroundColor: "#161517",
          mt: "30px",
          height: "150px",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "15px",
              padding: "20px",
              color: "#C6DAFC",
              mt: "25px",
            }}
          >
            Managed by Samrachana Foundation © 2023 <br />
            Samrachana Foundation. All rights reserved.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            fontSize: "18px",
            mt: "40px",
            color: "#C6DAFC",
          }}
        >
          <Box> Contact us</Box>

          <Box> samracha.protocol@gmail.com</Box>
        </Box>
        <Box></Box>
      </Box>
    </>
  );
};

export default Footer;
