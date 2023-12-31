import { Container, Box, Typography } from "@mui/material";
import React from "react";

const SalesInfo = () => {
  return (
    <>
      <Container
        sx={{
          bgcolor: "#140F2D",
          mt: "30px",
          padding: "10px",
          borderRadius: "25px",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
          <Box sx={{ color: "white" }}>
            <img
              src="https://lh3.googleusercontent.com/g0Jw-I6-gH2DVCpnl3u8QKZVT_meR9lcJlpyeSZ-MyvwLnyEZvgyrY5frldA8HCv55s=w280-rwa"
              alt="piechart"
              style={{ borderRadius: "60px" }}
            ></img>
          </Box>
          <Box>
            <Box>
              <Typography sx={{ color: "white" }}>
                Token Name: eGovToken (EGT)
              </Typography>
              <Typography
                sx={{ color: "white", fontWeight: "bold", fontSize: "30px" }}
              >
                Token Sales
              </Typography>
              <Typography sx={{ color: "white", fontSize: "20px" }}>
                Join our token sale to help shape the future of governance!{" "}
                <br />
              </Typography>
            </Box>
            <Box>
              <Box sx={{ display: "flex", gap: "10px" }}>
                <Box>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAAA1BMVEV3qv+PLvjhAAAASElEQVR4nO3BMQEAAADCoPVPbQwfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACOBsYFAAFnhEPqAAAAAElFTkSuQmCC"
                    height={25}
                    width={25}
                    alt="darkblue"
                    style={{
                      borderRadius: "300px",
                      outline: "none",
                      backgroundColor: "white",
                    }}
                  ></img>
                </Box>
                <Box>
                  <Typography sx={{ color: "white" }}>
                    Backed By Nepalese Ruppee
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", gap: "10px" }}>
                <Box>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAADICAMAAAA9W+hXAAAAA1BMVEUzZ9bEW+ySAAAANElEQVR4nO3BMQEAAADCoPVP7WsIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeAN1+AABVhDU2QAAAABJRU5ErkJggg=="
                    height={25}
                    width={25}
                    alt="darkblue"
                    style={{ borderRadius: "150px", outline: "none" }}
                  ></img>
                </Box>
                <Box>
                  <Typography sx={{ color: "white" }}>
                    Governance Compliance
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", gap: "10px" }}>
                <Box>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAA1BMVEXG2vz9hESKAAAASElEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABODcYhAAEl463hAAAAAElFTkSuQmCC"
                    height={25}
                    width={25}
                    alt="lightblue"
                    style={{ borderRadius: "150px", outline: "none" }}
                  ></img>
                </Box>
                <Box>
                  <Typography sx={{ color: "white" }}>
                    {" "}
                    CryptoCurrency Independent
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default SalesInfo;
